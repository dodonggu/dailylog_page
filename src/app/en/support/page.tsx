import { PageCta, PageIntro, SectionHeading, SiteFooter, SiteHeader } from "@/components/site-shell";
import { supportPageContentEn } from "@/lib/content/support-content-en";
import { editableAttributes, getEditableChild, getEditablePage, getEditableSection } from "@/lib/editable-pages";
import { buildMetadata, siteConfig, siteLocaleCopy } from "@/lib/site-config";

const editPage = getEditablePage("/en/support")!;
const introSection = getEditableSection(editPage, "support-intro")!;
const tracksSection = getEditableSection(editPage, "support-tracks")!;
const bestContextSection = getEditableSection(editPage, "best-context")!;
const faqSection = getEditableSection(editPage, "support-faq")!;
const ctaSection = getEditableSection(editPage, "support-cta")!;

export const metadata = buildMetadata(supportPageContentEn.metadata);

export default function EnglishSupportPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main lang="en" className="reading-surface flex-1">
        <PageIntro
          editAttributes={editableAttributes(editPage, "section", introSection)}
          eyebrow={supportPageContentEn.intro.eyebrow}
          title={supportPageContentEn.intro.title}
          description={supportPageContentEn.intro.description}
          actions={
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="button-primary inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
            >
              {supportPageContentEn.intro.primaryLabel}
            </a>
          }
          aside={
            <div className="grid gap-4">
              {supportPageContentEn.intro.cards.map((card, index) => (
                <div
                  key={card.id}
                  {...editableAttributes(editPage, "item", introSection.children![index]!)}
                  className={`${card.tone === "dark" ? "surface-card-dark text-white" : "surface-card"} rounded-[1.8rem] p-6`}
                >
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${card.tone === "dark" ? "text-white/62" : "text-[color:var(--color-primary)]"}`}>
                    {card.label}
                  </p>
                  <p className={`mt-4 font-display text-4xl font-semibold tracking-[-0.05em] ${card.tone === "dark" ? "text-white" : "text-[color:var(--color-ink)]"}`}>
                    {card.title}
                  </p>
                  <p className={`mt-4 text-sm leading-7 ${card.tone === "dark" ? "text-white/72" : "text-[color:var(--color-muted)]"}`}>
                    {card.description}
                  </p>
                  {card.id === "contact-card" ? (
                    <>
                      <a href={`mailto:${siteConfig.contactEmail}`} className="mt-4 inline-flex text-sm font-semibold text-[color:var(--color-ink)]">
                        {siteConfig.contactEmail}
                      </a>
                      <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">{siteLocaleCopy.en.supportResponseTime}</p>
                    </>
                  ) : null}
                </div>
              ))}
            </div>
          }
        />

        <section {...editableAttributes(editPage, "section", tracksSection)} className="px-6 py-16">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <SectionHeading
              eyebrow={supportPageContentEn.tracks.eyebrow}
              title={supportPageContentEn.tracks.title}
              description={supportPageContentEn.tracks.description}
            />

            <div className="grid gap-5 lg:grid-cols-3">
              {supportPageContentEn.tracks.items.map((item, index) => (
                <article
                  key={item.id}
                  {...editableAttributes(editPage, "item", tracksSection.children![index]!)}
                  className={`${index === 1 ? "surface-card-dark text-white" : "surface-card-soft"} rounded-[1.8rem] p-6`}
                >
                  <h2 className={`font-display text-3xl font-semibold tracking-[-0.04em] ${index === 1 ? "text-white" : "text-[color:var(--color-ink)]"}`}>
                    {item.title}
                  </h2>
                  <p className={`mt-4 text-sm leading-7 ${index === 1 ? "text-white/72" : "text-[color:var(--color-muted)]"}`}>
                    {item.description}
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm leading-7">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className={`rounded-[1rem] px-4 py-3 ${
                          index === 1
                            ? "border border-white/10 bg-white/6 text-white/74"
                            : "border border-[color:var(--color-line)] bg-white/76 text-[color:var(--color-muted)]"
                        }`}
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.96fr_1.04fr]">
            <div {...editableAttributes(editPage, "section", bestContextSection)} className="surface-card rounded-[2rem] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">
                {supportPageContentEn.bestContext.label}
              </p>
              <div className="mt-5 grid gap-4">
                {supportPageContentEn.bestContext.items.map((item, index) => (
                  <div
                    key={item.id}
                    {...editableAttributes(editPage, "item", bestContextSection.children![index]!)}
                    className="rounded-[1.4rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-alt)]/70 px-5 py-4 text-sm leading-7 text-[color:var(--color-muted)]"
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            <div {...editableAttributes(editPage, "section", faqSection)} className="surface-card rounded-[2rem] p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">
                {supportPageContentEn.faq.label}
              </p>
              <div className="mt-5 grid gap-4">
                {supportPageContentEn.faq.items.map((item, index) => (
                  <details
                    key={item.id}
                    {...editableAttributes(editPage, "item", faqSection.children![index]!)}
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
          eyebrow={supportPageContentEn.cta.eyebrow}
          title={supportPageContentEn.cta.title}
          description={supportPageContentEn.cta.description}
          primaryHref={supportPageContentEn.cta.primaryHref}
          primaryLabel={supportPageContentEn.cta.primaryLabel}
          secondaryHref={supportPageContentEn.cta.secondaryHref}
          secondaryLabel={supportPageContentEn.cta.secondaryLabel}
        />
      </main>

      <SiteFooter locale="en" />
    </div>
  );
}
