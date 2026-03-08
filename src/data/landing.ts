import type { LandingContent } from "../types/landing";

export const DOWNLOAD_RELEASE_LATEST_URL =
  "https://github.com/miguelgarglez/momentum/releases/latest";
export const DOWNLOAD_RELEASES_URL =
  "https://github.com/miguelgarglez/momentum/releases/";

export const landingContent: LandingContent = {
  meta: {
    title: "Momentum - Local-first macOS time tracking",
    description:
      "Momentum is a native macOS time tracker with automatic context capture, manual tracking controls, Raycast integration, and local-first privacy.",
  },
  header: {
    brand: "Momentum",
    navItems: [
      { label: "Product", href: "#solutions" },
      { label: "Screens", href: "#screens" },
      { label: "Download", href: "#download" },
      { label: "Changelog", href: "/changelog" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: {
      label: "Download for macOS",
      href: DOWNLOAD_RELEASE_LATEST_URL,
      variant: "secondary",
    },
  },
  hero: {
    id: "top",
    badge: { label: "Native macOS app • Portfolio release" },
    title: "A local-first time tracker",
    highlight: "for deep work on macOS",
    description:
      "Momentum automatically tracks app and browser context, supports manual sessions, and keeps your data on-device.",
    actions: [
      {
        label: "Download latest build",
        href: DOWNLOAD_RELEASE_LATEST_URL,
        variant: "primary",
      },
      { label: "View product screens", href: "#screens", variant: "secondary" },
    ],
    proofPoints: [
      "Automatic app + domain context tracking",
      "Manual tracking from app and Raycast",
      "Conflict resolution with persistent assignment rules",
      "Local-first data model and privacy controls",
    ],
    floatingCards: [
      {
        label: "Active context",
        detail: "Xcode + docs.momentum.app",
        tone: "accent",
      },
      {
        label: "Pending conflict",
        detail: "Resolve ambiguous assignment in one click",
        tone: "neutral",
      },
      {
        label: "Manual session",
        detail: "Start or stop from menu bar or Raycast",
        tone: "warm",
      },
      {
        label: "Data policy",
        detail: "Stored locally, no cloud dependency",
        tone: "accent",
      },
    ],
  },
  solutions: {
    id: "solutions",
    eyebrow: "Product",
    title: "Simple tracking, built for real workflows",
    subtitle: "Clear daily visibility without cloud lock-in or heavy setup.",
    pillars: [
      {
        icon: "01",
        title: "Automatic context capture",
        description:
          "Foreground app and browser domain tracking create useful session data with minimal input.",
      },
      {
        icon: "02",
        title: "Conflict-safe assignment",
        description:
          "When app/domain context is ambiguous, pending sessions and assignment rules keep data clean.",
      },
      {
        icon: "03",
        title: "Manual control when needed",
        description:
          "Manual tracking and overlap guardrails give full control without breaking historical consistency.",
      },
    ],
  },
  bento: {
    id: "features",
    eyebrow: "Capabilities",
    title: "A complete macOS product surface, not just a timer",
    subtitle:
      "Each area was built to demonstrate production-level product engineering.",
    cards: [
      {
        tag: "Tracking engine",
        title: "Context-aware automatic tracking",
        description:
          "Session tracking combines app and domain context with idle pause/resume behavior.",
        tone: "neutral",
      },
      {
        tag: "Integrations",
        title: "Raycast extension support",
        description:
          "Start/stop manual tracking, list projects, and resolve conflicts from Raycast commands.",
        tone: "accent",
      },
      {
        tag: "Reliability",
        title: "Crash recovery and session integrity",
        description:
          "Recovery snapshots, overlap resolution, and diagnostics keep timelines coherent.",
        tone: "neutral",
      },
      {
        tag: "Privacy",
        title: "Local-first data ownership",
        description:
          "Tracking data stays local with controls for exclusions, cleanup, and privacy settings.",
        tone: "warm",
      },
    ],
  },
  workflow: {
    id: "workflow",
    eyebrow: "Architecture",
    title: "Service-driven architecture behind a native SwiftUI UI",
    subtitle:
      "UI, tracking, persistence, and integrations are separated so behavior stays testable and maintainable.",
    steps: [
      {
        title: "Capture context",
        description:
          "ActivityTracker records active app and domain intervals with configurable polling and idle handling.",
      },
      {
        title: "Resolve edge cases",
        description:
          "ProjectAssignmentResolver and conflict flows prevent incorrect project attribution.",
      },
      {
        title: "Persist and review",
        description:
          "SwiftData-backed sessions feed daily and weekly summaries through a local-first pipeline.",
      },
    ],
  },
  screens: {
    id: "screens",
    eyebrow: "Screens",
    title: "Real captures from the SwiftUI app",
    subtitle: "A quick product tour with real UI from current builds.",
    items: [
      {
        title: "Dashboard and project overview",
        description:
          "Primary workspace with metrics, project list, and monthly trend in one view.",
        tone: "neutral",
        aspect: "landscape",
        depth: 16,
        featured: true,
        image: {
          alt: "Momentum dashboard with project sidebar, summary cards, and monthly chart",
          width: 3164,
          height: 1892,
          dark: {
            webp: "/images/momentum/dashboard-overview.webp",
            png: "/images/momentum/dashboard-overview.png",
          },
          light: {
            webp: "/images/momentum/dashboard-overview-light.webp",
            png: "/images/momentum/dashboard-overview-light.png",
          },
        },
      },
      {
        title: "Project detail and history",
        description:
          "Weekly summaries, streak metrics, and recent activity help audit where time actually went.",
        tone: "accent",
        aspect: "landscape",
        depth: 10,
        image: {
          alt: "Project detail page showing cumulative stats, streak, and monthly bar chart",
          width: 2120,
          height: 1664,
          dark: {
            webp: "/images/momentum/project-detail-month.webp",
            png: "/images/momentum/project-detail-month.png",
          },
          light: {
            webp: "/images/momentum/project-detail-month-light.webp",
            png: "/images/momentum/project-detail-month-light.png",
          },
        },
      },
      {
        title: "Project editor modal",
        description:
          "Edit identity, app assignments, and domains from a native modal workflow.",
        tone: "warm",
        aspect: "landscape",
        depth: 8,
        image: {
          alt: "Project edit modal with identity, installed apps, and domains sections",
          width: 3164,
          height: 1916,
          dark: {
            webp: "/images/momentum/project-edit-modal.webp",
            png: "/images/momentum/project-edit-modal.png",
          },
          light: {
            webp: "/images/momentum/project-edit-modal-light.webp",
            png: "/images/momentum/project-edit-modal-light.png",
          },
        },
      },
      {
        title: "Conflict resolution flow",
        description:
          "Pending sessions can be resolved quickly with explicit project assignment controls.",
        tone: "accent",
        aspect: "landscape",
        depth: 12,
        image: {
          alt: "Conflict resolution modal assigning ambiguous app and domain sessions to projects",
          width: 3164,
          height: 1892,
          dark: {
            webp: "/images/momentum/conflict-resolution.webp",
            png: "/images/momentum/conflict-resolution.png",
          },
          light: {
            webp: "/images/momentum/conflict-resolution-light.webp",
            png: "/images/momentum/conflict-resolution-light.png",
          },
        },
      },
      {
        title: "Project list focus",
        description:
          "Compact visual hierarchy for quick scanning of active projects and tracked hours.",
        tone: "neutral",
        aspect: "portrait",
        depth: 7,
        image: {
          alt: "Project list panel with multiple projects and weekly tracked time",
          width: 626,
          height: 1124,
          dark: {
            webp: "/images/momentum/project-list.webp",
            png: "/images/momentum/project-list.png",
          },
        },
      },
    ],
  },
  download: {
    id: "download",
    eyebrow: "Download",
    title: "Install the latest Momentum build",
    description:
      "Download the newest tagged release directly from GitHub. Each release includes DMG and ZIP artifacts for macOS.",
    primaryLabel: "Download latest release",
    secondaryLabel: "View all releases",
    helper:
      "Official GitHub release files, shared directly by the developer. macOS may show its standard warning for apps downloaded from the internet. Momentum is local-first and keeps your data on your Mac by default.",
  },
  faq: [
    {
      question: "What should I expect when opening Momentum on macOS?",
      answer:
        "Because Momentum is distributed directly through GitHub releases, macOS may show its standard warning for apps downloaded from the internet. That is expected for this type of indie distribution and does not mean the app is unsafe.",
    },
    {
      question: "What data leaves my device?",
      answer:
        "None by default. Momentum is built as a local-first macOS app and stores tracking data on your device, with privacy controls available in settings.",
    },
    {
      question: "Where does the download come from?",
      answer:
        "The download buttons on this page point to the official GitHub releases for Momentum, where each version is published with its release notes and macOS artifacts.",
    },
    {
      question: "Is Momentum a production app or a portfolio project?",
      answer:
        "Both. It is a real macOS app with active releases, and it is also shared publicly to showcase end-to-end product design and engineering work.",
    },
    {
      question: "Does it support manual tracking and Raycast?",
      answer:
        "Yes. You can run manual sessions from the app, and the Raycast extension can list projects, control tracking, and open conflict resolution.",
    },
  ],
  footer: {
    title: "Personal app, shared publicly as portfolio work",
    description:
      "Momentum is built with real production constraints, then documented here to showcase product thinking and execution.",
    links: [
      { label: "Product", href: "#solutions" },
      { label: "Screens", href: "#screens" },
      { label: "Download", href: "#download" },
      { label: "Changelog", href: "/changelog" },
      { label: "GitHub", href: "https://github.com/miguelgarglez/momentum" },
    ],
    signature: "Built by miguelgarglez",
    copyright: "© 2026 Momentum",
  },
};
