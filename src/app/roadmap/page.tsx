import { PageCta, PageIntro, SectionHeading, SiteFooter, SiteHeader } from "@/components/site-shell";
import { roadmapPageContent } from "@/lib/content/roadmap-content";
import { editableAttributes, getEditableChild, getEditablePage, getEditableSection } from "@/lib/editable-pages";
import { buildMetadata } from "@/lib/site-config";

const editPage = getEditablePage("/roadmap")!;
const introSection = getEditableSection(editPage, "roadmap-intro")!;
const diagnosisSection = getEditableSection(editPage, "current-diagnosis")!;
const prioritiesSection = getEditableSection(editPage, "priorities")!;
const validationSection = getEditableSection(editPage, "validation")!;
const trustAndPaidSection = getEditableSection(editPage, "trust-and-paid")!;
const ctaSection = getEditableSection(editPage, "roadmap-cta")!;

export const metadata = buildMetadata(roadmapPageContent.metadata);

export default function RoadmapPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="reading-surface flex-1">
        <PageIntro
          editAttributes={editableAttributes(editPage, "section", introSection)}
          eyebrow={roadmapPageContent.intro.eyebrow}
          title={roadmapPageContent.intro.title}
          description={roadmapPageContent.intro.description}
          aside={
            <div className="grid gap-4">
              {roadmapPageContent.intro.cards.map((card, index) => (
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
                eyebrow={roadmapPageContent.currentDiagnosis.eyebrow}
                title={roadmapPageContent.currentDiagnosis.title}
                description={roadmapPageContent.currentDiagnosis.description}
              />

              <div
                {...editableAttributes(editPage, "item", getEditableChild(diagnosisSection, "focus-card")!)}
                className="surface-card-dark rounded-[1.8rem] p-6 text-white"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62">
                  {roadmapPageContent.currentDiagnosis.focusCard.label}
                </p>
                <p className="mt-4 whitespace-pre-line font-display text-4xl font-semibold tracking-[-0.05em] text-white">
                  {roadmapPageContent.currentDiagnosis.focusCard.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/72">{roadmapPageContent.currentDiagnosis.focusCard.description}</p>
              </div>
            </div>

            <div className="grid gap-5">
              {roadmapPageContent.currentDiagnosis.previewItems.map((item, index) => (
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
              eyebrow={roadmapPageContent.priorities.eyebrow}
              title={roadmapPageContent.priorities.title}
              description={roadmapPageContent.priorities.description}
            />

            <div className="grid gap-5 xl:grid-cols-2">
              {roadmapPageContent.priorities.items.map((item, index) => (
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
                eyebrow={roadmapPageContent.validation.eyebrow}
                title={roadmapPageContent.validation.title}
                description={roadmapPageContent.validation.description}
              />

              <div className="grid gap-4">
                {roadmapPageContent.validation.items.map((item, index) => (
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
                  {roadmapPageContent.trustAndPaid.trustCard.label}
                </p>
                <h3 className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-ink)]">
                  {roadmapPageContent.trustAndPaid.trustCard.title}
                </h3>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--color-muted)]">
                  {roadmapPageContent.trustAndPaid.trustCard.items.map((item) => (
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
                  {roadmapPageContent.trustAndPaid.paidCard.label}
                </p>
                <h3 className="mt-4 font-display text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-ink)]">
                  {roadmapPageContent.trustAndPaid.paidCard.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-[color:var(--color-muted)]">
                  {roadmapPageContent.trustAndPaid.paidCard.description}
                </p>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-[color:var(--color-muted)]">
                  {roadmapPageContent.trustAndPaid.paidCard.items.map((item) => (
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
          editAttributes={editableAttributes(editPage, "section", ctaSection)}
          primaryEditAttributes={editableAttributes(editPage, "item", getEditableChild(ctaSection, "primary-cta")!)}
          secondaryEditAttributes={editableAttributes(editPage, "item", getEditableChild(ctaSection, "secondary-cta")!)}
          eyebrow={roadmapPageContent.cta.eyebrow}
          title={roadmapPageContent.cta.title}
          description={roadmapPageContent.cta.description}
          primaryHref={roadmapPageContent.cta.primaryHref}
          primaryLabel={roadmapPageContent.cta.primaryLabel}
          secondaryHref={roadmapPageContent.cta.secondaryHref}
          secondaryLabel={roadmapPageContent.cta.secondaryLabel}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
