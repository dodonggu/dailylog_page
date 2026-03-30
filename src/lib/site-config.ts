import type { Metadata } from "next";

export type ReleaseStatus = "live" | "demo" | "comingSoon";
export type SiteLocale = "ko" | "en";

type DownloadTarget = {
  status: ReleaseStatus;
  href: string | null;
  label: string;
  description: string;
  ctaId: string;
  download?: boolean;
};

export const githubReleaseRepo = {
  owner: "jang961111-hash",
  name: "dailylog_page",
} as const;

export const androidReleaseVersion = "1.0.14";
export const androidReleaseFallbackTag = `android-demo-v${androidReleaseVersion}`;
export const androidReleaseFallbackAssetName = `DailyLog_${androidReleaseVersion}.apk`;
export const androidReleaseFallbackAssetUrl = `https://github.com/${githubReleaseRepo.owner}/${githubReleaseRepo.name}/releases/download/${androidReleaseFallbackTag}/${androidReleaseFallbackAssetName}`;
const androidReleaseRoute = "/download/apk";

export const siteConfig = {
  name: "Daily Log",
  shortName: "Daily Log",
  tagline: "대화로 하루를 기록하고, 감정을 읽고, 다음 행동까지 이어주는 AI 라이프로그",
  description:
    "Daily Log는 3~5분 대화형 체크인으로 하루를 정리하고, 감정 분석과 다음 행동 제안까지 이어주는 모바일 중심 기록 서비스입니다.",
  baseUrl: "https://dailylog.app",
  ogImage: "/images/app-home.webp",
  qrPath: "/download",
  fallbackQrUrl: "https://dailylog.app/download",
  contactEmail: "support@dailylog.app",
  legalUpdatedAt: "2026-03-25",
  supportResponseTime: "영업일 기준 1~2일",
  releaseStatus: "live" as ReleaseStatus,
  release: {
    badge: "Android APK",
    versionLabel: `DailyLog APK v${androidReleaseVersion}`,
    supportedOs: "Android 10 이상 권장",
    fileSize: "약 332.0MB",
    lastUpdated: "2026-03-30",
  },
  downloads: {
    androidApk: {
      status: "live",
      href: androidReleaseRoute,
      label: "Android APK 다운로드",
      description: "현재 제공 중인 최신 Daily Log APK를 바로 내려받아 핵심 체크인 흐름을 체험할 수 있습니다.",
      ctaId: "android-apk",
      download: false,
    } satisfies DownloadTarget,
    androidPlay: {
      status: "comingSoon",
      href: null,
      label: "Play Store 준비 중",
      description: "정식 배포 채널은 추후 Play Store 연결로 전환할 예정입니다.",
      ctaId: "android-play",
    } satisfies DownloadTarget,
    ios: {
      status: "comingSoon",
      href: null,
      label: "iPhone 출시 예정",
      description: "TestFlight 또는 App Store 링크가 준비되는 대로 연결합니다.",
      ctaId: "ios",
    } satisfies DownloadTarget,
  },
  replaceBeforeLaunch: [
    "최종 도메인과 사이트 주소",
    "문의 이메일 또는 문의 폼",
    "Play Store / TestFlight / App Store 링크",
    "정식 개인정보처리방침 및 이용약관 문안",
    "최종 공유용 이미지와 앱 아이콘",
    "정리된 앱 스크린샷과 브랜드 자산",
  ],
} as const;

export const siteLocaleCopy = {
  ko: {
    tagline: siteConfig.tagline,
    description: siteConfig.description,
    supportResponseTime: siteConfig.supportResponseTime,
    supportedOs: siteConfig.release.supportedOs,
    fileSize: siteConfig.release.fileSize,
    ogImageAlt: `${siteConfig.name} 앱 미리보기`,
  },
  en: {
    tagline: "A conversational life log that helps you wrap up the day, understand your mood, and keep going.",
    description:
      "Daily Log is a mobile-first journaling experience that helps you reflect on the day through a 3-5 minute conversational check-in, mood insight, and a practical next step.",
    supportResponseTime: "1-2 business days",
    supportedOs: "Recommended for Android 10 or later",
    fileSize: "About 332.0 MB",
    ogImageAlt: `${siteConfig.name} app preview`,
  },
} as const;

function makeTitle(title?: string) {
  return title ? `${title} | ${siteConfig.name}` : siteConfig.name;
}

function absoluteUrl(path: string) {
  return new URL(path, siteConfig.baseUrl).toString();
}

function normalizePath(path: string) {
  if (!path || path === "/") {
    return "/";
  }

  return path.startsWith("/") ? path : `/${path}`;
}

export function stripLocalePrefix(path: string) {
  const normalizedPath = normalizePath(path);
  const strippedPath = normalizedPath.replace(/^\/en(?=\/|$)/, "");
  return strippedPath === "" ? "/" : strippedPath;
}

export function withLocale(path: string, locale: SiteLocale) {
  const basePath = stripLocalePrefix(path);

  if (locale === "ko") {
    return basePath;
  }

  return basePath === "/" ? "/en" : `/en${basePath}`;
}

function languageAlternates(path: string) {
  const basePath = stripLocalePrefix(path);

  return {
    "ko-KR": withLocale(basePath, "ko"),
    "en-US": withLocale(basePath, "en"),
  };
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteLocaleCopy.ko.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
    languages: languageAlternates("/"),
  },
  openGraph: {
    title: siteConfig.name,
    description: siteLocaleCopy.ko.description,
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: siteLocaleCopy.ko.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteLocaleCopy.ko.description,
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "default",
  },
  category: "lifestyle",
};

export function buildMetadata({
  title,
  description,
  path = "/",
  locale = "ko",
}: {
  title?: string;
  description?: string;
  path?: string;
  locale?: SiteLocale;
} = {}): Metadata {
  const canonicalPath = withLocale(path, locale);
  const localizedCopy = siteLocaleCopy[locale];
  const pageTitle = makeTitle(title);
  const pageDescription = description ?? localizedCopy.description;

  return {
    title,
    description: pageDescription,
    alternates: {
      canonical: canonicalPath,
      languages: languageAlternates(canonicalPath),
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: absoluteUrl(canonicalPath),
      siteName: siteConfig.name,
      locale: locale === "en" ? "en_US" : "ko_KR",
      type: "website",
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1200,
          height: 630,
          alt: localizedCopy.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  };
}
