import type { SupportPageContent } from "@/lib/content/support-content";

export const supportPageContentEn: SupportPageContent = {
  metadata: {
    title: "Support",
    description:
      "This is the Daily Log support page for installation issues, account questions, privacy requests, and demo operation guidance.",
    path: "/en/support",
    locale: "en",
  },
  intro: {
    eyebrow: "Support",
    title: "A support hub that keeps installation, account, and policy questions in one flow.",
    description:
      "The support page is designed to read like an extension of the landing flow. It leads with the paths people look for most often and keeps heavier explanation only where it is needed.",
    primaryLabel: "Contact by Email",
    cards: [
      {
        id: "contact-card",
        label: "Contact",
        title: "Support channel",
        description: "The contact email and response expectation are placed first so people can find them immediately.",
      },
      {
        id: "before-you-send",
        label: "Before you send",
        title: "If you send a short summary of the issue, resolution usually gets much faster.",
        description:
          "Device model, Android version, screenshots, and reproduction steps are usually enough to improve the accuracy of the first reply.",
        tone: "dark",
      },
    ],
  },
  tracks: {
    eyebrow: "Support Tracks",
    title: "Support flows are split by type so people can find the right one right away.",
    description:
      "Installation, account, and privacy-related requests are separated into cards instead of being mixed together on one long screen.",
    items: [
      {
        id: "installation",
        title: "Installation issues",
        description: "This track quickly covers the problems that appear most often during download, APK permission, and first launch.",
        bullets: [
          "Confirm that the device is running Android 10 or later",
          "Allow installation permissions for the browser or file manager",
          "Check storage space and the network connection",
        ],
      },
      {
        id: "account",
        title: "Account and sign-in",
        description: "This covers demo account creation, sign-in failure, and account deletion requests in one place.",
        bullets: [
          "Check the registered email address and sign-in information",
          "Look for duplicate sign-up attempts or typing mistakes",
          "Include basic verification details when requesting account deletion",
        ],
      },
      {
        id: "privacy",
        title: "Privacy and permissions",
        description: "Sensitive topics such as notifications, microphone access, and privacy consent stay in a separate flow and connect back to the policy documents.",
        bullets: [
          "Explain why each permission is requested and when it is used",
          "Keep the policy documents visible alongside the demo status",
          "Make deletion requests and contact channels explicit",
        ],
      },
    ],
  },
  bestContext: {
    label: "Best context to include",
    items: [
      { id: "device-and-android", text: "Device model and Android version" },
      { id: "reproduction-steps", text: "When the problem happened and the reproduction steps" },
      { id: "screenshots", text: "A screenshot of the install screen or error message" },
      { id: "ownership-details", text: "Basic verification details for privacy or account-related requests" },
    ],
  },
  faq: {
    label: "FAQ",
    items: [
      {
        id: "web-availability",
        question: "Can I use Daily Log directly on the web?",
        answer:
          "The website currently focuses on product introduction, download guidance, support, and policy pages. The actual check-in, journaling, and analysis experience is provided in the mobile app.",
      },
      {
        id: "available-platform",
        question: "Which platform can I install right now?",
        answer:
          "The public Android APK is available right now. TestFlight or App Store distribution for iPhone will be connected as soon as that release path is ready.",
      },
      {
        id: "core-experience",
        question: "What is the most important experience in Daily Log?",
        answer:
          "The core flow is a short conversational check-in that helps people organize the day, read the emotional pattern, and continue into one realistic next action. The product is focused less on raw recording and more on reflection that turns into change.",
      },
      {
        id: "privacy-and-permissions",
        question: "How do you handle privacy and permissions?",
        answer:
          "Even in the demo phase, privacy and terms live on separate pages. Permission requests are explained in a guidance flow that stays separate from the check-in experience itself.",
      },
      {
        id: "apk-warning",
        question: "What should I do if I see a warning during APK installation?",
        answer:
          "Android may show a security notice during external APK installation. Follow the install guide on the download page and allow installation permissions for your browser or file manager if needed.",
      },
      {
        id: "account-deletion",
        question: "Where should I send support requests or account deletion requests?",
        answer:
          "You can send them to the support email listed on this page. It helps a lot if you include the installation environment, device details, and the steps to reproduce the issue.",
      },
    ],
  },
  cta: {
    eyebrow: "Next Step",
    title: "Whether installation is blocked or an account request comes up, the next support step stays obvious.",
    description:
      "Support is treated as part of the installation and trust experience, not as a detached appendix after the product flow ends.",
    primaryHref: "/download",
    primaryLabel: "Back to Download",
    secondaryHref: "/privacy",
    secondaryLabel: "Open Privacy",
  },
};
