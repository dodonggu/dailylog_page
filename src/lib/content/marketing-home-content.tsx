import Image from "next/image";

import { AppShowcase } from "@/components/app-showcase";
import type { MarketingHomeProps } from "@/components/marketing-home-page";
import type { MarketingHomeContent, MarketingHomeVisualContent } from "@/lib/content/page-content-types";

function renderVisual(visual: MarketingHomeVisualContent) {
  if (visual.kind === "showcase") {
    return (
      <AppShowcase
        variant={visual.variant}
        alt={visual.alt}
        priority={visual.priority}
        sizes={visual.sizes}
        className={visual.className}
      />
    );
  }

  return (
    <Image
      src={visual.src}
      alt={visual.alt}
      width={visual.width}
      height={visual.height}
      sizes={visual.sizes}
      className={visual.className}
    />
  );
}

function mapHeroCard(card: MarketingHomeContent["hero"]["cards"][number]): MarketingHomeProps["hero"]["cards"][number] {
  return {
    label: card.label,
    title: card.title,
  };
}

function mapSceneCard(
  card: MarketingHomeContent["scenes"][number]["cards"][number],
): MarketingHomeProps["scenes"][number]["cards"][number] {
  return {
    title: card.title,
    description: card.description,
  };
}

function mapValueCard(
  card: MarketingHomeContent["values"]["cards"][number],
): MarketingHomeProps["values"]["cards"][number] {
  return {
    title: card.title,
    description: card.description,
    tone: card.tone,
  };
}

function mapFooterLink(
  link: MarketingHomeContent["finalCta"]["footerLinks"][number],
): MarketingHomeProps["finalCta"]["footerLinks"][number] {
  return {
    href: link.href,
    label: link.label,
  };
}

export function getMarketingHomeProps(content: MarketingHomeContent): Omit<MarketingHomeProps, "locale"> {
  return {
    hero: {
      eyebrow: content.hero.eyebrow,
      title: content.hero.title,
      description: content.hero.description,
      primaryLabel: content.hero.primaryLabel,
      secondaryLabel: content.hero.secondaryLabel,
      pills: content.hero.pills,
      cards: content.hero.cards.map(mapHeroCard),
      visual: renderVisual(content.hero.visual),
    },
    scenesSection: content.scenesSection,
    scenes: content.scenes.map((scene) => ({
      id: scene.id,
      eyebrow: scene.eyebrow,
      title: scene.title,
      description: scene.description,
      cards: scene.cards.map(mapSceneCard),
      visual: renderVisual(scene.visual),
      tone: scene.tone,
    })),
    values: {
      eyebrow: content.values.eyebrow,
      title: content.values.title,
      description: content.values.description,
      cards: content.values.cards.map(mapValueCard),
    },
    finalCta: {
      eyebrow: content.finalCta.eyebrow,
      title: content.finalCta.title,
      description: content.finalCta.description,
      primaryLabel: content.finalCta.primaryLabel,
      secondaryLabel: content.finalCta.secondaryLabel,
      footerLinks: content.finalCta.footerLinks.map(mapFooterLink),
    },
  };
}
