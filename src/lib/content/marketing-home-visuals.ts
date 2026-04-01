import type { MarketingHomeVisualContent } from "@/lib/content/page-content-types";

type ShowcaseVisual = Extract<MarketingHomeVisualContent, { kind: "showcase" }>;
type ImageVisual = Extract<MarketingHomeVisualContent, { kind: "image" }>;

const HOME_HERO_VISUAL_CLASS_NAME = "h-[31rem] w-full rounded-[1.8rem] sm:h-[34rem]";
const HOME_SCENE_VISUAL_BASE_CLASS_NAME = "h-[28rem] w-full rounded-[1.5rem] object-contain";
const HOME_CHECKIN_VISUAL_CLASS_NAME = `${HOME_SCENE_VISUAL_BASE_CLASS_NAME} sm:h-[32rem]`;
const HOME_SCENE_VISUAL_CLASS_NAME = `${HOME_SCENE_VISUAL_BASE_CLASS_NAME} sm:h-[33rem]`;

function createShowcaseVisual(
  alt: string,
  config: Omit<ShowcaseVisual, "kind" | "alt">,
): ShowcaseVisual {
  return {
    kind: "showcase",
    alt,
    ...config,
  };
}

function createImageVisual(
  alt: string,
  config: Omit<ImageVisual, "kind" | "alt">,
): ImageVisual {
  return {
    kind: "image",
    alt,
    ...config,
  };
}

export function createHomeHeroVisual(alt: string): ShowcaseVisual {
  return createShowcaseVisual(alt, {
    variant: "login",
    priority: true,
    sizes: "(max-width: 1024px) 100vw, 420px",
    className: HOME_HERO_VISUAL_CLASS_NAME,
  });
}

export function createHomeCheckinVisual(alt: string): ImageVisual {
  return createImageVisual(alt, {
    src: "/images/ai-dialog-first.svg",
    width: 454,
    height: 922,
    sizes: "(max-width: 1024px) 100vw, 40vw",
    className: HOME_CHECKIN_VISUAL_CLASS_NAME,
  });
}

export function createHomeDiaryVisual(alt: string): ImageVisual {
  return createImageVisual(alt, {
    src: "/images/feeling-diary-complete.svg",
    width: 459,
    height: 930,
    sizes: "(max-width: 1024px) 100vw, 42vw",
    className: HOME_SCENE_VISUAL_CLASS_NAME,
  });
}

export function createHomeArchiveVisual(alt: string): ImageVisual {
  return createImageVisual(alt, {
    src: "/images/scene3-visual.svg",
    width: 464,
    height: 942,
    sizes: "(max-width: 1024px) 100vw, 40vw",
    className: HOME_SCENE_VISUAL_CLASS_NAME,
  });
}

export function createHomeNextLoopVisual(alt: string): ImageVisual {
  return createImageVisual(alt, {
    src: "/images/scene4-visual.svg",
    width: 467,
    height: 947,
    sizes: "(max-width: 1024px) 100vw, 40vw",
    className: HOME_SCENE_VISUAL_CLASS_NAME,
  });
}
