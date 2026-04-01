import type { LegalPageContent } from "@/lib/content/legal-content";

export const legalPageContentEn: LegalPageContent = {
  privacy: {
    metadata: {
      title: "Privacy Policy",
      description: "This page contains the current draft Privacy Policy for the Daily Log demo version.",
      path: "/en/privacy",
      locale: "en",
    },
    intro: {
      eyebrow: "Privacy",
      title: "Daily Log Privacy Policy Draft",
      description:
        "The document pages stay inside the same design system as the installation and support flow. This version is still a draft prepared for the demo release, and it should be finalized against the real operating policy before launch.",
      cards: [
        {
          id: "document-status",
          label: "Document Status",
          title: "Demo draft",
          description: "The structure keeps the effective status and contact path visible from the first card.",
        },
        {
          id: "finalization-note",
          label: "Before Launch",
          title: "The final wording should be aligned with the real operating model before launch.",
          description: "Retention period, third-party integrations, deletion procedures, and cross-border transfer details should all be updated against the real policy.",
        },
      ],
    },
    draftNotice:
      "This document is not a final legal review version. Before a real launch, retention period, delegated processing, deletion procedures, and child-related protections should be completed to match the actual service policy.",
    sections: [
      {
        id: "document-overview",
        title: "1. About this document",
        paragraphs: [
          "This document is a draft Privacy Policy for the Daily Log demo landing site and demo app use.",
          "Before the official release, it should be replaced with a final version that reflects the real operating environment, collection scope, retention period, and any outside service integrations.",
        ],
      },
      {
        id: "collectable-information",
        title: "2. Information that may be collected",
        paragraphs: [
          "Daily Log may process basic account information, permission and consent status, and metadata created during account use and journaling flow.",
        ],
        bullets: [
          "Account identifiers such as email address and nickname",
          "Consent status for notifications, microphone access, and privacy-related choices",
          "Check-in input, generated summaries, and mood analysis results",
          "Device information, app version, and technical data needed to respond to errors",
        ],
      },
      {
        id: "usage-purpose",
        title: "3. Purpose of use",
        paragraphs: [
          "Collected information may be used for account management, check-in and journal creation, mood analysis, behavioral recommendations, calendar reflection, customer support, and service quality improvement.",
        ],
      },
      {
        id: "retention-and-protection",
        title: "4. Retention and protection",
        paragraphs: [
          "At the demo stage, the guiding principle is to keep only the minimum operational information needed.",
          "Retention period, access rights, and any outsourcing details should be clearly stated once the production policy is finalized.",
        ],
      },
      {
        id: "user-rights",
        title: "5. User rights",
        paragraphs: [
          "Users may request access, correction, deletion, or restriction of processing for their personal information, and account deletion requests can also be submitted through the support channel.",
        ],
      },
      {
        id: "privacy-contact",
        title: "6. Contact",
        paragraphs: ["Questions about this Privacy Policy or deletion requests can be submitted through the support channel."],
      },
    ],
    cta: {
      eyebrow: "Policy Navigation",
      title: "The legal pages still read as part of the install and trust flow.",
      description: "After reviewing the privacy policy, people can move naturally into the terms page or the support page without leaving the same visual system.",
      primaryHref: "/terms",
      primaryLabel: "Open Terms",
      secondaryHref: "/support",
      secondaryLabel: "Open Support",
    },
  },
  terms: {
    metadata: {
      title: "Terms of Service",
      description: "This page contains the current draft Terms of Service for the Daily Log demo version.",
      path: "/en/terms",
      locale: "en",
    },
    intro: {
      eyebrow: "Terms",
      title: "Daily Log Terms of Service Draft",
      description:
        "This document is a draft prepared for the demo release and public landing page. Once the real service scope, liability limits, and account policy are finalized, it should be replaced with the final terms.",
      cards: [
        {
          id: "document-status",
          label: "Document Status",
          title: "Demo-stage draft",
          description: "This draft still needs to be replaced with a production-ready final version before launch.",
        },
        {
          id: "finalization-note",
          label: "Before Launch",
          title: "The wording should be reviewed again against the real operating model.",
          description: "Service scope, liability limits, notice procedure, and usage restriction conditions should all be rechecked against the real operating policy.",
        },
      ],
    },
    draftNotice:
      "This document is currently a structural draft. The final definition of the service, use restrictions, liability scope, and notice procedure should be reviewed again against the actual operating model.",
    sections: [
      {
        id: "terms-overview",
        title: "1. About this document",
        paragraphs: [
          "This document is a draft Terms of Service for the Daily Log demo landing site and demo app.",
          "Before public release, it should be replaced with a final version that reflects the real service scope, account policy, liability limits, and any paid features.",
        ],
      },
      {
        id: "service-nature",
        title: "2. Nature of the service",
        paragraphs: [
          "Daily Log is a mobile-first service centered on conversational check-ins, mood analysis, action recommendations, and reflection.",
          "The currently published version is a demo release, so part of the feature set, screen flow, or distribution method may change.",
        ],
      },
      {
        id: "accounts-and-security",
        title: "3. Accounts and security",
        paragraphs: ["Users must provide accurate account information, and responsibility for account security belongs to the user."],
        bullets: [
          "Do not register false information",
          "Do not use another person’s account or information without permission",
          "Do not interfere with normal service operation",
        ],
      },
      {
        id: "usage-restrictions",
        title: "4. Restrictions on use",
        paragraphs: [
          "Service access may be restricted if abnormal use, behavior that harms stability, or actions that cause harm to other users are identified.",
        ],
      },
      {
        id: "intellectual-property",
        title: "5. Intellectual property",
        paragraphs: [
          "Rights to the service interface, written copy, design, screenshots, code, and other outputs belong to Daily Log or the appropriate rights holder.",
        ],
      },
      {
        id: "changes-and-termination",
        title: "6. Changes and termination",
        paragraphs: [
          "The demo version may change or be discontinued without prior notice.",
          "Before the official launch, features, support policy, distribution channels, and responsibility scope may all be redefined.",
        ],
      },
      {
        id: "terms-contact",
        title: "7. Contact",
        paragraphs: ["Questions about these Terms of Service can be submitted through the support channel."],
      },
    ],
    cta: {
      eyebrow: "Policy Navigation",
      title: "The terms page also keeps the next support and privacy step easy to follow.",
      description: "The shared CTA structure helps the policy flow continue naturally into support and installation-related guidance.",
      primaryHref: "/privacy",
      primaryLabel: "Open Privacy Policy",
      secondaryHref: "/support",
      secondaryLabel: "Open Support",
    },
    footerNote: {
      id: "contact-email",
      text: "Support email: support@dailylog.app",
    },
  },
};
