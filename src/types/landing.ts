export interface NavItem {
  label: string;
  href: string;
}

export interface ButtonLink {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface FloatingCard {
  label: string;
  detail: string;
  tone: 'accent' | 'warm' | 'neutral';
}

export interface HeroBadge {
  label: string;
}

export interface HeroContent {
  id: string;
  badge: HeroBadge;
  title: string;
  highlight: string;
  description: string;
  actions: ButtonLink[];
  proofPoints: string[];
  floatingCards: FloatingCard[];
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface SolutionsContent {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  pillars: FeatureItem[];
}

export interface BentoCard {
  title: string;
  description: string;
  tag: string;
  tone: 'neutral' | 'accent' | 'warm';
}

export interface BentoContent {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  cards: BentoCard[];
}

export interface WorkflowStep {
  title: string;
  description: string;
}

export interface WorkflowContent {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: WorkflowStep[];
}

export interface ScreenPreviewItem {
  title: string;
  description: string;
  tone: 'neutral' | 'accent' | 'warm';
  aspect: 'landscape' | 'portrait';
  depth: number;
  featured?: boolean;
  image: {
    alt: string;
    width: number;
    height: number;
    dark: {
      webp: string;
      png: string;
    };
    light?: {
      webp: string;
      png: string;
    };
  };
}

export interface ScreensPreviewContent {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: ScreenPreviewItem[];
}

export interface DownloadContent {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
  helper: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContent {
  title: string;
  description: string;
  links: FooterLink[];
  signature: FooterLink;
  copyright: string;
}

export interface LandingContent {
  meta: {
    title: string;
    description: string;
  };
  header: {
    brand: string;
    navItems: NavItem[];
    cta: ButtonLink;
  };
  hero: HeroContent;
  solutions: SolutionsContent;
  bento: BentoContent;
  workflow: WorkflowContent;
  screens: ScreensPreviewContent;
  download: DownloadContent;
  faq: FAQItem[];
  footer: FooterContent;
}
