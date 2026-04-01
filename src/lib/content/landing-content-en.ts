import {
  createHomeArchiveVisual,
  createHomeCheckinVisual,
  createHomeDiaryVisual,
  createHomeHeroVisual,
  createHomeNextLoopVisual,
} from "@/lib/content/marketing-home-visuals";
import type { MarketingHomeContent } from "@/lib/content/page-content-types";

export const homePageContentEn: MarketingHomeContent = {
  metadata: {
    title: "A clearer way to reflect",
    description:
      "Daily Log is the main landing page for the demo, product flow, install guide, support paths, and policy links in one place.",
    path: "/en",
    locale: "en",
  },
  hero: {
    eyebrow: "Daily Log",
    title: "Sort through the day easily, and leave it as something worth reopening.",
    description:
      "Daily Log is a mobile-first AI journaling service that uses AI voice conversation to help people sort through the day and understand their emotional flow at a glance.",
    primaryLabel: "Open Download",
    secondaryLabel: "See Product Flow",
    pills: ["3-5 minute check-in", "Conversational journaling", "AI summaries", "Android APK available"],
    cards: [
      { id: "fast-start", label: "Fast Start", title: "The first screen is structured so people can read both the install route and the product flow right away." },
      { id: "clear-state", label: "Clear State", title: "Release status and support paths stay visible inside the same page flow." },
      { id: "return-loop", label: "Return Loop", title: "The landing prioritizes giving people a reason to come back, not just a polished first impression." },
    ],
    visual: createHomeHeroVisual("Daily Log sign-in and first check-in screen"),
  },
  scenesSection: {
    eyebrow: "Product Story",
    title: "A lifelog service that records the day through AI conversation,\nand offers feedback grounded in personal data.",
    description: "Core service features",
  },
  scenes: [
    {
      id: "scene-checkin",
      eyebrow: "Scene 01",
      title: "Voice-led AI conversation",
      description: "An AI prompt for the moments when getting started feels hardest.",
      cards: [
        { id: "short-entry", title: "One clear question", description: "A single prompt sits at the center of the screen so the starting point never feels confusing." },
        { id: "lower-pressure", title: "Quick response buttons", description: "Skip, start answering, and complete actions stay visible below so people can react without extra steps." },
        { id: "mobile-first", title: "Friendly character", description: "The cat character softens the first impression and lowers the emotional pressure of starting a journal entry." },
        { id: "instant-clarity", title: "Gentle first tone", description: "Warm colors and open spacing make the first check-in feel closer to a conversation than a task." },
      ],
      visual: createHomeCheckinVisual("Daily Log AI conversation start screen"),
    },
    {
      id: "scene-dashboard",
      eyebrow: "Scene 02",
      title: "Mood analysis and auto-written journal",
      description: "An automatically written journal, followed by mood analysis grounded in the same entry.",
      cards: [
        { id: "calendar-glance", title: "Date context", description: "The record stays anchored to a specific day, so it reads more like a daily log than a temporary note." },
        { id: "recap-bubble", title: "Readable body copy", description: "A slightly longer text block gives the reflection enough room to feel like a real journal page." },
        { id: "restrained-glow", title: "Bottom navigation", description: "Home, add, and archive actions remain visible so the next step after writing still feels obvious." },
        { id: "return-value", title: "A screen worth revisiting", description: "Instead of closing out a finished entry, the layout frames it like a main view people can return to later." },
      ],
      visual: createHomeDiaryVisual("Daily Log completed mood journal and summary screen"),
    },
    {
      id: "scene-ai",
      eyebrow: "Scene 03",
      title: "Conversation-based schedule auto-save",
      description: "Schedules generated through conversation also sync into the calendar automatically.",
      cards: [
        { id: "photo-reflection", title: "Month-based header", description: "The date context at the top frames the record as part of a longer flow, not a one-off input." },
        { id: "ai-interpretation", title: "Saved moments", description: "Photos and text stay together so the atmosphere of the day comes back more vividly when reopened." },
        { id: "next-step", title: "AI interpretation", description: "The summary does not erase the original note. It adds a clearer sentence for reading emotion and meaning back later." },
        { id: "calm-storage", title: "Calm archive", description: "The screen values order over decoration, which keeps older records comfortable to scan over time." },
      ],
      visual: createHomeArchiveVisual("Daily Log photo record and AI interpretation screen"),
    },
    {
      id: "scene-next-loop",
      eyebrow: "Scene 04",
      title: "Tomorrow recommendations shaped by personal taste",
      description: "Even after the entry ends, the experience should keep leading into the next day.",
      cards: [
        { id: "small-suggestion", title: "Mood summary", description: "The leading emotion of the day appears first so the conclusion of the reflection settles quickly." },
        { id: "resume-cue", title: "Pattern chart", description: "A small visual element makes the day’s state easier to read without pushing the screen into something overly complex." },
        { id: "gentle-feedback", title: "Tomorrow’s suggestion", description: "While the feeling is still present, the page adds a next action people can realistically carry forward." },
        { id: "habit-loop", title: "Single-screen wrap-up", description: "The core outcome stays grouped inside one surface so the end of the flow feels clean and complete." },
      ],
      visual: createHomeNextLoopVisual("Daily Log next action suggestion and reflection continuation screen"),
    },
  ],
  values: {
    eyebrow: "Why It Works",
    title: "Even without explaining everything at once, the core value still reads quickly.",
    description:
      "The homepage does not try to list every feature. Instead, it compresses only the pieces that affect install confidence, repeat use, trust, and support flow.",
    cards: [
      {
        id: "same-viewport",
        title: "Install and understanding stay inside the same field of view.",
        description:
          "Rather than pushing download immediately, the page gives people enough context to understand both why the app matters and how its flow works.",
        tone: "accent",
      },
      {
        id: "short-copy-large-device",
        title: "Shorter messages, larger device moments.",
        description: "Each scene is reduced to one core message and one representative screen so the information does not scatter.",
      },
      {
        id: "selective-emphasis",
        title: "A bright base with selective emphasis.",
        description: "All four scenes stay on the same bright surface, while contrast comes from the device screens and the rhythm of the spacing.",
      },
      {
        id: "support-and-policy",
        title: "Support and policy stay part of the product flow.",
        description: "Support touchpoints, policy checks, and roadmap views all live inside the same navigation system to strengthen trust.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Ready To Start",
    title: "The landing reads quickly, and the actual install or support path moves even faster.",
    description:
      "Right now the shortest route centers on the Android APK. More detailed guidance, support, and policy pages continue in the same design system on their own pages.",
    primaryLabel: "Download Page",
    secondaryLabel: "View Support",
    footerLinks: [
      { id: "roadmap", href: "/roadmap", label: "Roadmap" },
      { id: "privacy", href: "/privacy", label: "Privacy Policy" },
      { id: "terms", href: "/terms", label: "Terms of Service" },
    ],
  },
  downloadSection: {
    eyebrow: "Install Now",
    title: "The homepage now lets people verify the install route and download the build right away.",
    description:
      "The current public build is Android APK v1.0.14. The landing hands off directly into the download path, and the Vercel deployment flow is prepared to continue that same GitHub Release route.",
    releaseLabel: "Latest Release",
    updatedLabel: "Updated",
    packageLabel: "Package",
  },
};
