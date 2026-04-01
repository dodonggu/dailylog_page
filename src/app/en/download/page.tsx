import { DeviceDownloadHub } from "@/components/device-download-hub";
import { PageCta, PageIntro, SectionHeading, SiteFooter, SiteHeader } from "@/components/site-shell";
import { downloadPageContentEn } from "@/lib/content/download-page-content-en";
import { editableAttributes, getEditableChild, getEditablePage, getEditableSection } from "@/lib/editable-pages";
import { findLocalAndroidApk } from "@/lib/apk-release";
import { buildMetadata, siteConfig, siteLocaleCopy } from "@/lib/site-config";

const editPage = getEditablePage("/en/download")!;
const introSection = getEditableSection(editPage, "download-intro")!;
const hubSection = getEditableSection(editPage, "download-hub")!;
const beforeInstallSection = getEditableSection(editPage, "before-install")!;
const installStepsSection = getEditableSection(editPage, "install-steps")!;
const troubleshootingSection = getEditableSection(editPage, "troubleshooting")!;
const quickAnswersSection = getEditableSection(editPage, "quick-answers")!;
const ctaSection = getEditableSection(editPage, "download-cta")!;

export const metadata = buildMetadata(downloadPageContentEn.metadata);

export const dynamic = "force-dynamic";

function formatPackageSize(bytes: number) {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function formatPackageUpdatedAt(mtimeMs: number) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(mtimeMs));
}

export default async function EnglishDownloadPage() {
  const localApk = await findLocalAndroidApk();
  const deliverySource = localApk
    ? downloadPageContentEn.intro.currentPackageCard.directSourceLabel
    : downloadPageContentEn.intro.currentPackageCard.fallbackSourceLabel;
  const deliveryLabel = localApk ? localApk.filename : siteConfig.release.versionLabel;
  const deliveryUpdatedAt = localApk ? formatPackageUpdatedAt(localApk.mtimeMs) : siteConfig.release.lastUpdated;
  const deliverySize = localApk ? formatPackageSize(localApk.size) : siteLocaleCopy.en.fileSize;

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main lang="en" className="reading-surface flex-1">
        <PageIntro
          editAttributes={editableAttributes(editPage, "section", introSection)}
          eyebrow={downloadPageContentEn.intro.eyebrow}
          title={downloadPageContentEn.intro.title}
          description={downloadPageContentEn.intro.description}
          actions={
            <>
              <a
                href={siteConfig.downloads.androidApk.href ?? "/en/download"}
                download={siteConfig.downloads.androidApk.download}
                data-cta-id="download-page-hero-apk-en"
                className="button-primary inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
              >
                {downloadPageContentEn.intro.primaryLabel}
              </a>
              <a
                href={`#${installStepsSection.targetId}`}
                className="button-secondary inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
              >
                {downloadPageContentEn.intro.secondaryLabel}
              </a>
            </>
          }
          aside={
            <div className="grid gap-4">
              <div
                {...editableAttributes(editPage, "item", getEditableChild(introSection, "release-card")!)}
                className="surface-card rounded-[1.8rem] p-6"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">
                  {downloadPageContentEn.intro.releaseCard.label}
                </p>
                <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-ink)]">
                  {siteConfig.release.versionLabel}
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                  {siteLocaleCopy.en.supportedOs}
                  <br />
                  {downloadPageContentEn.intro.releaseCard.packageSizeLabel} {siteLocaleCopy.en.fileSize}
                  <br />
                  {downloadPageContentEn.intro.releaseCard.updatedLabel} {siteConfig.release.lastUpdated}
                </p>
              </div>

              <div
                {...editableAttributes(editPage, "item", getEditableChild(introSection, "package-card")!)}
                className="surface-card-dark rounded-[1.8rem] p-6 text-white"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62">
                    {downloadPageContentEn.intro.currentPackageCard.label}
                  </p>
                  <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/72">
                    {localApk
                      ? downloadPageContentEn.intro.currentPackageCard.directBadge
                      : downloadPageContentEn.intro.currentPackageCard.fallbackBadge}
                  </span>
                </div>
                <p className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white">{deliveryLabel}</p>
                <div className="mt-4 grid gap-3 text-sm leading-7 text-white/72">
                  <p>
                    {downloadPageContentEn.intro.currentPackageCard.deliveryPathLabel}
                    <br />
                    <span className="font-medium text-white">{deliverySource}</span>
                  </p>
                  <p>
                    {downloadPageContentEn.intro.currentPackageCard.currentFileSizeLabel}
                    <br />
                    <span className="font-medium text-white">{deliverySize}</span>
                  </p>
                  <p>
                    {downloadPageContentEn.intro.currentPackageCard.verifiedAtLabel}
                    <br />
                    <span className="font-medium text-white">{deliveryUpdatedAt}</span>
                  </p>
                </div>
              </div>
            </div>
          }
        />

        <section className="px-6 py-8">
          <div className="mx-auto w-full max-w-7xl">
            <DeviceDownloadHub
              locale="en"
              editAttributes={{
                section: editableAttributes(editPage, "section", hubSection),
                primaryCta: editableAttributes(editPage, "item", getEditableChild(hubSection, "download-primary-cta")!),
                playStore: editableAttributes(editPage, "item", getEditableChild(hubSection, "download-play-store")!),
                iosStatus: editableAttributes(editPage, "item", getEditableChild(hubSection, "download-ios-status")!),
                supportCard: editableAttributes(editPage, "item", getEditableChild(hubSection, "download-support-card")!),
                stats: editableAttributes(editPage, "item", getEditableChild(hubSection, "download-stats")!),
                handoff: editableAttributes(editPage, "item", getEditableChild(hubSection, "download-handoff")!),
              }}
            />
          </div>
        </section>

        <section {...editableAttributes(editPage, "section", beforeInstallSection)} className="px-6 py-16">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <SectionHeading
              eyebrow={downloadPageContentEn.beforeInstall.eyebrow}
              title={downloadPageContentEn.beforeInstall.title}
              description={downloadPageContentEn.beforeInstall.description}
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {downloadPageContentEn.beforeInstall.items.map((item, index) => (
                <article
                  key={item.id}
                  {...editableAttributes(editPage, "item", beforeInstallSection.children![index]!)}
                  className="surface-card-soft rounded-[1.8rem] p-6"
                >
                  <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-ink)]">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section {...editableAttributes(editPage, "section", installStepsSection)} className="px-6 py-16">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <SectionHeading
              eyebrow={downloadPageContentEn.installSteps.eyebrow}
              title={downloadPageContentEn.installSteps.title}
              description={downloadPageContentEn.installSteps.description}
            />

            <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {downloadPageContentEn.installSteps.items.map((item, index) => (
                <article
                  key={item.id}
                  {...editableAttributes(editPage, "item", installStepsSection.children![index]!)}
                  className={`${index === 1 ? "surface-card-dark text-white" : "surface-card-soft"} rounded-[1.8rem] p-6`}
                >
                  <h2 className={`font-display text-3xl font-semibold tracking-[-0.04em] ${index === 1 ? "text-white" : "text-[color:var(--color-ink)]"}`}>
                    {item.title}
                  </h2>
                  <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/72" : "text-[color:var(--color-muted)]"}`}>
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section {...editableAttributes(editPage, "section", troubleshootingSection)} className="px-6 py-16">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.96fr_1.04fr]">
            <div className="space-y-4">
              <SectionHeading
                eyebrow={downloadPageContentEn.troubleshooting.eyebrow}
                title={downloadPageContentEn.troubleshooting.title}
                description={downloadPageContentEn.troubleshooting.description}
              />

              <div className="grid gap-4">
                {downloadPageContentEn.troubleshooting.items.map((item, index) => (
                  <article
                    key={item.id}
                    {...editableAttributes(editPage, "item", troubleshootingSection.children![index]!)}
                    className="surface-card-soft rounded-[1.6rem] p-5"
                  >
                    <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--color-ink)]">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div {...editableAttributes(editPage, "section", quickAnswersSection)} className="surface-card rounded-[2rem] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">
                {downloadPageContentEn.quickAnswers.label}
              </p>
              <div className="mt-5 grid gap-4">
                {downloadPageContentEn.quickAnswers.items.map((item, index) => (
                  <details
                    key={item.id}
                    {...editableAttributes(editPage, "item", quickAnswersSection.children![index]!)}
                    className="rounded-[1.4rem] border border-[color:var(--color-line)] bg-white/80 px-5 py-4"
                  >
                    <summary className="cursor-pointer list-none text-base font-semibold text-[color:var(--color-ink)]">
                      {item.question}
                    </summary>
                    <p className="mt-4 border-t border-[color:var(--color-line)] pt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PageCta
          locale="en"
          editAttributes={editableAttributes(editPage, "section", ctaSection)}
          primaryEditAttributes={editableAttributes(editPage, "item", getEditableChild(ctaSection, "primary-cta")!)}
          secondaryEditAttributes={editableAttributes(editPage, "item", getEditableChild(ctaSection, "secondary-cta")!)}
          eyebrow={downloadPageContentEn.cta.eyebrow}
          title={downloadPageContentEn.cta.title}
          description={downloadPageContentEn.cta.description}
          primaryHref={downloadPageContentEn.cta.primaryHref}
          primaryLabel={downloadPageContentEn.cta.primaryLabel}
          secondaryHref={downloadPageContentEn.cta.secondaryHref}
          secondaryLabel={downloadPageContentEn.cta.secondaryLabel}
        />
      </main>

      <SiteFooter locale="en" />
    </div>
  );
}
