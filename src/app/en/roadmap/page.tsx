import { PageCta, PageIntro, SectionHeading, SiteFooter, SiteHeader } from "@/components/site-shell";
import { roadmapPageContentEn } from "@/lib/content/roadmap-content-en";
import { editableAttributes, getEditableChild, getEditablePage, getEditableSection } from "@/lib/editable-pages";
import { buildMetadata } from "@/lib/site-config";

const editPage = getEditablePage("/en/roadmap")!;
const introSection = getEditableSection(editPage, "roadmap-intro")!;
const diagnosisSection = getEditableSection(editPage, "current-diagnosis")!;
const prioritiesSection = getEditableSection(editPage, "priorities")!;
const validationSection = getEditableSection(editPage, "validation")!;
const trustAndPaidSection = getEditableSection(editPage, "trust-and-paid")!;
const ctaSection = getEditableSection(editPage, "roadmap-cta")!;

export const metadata = buildMetadata(roadmapPageContentEn.metadata);

export default function EnglishRoadmapPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main lang="en" className="reading-surface flex-1">
        <PageIntro
          editAttributes={editableAttributes(editPage, "section", introSection)}
          eyebrow={roadmapPageContentEn.intro.eyebrow}
          title={roadmapPageContentEn.intro.title}
          description={roadmapPageContentEn.intro.description}
          aside={
            <div className="grid gap-4">
              {roadmapPageContentEn.intro.cards.map((card, index) => (
                <div
                  key={card.id}
                  {...editableAttributes(editPage, "item", introSection.children![index]!)}
                  className={`${card.tone === "dark" ? "surface-card-dark text-white" : "surface-card"} rounded-[1.8rem] p-6`}
                >
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${card.tone === "dark" ? "text-white/62" : "text-[color:var(--color-primary)]"}`}>
                    {card.label}
                  </p>
                  <p className={`mt-4 whitespace-pre-line font-display text-4xl font-semibold tracking-[-0.05em] ${card.tone === "dark" ? "text-white" : "text-[color:var(--color-ink)]"}`}>
                    {card.title}
                  </p>
                  <p className={`mt-4 text-sm leading-7 ${card.tone === "dark" ? "text-white/72" : "text-[color:var(--color-muted)]"}`}>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          }
        />

        <section {...editableAttributes(editPage, "section", diagnosisSection)} className="px-6 py-16">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.94fr_1.06fr]">
            <div className="space-y-4">
              <SectionHeading
                eyebrow={roadmapPageContentEn.currentDiagnosis.eyebrow}
                title={roadmapPageContentEn.currentDiagnosis.title}
                description={roadmapPageContentEn.currentDiagnosis.description}
              />

              <div
                {...editableAttributes(editPage, "item", getEditableChild(diagnosisSection, "focus-card")!)}
                className="surface-card-dark rounded-[1.8rem] p-6 text-white"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62">
                  {roadmapPageContentEn.currentDiagnosis.focusCard.label}
                </p>
                <p className="mt-4 whitespace-pre-line font-display text-4xl font-semibold tracking-[-0.05em] text-white">
                  {roadmapPageContentEn.currentDiagnosis.focusCard.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/72">{roadmapPageContentEn.currentDiagnosis.focusCard.description}</p>
              </div>
            </div>

            <div className="grid gap-5">
              {roadmapPageContentEn.currentDiagnosis.previewItems.map((item, index) => (
                <article
                  key={item.id}
                  {...editableAttributes(editPage, "item", diagnosisSection.children![index + 1]!)}
                  className="surface-card-soft rounded-[1.8rem] p-6"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">{item.eyebrow}</p>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-ink)]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--color-muted)]">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section {...editableAttributes(editPage, "section", prioritiesSection)} className="px-6 py-16">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <SectionHeading
              eyebrow={roadmapPageContentEn.priorities.eyebrow}
              title={roadmapPageContentEn.priorities.title}
              description={roadmapPageContentEn.priorities.description}
            />

            <div className="grid gap-5 xl:grid-cols-2">
              {roadmapPageContentEn.priorities.items.map((item, index) => (
                <article
                  key={item.id}
                  {...editableAttributes(editPage, "item", prioritiesSection.children![index]!)}
                  className={`${index === 0 ? "surface-card-dark text-white" : "surface-card-soft"} rounded-[1.8rem] p-6`}
                >
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${index === 0 ? "text-white/62" : "text-[color:var(--color-primary)]"}`}>
                    {item.eyebrow}
                  </p>
                  <h2 className={`mt-4 font-display text-4xl font-semibold tracking-[-0.05em] ${index === 0 ? "text-white" : "text-[color:var(--color-ink)]"}`}>
                    {item.title}
                  </h2>
                  <p className={`mt-4 text-sm leading-8 ${index === 0 ? "text-white/72" : "text-[color:var(--color-muted)]"}`}>
                    {item.summary}
                  </p>
                  <ul className="mt-5 grid gap-3 text-sm leading-7">
                    {item.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className={`rounded-[1rem] px-4 py-3 ${
                          index === 0
                            ? "border border-white/10 bg-white/6 text-white/76"
                            : "border border-[color:var(--color-line)] bg-white/76 text-[color:var(--color-muted)]"
                        }`}
                      >
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section {...editableAttributes(editPage, "section", validationSection)} className="px-6 py-16">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-4">
              <SectionHeading
                eyebrow={roadmapPageContentEn.validation.eyebrow}
                title={roadmapPageContentEn.validation.title}
                description={roadmapPageContentEn.validation.description}
              />

              <div className="grid gap-4">
                {roadmapPageContentEn.validation.items.map((item, index) => (
                  <article
                    key={item.id}
                    {...editableAttributes(editPage, "item", validationSection.children![index]!)}
                    className="surface-card-soft rounded-[1.6rem] p-5"
                  >
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[color:var(--color-ink)]">{item.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {item.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="rounded-full border border-[color:var(--color-line)] bg-white/76 px-4 py-2 text-sm text-[color:var(--color-muted)]"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div {...editableAttributes(editPage, "section", trustAndPaidSection)} className="grid gap-5">
              <article
                {...editableAttributes(editPage, "item", getEditableChild(trustAndPaidSection, "trust-card")!)}
                className="surface-card rounded-[1.8rem] p-6"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">
                  {roadmapPageContentEn.trustAndPaid.trustCard.label}
                </p>
                <h3 className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-ink)]">
                  {roadmapPageContentEn.trustAndPaid.trustCard.title}
                </h3>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--color-muted)]">
                  {roadmapPageContentEn.trustAndPaid.trustCard.items.map((item) => (
                    <li key={item.id} className="rounded-[1rem] border border-[color:var(--color-line)] bg-[color:var(--color-surface-alt)]/70 px-4 py-3">
                      {item.text}
                    </li>
                  ))}
                </ul>
              </article>

              <article
                {...editableAttributes(editPage, "item", getEditableChild(trustAndPaidSection, "paid-card")!)}
                className="surface-card-soft rounded-[1.8rem] p-6"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">
                  {roadmapPageContentEn.trustAndPaid.paidCard.label}
                </p>
                <h3 className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-ink)]">
                  {roadmapPageContentEn.trustAndPaid.paidCard.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-[color:var(--color-muted)]">
                  {roadmapPageContentEn.trustAndPaid.paidCard.description}
                </p>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--color-muted)]">
                  {roadmapPageContentEn.trustAndPaid.paidCard.items.map((item) => (
                    <li key={item.id} className="rounded-[1rem] border border-[color:var(--color-line)] bg-white/80 px-4 py-3">
                      {item.text}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <PageCta
          locale="en"
          editAttributes={editableAttributes(editPage, "section", ctaSection)}
          primaryEditAttributes={editableAttributes(editPage, "item", getEditableChild(ctaSection, "primary-cta")!)}
          secondaryEditAttributes={editableAttributes(editPage, "item", getEditableChild(ctaSection, "secondary-cta")!)}
          eyebrow={roadmapPageContentEn.cta.eyebrow}
          title={roadmapPageContentEn.cta.title}
          description={roadmapPageContentEn.cta.description}
          primaryHref={roadmapPageContentEn.cta.primaryHref}
          primaryLabel={roadmapPageContentEn.cta.primaryLabel}
          secondaryHref={roadmapPageContentEn.cta.secondaryHref}
          secondaryLabel={roadmapPageContentEn.cta.secondaryLabel}
        />
      </main>

      <SiteFooter locale="en" />
    </div>
  );
}
