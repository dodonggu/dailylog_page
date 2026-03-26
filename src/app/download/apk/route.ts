import { createReadStream } from "node:fs";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import { Readable } from "node:stream";

import { NextResponse } from "next/server";

import { androidReleaseFallbackAssetUrl, githubReleaseRepo } from "@/lib/site-config";

export const runtime = "nodejs";

type LocalApkCandidate = {
  filename: string;
  fullPath: string;
  mtimeMs: number;
  size: number;
  versionParts: number[];
};

const localApkPattern = /^DailyLog(?:[_-](\d+(?:\.\d+)*))?\.apk$/i;

const latestReleaseApiUrl = `https://api.github.com/repos/${githubReleaseRepo.owner}/${githubReleaseRepo.name}/releases/latest`;

function parseVersionParts(filename: string) {
  const match = filename.match(localApkPattern);

  if (!match?.[1]) {
    return [];
  }

  return match[1]
    .split(".")
    .map((part) => Number.parseInt(part, 10))
    .filter((part) => Number.isFinite(part));
}

function compareVersionParts(left: number[], right: number[]) {
  const length = Math.max(left.length, right.length);

  for (let index = 0; index < length; index += 1) {
    const leftPart = left[index] ?? 0;
    const rightPart = right[index] ?? 0;

    if (leftPart !== rightPart) {
      return leftPart - rightPart;
    }
  }

  return 0;
}

function compareCandidates(left: LocalApkCandidate, right: LocalApkCandidate) {
  const versionCompare = compareVersionParts(left.versionParts, right.versionParts);

  if (versionCompare !== 0) {
    return versionCompare > 0 ? -1 : 1;
  }

  if (left.mtimeMs !== right.mtimeMs) {
    return right.mtimeMs - left.mtimeMs;
  }

  return left.filename.localeCompare(right.filename);
}

async function findLocalAndroidApk() {
  const entries = await readdir(process.cwd(), { withFileTypes: true });
  const candidates = await Promise.all(
    entries
      .filter((entry) => entry.isFile() && localApkPattern.test(entry.name))
      .map(async (entry) => {
        const fullPath = path.join(process.cwd(), entry.name);
        const stats = await stat(fullPath);

        return {
          filename: entry.name,
          fullPath,
          mtimeMs: stats.mtimeMs,
          size: stats.size,
          versionParts: parseVersionParts(entry.name),
        } satisfies LocalApkCandidate;
      }),
  );

  candidates.sort(compareCandidates);

  return candidates[0] ?? null;
}

export async function GET() {
  try {
    const localApk = await findLocalAndroidApk();

    if (localApk) {
      const stream = Readable.toWeb(createReadStream(localApk.fullPath)) as ReadableStream<Uint8Array>;

      return new Response(stream, {
        headers: {
          "Cache-Control": "no-store",
          "Content-Disposition": `attachment; filename="${localApk.filename}"`,
          "Content-Length": String(localApk.size),
          "Content-Type": "application/vnd.android.package-archive",
        },
      });
    }
  } catch (error) {
    console.error("Unable to resolve a local Daily Log APK file.", error);
  }

  try {
    const response = await fetch(latestReleaseApiUrl, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "DailyLogLanding",
      },
      cache: "no-store",
    });

    if (response.ok) {
      const release = (await response.json()) as {
        assets?: Array<{
          name?: string;
          browser_download_url?: string;
        }>;
      };
      const androidAsset = release.assets?.find((asset) => asset.name?.toLowerCase().endsWith(".apk"));

      if (androidAsset?.browser_download_url) {
        return NextResponse.redirect(androidAsset.browser_download_url);
      }
    } else {
      console.error(`Failed to fetch latest GitHub release: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("Unable to resolve the latest GitHub APK release.", error);
  }

  return NextResponse.redirect(androidReleaseFallbackAssetUrl);
}
