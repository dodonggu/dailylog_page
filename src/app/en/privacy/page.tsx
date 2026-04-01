import { PageCta, PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
import { legalPageContentEn } from "@/lib/content/legal-content-en";
import { editableAttributes, getEditableChild, getEditablePage, getEditableSection } from "@/lib/editable-pages";
import { buildMetadata, siteConfig } from "@/lib/site-config";

const privacyContent = legalPageContentEn.privacy;
const editPage = getEditablePage("/en/privacy")!;
const introSection = getEditableSection(editPage, "privacy-intro")!;
const draftNoticeSection = getEditableSection(editPage, "privacy-draft-notice")!;
const sectionsSection = getEditableSection(editPage, "privacy-sections")!;
const ctaSection = getEditableSection(editPage, "privacy-cta")!;

export const metadata = buildMetadata(privacyContent.metadata);

export default function EnglishPrivacyPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main lang="en" className="reading-surface flex-1">
        <PageIntro
          editAttributes={editableAttributes(editPage, "section", introSection)}
          eyebrow={privacyContent.intro.eyebrow}
          title={privacyContent.intro.title}
          description={privacyContent.intro.description}
          aside={
            <div className="grid gap-4">
              {privacyContent.intro.cards.map((card, index) => (
                <div
                  key={card.id}
                  {...editableAttributes(editPage, "item", introSection.children![index]!)}
                  className={`${index === 0 ? "surface-card" : "surface-card-soft"} rounded-[1.8rem] p-6`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">{card.label}</p>
                  <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-ink)]">{card.title}</p>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">{card.description}</p>
                  {card.id === "document-status" ? (
                    <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">
                      {siteConfig.legalUpdatedAt}
                      <br />
                      {siteConfig.contactEmail}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          }
        />

        <section className="px-6 py-12">
          <div className="mx-auto grid w-full max-w-4xl gap-5">
            <div
              {...editableAttributes(editPage, "section", draftNoticeSection)}
              className="rounded-[1.5rem] border border-dashed border-[color:var(--color-line)] bg-[color:var(--color-surface-alt)]/72 px-5 py-5 text-sm leading-7 text-[color:var(--color-muted)]"
            >
              {privacyContent.draftNotice}
            </div>

            <div {...editableAttributes(editPage, "section", sectionsSection)} className="grid gap-5">
              {privacyContent.sections.map((section, index) => (
                <article
                  key={section.id}
                  {...editableAttributes(editPage, "item", sectionsSection.children![index]!)}
                  className="surface-card rounded-[1.8rem] px-6 py-6"
                >
                  <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-ink)]">{section.title}</h2>
                  <div className="mt-4 space-y-4 text-sm leading-8 text-[color:var(--color-muted)]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets ? (
                      <ul className="space-y-3">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-alt)]/66 px-4 py-3"
                          >
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PageCta
          locale="en"
          editAttributes={editableAttributes(editPage, "section", ctaSection)}
          primaryEditAttributes={editableAttributes(editPage, "item", getEditableChild(ctaSection, "primary-cta")!)}
          secondaryEditAttributes={editableAttributes(editPage, "item", getEditableChild(ctaSection, "secondary-cta")!)}
          eyebrow={privacyContent.cta.eyebrow}
          title={privacyContent.cta.title}
          description={privacyContent.cta.description}
          primaryHref={privacyContent.cta.primaryHref}
          primaryLabel={privacyContent.cta.primaryLabel}
          secondaryHref={privacyContent.cta.secondaryHref}
          secondaryLabel={privacyContent.cta.secondaryLabel}
        />
      </main>

      <SiteFooter locale="en" />
    </div>
  );
}
