"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import QRCode from "react-qr-code";

import type { EditableAttributes } from "@/lib/editable-pages";
import { siteConfig, siteLocaleCopy, withLocale, type ReleaseStatus, type SiteLocale } from "@/lib/site-config";

type DeviceKind = "android" | "ios" | "desktop" | "compact";

function detectDevice(userAgent: string, viewportWidth: number): DeviceKind {
  const normalized = userAgent.toLowerCase();

  if (normalized.includes("android")) {
    return "android";
  }

  if (normalized.includes("iphone") || normalized.includes("ipad") || normalized.includes("ipod")) {
    return "ios";
  }

  if (viewportWidth < 768) {
    return "compact";
  }

  return "desktop";
}

function statusLabel(status: ReleaseStatus, locale: SiteLocale) {
  if (status === "live") {
    return locale === "en" ? "Available" : "이용 가능";
  }

  if (status === "demo") {
    return locale === "en" ? "Demo" : "데모";
  }

  return locale === "en" ? "Coming Soon" : "준비 중";
}

const localizedCopy = {
  ko: {
    badge: {
      android: "Android 기기",
      ios: "iPhone 기기",
      compact: "모바일 화면",
      desktop: "데스크톱 화면",
    },
    title: "설치 경로는 짧고, 현재 상태는 분명하게 보이도록 설계했습니다.",
    summary: {
      android: "지금 이 기기에서 바로 APK를 설치할 수 있습니다. 설명보다 실제 설치 액션을 먼저 보여줍니다.",
      ios: "현재 iPhone 배포는 준비 중입니다. 설치가 안 되는 상황을 숨기지 않고, 준비 상태를 그대로 알려드립니다.",
      compact: "작은 화면에서는 설치와 상태 정보를 먼저 보여주고, 긴 설명은 뒤로 보냅니다.",
      desktop: "데스크톱에서는 QR과 배포 상태를 한 화면에 두어, 모바일로 자연스럽게 이어지게 구성했습니다.",
    },
    primaryAndroid: "이 기기에서 바로 설치",
    apk: "Android APK 다운로드",
    ios: "iPhone 출시 예정",
    store: "Play Store 준비 중",
    instant: "가장 빠른 설치 경로",
    help: "문제가 생기면",
    helpDescription: "Android 버전, 저장 공간, 설치 권한을 먼저 확인한 뒤 지원 페이지의 설치 가이드를 확인해 주세요.",
    helpLink: "지원 가이드 보기",
    stats: {
      build: "빌드",
      os: "지원 OS",
      package: "패키지",
    },
    qrLabel: "QR handoff",
    qrTitle: "데스크톱에서 열었을 때는 휴대폰으로 한 번에 넘깁니다.",
    qrDescription: "QR은 /download 페이지로 연결되어 설치 버튼, 상태, 가이드를 같은 흐름에서 이어 봅니다.",
    mobileLabel: "Mobile first",
    mobileTitle: "모바일에서는 실제 액션을 먼저 보여줍니다.",
    mobileDescription: "설치가 가능한 플랫폼은 즉시 설치 버튼을, 준비 중인 플랫폼은 상태만 보여줍니다.",
    primaryDescription: (supportedOs: string, versionLabel: string) => `${versionLabel} · ${supportedOs}`,
    apkDescription: "최신 Daily Log APK를 내려받아 대화형 체크인 흐름을 바로 체험할 수 있습니다.",
    iosDescription: "TestFlight 또는 App Store 링크가 준비되는 대로 연결합니다.",
    storeDescription: "정식 Android 스토어 배포 채널은 후속 배치에서 연결할 예정입니다.",
  },
  en: {
    badge: {
      android: "Android device",
      ios: "iPhone",
      compact: "Mobile view",
      desktop: "Desktop view",
    },
    title: "The install path stays short, and the current release state stays obvious.",
    summary: {
      android: "You can install the APK on this device right now. The page leads with the real install action, not extra explanation.",
      ios: "The iPhone release is not ready yet. Instead of hiding that, the page shows the current status clearly.",
      compact: "On smaller screens, installation and release status come first and the longer explanation moves behind them.",
      desktop: "On desktop, the QR handoff and the release state stay in the same viewport so the switch to mobile feels clean.",
    },
    primaryAndroid: "Install on this device",
    apk: "Download Android APK",
    ios: "iPhone release coming soon",
    store: "Play Store coming soon",
    instant: "Fastest install route",
    help: "If something breaks",
    helpDescription: "Check the Android version, storage, and install permissions first, then move to the support guide if needed.",
    helpLink: "Open support guide",
    stats: {
      build: "Build",
      os: "Supported OS",
      package: "Package",
    },
    qrLabel: "QR handoff",
    qrTitle: "From desktop, the page hands off to your phone in one step.",
    qrDescription: "The QR code opens the same /en/download flow so the install button, status, and guidance stay together.",
    mobileLabel: "Mobile first",
    mobileTitle: "On mobile, the page leads with the real action.",
    mobileDescription: "Ready platforms surface the install action first. Platforms that are not ready show status only.",
    primaryDescription: (supportedOs: string, versionLabel: string) => `${versionLabel} · ${supportedOs}`,
    apkDescription: "Download the latest Daily Log APK and move into the conversational check-in right away.",
    iosDescription: "A TestFlight or App Store path will be added when it is ready.",
    storeDescription: "The official Android store listing will replace the direct APK route later.",
  },
} as const;

export type DeviceDownloadHubEditAttributes = {
  section?: EditableAttributes;
  primaryCta?: EditableAttributes;
  playStore?: EditableAttributes;
  iosStatus?: EditableAttributes;
  supportCard?: EditableAttributes;
  stats?: EditableAttributes;
  handoff?: EditableAttributes;
};

function ActionCard({
  href,
  label,
  description,
  buttonId,
  status,
  locale,
  priority = "secondary",
  download = false,
  editAttributes,
}: {
  href: string | null;
  label: string;
  description: string;
  buttonId: string;
  status: ReleaseStatus;
  locale: SiteLocale;
  priority?: "primary" | "secondary";
  download?: boolean;
  editAttributes?: EditableAttributes;
}) {
  const sharedClass =
    "rounded-[1.5rem] border px-5 py-4 transition hover:-translate-y-0.5";

  if (!href) {
    return (
      <div
        aria-disabled="true"
        {...editAttributes}
        className={`${sharedClass} border-[color:var(--color-line)] bg-[color:var(--color-surface-alt)] text-[color:var(--color-muted-strong)]`}
      >
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold">{label}</p>
          <span className="rounded-full bg-black/5 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-current/75">
            {statusLabel(status, locale)}
          </span>
        </div>
        <p className="mt-2 text-xs leading-6 text-current/80">{description}</p>
      </div>
    );
  }

  return (
    <a
      href={href}
      download={download}
      data-cta-id={buttonId}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noreferrer"}
      {...editAttributes}
      className={`${sharedClass} ${
        priority === "primary"
          ? "button-primary border-transparent"
          : "border-[color:var(--color-line)] bg-white text-[color:var(--color-ink)] shadow-[0_16px_34px_rgba(24,36,77,0.05)]"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold">{label}</p>
        <span
          className={`rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.18em] ${
            priority === "primary" ? "bg-white/14 text-white/78" : "bg-black/5 text-current/70"
          }`}
        >
          {statusLabel(status, locale)}
        </span>
      </div>
      <p className={`mt-2 text-xs leading-6 ${priority === "primary" ? "text-white/78" : "text-[color:var(--color-muted)]"}`}>
        {description}
      </p>
    </a>
  );
}

export function DeviceDownloadHub({
  compact = false,
  className = "",
  locale = "ko",
  editAttributes,
}: {
  compact?: boolean;
  className?: string;
  locale?: SiteLocale;
  editAttributes?: DeviceDownloadHubEditAttributes;
}) {
  const device = useSyncExternalStore<DeviceKind>(
    (onStoreChange) => {
      window.addEventListener("resize", onStoreChange);
      return () => window.removeEventListener("resize", onStoreChange);
    },
    () => detectDevice(window.navigator.userAgent, window.innerWidth),
    () => "desktop",
  );
  const copy = localizedCopy[locale];
  const localizedSiteCopy = siteLocaleCopy[locale];
  const qrTargetPath = withLocale(siteConfig.qrPath, locale);

  const qrValue = useSyncExternalStore<string>(
    () => () => undefined,
    () => `${window.location.origin}${qrTargetPath}`,
    () => `${siteConfig.baseUrl}${qrTargetPath}`,
  );

  const primaryCta =
    device === "ios"
      ? {
          label: copy.ios,
          description: copy.iosDescription,
          status: siteConfig.downloads.ios.status,
          href: siteConfig.downloads.ios.href,
          buttonId: siteConfig.downloads.ios.ctaId,
          download: false,
        }
      : {
          label: device === "android" ? copy.primaryAndroid : copy.apk,
          description:
            device === "android"
              ? copy.primaryDescription(localizedSiteCopy.supportedOs, siteConfig.release.versionLabel)
              : copy.apkDescription,
          status: siteConfig.downloads.androidApk.status,
          href: siteConfig.downloads.androidApk.href,
          buttonId: siteConfig.downloads.androidApk.ctaId,
          download: siteConfig.downloads.androidApk.download,
        };

  return (
    <div
      lang={locale}
      {...editAttributes?.section}
      className={`surface-card mx-auto grid w-full gap-6 rounded-[2rem] p-6 md:grid-cols-[1.08fr_0.92fr] ${compact ? "md:p-7" : "md:p-8"} ${className}`}
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="inline-flex rounded-full border border-[color:var(--color-line)] bg-white/84 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">
            {copy.badge[device]}
          </div>
          <h3 className="display-heading font-display text-3xl font-semibold text-[color:var(--color-ink)] sm:text-4xl">
            {copy.title}
          </h3>
          <p className="text-sm leading-7 text-[color:var(--color-muted)]">{copy.summary[device]}</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <ActionCard
            href={primaryCta.href}
            label={primaryCta.label}
            description={primaryCta.description}
            buttonId={primaryCta.buttonId}
            status={primaryCta.status}
            locale={locale}
            priority="primary"
            download={primaryCta.download}
            editAttributes={editAttributes?.primaryCta}
          />
          <ActionCard
            href={siteConfig.downloads.androidPlay.href}
            label={copy.store}
            description={copy.storeDescription}
            buttonId={siteConfig.downloads.androidPlay.ctaId}
            status={siteConfig.downloads.androidPlay.status}
            locale={locale}
            editAttributes={editAttributes?.playStore}
          />
          <ActionCard
            href={siteConfig.downloads.ios.href}
            label={copy.ios}
            description={copy.iosDescription}
            buttonId={siteConfig.downloads.ios.ctaId}
            status={siteConfig.downloads.ios.status}
            locale={locale}
            editAttributes={editAttributes?.iosStatus}
          />

          <div {...editAttributes?.supportCard} className="surface-card-soft rounded-[1.5rem] p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-primary)]">{copy.help}</p>
            <p className="mt-3 text-sm leading-7 text-[color:var(--color-muted)]">{copy.helpDescription}</p>
            <Link
              href={withLocale("/support", locale)}
              className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-primary-deep)]"
            >
              {copy.helpLink}
            </Link>
          </div>
        </div>

        <div
          {...editAttributes?.stats}
          className="grid gap-3 rounded-[1.5rem] border border-dashed border-[color:var(--color-line)] bg-white/56 p-4 text-sm text-[color:var(--color-muted)] sm:grid-cols-3"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-primary)]">{copy.stats.build}</p>
            <p className="mt-1 font-semibold text-[color:var(--color-ink)]">{siteConfig.release.versionLabel}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-primary)]">{copy.stats.os}</p>
            <p className="mt-1 font-semibold text-[color:var(--color-ink)]">{localizedSiteCopy.supportedOs}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-primary)]">{copy.stats.package}</p>
            <p className="mt-1 font-semibold text-[color:var(--color-ink)]">{localizedSiteCopy.fileSize}</p>
          </div>
        </div>
      </div>

      {device === "desktop" ? (
        <div
          {...editAttributes?.handoff}
          className="surface-card-dark glow-orb flex flex-col gap-5 rounded-[1.8rem] p-5 text-white"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62">{copy.qrLabel}</p>
            <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-white">{copy.qrTitle}</p>
            <p className="mt-3 text-sm leading-7 text-white/70">{copy.qrDescription}</p>
          </div>

          <div className="grid flex-1 place-items-center rounded-[1.5rem] border border-white/10 bg-white/96 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.92)]">
            <div className="w-full max-w-[190px]">
              <QRCode size={256} value={qrValue} className="h-auto w-full" bgColor="transparent" fgColor="#0C1222" />
            </div>
          </div>
        </div>
      ) : (
        <div
          {...editAttributes?.handoff}
          className="surface-card-dark glow-orb rounded-[1.8rem] p-5 text-white"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/62">{copy.mobileLabel}</p>
          <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-white">{copy.mobileTitle}</p>
          <p className="mt-3 text-sm leading-7 text-white/70">{copy.mobileDescription}</p>
          <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/6 px-4 py-4 text-sm leading-7 text-white/72">
            {copy.instant}
            <div className="mt-3 h-px w-full bg-white/10" />
            <p className="mt-3">{copy.summary[device]}</p>
          </div>
        </div>
      )}
    </div>
  );
}
