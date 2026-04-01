import { downloadPageContentEn } from "@/lib/content/download-page-content-en";
import { downloadPageContent } from "@/lib/content/download-page-content";
import { homePageContentEn } from "@/lib/content/landing-content-en";
import { homePageContent } from "@/lib/content/landing-content";
import { legalPageContentEn } from "@/lib/content/legal-content-en";
import { legalPageContent } from "@/lib/content/legal-content";
import { roadmapPageContentEn } from "@/lib/content/roadmap-content-en";
import { roadmapPageContent } from "@/lib/content/roadmap-content";
import { supportPageContentEn } from "@/lib/content/support-content-en";
import { supportPageContent } from "@/lib/content/support-content";

const contentSource = {
  homeKo: "src/lib/content/landing-content.ts",
  homeEn: "src/lib/content/landing-content-en.ts",
  downloadKo: "src/lib/content/download-page-content.ts",
  downloadEn: "src/lib/content/download-page-content-en.ts",
  roadmapKo: "src/lib/content/roadmap-content.ts",
  roadmapEn: "src/lib/content/roadmap-content-en.ts",
  supportKo: "src/lib/content/support-content.ts",
  supportEn: "src/lib/content/support-content-en.ts",
  legalKo: "src/lib/content/legal-content.ts",
  legalEn: "src/lib/content/legal-content-en.ts",
  deviceHub: "src/components/device-download-hub.tsx",
} as const;

export type EditableItemSpec = {
  id: string;
  label: string;
  targetId: string;
  sourceKey: string;
};

export type EditableSectionSpec = EditableItemSpec & {
  children?: EditableItemSpec[];
};

export type EditablePageSpec = {
  id: string;
  label: string;
  path: string;
  sourceKey: string;
  sections: EditableSectionSpec[];
};

export type EditableKind = "page" | "section" | "item";
export type EditableAttributes = {
  id: string;
  "data-edit-page": string;
  "data-edit-kind": EditableKind;
  "data-edit-id": string;
  "data-edit-label": string;
  "data-edit-source": string;
};

function source(filePath: string, key: string) {
  return `${filePath}#${key}`;
}

function makeHubChildren(prefix: string): EditableItemSpec[] {
  return [
    { id: `${prefix}-latest-release`, label: "Latest release", targetId: `${prefix}-latest-release`, sourceKey: source(contentSource.deviceHub, "shared.release") },
    { id: `${prefix}-primary-cta`, label: "Primary CTA", targetId: `${prefix}-primary-cta`, sourceKey: source(contentSource.deviceHub, "actions.primary") },
    { id: `${prefix}-play-store`, label: "Play Store status", targetId: `${prefix}-play-store`, sourceKey: source(contentSource.deviceHub, "actions.playStore") },
    { id: `${prefix}-ios-status`, label: "iPhone status", targetId: `${prefix}-ios-status`, sourceKey: source(contentSource.deviceHub, "actions.ios") },
    { id: `${prefix}-support-card`, label: "Support card", targetId: `${prefix}-support-card`, sourceKey: source(contentSource.deviceHub, "supportCard") },
    { id: `${prefix}-stats`, label: "Release stats", targetId: `${prefix}-stats`, sourceKey: source(contentSource.deviceHub, "stats") },
    { id: `${prefix}-handoff`, label: "Handoff panel", targetId: `${prefix}-handoff`, sourceKey: source(contentSource.deviceHub, "handoffPanel") },
  ];
}

const homeEditablePage: EditablePageSpec = {
  id: "home-ko",
  label: "Home",
  path: "/",
  sourceKey: contentSource.homeKo,
  sections: [
    {
      id: "hero",
      label: "Hero",
      targetId: "home-hero",
      sourceKey: source(contentSource.homeKo, "hero"),
      children: homePageContent.hero.cards.map((card, index) => ({
        id: card.id,
        label: card.title,
        targetId: `home-hero-card-${index + 1}`,
        sourceKey: source(contentSource.homeKo, `hero.cards[${index}]`),
      })),
    },
    {
      id: "product-story",
      label: "Product Story intro",
      targetId: "product",
      sourceKey: source(contentSource.homeKo, "scenesSection"),
    },
    ...homePageContent.scenes.map((scene, sceneIndex) => ({
      id: scene.id,
      label: scene.title,
      targetId: scene.id,
      sourceKey: source(contentSource.homeKo, `scenes[${sceneIndex}]`),
      children: scene.cards.map((card, cardIndex) => ({
        id: card.id,
        label: card.title,
        targetId: `${scene.id}-card-${cardIndex + 1}`,
        sourceKey: source(contentSource.homeKo, `scenes[${sceneIndex}].cards[${cardIndex}]`),
      })),
    })),
    {
      id: "value-cards",
      label: homePageContent.values.title,
      targetId: "home-value-cards",
      sourceKey: source(contentSource.homeKo, "values"),
      children: homePageContent.values.cards.map((card, index) => ({
        id: card.id,
        label: card.title,
        targetId: `home-value-card-${index + 1}`,
        sourceKey: source(contentSource.homeKo, `values.cards[${index}]`),
      })),
    },
    {
      id: "final-cta",
      label: homePageContent.finalCta.title,
      targetId: "home-final-cta",
      sourceKey: source(contentSource.homeKo, "finalCta"),
      children: [
        { id: "primary-cta", label: homePageContent.finalCta.primaryLabel, targetId: "home-final-cta-primary", sourceKey: source(contentSource.homeKo, "finalCta.primaryLabel") },
        { id: "secondary-cta", label: homePageContent.finalCta.secondaryLabel, targetId: "home-final-cta-secondary", sourceKey: source(contentSource.homeKo, "finalCta.secondaryLabel") },
        ...homePageContent.finalCta.footerLinks.map((link, index) => ({
          id: link.id,
          label: link.label,
          targetId: `home-final-link-${index + 1}`,
          sourceKey: source(contentSource.homeKo, `finalCta.footerLinks[${index}]`),
        })),
      ],
    },
    {
      id: "install-now",
      label: homePageContent.downloadSection.title,
      targetId: "home-install-now",
      sourceKey: source(contentSource.homeKo, "downloadSection"),
      children: makeHubChildren("home-download"),
    },
  ],
};

const homeEditablePageEn: EditablePageSpec = {
  id: "home-en",
  label: "Home",
  path: "/en",
  sourceKey: contentSource.homeEn,
  sections: [
    {
      id: "hero",
      label: "Hero",
      targetId: "home-hero",
      sourceKey: source(contentSource.homeEn, "hero"),
      children: homePageContentEn.hero.cards.map((card, index) => ({
        id: card.id,
        label: card.title,
        targetId: `home-hero-card-${index + 1}`,
        sourceKey: source(contentSource.homeEn, `hero.cards[${index}]`),
      })),
    },
    {
      id: "product-story",
      label: "Product Story intro",
      targetId: "product",
      sourceKey: source(contentSource.homeEn, "scenesSection"),
    },
    ...homePageContentEn.scenes.map((scene, sceneIndex) => ({
      id: scene.id,
      label: scene.title,
      targetId: scene.id,
      sourceKey: source(contentSource.homeEn, `scenes[${sceneIndex}]`),
      children: scene.cards.map((card, cardIndex) => ({
        id: card.id,
        label: card.title,
        targetId: `${scene.id}-card-${cardIndex + 1}`,
        sourceKey: source(contentSource.homeEn, `scenes[${sceneIndex}].cards[${cardIndex}]`),
      })),
    })),
    {
      id: "value-cards",
      label: homePageContentEn.values.title,
      targetId: "home-value-cards",
      sourceKey: source(contentSource.homeEn, "values"),
      children: homePageContentEn.values.cards.map((card, index) => ({
        id: card.id,
        label: card.title,
        targetId: `home-value-card-${index + 1}`,
        sourceKey: source(contentSource.homeEn, `values.cards[${index}]`),
      })),
    },
    {
      id: "final-cta",
      label: homePageContentEn.finalCta.title,
      targetId: "home-final-cta",
      sourceKey: source(contentSource.homeEn, "finalCta"),
      children: [
        { id: "primary-cta", label: homePageContentEn.finalCta.primaryLabel, targetId: "home-final-cta-primary", sourceKey: source(contentSource.homeEn, "finalCta.primaryLabel") },
        { id: "secondary-cta", label: homePageContentEn.finalCta.secondaryLabel, targetId: "home-final-cta-secondary", sourceKey: source(contentSource.homeEn, "finalCta.secondaryLabel") },
        ...homePageContentEn.finalCta.footerLinks.map((link, index) => ({
          id: link.id,
          label: link.label,
          targetId: `home-final-link-${index + 1}`,
          sourceKey: source(contentSource.homeEn, `finalCta.footerLinks[${index}]`),
        })),
      ],
    },
    {
      id: "install-now",
      label: homePageContentEn.downloadSection.title,
      targetId: "home-install-now",
      sourceKey: source(contentSource.homeEn, "downloadSection"),
      children: makeHubChildren("home-download"),
    },
  ],
};

const downloadEditablePage: EditablePageSpec = {
  id: "download-ko",
  label: "Download",
  path: "/download",
  sourceKey: contentSource.downloadKo,
  sections: [
    {
      id: "download-intro",
      label: downloadPageContent.intro.title,
      targetId: "download-intro",
      sourceKey: source(contentSource.downloadKo, "intro"),
      children: [
        { id: "release-card", label: "Release card", targetId: "download-release-card", sourceKey: source(contentSource.downloadKo, "intro.releaseCard") },
        { id: "package-card", label: "Current package card", targetId: "download-package-card", sourceKey: source(contentSource.downloadKo, "intro.currentPackageCard") },
      ],
    },
    {
      id: "download-hub",
      label: "Device download hub",
      targetId: "download-hub",
      sourceKey: source(contentSource.deviceHub, "shared"),
      children: makeHubChildren("download"),
    },
    {
      id: "before-install",
      label: downloadPageContent.beforeInstall.title,
      targetId: "download-before-install",
      sourceKey: source(contentSource.downloadKo, "beforeInstall"),
      children: downloadPageContent.beforeInstall.items.map((item, index) => ({
        id: item.id,
        label: item.title,
        targetId: `download-before-install-item-${index + 1}`,
        sourceKey: source(contentSource.downloadKo, `beforeInstall.items[${index}]`),
      })),
    },
    {
      id: "install-steps",
      label: downloadPageContent.installSteps.title,
      targetId: "download-install-steps",
      sourceKey: source(contentSource.downloadKo, "installSteps"),
      children: downloadPageContent.installSteps.items.map((item, index) => ({
        id: item.id,
        label: item.title,
        targetId: `download-install-step-${index + 1}`,
        sourceKey: source(contentSource.downloadKo, `installSteps.items[${index}]`),
      })),
    },
    {
      id: "troubleshooting",
      label: downloadPageContent.troubleshooting.title,
      targetId: "download-troubleshooting",
      sourceKey: source(contentSource.downloadKo, "troubleshooting"),
      children: downloadPageContent.troubleshooting.items.map((item, index) => ({
        id: item.id,
        label: item.title,
        targetId: `download-troubleshooting-item-${index + 1}`,
        sourceKey: source(contentSource.downloadKo, `troubleshooting.items[${index}]`),
      })),
    },
    {
      id: "quick-answers",
      label: downloadPageContent.quickAnswers.label,
      targetId: "download-quick-answers",
      sourceKey: source(contentSource.downloadKo, "quickAnswers"),
      children: downloadPageContent.quickAnswers.items.map((item, index) => ({
        id: item.id,
        label: item.question,
        targetId: `download-quick-answer-${index + 1}`,
        sourceKey: source(contentSource.downloadKo, `quickAnswers.items[${index}]`),
      })),
    },
    {
      id: "download-cta",
      label: downloadPageContent.cta.title,
      targetId: "download-cta",
      sourceKey: source(contentSource.downloadKo, "cta"),
      children: [
        { id: "primary-cta", label: downloadPageContent.cta.primaryLabel, targetId: "download-cta-primary", sourceKey: source(contentSource.downloadKo, "cta.primaryLabel") },
        { id: "secondary-cta", label: downloadPageContent.cta.secondaryLabel, targetId: "download-cta-secondary", sourceKey: source(contentSource.downloadKo, "cta.secondaryLabel") },
      ],
    },
  ],
};

const downloadEditablePageEn: EditablePageSpec = {
  id: "download-en",
  label: "Download",
  path: "/en/download",
  sourceKey: contentSource.downloadEn,
  sections: [
    {
      id: "download-intro",
      label: downloadPageContentEn.intro.title,
      targetId: "download-intro",
      sourceKey: source(contentSource.downloadEn, "intro"),
      children: [
        { id: "release-card", label: "Release card", targetId: "download-release-card", sourceKey: source(contentSource.downloadEn, "intro.releaseCard") },
        { id: "package-card", label: "Current package card", targetId: "download-package-card", sourceKey: source(contentSource.downloadEn, "intro.currentPackageCard") },
      ],
    },
    {
      id: "download-hub",
      label: "Device download hub",
      targetId: "download-hub",
      sourceKey: source(contentSource.deviceHub, "shared"),
      children: makeHubChildren("download"),
    },
    {
      id: "before-install",
      label: downloadPageContentEn.beforeInstall.title,
      targetId: "download-before-install",
      sourceKey: source(contentSource.downloadEn, "beforeInstall"),
      children: downloadPageContentEn.beforeInstall.items.map((item, index) => ({
        id: item.id,
        label: item.title,
        targetId: `download-before-install-item-${index + 1}`,
        sourceKey: source(contentSource.downloadEn, `beforeInstall.items[${index}]`),
      })),
    },
    {
      id: "install-steps",
      label: downloadPageContentEn.installSteps.title,
      targetId: "download-install-steps",
      sourceKey: source(contentSource.downloadEn, "installSteps"),
      children: downloadPageContentEn.installSteps.items.map((item, index) => ({
        id: item.id,
        label: item.title,
        targetId: `download-install-step-${index + 1}`,
        sourceKey: source(contentSource.downloadEn, `installSteps.items[${index}]`),
      })),
    },
    {
      id: "troubleshooting",
      label: downloadPageContentEn.troubleshooting.title,
      targetId: "download-troubleshooting",
      sourceKey: source(contentSource.downloadEn, "troubleshooting"),
      children: downloadPageContentEn.troubleshooting.items.map((item, index) => ({
        id: item.id,
        label: item.title,
        targetId: `download-troubleshooting-item-${index + 1}`,
        sourceKey: source(contentSource.downloadEn, `troubleshooting.items[${index}]`),
      })),
    },
    {
      id: "quick-answers",
      label: downloadPageContentEn.quickAnswers.label,
      targetId: "download-quick-answers",
      sourceKey: source(contentSource.downloadEn, "quickAnswers"),
      children: downloadPageContentEn.quickAnswers.items.map((item, index) => ({
        id: item.id,
        label: item.question,
        targetId: `download-quick-answer-${index + 1}`,
        sourceKey: source(contentSource.downloadEn, `quickAnswers.items[${index}]`),
      })),
    },
    {
      id: "download-cta",
      label: downloadPageContentEn.cta.title,
      targetId: "download-cta",
      sourceKey: source(contentSource.downloadEn, "cta"),
      children: [
        { id: "primary-cta", label: downloadPageContentEn.cta.primaryLabel, targetId: "download-cta-primary", sourceKey: source(contentSource.downloadEn, "cta.primaryLabel") },
        { id: "secondary-cta", label: downloadPageContentEn.cta.secondaryLabel, targetId: "download-cta-secondary", sourceKey: source(contentSource.downloadEn, "cta.secondaryLabel") },
      ],
    },
  ],
};

const supportEditablePage: EditablePageSpec = {
  id: "support-ko",
  label: "Support",
  path: "/support",
  sourceKey: contentSource.supportKo,
  sections: [
    {
      id: "support-intro",
      label: supportPageContent.intro.title,
      targetId: "support-intro",
      sourceKey: source(contentSource.supportKo, "intro"),
      children: supportPageContent.intro.cards.map((card, index) => ({
        id: card.id,
        label: card.title,
        targetId: `support-intro-card-${index + 1}`,
        sourceKey: source(contentSource.supportKo, `intro.cards[${index}]`),
      })),
    },
    {
      id: "support-tracks",
      label: supportPageContent.tracks.title,
      targetId: "support-tracks",
      sourceKey: source(contentSource.supportKo, "tracks"),
      children: supportPageContent.tracks.items.map((item, index) => ({
        id: item.id,
        label: item.title,
        targetId: `support-track-${index + 1}`,
        sourceKey: source(contentSource.supportKo, `tracks.items[${index}]`),
      })),
    },
    {
      id: "best-context",
      label: supportPageContent.bestContext.label,
      targetId: "support-best-context",
      sourceKey: source(contentSource.supportKo, "bestContext"),
      children: supportPageContent.bestContext.items.map((item, index) => ({
        id: item.id,
        label: item.text,
        targetId: `support-best-context-item-${index + 1}`,
        sourceKey: source(contentSource.supportKo, `bestContext.items[${index}]`),
      })),
    },
    {
      id: "support-faq",
      label: supportPageContent.faq.label,
      targetId: "support-faq",
      sourceKey: source(contentSource.supportKo, "faq"),
      children: supportPageContent.faq.items.map((item, index) => ({
        id: item.id,
        label: item.question,
        targetId: `support-faq-item-${index + 1}`,
        sourceKey: source(contentSource.supportKo, `faq.items[${index}]`),
      })),
    },
    {
      id: "support-cta",
      label: supportPageContent.cta.title,
      targetId: "support-cta",
      sourceKey: source(contentSource.supportKo, "cta"),
      children: [
        { id: "primary-cta", label: supportPageContent.cta.primaryLabel, targetId: "support-cta-primary", sourceKey: source(contentSource.supportKo, "cta.primaryLabel") },
        { id: "secondary-cta", label: supportPageContent.cta.secondaryLabel, targetId: "support-cta-secondary", sourceKey: source(contentSource.supportKo, "cta.secondaryLabel") },
      ],
    },
  ],
};

const supportEditablePageEn: EditablePageSpec = {
  id: "support-en",
  label: "Support",
  path: "/en/support",
  sourceKey: contentSource.supportEn,
  sections: [
    {
      id: "support-intro",
      label: supportPageContentEn.intro.title,
      targetId: "support-intro",
      sourceKey: source(contentSource.supportEn, "intro"),
      children: supportPageContentEn.intro.cards.map((card, index) => ({
        id: card.id,
        label: card.title,
        targetId: `support-intro-card-${index + 1}`,
        sourceKey: source(contentSource.supportEn, `intro.cards[${index}]`),
      })),
    },
    {
      id: "support-tracks",
      label: supportPageContentEn.tracks.title,
      targetId: "support-tracks",
      sourceKey: source(contentSource.supportEn, "tracks"),
      children: supportPageContentEn.tracks.items.map((item, index) => ({
        id: item.id,
        label: item.title,
        targetId: `support-track-${index + 1}`,
        sourceKey: source(contentSource.supportEn, `tracks.items[${index}]`),
      })),
    },
    {
      id: "best-context",
      label: supportPageContentEn.bestContext.label,
      targetId: "support-best-context",
      sourceKey: source(contentSource.supportEn, "bestContext"),
      children: supportPageContentEn.bestContext.items.map((item, index) => ({
        id: item.id,
        label: item.text,
        targetId: `support-best-context-item-${index + 1}`,
        sourceKey: source(contentSource.supportEn, `bestContext.items[${index}]`),
      })),
    },
    {
      id: "support-faq",
      label: supportPageContentEn.faq.label,
      targetId: "support-faq",
      sourceKey: source(contentSource.supportEn, "faq"),
      children: supportPageContentEn.faq.items.map((item, index) => ({
        id: item.id,
        label: item.question,
        targetId: `support-faq-item-${index + 1}`,
        sourceKey: source(contentSource.supportEn, `faq.items[${index}]`),
      })),
    },
    {
      id: "support-cta",
      label: supportPageContentEn.cta.title,
      targetId: "support-cta",
      sourceKey: source(contentSource.supportEn, "cta"),
      children: [
        { id: "primary-cta", label: supportPageContentEn.cta.primaryLabel, targetId: "support-cta-primary", sourceKey: source(contentSource.supportEn, "cta.primaryLabel") },
        { id: "secondary-cta", label: supportPageContentEn.cta.secondaryLabel, targetId: "support-cta-secondary", sourceKey: source(contentSource.supportEn, "cta.secondaryLabel") },
      ],
    },
  ],
};

const roadmapEditablePage: EditablePageSpec = {
  id: "roadmap-ko",
  label: "Roadmap",
  path: "/roadmap",
  sourceKey: contentSource.roadmapKo,
  sections: [
    {
      id: "roadmap-intro",
      label: roadmapPageContent.intro.title,
      targetId: "roadmap-intro",
      sourceKey: source(contentSource.roadmapKo, "intro"),
      children: roadmapPageContent.intro.cards.map((card, index) => ({
        id: card.id,
        label: card.title,
        targetId: `roadmap-intro-card-${index + 1}`,
        sourceKey: source(contentSource.roadmapKo, `intro.cards[${index}]`),
      })),
    },
    {
      id: "current-diagnosis",
      label: roadmapPageContent.currentDiagnosis.title,
      targetId: "roadmap-current-diagnosis",
      sourceKey: source(contentSource.roadmapKo, "currentDiagnosis"),
      children: [
        { id: "focus-card", label: roadmapPageContent.currentDiagnosis.focusCard.title, targetId: "roadmap-focus-card", sourceKey: source(contentSource.roadmapKo, "currentDiagnosis.focusCard") },
        ...roadmapPageContent.currentDiagnosis.previewItems.map((item, index) => ({
          id: item.id,
          label: item.title,
          targetId: `roadmap-preview-item-${index + 1}`,
          sourceKey: source(contentSource.roadmapKo, `currentDiagnosis.previewItems[${index}]`),
        })),
      ],
    },
    {
      id: "priorities",
      label: roadmapPageContent.priorities.title,
      targetId: "roadmap-priorities",
      sourceKey: source(contentSource.roadmapKo, "priorities"),
      children: roadmapPageContent.priorities.items.map((item, index) => ({
        id: item.id,
        label: item.title,
        targetId: `roadmap-priority-${index + 1}`,
        sourceKey: source(contentSource.roadmapKo, `priorities.items[${index}]`),
      })),
    },
    {
      id: "validation",
      label: roadmapPageContent.validation.title,
      targetId: "roadmap-validation",
      sourceKey: source(contentSource.roadmapKo, "validation"),
      children: roadmapPageContent.validation.items.map((item, index) => ({
        id: item.id,
        label: item.title,
        targetId: `roadmap-validation-item-${index + 1}`,
        sourceKey: source(contentSource.roadmapKo, `validation.items[${index}]`),
      })),
    },
    {
      id: "trust-and-paid",
      label: "Trust and paid direction",
      targetId: "roadmap-trust-and-paid",
      sourceKey: source(contentSource.roadmapKo, "trustAndPaid"),
      children: [
        { id: "trust-card", label: roadmapPageContent.trustAndPaid.trustCard.title, targetId: "roadmap-trust-card", sourceKey: source(contentSource.roadmapKo, "trustAndPaid.trustCard") },
        { id: "paid-card", label: roadmapPageContent.trustAndPaid.paidCard.title, targetId: "roadmap-paid-card", sourceKey: source(contentSource.roadmapKo, "trustAndPaid.paidCard") },
      ],
    },
    {
      id: "roadmap-cta",
      label: roadmapPageContent.cta.title,
      targetId: "roadmap-cta",
      sourceKey: source(contentSource.roadmapKo, "cta"),
      children: [
        { id: "primary-cta", label: roadmapPageContent.cta.primaryLabel, targetId: "roadmap-cta-primary", sourceKey: source(contentSource.roadmapKo, "cta.primaryLabel") },
        { id: "secondary-cta", label: roadmapPageContent.cta.secondaryLabel, targetId: "roadmap-cta-secondary", sourceKey: source(contentSource.roadmapKo, "cta.secondaryLabel") },
      ],
    },
  ],
};

const roadmapEditablePageEn: EditablePageSpec = {
  id: "roadmap-en",
  label: "Roadmap",
  path: "/en/roadmap",
  sourceKey: contentSource.roadmapEn,
  sections: [
    {
      id: "roadmap-intro",
      label: roadmapPageContentEn.intro.title,
      targetId: "roadmap-intro",
      sourceKey: source(contentSource.roadmapEn, "intro"),
      children: roadmapPageContentEn.intro.cards.map((card, index) => ({
        id: card.id,
        label: card.title,
        targetId: `roadmap-intro-card-${index + 1}`,
        sourceKey: source(contentSource.roadmapEn, `intro.cards[${index}]`),
      })),
    },
    {
      id: "current-diagnosis",
      label: roadmapPageContentEn.currentDiagnosis.title,
      targetId: "roadmap-current-diagnosis",
      sourceKey: source(contentSource.roadmapEn, "currentDiagnosis"),
      children: [
        { id: "focus-card", label: roadmapPageContentEn.currentDiagnosis.focusCard.title, targetId: "roadmap-focus-card", sourceKey: source(contentSource.roadmapEn, "currentDiagnosis.focusCard") },
        ...roadmapPageContentEn.currentDiagnosis.previewItems.map((item, index) => ({
          id: item.id,
          label: item.title,
          targetId: `roadmap-preview-item-${index + 1}`,
          sourceKey: source(contentSource.roadmapEn, `currentDiagnosis.previewItems[${index}]`),
        })),
      ],
    },
    {
      id: "priorities",
      label: roadmapPageContentEn.priorities.title,
      targetId: "roadmap-priorities",
      sourceKey: source(contentSource.roadmapEn, "priorities"),
      children: roadmapPageContentEn.priorities.items.map((item, index) => ({
        id: item.id,
        label: item.title,
        targetId: `roadmap-priority-${index + 1}`,
        sourceKey: source(contentSource.roadmapEn, `priorities.items[${index}]`),
      })),
    },
    {
      id: "validation",
      label: roadmapPageContentEn.validation.title,
      targetId: "roadmap-validation",
      sourceKey: source(contentSource.roadmapEn, "validation"),
      children: roadmapPageContentEn.validation.items.map((item, index) => ({
        id: item.id,
        label: item.title,
        targetId: `roadmap-validation-item-${index + 1}`,
        sourceKey: source(contentSource.roadmapEn, `validation.items[${index}]`),
      })),
    },
    {
      id: "trust-and-paid",
      label: "Trust and paid direction",
      targetId: "roadmap-trust-and-paid",
      sourceKey: source(contentSource.roadmapEn, "trustAndPaid"),
      children: [
        { id: "trust-card", label: roadmapPageContentEn.trustAndPaid.trustCard.title, targetId: "roadmap-trust-card", sourceKey: source(contentSource.roadmapEn, "trustAndPaid.trustCard") },
        { id: "paid-card", label: roadmapPageContentEn.trustAndPaid.paidCard.title, targetId: "roadmap-paid-card", sourceKey: source(contentSource.roadmapEn, "trustAndPaid.paidCard") },
      ],
    },
    {
      id: "roadmap-cta",
      label: roadmapPageContentEn.cta.title,
      targetId: "roadmap-cta",
      sourceKey: source(contentSource.roadmapEn, "cta"),
      children: [
        { id: "primary-cta", label: roadmapPageContentEn.cta.primaryLabel, targetId: "roadmap-cta-primary", sourceKey: source(contentSource.roadmapEn, "cta.primaryLabel") },
        { id: "secondary-cta", label: roadmapPageContentEn.cta.secondaryLabel, targetId: "roadmap-cta-secondary", sourceKey: source(contentSource.roadmapEn, "cta.secondaryLabel") },
      ],
    },
  ],
};

const privacyEditablePage: EditablePageSpec = {
  id: "privacy-ko",
  label: "Privacy",
  path: "/privacy",
  sourceKey: contentSource.legalKo,
  sections: [
    {
      id: "privacy-intro",
      label: legalPageContent.privacy.intro.title,
      targetId: "privacy-intro",
      sourceKey: source(contentSource.legalKo, "privacy.intro"),
      children: legalPageContent.privacy.intro.cards.map((card, index) => ({
        id: card.id,
        label: card.title,
        targetId: `privacy-intro-card-${index + 1}`,
        sourceKey: source(contentSource.legalKo, `privacy.intro.cards[${index}]`),
      })),
    },
    {
      id: "privacy-draft-notice",
      label: "Draft notice",
      targetId: "privacy-draft-notice",
      sourceKey: source(contentSource.legalKo, "privacy.draftNotice"),
    },
    {
      id: "privacy-sections",
      label: "Policy sections",
      targetId: "privacy-sections",
      sourceKey: source(contentSource.legalKo, "privacy.sections"),
      children: legalPageContent.privacy.sections.map((section, index) => ({
        id: section.id,
        label: section.title,
        targetId: `privacy-section-${index + 1}`,
        sourceKey: source(contentSource.legalKo, `privacy.sections[${index}]`),
      })),
    },
    {
      id: "privacy-cta",
      label: legalPageContent.privacy.cta.title,
      targetId: "privacy-cta",
      sourceKey: source(contentSource.legalKo, "privacy.cta"),
      children: [
        { id: "primary-cta", label: legalPageContent.privacy.cta.primaryLabel, targetId: "privacy-cta-primary", sourceKey: source(contentSource.legalKo, "privacy.cta.primaryLabel") },
        { id: "secondary-cta", label: legalPageContent.privacy.cta.secondaryLabel, targetId: "privacy-cta-secondary", sourceKey: source(contentSource.legalKo, "privacy.cta.secondaryLabel") },
      ],
    },
  ],
};

const privacyEditablePageEn: EditablePageSpec = {
  id: "privacy-en",
  label: "Privacy",
  path: "/en/privacy",
  sourceKey: contentSource.legalEn,
  sections: [
    {
      id: "privacy-intro",
      label: legalPageContentEn.privacy.intro.title,
      targetId: "privacy-intro",
      sourceKey: source(contentSource.legalEn, "privacy.intro"),
      children: legalPageContentEn.privacy.intro.cards.map((card, index) => ({
        id: card.id,
        label: card.title,
        targetId: `privacy-intro-card-${index + 1}`,
        sourceKey: source(contentSource.legalEn, `privacy.intro.cards[${index}]`),
      })),
    },
    {
      id: "privacy-draft-notice",
      label: "Draft notice",
      targetId: "privacy-draft-notice",
      sourceKey: source(contentSource.legalEn, "privacy.draftNotice"),
    },
    {
      id: "privacy-sections",
      label: "Policy sections",
      targetId: "privacy-sections",
      sourceKey: source(contentSource.legalEn, "privacy.sections"),
      children: legalPageContentEn.privacy.sections.map((section, index) => ({
        id: section.id,
        label: section.title,
        targetId: `privacy-section-${index + 1}`,
        sourceKey: source(contentSource.legalEn, `privacy.sections[${index}]`),
      })),
    },
    {
      id: "privacy-cta",
      label: legalPageContentEn.privacy.cta.title,
      targetId: "privacy-cta",
      sourceKey: source(contentSource.legalEn, "privacy.cta"),
      children: [
        { id: "primary-cta", label: legalPageContentEn.privacy.cta.primaryLabel, targetId: "privacy-cta-primary", sourceKey: source(contentSource.legalEn, "privacy.cta.primaryLabel") },
        { id: "secondary-cta", label: legalPageContentEn.privacy.cta.secondaryLabel, targetId: "privacy-cta-secondary", sourceKey: source(contentSource.legalEn, "privacy.cta.secondaryLabel") },
      ],
    },
  ],
};

const termsEditablePage: EditablePageSpec = {
  id: "terms-ko",
  label: "Terms",
  path: "/terms",
  sourceKey: contentSource.legalKo,
  sections: [
    {
      id: "terms-intro",
      label: legalPageContent.terms.intro.title,
      targetId: "terms-intro",
      sourceKey: source(contentSource.legalKo, "terms.intro"),
      children: legalPageContent.terms.intro.cards.map((card, index) => ({
        id: card.id,
        label: card.title,
        targetId: `terms-intro-card-${index + 1}`,
        sourceKey: source(contentSource.legalKo, `terms.intro.cards[${index}]`),
      })),
    },
    {
      id: "terms-draft-notice",
      label: "Draft notice",
      targetId: "terms-draft-notice",
      sourceKey: source(contentSource.legalKo, "terms.draftNotice"),
    },
    {
      id: "terms-sections",
      label: "Terms sections",
      targetId: "terms-sections",
      sourceKey: source(contentSource.legalKo, "terms.sections"),
      children: legalPageContent.terms.sections.map((section, index) => ({
        id: section.id,
        label: section.title,
        targetId: `terms-section-${index + 1}`,
        sourceKey: source(contentSource.legalKo, `terms.sections[${index}]`),
      })),
    },
    {
      id: "terms-footer-note",
      label: "Footer note",
      targetId: "terms-footer-note",
      sourceKey: source(contentSource.legalKo, "terms.footerNote"),
    },
    {
      id: "terms-cta",
      label: legalPageContent.terms.cta.title,
      targetId: "terms-cta",
      sourceKey: source(contentSource.legalKo, "terms.cta"),
      children: [
        { id: "primary-cta", label: legalPageContent.terms.cta.primaryLabel, targetId: "terms-cta-primary", sourceKey: source(contentSource.legalKo, "terms.cta.primaryLabel") },
        { id: "secondary-cta", label: legalPageContent.terms.cta.secondaryLabel, targetId: "terms-cta-secondary", sourceKey: source(contentSource.legalKo, "terms.cta.secondaryLabel") },
      ],
    },
  ],
};

const termsEditablePageEn: EditablePageSpec = {
  id: "terms-en",
  label: "Terms",
  path: "/en/terms",
  sourceKey: contentSource.legalEn,
  sections: [
    {
      id: "terms-intro",
      label: legalPageContentEn.terms.intro.title,
      targetId: "terms-intro",
      sourceKey: source(contentSource.legalEn, "terms.intro"),
      children: legalPageContentEn.terms.intro.cards.map((card, index) => ({
        id: card.id,
        label: card.title,
        targetId: `terms-intro-card-${index + 1}`,
        sourceKey: source(contentSource.legalEn, `terms.intro.cards[${index}]`),
      })),
    },
    {
      id: "terms-draft-notice",
      label: "Draft notice",
      targetId: "terms-draft-notice",
      sourceKey: source(contentSource.legalEn, "terms.draftNotice"),
    },
    {
      id: "terms-sections",
      label: "Terms sections",
      targetId: "terms-sections",
      sourceKey: source(contentSource.legalEn, "terms.sections"),
      children: legalPageContentEn.terms.sections.map((section, index) => ({
        id: section.id,
        label: section.title,
        targetId: `terms-section-${index + 1}`,
        sourceKey: source(contentSource.legalEn, `terms.sections[${index}]`),
      })),
    },
    {
      id: "terms-footer-note",
      label: "Footer note",
      targetId: "terms-footer-note",
      sourceKey: source(contentSource.legalEn, "terms.footerNote"),
    },
    {
      id: "terms-cta",
      label: legalPageContentEn.terms.cta.title,
      targetId: "terms-cta",
      sourceKey: source(contentSource.legalEn, "terms.cta"),
      children: [
        { id: "primary-cta", label: legalPageContentEn.terms.cta.primaryLabel, targetId: "terms-cta-primary", sourceKey: source(contentSource.legalEn, "terms.cta.primaryLabel") },
        { id: "secondary-cta", label: legalPageContentEn.terms.cta.secondaryLabel, targetId: "terms-cta-secondary", sourceKey: source(contentSource.legalEn, "terms.cta.secondaryLabel") },
      ],
    },
  ],
};

export const editablePages: EditablePageSpec[] = [
  homeEditablePage,
  homeEditablePageEn,
  downloadEditablePage,
  downloadEditablePageEn,
  roadmapEditablePage,
  roadmapEditablePageEn,
  supportEditablePage,
  supportEditablePageEn,
  privacyEditablePage,
  privacyEditablePageEn,
  termsEditablePage,
  termsEditablePageEn,
];

export function normalizeEditablePath(pathname: string) {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function getEditablePage(pathname: string) {
  const normalizedPath = normalizeEditablePath(pathname);
  return editablePages.find((page) => page.path === normalizedPath);
}

export function getEditableSection(page: EditablePageSpec, sectionId: string) {
  return page.sections.find((section) => section.id === sectionId);
}

export function getEditableChild(section: EditableSectionSpec, childId: string) {
  return section.children?.find((child) => child.id === childId);
}

export function editableAttributes(page: EditablePageSpec, kind: EditableKind, spec: EditableItemSpec): EditableAttributes {
  return {
    id: spec.targetId,
    "data-edit-page": page.id,
    "data-edit-kind": kind,
    "data-edit-id": spec.id,
    "data-edit-label": spec.label,
    "data-edit-source": spec.sourceKey,
  };
}
