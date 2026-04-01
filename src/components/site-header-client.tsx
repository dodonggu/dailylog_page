"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { siteConfig, stripLocalePrefix, withLocale, type SiteLocale } from "@/lib/site-config";

type HeaderCopy = {
  intro: string;
  download: string;
  roadmap: string;
  support: string;
  cta: string;
  openMenu: string;
  closeMenu: string;
};

const headerCopy: Record<SiteLocale, HeaderCopy> = {
  ko: {
    intro: "제품 소개",
    download: "다운로드",
    roadmap: "로드맵",
    support: "지원",
    cta: "앱 받기",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
  },
  en: {
    intro: "Product",
    download: "Download",
    roadmap: "Roadmap",
    support: "Support",
    cta: "Get the App",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
};

function getLocaleFromPathname(pathname: string): SiteLocale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ko";
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-5">
      <span
        className={`absolute left-0 top-0 block h-[1.5px] w-5 rounded-full bg-current transition ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[7px] block h-[1.5px] w-5 rounded-full bg-current transition ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[14px] block h-[1.5px] w-5 rounded-full bg-current transition ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export function SiteHeaderClient() {
  const pathname = usePathname() ?? "/";
  const locale = getLocaleFromPathname(pathname);
  const copy = headerCopy[locale];
  const normalizedPath = stripLocalePrefix(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { href: `${withLocale("/", locale)}#product`, label: copy.intro, active: normalizedPath === "/" },
      { href: withLocale("/download", locale), label: copy.download, active: normalizedPath === "/download" },
      { href: withLocale("/roadmap", locale), label: copy.roadmap, active: normalizedPath === "/roadmap" },
      { href: withLocale("/support", locale), label: copy.support, active: normalizedPath === "/support" },
    ],
    [copy.download, copy.intro, copy.roadmap, copy.support, locale, normalizedPath],
  );

  return (
    <header
      lang={locale}
      className="sticky top-0 z-50 border-b border-[color:var(--color-line)] bg-white/70 backdrop-blur-2xl"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-6 sm:py-4">
        <Link href={withLocale("/", locale)} className="inline-flex items-center gap-3 text-[color:var(--color-ink)]">
          <span className="glow-orb inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[1.1rem] border border-[color:var(--color-line)] shadow-[0_18px_42px_rgba(24,36,77,0.08)]">
            <BrandMark className="h-full w-full" label={`${siteConfig.name} logo`} priority />
          </span>
          <span className="flex flex-col">
            <span className="font-display text-[1.1rem] font-semibold tracking-[-0.04em] sm:text-[1.2rem]">{siteConfig.name}</span>
            <span
              className={`whitespace-nowrap text-[9px] font-medium leading-none text-[color:var(--color-muted)] sm:text-[10px] ${
                locale === "en" ? "tracking-[0.01em]" : "tracking-[-0.02em]"
              }`}
            >
              {locale === "en" ? "Record the day through conversation." : "대화로 하루를 기록하다."}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={`${siteConfig.name} primary`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                item.active
                  ? "bg-white text-[color:var(--color-ink)] shadow-[0_16px_34px_rgba(24,36,77,0.08)]"
                  : "text-[color:var(--color-muted)] hover:bg-white/80 hover:text-[color:var(--color-ink)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={withLocale("/download", locale)}
            className="button-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition"
          >
            {copy.cta}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={withLocale("/download", locale)}
            className="button-primary inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition"
          >
            {copy.cta}
          </Link>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="site-mobile-menu"
            aria-label={mobileOpen ? copy.closeMenu : copy.openMenu}
            onClick={() => setMobileOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-line)] bg-white/88 text-[color:var(--color-ink)]"
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div id="site-mobile-menu" className="border-t border-[color:var(--color-line)] bg-white/90 lg:hidden">
          <div className="mx-auto grid w-full max-w-7xl gap-2 px-5 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                onClick={() => setMobileOpen(false)}
                className={`rounded-[1.3rem] px-4 py-3 text-sm font-medium transition ${
                  item.active
                    ? "bg-white text-[color:var(--color-ink)] shadow-[0_16px_34px_rgba(24,36,77,0.08)]"
                    : "bg-[color:var(--color-surface-alt)] text-[color:var(--color-muted-strong)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
