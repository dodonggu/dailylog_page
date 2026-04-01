import type { SiteLocale } from "@/lib/site-config";

export type PageMetadataContent = {
  title?: string;
  description: string;
  path: string;
  locale?: SiteLocale;
};

export type SectionIntroContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export type PageCtaContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

export type PageIntroCardContent = {
  id: string;
  label: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
  badge?: string;
};

export type TitledItemContent = {
  id: string;
  title: string;
  description: string;
};

export type QuestionAnswerContent = {
  id: string;
  question: string;
  answer: string;
};

export type TextSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type HomeDownloadSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  releaseLabel: string;
  updatedLabel: string;
  packageLabel: string;
};

export type MarketingHomeVisualContent =
  | {
      kind: "showcase";
      variant: "login" | "dashboard";
      alt: string;
      priority?: boolean;
      sizes: string;
      className: string;
    }
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      sizes: string;
      className: string;
    };

export type MarketingHomeHeroCardContent = {
  id: string;
  label: string;
  title: string;
};

export type MarketingHomeSceneCardContent = TitledItemContent;

export type MarketingHomeValueCardContent = TitledItemContent & {
  tone?: "light" | "accent";
};

export type MarketingHomeFooterLinkContent = {
  id: string;
  href: string;
  label: string;
};

export type MarketingHomeContent = {
  metadata: PageMetadataContent;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
    pills: string[];
    cards: MarketingHomeHeroCardContent[];
    visual: MarketingHomeVisualContent;
  };
  scenesSection: SectionIntroContent;
  scenes: Array<{
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: MarketingHomeSceneCardContent[];
    visual: MarketingHomeVisualContent;
    tone?: "light" | "dark";
  }>;
  values: SectionIntroContent & {
    cards: MarketingHomeValueCardContent[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
    footerLinks: MarketingHomeFooterLinkContent[];
  };
  downloadSection: HomeDownloadSectionContent;
};
