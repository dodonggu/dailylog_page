import { DeviceDownloadHub } from "@/components/device-download-hub";
import { SectionHeading } from "@/components/site-shell";
import type { HomeDownloadSectionContent } from "@/lib/content/page-content-types";
import type { EditableAttributes } from "@/lib/editable-pages";
import { siteConfig, type SiteLocale } from "@/lib/site-config";
import type { DeviceDownloadHubEditAttributes } from "@/components/device-download-hub";

type HomeDownloadSectionEditAttributes = {
  section?: EditableAttributes;
  latestRelease?: EditableAttributes;
  hub?: DeviceDownloadHubEditAttributes;
};

export function HomeDownloadSection({
  locale = "ko",
  content,
  editAttributes,
}: {
  locale?: SiteLocale;
  content: HomeDownloadSectionContent;
  editAttributes?: HomeDownloadSectionEditAttributes;
}) {

  return (
    <section {...editAttributes?.section} className="px-6 pb-6 pt-2">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />

        <div className="surface-card-soft rounded-[2rem] p-5 sm:p-6">
          <div
            {...editAttributes?.latestRelease}
            className="mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-[color:var(--color-line)] pb-5"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">
                {content.releaseLabel}
              </p>
              <p className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-ink)]">
                {siteConfig.release.versionLabel}
              </p>
            </div>
            <p className="text-sm leading-7 text-[color:var(--color-muted)]">
              {content.updatedLabel} {siteConfig.release.lastUpdated}
              <br />
              {content.packageLabel} {locale === "en" ? "About 332.0 MB" : siteConfig.release.fileSize}
            </p>
          </div>

          <DeviceDownloadHub compact locale={locale} editAttributes={editAttributes?.hub} />
        </div>
      </div>
    </section>
  );
}
