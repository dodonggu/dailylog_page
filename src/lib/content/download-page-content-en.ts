import type { DownloadPageContent } from "@/lib/content/download-page-content";

export const downloadPageContentEn: DownloadPageContent = {
  metadata: {
    title: "Download",
    description:
      "This Daily Log download page lets you review the Android APK download, desktop QR handoff, supported devices, and install guidance in one place.",
    path: "/en/download",
    locale: "en",
  },
  intro: {
    eyebrow: "Download",
    title: "The install flow and the current release state are gathered in the same field of view.",
    description:
      "On mobile, this page leads with the install action. On desktop, it keeps the QR handoff and release status together. Channels that are not ready yet are shown clearly as status only.",
    primaryLabel: "Get Android APK",
    secondaryLabel: "View Install Steps",
    releaseCard: {
      label: "Release",
      packageSizeLabel: "Package size",
      updatedLabel: "Updated",
    },
    currentPackageCard: {
      label: "Current package",
      directBadge: "Direct",
      fallbackBadge: "Fallback",
      deliveryPathLabel: "Delivery path",
      currentFileSizeLabel: "Current file size",
      verifiedAtLabel: "Verified at",
      directSourceLabel: "Served directly from the server",
      fallbackSourceLabel: "Using the GitHub Releases fallback route",
    },
  },
  beforeInstall: {
    eyebrow: "Before Install",
    title: "Only the details you really need before installation come first.",
    description:
      "The page starts with the practical points that can block installation or change confidence, and leaves the rest of the explanation for later.",
    items: [
      {
        id: "android-first",
        title: "Android-first release",
        description:
          "The current public hands-on build is centered on the Android APK. That keeps the path into the real product experience as short as possible.",
      },
      {
        id: "desktop-qr",
        title: "Desktop visitors hand off through QR",
        description:
          "Desktop visitors can jump straight into the mobile install flow through the QR code, while the install notes and release state stay visible on the same screen.",
      },
      {
        id: "iphone-status",
        title: "iPhone readiness stays explicit",
        description:
          "Platforms that are not ready yet show a clear status instead of an empty link, so the page reduces confusion without weakening trust.",
      },
    ],
  },
  installSteps: {
    eyebrow: "Install Steps",
    title: "The install path should stay short, and it should feel the same from any device.",
    description:
      "Whether someone starts from desktop or mobile, the steps stay short and keep moving toward the same goal.",
    items: [
      {
        id: "open-download-page",
        title: "1. Open the download page",
        description: "Open it directly on an Android device, or scan the desktop QR code to continue on mobile.",
      },
      {
        id: "download-apk",
        title: "2. Download the APK",
        description: "Tap the Android APK button to download the build that is currently being distributed.",
      },
      {
        id: "allow-install",
        title: "3. Allow installation permissions",
        description:
          "If this is your first install, Android may ask you to allow installs from your browser or file manager.",
      },
      {
        id: "launch-and-checkin",
        title: "4. Launch the app and start the first check-in",
        description: "After the short onboarding flow, you can move directly into the Daily Log check-in experience.",
      },
    ],
  },
  troubleshooting: {
    eyebrow: "Troubleshooting",
    title: "If installation gets blocked, we start with the first things worth checking.",
    description:
      "This section is organized around the issues that appear most often during demo distribution, starting with the checks people can do on their own.",
    items: [
      {
        id: "file-not-downloading",
        title: "The file is not downloading",
        description:
          "Check the network connection and available storage first. It also helps to confirm that your mobile browser still has permission to download files.",
      },
      {
        id: "install-button-inactive",
        title: "The install button looks inactive",
        description:
          "On iPhone or on release channels that are not ready yet, the page shows status guidance instead of a live install action. Reopen the page on Android to see the working install flow.",
      },
      {
        id: "app-not-launching",
        title: "The app does not launch after installation",
        description:
          "Check the supported Android version first. If an older demo build is already installed, remove it and try again. If the issue continues, send the details through the support page.",
      },
    ],
  },
  quickAnswers: {
    label: "Quick Answers",
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
    ],
  },
  cta: {
    eyebrow: "Next Step",
    title: "Even after installation, support and policy continue inside the same flow.",
    description:
      "This page is not only a download gate. It is also designed as a hub that can hand people directly into support or policy pages the moment they get stuck.",
    primaryHref: "/support",
    primaryLabel: "View Support",
    secondaryHref: "/privacy",
    secondaryLabel: "View Policies",
  },
};
