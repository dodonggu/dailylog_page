import type { RoadmapPageContent } from "@/lib/content/roadmap-content";

export const roadmapPageContentEn: RoadmapPageContent = {
  metadata: {
    title: "Product roadmap",
    description:
      "This page outlines the product priorities and validation criteria Daily Log should focus on next in order to become something people use repeatedly.",
    path: "/en/roadmap",
    locale: "en",
  },
  intro: {
    eyebrow: "Roadmap",
    title: "The next step is not to stop at a polished demo, but to become a product people reopen.",
    description:
      "The roadmap explains repeat use and accumulated value before surface polish. It is organized so the reason behind the sequence reads before the feature list itself.",
    cards: [
      {
        id: "current-view",
        label: "Current View",
        title: "First make it worth trying.\nThen make it worth reopening.",
        description: "At this stage, the priority is strengthening first-session satisfaction and repeat use more than raw download volume.",
      },
      {
        id: "focus",
        label: "Focus",
        title: "Raise the repeat value of the AI reflection experience first.",
        description: "The website works as the install and trust hub, while the real product validation continues inside the mobile app.",
        tone: "dark",
      },
    ],
  },
  currentDiagnosis: {
    eyebrow: "Current Diagnosis",
    title: "The current diagnosis is already fairly clear.",
    description:
      "Conversational journaling and mood interpretation are already appealing. What needs to feel stronger now is not the first impression, but repeat use and the value that accumulates over time.",
    focusCard: {
      label: "What changes next",
      title: "Move beyond a diary demo\nand become a reflection tool people return to.",
      description: "The next success criteria are reopening, recommendation follow-through, and the value of accumulated records.",
    },
    previewItems: [
      {
        id: "first-session-value",
        eyebrow: "Priority 1",
        title: "Improve the first-session wrap-up screen",
        summary:
          "The first thing that needs to feel stronger is the value right after the first use. The result screen cannot only look polished. It has to offer both a summary of today and one realistic next action.",
        deliverables: ["A one-line emotion summary for today", "One action worth trying today", "One reason to reopen tomorrow"],
      },
      {
        id: "return-loop",
        eyebrow: "Priority 2",
        title: "Build the return loop",
        summary:
          "People stay not because of a feature list, but because of habit and accumulated meaning. The reason to come back has to be designed in both the screen flow and the data layer.",
        deliverables: ["Notifications and consecutive record flow", "Better ways to revisit past entries", "Weekly mood changes and today’s reflection cue"],
      },
      {
        id: "contextual-recommendations",
        eyebrow: "Priority 3",
        title: "Make recommendations more contextual",
        summary:
          "If a recommended action feels generic, trust drops quickly. The product needs short, concrete suggestions that reflect the context of today’s entry.",
        deliverables: ["Recommendation copy based on entry context", "Recommendation feedback: helpful / not helpful", "Signals needed to improve recommendation quality"],
      },
    ],
  },
  priorities: {
    eyebrow: "Priorities",
    title: "The next batch is organized in the order the product should actually be strengthened.",
    description: "Instead of expanding everything at once, the roadmap follows the order that makes repeat use and trust feel stronger first.",
    items: [
      {
        id: "first-session-value",
        eyebrow: "Priority 1",
        title: "Improve the first-session wrap-up screen",
        summary:
          "The first thing that needs to feel stronger is the value right after the first use. The result screen cannot only look polished. It has to offer both a summary of today and one realistic next action.",
        deliverables: ["A one-line emotion summary for today", "One action worth trying today", "One reason to reopen tomorrow"],
      },
      {
        id: "return-loop",
        eyebrow: "Priority 2",
        title: "Build the return loop",
        summary:
          "People stay not because of a feature list, but because of habit and accumulated meaning. The reason to come back has to be designed in both the screen flow and the data layer.",
        deliverables: ["Notifications and consecutive record flow", "Better ways to revisit past entries", "Weekly mood changes and today’s reflection cue"],
      },
      {
        id: "contextual-recommendations",
        eyebrow: "Priority 3",
        title: "Make recommendations more contextual",
        summary:
          "If a recommended action feels generic, trust drops quickly. The product needs short, concrete suggestions that reflect the context of today’s entry.",
        deliverables: ["Recommendation copy based on entry context", "Recommendation feedback: helpful / not helpful", "Signals needed to improve recommendation quality"],
      },
      {
        id: "trust-and-ownership",
        eyebrow: "Priority 4",
        title: "Strengthen trust and data ownership",
        summary:
          "A journaling app is a sensitive data product. People need safety and control before long-term use and any future paid relationship can feel realistic.",
        deliverables: ["Final policy pages and clear AI processing scope", "Account deletion and data export", "Permission rationale shown in both app and web"],
      },
      {
        id: "accumulated-value",
        eyebrow: "Priority 5",
        title: "Design the accumulated value view",
        summary:
          "Long-term value does not come from today’s entry alone. It comes from the promise that the service understands you more clearly as more reflections gather over time.",
        deliverables: ["Mood patterns and repeated-event tracking", "Frequent time-of-day pattern analysis", "A personal progress view tied to recommendation follow-through"],
      },
      {
        id: "paid-after-value",
        eyebrow: "Priority 6",
        title: "Open paid features only after value is proven",
        summary:
          "At the early stage, the usefulness of the free experience needs to be obvious first. Paid features make more sense around accumulated value such as deeper insight, reports, search, sync, and backup.",
        deliverables: ["Weekly and monthly reports", "Advanced search and multi-device sync", "Backup, export, and custom templates"],
      },
    ],
  },
  validation: {
    eyebrow: "Validation",
    title: "These are the signals worth validating before adding more polish.",
    description:
      "The next stage should be judged through metrics and interviews, not instinct alone. What matters is whether people actually feel clearer and whether they gain a reason to come back.",
    items: [
      {
        id: "first-user-validation",
        title: "First-user validation",
        metrics: ["Check-in completion rate", "Recommendation satisfaction", "Intent to reopen the next day"],
      },
      {
        id: "early-retention",
        title: "Early retention validation",
        metrics: ["D1, D3, and D7 return rate", "Average daily journaling time", "Recommendation follow-through rate"],
      },
      {
        id: "qualitative-interviews",
        title: "Qualitative interviews",
        metrics: ["Did the day feel clearer?", "Did the next step feel more concrete?", "Was there a reason to reopen?"],
      },
      {
        id: "trust-validation",
        title: "Trust validation",
        metrics: ["Understanding of privacy guidance", "Expectations around deletion and export", "Points of anxiety around permissions"],
      },
      {
        id: "paid-validation",
        title: "Paid validation",
        metrics: ["Willingness to pay after 5-7 days of use", "How the free vs. paid line is understood", "Which features feel worth paying for"],
      },
    ],
  },
  trustAndPaid: {
    trustCard: {
      label: "Trust & Ownership",
      title: "A sensitive journaling service has to create trust before it adds more features.",
      items: [
        { id: "final-policy", text: "Publish the final policy pages" },
        { id: "account-deletion", text: "Provide an account deletion request flow" },
        { id: "data-export", text: "Prepare data export" },
        { id: "ai-scope", text: "Explain AI processing scope and storage scope" },
        { id: "permission-rationale", text: "Show permission rationale in both the app and the website" },
      ],
    },
    paidCard: {
      label: "Paid Direction",
      title: "Paid features should open only after the accumulated value becomes obvious.",
      description:
        "Once the usefulness of the free experience is clearly proven, it becomes natural to open a paid direction around deeper insight and reflection management.",
      items: [
        { id: "insights", text: "Advanced insights and change reports" },
        { id: "weekly-reports", text: "Weekly and monthly reflection reports" },
        { id: "advanced-search", text: "Advanced search and reflection filters" },
        { id: "multi-device-sync", text: "Multi-device sync" },
        { id: "backup-export", text: "Backup and data export" },
        { id: "templates", text: "Custom templates and personalization settings" },
      ],
    },
  },
  cta: {
    eyebrow: "Next Step",
    title: "The website stays a trust hub, while the product itself gets stronger on mobile.",
    description:
      "The higher-leverage work now is improving first-session value, repeat use, recommendation quality, and user control inside the product rather than making the site more decorative.",
    primaryHref: "/download",
    primaryLabel: "Download APK",
    secondaryHref: "/support",
    secondaryLabel: "View Support",
  },
};
