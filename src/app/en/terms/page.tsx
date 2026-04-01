import { PageCta, PageIntro, SiteFooter, SiteHeader } from "@/components/site-shell";
import { legalPageContentEn } from "@/lib/content/legal-content-en";
import { editableAttributes, getEditableChild, getEditablePage, getEditableSection } from "@/lib/editable-pages";
import { buildMetadata } from "@/lib/site-config";

const termsContent = legalPageContentEn.terms;
const editPage = getEditablePage("/en/terms")!;
const introSection = getEditableSection(editPage, "terms-intro")!;
const draftNoticeSection = getEditableSection(editPage, "terms-draft-notice")!;
const sectionsSection = getEditableSection(editPage, "terms-sections")!;
const footerNoteSection = getEditableSection(editPage, "terms-footer-note")!;
const ctaSection = getEditableSection(editPage, "terms-cta")!;

export const metadata = buildMetadata(termsContent.metadata);

export default function EnglishTermsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main lang="en" className="reading-surface flex-1">
        <PageIntro
          editAttributes={editableAttributes(editPage, "section", introSection)}
          eyebrow={termsContent.intro.eyebrow}
          title={termsContent.intro.title}
          description={termsContent.intro.description}
          aside={
            <div className="grid gap-4">
              {termsContent.intro.cards.map((card, index) => (
                <div
                  key={card.id}
                  {...editableAttributes(editPage, "item", introSection.children![index]!)}
                  className={`${index === 0 ? "surface-card" : "surface-card-soft"} rounded-[1.8rem] p-6`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">{card.label}</p>
                  <p className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-ink)]">{card.title}</p>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">{card.description}</p>
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
              {termsContent.draftNotice}
            </div>

            <div {...editableAttributes(editPage, "section", sectionsSection)} className="grid gap-5">
              {termsContent.sections.map((section, index) => (
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

            {termsContent.footerNote ? (
              <div
                {...editableAttributes(editPage, "section", footerNoteSection)}
                className="surface-card rounded-[1.6rem] px-6 py-6 text-sm leading-8 text-[color:var(--color-muted)]"
              >
                {termsContent.footerNote.text}
              </div>
            ) : null}
          </div>
        </section>

        <PageCta
          locale="en"
          editAttributes={editableAttributes(editPage, "section", ctaSection)}
          primaryEditAttributes={editableAttributes(editPage, "item", getEditableChild(ctaSection, "primary-cta")!)}
          secondaryEditAttributes={editableAttributes(editPage, "item", getEditableChild(ctaSection, "secondary-cta")!)}
          eyebrow={termsContent.cta.eyebrow}
          title={termsContent.cta.title}
          description={termsContent.cta.description}
          primaryHref={termsContent.cta.primaryHref}
          primaryLabel={termsContent.cta.primaryLabel}
          secondaryHref={termsContent.cta.secondaryHref}
          secondaryLabel={termsContent.cta.secondaryLabel}
        />
      </main>

      <SiteFooter locale="en" />
    </div>
  );
}
