import { DeviceDownloadHub } from "@/components/device-download-hub";
import { PageCta, PageIntro, SectionHeading, SiteFooter, SiteHeader } from "@/components/site-shell";
import { downloadPageContent } from "@/lib/content/download-page-content";
import { editableAttributes, getEditableChild, getEditablePage, getEditableSection } from "@/lib/editable-pages";
import { findLocalAndroidApk } from "@/lib/apk-release";
import { buildMetadata, siteConfig } from "@/lib/site-config";

const editPage = getEditablePage("/download")!;
const introSection = getEditableSection(editPage, "download-intro")!;
const hubSection = getEditableSection(editPage, "download-hub")!;
const beforeInstallSection = getEditableSection(editPage, "before-install")!;
const installStepsSection = getEditableSection(editPage, "install-steps")!;
const troubleshootingSection = getEditableSection(editPage, "troubleshooting")!;
const quickAnswersSection = getEditableSection(editPage, "quick-answers")!;
const ctaSection = getEditableSection(editPage, "download-cta")!;

export const metadata = buildMetadata(downloadPageContent.metadata);

export const dynamic = "force-dynamic";

function formatPackageSize(bytes: number) {
  return `${(bytes / 1024 / 1024).toFixed(1)}MB`;
}

function formatPackageUpdatedAt(mtimeMs: number) {
  return new Intl.DateTimeFormat("ko-KR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(mtimeMs));
}

export default async function DownloadPage() {
  const localApk = await findLocalAndroidApk();
  const deliverySource = localApk
    ? downloadPageContent.intro.currentPackageCard.directSourceLabel
    : downloadPageContent.intro.currentPackageCard.fallbackSourceLabel;
  const deliveryLabel = localApk ? localApk.filename : siteConfig.release.versionLabel;
  const deliveryUpdatedAt = localApk ? formatPackageUpdatedAt(localApk.mtimeMs) : siteConfig.release.lastUpdated;
  const deliverySize = localApk ? formatPackageSize(localApk.size) : siteConfig.release.fileSize;

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="reading-surface flex-1">
        <PageIntro
          editAttributes={editableAttributes(editPage, "section", introSection)}
          eyebrow={downloadPageContent.intro.eyebrow}
          title={downloadPageContent.intro.title}
          description={downloadPageContent.intro.description}
          actions={
            <>
              <a
                href={siteConfig.downloads.androidApk.href ?? "/download"}
                download={siteConfig.downloads.androidApk.download}
                data-cta-id="download-page-hero-apk"
                className="button-primary inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
              >
                {downloadPageContent.intro.primaryLabel}
              </a>
              <a
                href={`#${installStepsSection.targetId}`}
                className="button-secondary inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
              >
                {downloadPageContent.intro.secondaryLabel}
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
                  {downloadPageContent.intro.releaseCard.label}
                </p>
                <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-ink)]">
                  {siteConfig.release.versionLabel}
                </p>
                <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                  {siteConfig.release.supportedOs}
                  <br />
                  {downloadPageContent.intro.releaseCard.packageSizeLabel} {siteConfig.release.fileSize}
                  <br />
                  {downloadPageContent.intro.releaseCard.updatedLabel} {siteConfig.release.lastUpdated}
                </p>
              </div>

              <div
                {...editableAttributes(editPage, "item", getEditableChild(introSection, "package-card")!)}
                className="surface-card-dark rounded-[1.8rem] p-6 text-white"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62">
                    {downloadPageContent.intro.currentPackageCard.label}
                  </p>
                  <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/72">
                    {localApk
                      ? downloadPageContent.intro.currentPackageCard.directBadge
                      : downloadPageContent.intro.currentPackageCard.fallbackBadge}
                  </span>
                </div>
                <p className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white">{deliveryLabel}</p>
                <div className="mt-4 grid gap-3 text-sm leading-7 text-white/72">
                  <p>
                    {downloadPageContent.intro.currentPackageCard.deliveryPathLabel}
                    <br />
                    <span className="font-medium text-white">{deliverySource}</span>
                  </p>
                  <p>
                    {downloadPageContent.intro.currentPackageCard.currentFileSizeLabel}
                    <br />
                    <span className="font-medium text-white">{deliverySize}</span>
                  </p>
                  <p>
                    {downloadPageContent.intro.currentPackageCard.verifiedAtLabel}
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
              eyebrow={downloadPageContent.beforeInstall.eyebrow}
              title={downloadPageContent.beforeInstall.title}
              description={downloadPageContent.beforeInstall.description}
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {downloadPageContent.beforeInstall.items.map((item, index) => (
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
              eyebrow={downloadPageContent.installSteps.eyebrow}
              title={downloadPageContent.installSteps.title}
              description={downloadPageContent.installSteps.description}
            />

            <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {downloadPageContent.installSteps.items.map((item, index) => (
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
                eyebrow={downloadPageContent.troubleshooting.eyebrow}
                title={downloadPageContent.troubleshooting.title}
                description={downloadPageContent.troubleshooting.description}
              />

              <div className="grid gap-4">
                {downloadPageContent.troubleshooting.items.map((item, index) => (
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
                {downloadPageContent.quickAnswers.label}
              </p>
              <div className="mt-5 grid gap-4">
                {downloadPageContent.quickAnswers.items.map((item, index) => (
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
          editAttributes={editableAttributes(editPage, "section", ctaSection)}
          primaryEditAttributes={editableAttributes(editPage, "item", getEditableChild(ctaSection, "primary-cta")!)}
          secondaryEditAttributes={editableAttributes(editPage, "item", getEditableChild(ctaSection, "secondary-cta")!)}
          eyebrow={downloadPageContent.cta.eyebrow}
          title={downloadPageContent.cta.title}
          description={downloadPageContent.cta.description}
          primaryHref={downloadPageContent.cta.primaryHref}
          primaryLabel={downloadPageContent.cta.primaryLabel}
          secondaryHref={downloadPageContent.cta.secondaryHref}
          secondaryLabel={downloadPageContent.cta.secondaryLabel}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
