import Link from "next/link";
import type { ReactNode } from "react";

import type { EditableAttributes } from "@/lib/editable-pages";
import { Pill } from "@/components/site-shell";
import { withLocale, type SiteLocale } from "@/lib/site-config";

type HeroCard = {
  label: string;
  title: string;
};

type SceneCard = {
  title: string;
  description: string;
};

type ValueCard = {
  title: string;
  description: string;
  tone?: "light" | "accent";
};

type FooterLink = {
  href: string;
  label: string;
};

export type MarketingHomeProps = {
  locale?: SiteLocale;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
    pills: string[];
    cards: HeroCard[];
    visual: ReactNode;
  };
  scenesSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  scenes: Array<{
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: SceneCard[];
    visual: ReactNode;
    tone?: "light" | "dark";
  }>;
  values: {
    eyebrow: string;
    title: string;
    description: string;
    cards: ValueCard[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
    footerLinks: FooterLink[];
  };
  editAttributes?: {
    hero?: EditableAttributes;
    heroCards?: EditableAttributes[];
    scenesSection?: EditableAttributes;
    scenes?: Array<{
      section?: EditableAttributes;
      cards?: EditableAttributes[];
    }>;
    values?: EditableAttributes;
    valueCards?: EditableAttributes[];
    finalCta?: EditableAttributes;
    finalCtaActions?: {
      primary?: EditableAttributes;
      secondary?: EditableAttributes;
      footerLinks?: EditableAttributes[];
    };
  };
};

export function MarketingHomePage({
  locale = "ko",
  hero,
  scenesSection,
  scenes,
  values,
  finalCta,
  editAttributes,
}: MarketingHomeProps) {
  return (
    <main lang={locale === "en" ? "en" : undefined} className="reading-surface flex-1">
      <section {...editAttributes?.hero} className="page-band relative overflow-hidden px-6 pb-24 pt-10 sm:pt-16 lg:pt-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(122,99,255,0.14),transparent_32%),radial-gradient(circle_at_top_left,rgba(255,236,219,0.74),transparent_42%)]" />
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">
          <div className="reveal-block inline-flex rounded-full border border-[color:var(--color-line)] bg-white/78 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">
            {hero.eyebrow}
          </div>
          <h1 className="reveal-block reveal-delay-1 display-hero mt-5 max-w-[13ch] font-display text-5xl font-semibold text-[color:var(--color-ink)] sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="reveal-block reveal-delay-2 copy-readable copy-readable-wide mt-6 text-sm text-[color:var(--color-muted)] sm:text-base">
            {hero.description}
          </p>

          <div className="reveal-block reveal-delay-2 mt-8 flex flex-wrap justify-center gap-3">
            {hero.pills.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>

          <div className="reveal-block reveal-delay-3 mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href={withLocale("/download", locale)}
              className="button-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition"
            >
              {hero.primaryLabel}
            </Link>
            <Link
              href="#product"
              className="button-secondary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition"
            >
              {hero.secondaryLabel}
            </Link>
          </div>

          <div className="mt-16 w-full">
            <div className="relative mx-auto max-w-[58rem]">
              <div className="glow-orb pulse-halo relative mx-auto w-full max-w-[20rem] rounded-[2.3rem] border border-[color:var(--color-line)] bg-white/76 p-3 shadow-[0_28px_80px_rgba(24,36,77,0.14)] sm:max-w-[22rem] lg:max-w-[24rem]">
                <div className="overflow-hidden rounded-[1.9rem]">{hero.visual}</div>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {hero.cards.map((card, index) => (
                  <article
                    key={card.title}
                    {...editAttributes?.heroCards?.[index]}
                    className={`surface-card-soft reveal-block rounded-[1.5rem] p-5 text-left ${index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""}`}
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-primary)]">{card.label}</p>
                    <p className="mt-3 text-sm font-semibold leading-7 text-[color:var(--color-ink)]">{card.title}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section {...editAttributes?.scenesSection} id="product" className="px-6 py-8">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 text-center">
          <p className="eyebrow-label text-[11px] font-semibold uppercase text-[color:var(--color-primary)]">
            {scenesSection.eyebrow}
          </p>
          <h2 className="display-heading font-display text-4xl font-semibold text-[color:var(--color-ink)] sm:text-5xl">
            {scenesSection.title}
          </h2>
          <p className="copy-readable text-sm text-[color:var(--color-muted)] sm:text-base">{scenesSection.description}</p>
        </div>
      </section>

      <section className="px-6 pb-8 pt-6">
        <div className="mx-auto grid w-full max-w-7xl gap-8">
          {scenes.map((scene, index) => {
            const reverse = index % 2 === 1;
            const dark = scene.tone === "dark";

            return (
              <article
                key={scene.id}
                {...editAttributes?.scenes?.[index]?.section}
                id={scene.id}
                className={`${dark ? "surface-card-dark text-white" : "surface-card text-[color:var(--color-ink)]"} grid gap-8 rounded-[2.2rem] px-6 py-8 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center`}
              >
                <div className={`space-y-5 ${reverse ? "lg:order-2" : ""}`}>
                  <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${dark ? "text-white/62" : "text-[color:var(--color-primary)]"}`}>
                    {scene.eyebrow}
                  </p>
                  <h3 className={`display-heading font-display text-4xl font-semibold sm:text-5xl ${dark ? "text-white" : "text-[color:var(--color-ink)]"}`}>
                    {scene.title}
                  </h3>
                  <p className={`copy-readable text-sm sm:text-base ${dark ? "text-white/72" : "text-[color:var(--color-muted)]"}`}>
                    {scene.description}
                  </p>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {scene.cards.map((card, cardIndex) => (
                      <div
                        key={card.title}
                        {...editAttributes?.scenes?.[index]?.cards?.[cardIndex]}
                        className={`rounded-[1.4rem] border px-4 py-4 ${
                          dark
                            ? "border-white/10 bg-white/6"
                            : "border-[color:var(--color-line)] bg-[color:var(--color-surface-alt)]/70"
                        }`}
                      >
                        <p className={`text-sm font-semibold ${dark ? "text-white" : "text-[color:var(--color-ink)]"}`}>{card.title}</p>
                        <p className={`mt-2 text-sm leading-6 ${dark ? "text-white/66" : "text-[color:var(--color-muted)]"}`}>{card.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`glow-orb ${reverse ? "lg:order-1" : ""}`}>
                  <div className={`pulse-halo overflow-hidden rounded-[2rem] border p-3 ${dark ? "border-white/10 bg-white/6" : "border-[color:var(--color-line)] bg-white/84"}`}>
                    <div className="overflow-hidden rounded-[1.5rem]">{scene.visual}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section {...editAttributes?.values} className="px-6 py-20">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="eyebrow-label text-[11px] font-semibold uppercase text-[color:var(--color-primary)]">{values.eyebrow}</p>
            <h2 className="display-heading font-display text-4xl font-semibold text-[color:var(--color-ink)] sm:text-5xl">{values.title}</h2>
            <p className="copy-readable text-sm text-[color:var(--color-muted)] sm:text-base">{values.description}</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.cards.map((card, index) => (
              <article
                key={card.title}
                {...editAttributes?.valueCards?.[index]}
                className={`${card.tone === "accent" ? "surface-card-dark md:col-span-2" : "surface-card-soft"} rounded-[1.8rem] p-6 ${index === 0 ? "xl:col-span-2" : ""}`}
              >
                <h3 className={`font-display text-3xl font-semibold tracking-[-0.04em] ${card.tone === "accent" ? "text-white" : "text-[color:var(--color-ink)]"}`}>
                  {card.title}
                </h3>
                <p className={`mt-4 text-sm leading-7 ${card.tone === "accent" ? "text-white/72" : "text-[color:var(--color-muted)]"}`}>
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section {...editAttributes?.finalCta} className="px-6 pb-10 pt-6">
        <div className="surface-card-dark mx-auto w-full max-w-7xl rounded-[2.2rem] px-6 py-10 text-white md:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">{finalCta.eyebrow}</p>
              <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">{finalCta.title}</h2>
              <p className="max-w-[58ch] text-sm leading-8 text-white/72">{finalCta.description}</p>
            </div>

            <div className="space-y-5">
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link
                  href={withLocale("/download", locale)}
                  {...editAttributes?.finalCtaActions?.primary}
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--color-ink)] transition hover:-translate-y-0.5"
                >
                  {finalCta.primaryLabel}
                </Link>
                <Link
                  href={withLocale("/support", locale)}
                  {...editAttributes?.finalCtaActions?.secondary}
                  className="button-dark inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
                >
                  {finalCta.secondaryLabel}
                </Link>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                {finalCta.footerLinks.map((item, index) => (
                  <Link
                    key={item.href}
                    href={withLocale(item.href, locale)}
                    {...editAttributes?.finalCtaActions?.footerLinks?.[index]}
                    className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-medium text-white/72 transition hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
