import { createReadStream } from "node:fs";
import { Readable } from "node:stream";

import { NextResponse } from "next/server";

import { findLocalAndroidApk } from "@/lib/apk-release";
import {
  androidReleaseFallbackAssetName,
  androidReleaseFallbackAssetUrl,
  androidReleaseFallbackTag,
  githubReleaseRepo,
} from "@/lib/site-config";

export const runtime = "nodejs";

const taggedReleaseApiUrl = `https://api.github.com/repos/${githubReleaseRepo.owner}/${githubReleaseRepo.name}/releases/tags/${androidReleaseFallbackTag}`;
const latestReleaseApiUrl = `https://api.github.com/repos/${githubReleaseRepo.owner}/${githubReleaseRepo.name}/releases/latest`;

type GitHubRelease = {
  assets?: Array<{
    name?: string;
    browser_download_url?: string;
  }>;
};

async function resolveGitHubApkRelease(url: string, preferredAssetName?: string) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "DailyLogLanding",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const release = (await response.json()) as GitHubRelease;
  const normalizedPreferredAssetName = preferredAssetName?.toLowerCase();
  const androidAsset =
    release.assets?.find((asset) => asset.name?.toLowerCase() === normalizedPreferredAssetName) ??
    release.assets?.find((asset) => asset.name?.toLowerCase().endsWith(".apk"));

  return androidAsset?.browser_download_url ?? null;
}

export async function GET() {
  const forcedApkUrl = process.env.ANDROID_APK_URL?.trim();

  if (forcedApkUrl) {
    return NextResponse.redirect(forcedApkUrl);
  }

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
    const taggedReleaseAssetUrl = await resolveGitHubApkRelease(
      taggedReleaseApiUrl,
      androidReleaseFallbackAssetName,
    );

    if (taggedReleaseAssetUrl) {
      return NextResponse.redirect(taggedReleaseAssetUrl);
    }

    const latestReleaseAssetUrl = await resolveGitHubApkRelease(
      latestReleaseApiUrl,
      androidReleaseFallbackAssetName,
    );

    if (latestReleaseAssetUrl) {
      return NextResponse.redirect(latestReleaseAssetUrl);
    }
  } catch (error) {
    console.error("Unable to resolve the GitHub APK release.", error);
  }

  return NextResponse.redirect(androidReleaseFallbackAssetUrl);
}
