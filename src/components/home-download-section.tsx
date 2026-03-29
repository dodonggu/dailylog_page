import { DeviceDownloadHub } from "@/components/device-download-hub";
import { SectionHeading } from "@/components/site-shell";
import { androidReleaseVersion, siteConfig, type SiteLocale } from "@/lib/site-config";

const sectionCopy = {
  ko: {
    eyebrow: "Install Now",
    title: "홈페이지에서 바로 설치 경로를 확인하고 내려받을 수 있습니다.",
    description: `현재 공개 버전은 Android APK v${androidReleaseVersion}입니다. 랜딩에서 바로 다운로드로 이어지고, Vercel 배포 환경에서는 GitHub Release 경로를 그대로 이어받도록 준비했습니다.`,
  },
  en: {
    eyebrow: "Install Now",
    title: "The homepage now leads straight into the install flow.",
    description: `The current public build is Android APK v${androidReleaseVersion}. From the landing page, people can move directly into the download path, and Vercel deployments are prepared to hand off through the GitHub Release route.`,
  },
} as const;

export function HomeDownloadSection({ locale = "ko" }: { locale?: SiteLocale }) {
  const copy = sectionCopy[locale];

  return (
    <section className="px-6 pb-6 pt-2">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <SectionHeading
          eyebrow={copy.eyebrow}
          title={copy.title}
          description={copy.description}
        />

        <div className="surface-card-soft rounded-[2rem] p-5 sm:p-6">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-[color:var(--color-line)] pb-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">
                Latest Release
              </p>
              <p className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-ink)]">
                {siteConfig.release.versionLabel}
              </p>
            </div>
            <p className="text-sm leading-7 text-[color:var(--color-muted)]">
              {locale === "en" ? "Updated" : "업데이트"} {siteConfig.release.lastUpdated}
              <br />
              {locale === "en" ? "Package" : "패키지"} {locale === "en" ? "About 332.0 MB" : siteConfig.release.fileSize}
            </p>
          </div>

          <DeviceDownloadHub compact locale={locale} />
        </div>
      </div>
    </section>
  );
}
