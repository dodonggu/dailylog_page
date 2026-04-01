import Link from "next/link";
import type { ReactNode } from "react";

import { SiteHeaderClient } from "@/components/site-header-client";
import type { EditableAttributes } from "@/lib/editable-pages";
import { siteConfig, siteLocaleCopy, withLocale, type SiteLocale } from "@/lib/site-config";

const footerCopy = {
  ko: {
    label: "Daily Log Site",
    description:
      "Daily Log 웹사이트는 설치, 지원, 정책, 제품 방향을 한눈에 읽히도록 정리한 공개 허브입니다.",
    checklistItems: [
      "최종 도메인과 사이트 주소",
      "문의 메일 또는 문의 폼",
      "Play Store / App Store 배포 링크",
      "최종 정책 문안과 공유용 이미지",
    ],
    quickLinks: "바로 가기",
    quickLinkItems: [
      { href: "/download", label: "다운로드" },
      { href: "/roadmap", label: "로드맵" },
      { href: "/support", label: "지원" },
      { href: "/privacy", label: "개인정보처리방침" },
      { href: "/terms", label: "이용약관" },
    ],
    operations: "운영 정보",
    contact: "문의 메일",
    responseTime: "응답 시간",
    legalDate: "문서 기준일",
    launchChecklist: "런치 전 점검",
  },
  en: {
    label: "Daily Log Site",
    description:
      "The Daily Log website is the public hub for install guidance, support, policies, and the product direction in one readable flow.",
    checklistItems: [
      "Final production domain and URLs",
      "Support email or contact form",
      "Play Store and App Store release links",
      "Final legal copy and share assets",
    ],
    quickLinks: "Quick links",
    quickLinkItems: [
      { href: "/download", label: "Download" },
      { href: "/roadmap", label: "Roadmap" },
      { href: "/support", label: "Support" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
    operations: "Operations",
    contact: "Support email",
    responseTime: "Response time",
    legalDate: "Document date",
    launchChecklist: "Pre-launch checks",
  },
} as const;

export function SiteHeader() {
  return <SiteHeaderClient />;
}

export function SiteFooter({ locale = "ko" }: { locale?: SiteLocale }) {
  const copy = footerCopy[locale];
  const localizedSiteCopy = siteLocaleCopy[locale];

  return (
    <footer
      lang={locale}
      className="mt-24 border-t border-white/8 bg-[radial-gradient(circle_at_top,rgba(122,99,255,0.18),transparent_32%),linear-gradient(180deg,#13192d_0%,#0a0f1d_100%)] text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.7fr_0.9fr]">
        <div className="space-y-5">
          <div className="space-y-4">
            <div className="inline-flex rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/72">
              {copy.label}
            </div>
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">{siteConfig.name}</h2>
              <p className="copy-readable mt-4 text-sm text-white/68">{copy.description}</p>
            </div>
          </div>

          <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5 text-sm leading-7 text-white/68">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/62">{copy.launchChecklist}</p>
            <ul className="mt-4 grid gap-3">
              {copy.checklistItems.map((item) => (
                <li key={item} className="rounded-[1rem] border border-white/8 bg-white/6 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/62">{copy.quickLinks}</p>
          <div className="grid gap-3 text-sm text-white/72">
            {copy.quickLinkItems.map((item) => (
              <Link
                key={item.href}
                href={withLocale(item.href, locale)}
                className="rounded-[1rem] border border-white/8 bg-white/6 px-4 py-3 transition hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/62">{copy.operations}</p>
          <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-5 text-sm leading-7 text-white/72">
            <p>
              {copy.contact}
              <br />
              <a href={`mailto:${siteConfig.contactEmail}`} className="font-medium text-white">
                {siteConfig.contactEmail}
              </a>
            </p>
            <p className="mt-4">
              {copy.responseTime}
              <br />
              <span className="font-medium text-white">{localizedSiteCopy.supportResponseTime}</span>
            </p>
            <p className="mt-4">
              {copy.legalDate}
              <br />
              <span className="font-medium text-white">{siteConfig.legalUpdatedAt}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-3xl items-center text-center"
      : "max-w-3xl items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      <p className="eyebrow-label text-[11px] font-semibold uppercase text-[color:var(--color-primary)]">{eyebrow}</p>
      <h2 className="display-heading font-display text-4xl font-semibold text-[color:var(--color-ink)] sm:text-5xl">{title}</h2>
      <p className="copy-readable text-sm text-[color:var(--color-muted)] sm:text-base">{description}</p>
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
  aside,
  actions,
  editAttributes,
}: {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
  actions?: ReactNode;
  editAttributes?: EditableAttributes;
}) {
  return (
    <section {...editAttributes} className="page-band relative overflow-hidden px-6 pb-12 pt-14 sm:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top_right,rgba(122,99,255,0.14),transparent_30%),radial-gradient(circle_at_top_left,rgba(255,236,219,0.84),transparent_40%)]" />
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
        <div className="reveal-block space-y-6 pt-3">
          <div className="inline-flex rounded-full border border-[color:var(--color-line)] bg-white/78 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">
            {eyebrow}
          </div>
          <h1 className="display-hero max-w-[13ch] font-display text-5xl font-semibold text-[color:var(--color-ink)] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="copy-readable copy-readable-wide text-sm text-[color:var(--color-muted)] sm:text-base">{description}</p>
          {actions ? <div className="flex flex-wrap gap-3 pt-1">{actions}</div> : null}
        </div>

        {aside ? <div className="reveal-block reveal-delay-1">{aside}</div> : null}
      </div>
    </section>
  );
}

export function PageCta({
  locale = "ko",
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  editAttributes,
  primaryEditAttributes,
  secondaryEditAttributes,
}: {
  locale?: SiteLocale;
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  editAttributes?: EditableAttributes;
  primaryEditAttributes?: EditableAttributes;
  secondaryEditAttributes?: EditableAttributes;
}) {
  return (
    <section {...editAttributes} className="px-6 pb-6 pt-8">
      <div className="surface-card-dark mx-auto w-full max-w-7xl rounded-[2rem] px-6 py-10 text-white md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">{eyebrow}</p>
            <h2 className="font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">{title}</h2>
            <p className="max-w-[58ch] text-sm leading-8 text-white/72">{description}</p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href={withLocale(primaryHref, locale)}
              {...primaryEditAttributes}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[color:var(--color-ink)] transition hover:-translate-y-0.5"
            >
              {primaryLabel}
            </Link>
            <Link
              href={withLocale(secondaryHref, locale)}
              {...secondaryEditAttributes}
              className="button-dark inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="pill-label inline-flex items-center rounded-full border border-[color:var(--color-line)] bg-white/80 px-4 py-2 text-xs text-[color:var(--color-muted-strong)] shadow-[0_16px_34px_rgba(24,36,77,0.04)]">
      {children}
    </span>
  );
}
