import type { Metadata } from "next";
import { constructMetadata } from "./seo";

export type LocalSeoService = {
  title: string;
  href: string;
  description: string;
};

export type LocalSeoTopic = {
  title: string;
  description: string;
};

export type LocalSeoCity = {
  slug: string;
  cityName: string;
  canonicalPath: string;
  metaDescription: string;
  overview: string;
  localIntent: string;
  servicePitch: string;
  painPoints: Array<{
    title: string;
    description: string;
  }>;
  services: LocalSeoService[];
  blogTopics: LocalSeoTopic[];
  relatedCities: Array<{
    label: string;
    href: string;
  }>;
};

export const localSeoCities: Record<string, LocalSeoCity> = {
  badlapur: {
    slug: "badlapur",
    cityName: "Badlapur",
    canonicalPath: "/digital-marketing-badlapur",
    metaDescription:
      "Digital marketing agency in Badlapur for SEO, Google Business Profile growth, paid ads, and conversion-focused landing pages that turn local searches into enquiries.",
    overview:
      "Badlapur businesses compete across East and West, so the winning strategy is to capture high-intent searches, map visibility, and fast follow-up before competitors do.",
    localIntent:
      "Use a Badlapur-specific SEO strategy for clinics, real estate teams, coaching classes, retailers, restaurants, and service businesses that need calls, walk-ins, and WhatsApp leads from nearby searchers.",
    servicePitch:
      "We connect search demand, local trust signals, and conversion-first landing pages so your brand can rank for digital marketing agency in Badlapur, SEO services in Badlapur, and marketing agency Badlapur searches.",
    painPoints: [
      {
        title: "Map Pack Visibility",
        description:
          "Rank higher in Google Maps with strong reviews, keyword-aligned service pages, and consistent local business signals.",
      },
      {
        title: "Lead Quality",
        description:
          "Attract buyers who are ready to enquire, not just casual traffic that bounces after one visit.",
      },
      {
        title: "East and West Coverage",
        description:
          "Create content that speaks to both sides of Badlapur so your listings feel relevant across the full service area.",
      },
    ],
    services: [
      {
        title: "SEO Services in Badlapur",
        href: "/organic-growth",
        description:
          "Build keyword clusters, service pages, and review signals that help your business surface for local search intent.",
      },
      {
        title: "Paid Advertising for Badlapur Leads",
        href: "/paid-advertising",
        description:
          "Run geo-targeted campaigns that push traffic straight to calls, WhatsApp enquiries, and quote requests.",
      },
      {
        title: "Web Architecture That Converts",
        href: "/web-architecture",
        description:
          "Turn visitors into enquiries with fast, clear landing pages built around local proof and strong CTAs.",
      },
      {
        title: "AI Lead Automation",
        href: "/ai-agents",
        description:
          "Respond faster to Badlapur leads with automated qualification, reminders, and CRM follow-up.",
      },
      {
        title: "Content for Local Authority",
        href: "/content-creation",
        description:
          "Publish locally relevant content that builds trust, answers common questions, and supports SEO growth.",
      },
    ],
    blogTopics: [
      {
        title: "Digital Marketing Cost for Small Businesses in Badlapur",
        description:
          "A practical guide for local owners comparing SEO, ads, and content spend against expected lead volume.",
      },
      {
        title: "SEO Checklist for Badlapur Businesses to Rank on Google Maps",
        description:
          "A local checklist covering profile setup, citations, reviews, and service-page optimisation.",
      },
      {
        title: "Best Lead Generation Ideas for Clinics and Coaches in Badlapur",
        description:
          "Tactics for high-intent enquiry capture without wasting budget on broad awareness traffic.",
      },
      {
        title: "Badlapur East vs West: Which Keywords Convert Better?",
        description:
          "Compare search intent by micro-area so campaigns and landing pages match how people actually search.",
      },
      {
        title: "How Badlapur Retailers Can Turn Walk-Ins Into Repeat Customers",
        description:
          "A content and automation playbook for local retailers that want more repeat business and referrals.",
      },
    ],
    relatedCities: [
      { label: "Digital Marketing in Kalyan", href: "/digital-marketing-kalyan" },
      { label: "Digital Marketing in Ambernath", href: "/digital-marketing-ambernath" },
    ],
  },
  kalyan: {
    slug: "kalyan",
    cityName: "Kalyan",
    canonicalPath: "/digital-marketing-kalyan",
    metaDescription:
      "Digital marketing agency in Kalyan for SEO services, paid ads, website optimisation, and local lead generation built for residential and commercial demand.",
    overview:
      "Kalyan searchers often want fast answers, trusted local providers, and service pages that make it easy to call, book, or request a quote.",
    localIntent:
      "This page is built for Kalyan businesses that need local SEO around clinics, education, home services, retail, and professional services with strong buying intent.",
    servicePitch:
      "If your goal is to rank for SEO Services in Kalyan, Digital Marketing Agency in Kalyan, and Marketing Agency Kalyan queries, the page needs relevant copy, fast load times, and strong internal links.",
    painPoints: [
      {
        title: "Local Trust Building",
        description:
          "Use reviews, service proof, and clear offer pages to reduce hesitation from first-time visitors.",
      },
      {
        title: "Search Intent Matching",
        description:
          "Match landing page language to the exact problem users are trying to solve in Kalyan.",
      },
      {
        title: "Lead Capture Speed",
        description:
          "Make every page easy to contact with a visible form, WhatsApp CTA, and direct booking path.",
      },
    ],
    services: [
      {
        title: "SEO Services in Kalyan",
        href: "/organic-growth",
        description:
          "Own non-branded and location-based terms with content depth, GBP optimisation, and local authority signals.",
      },
      {
        title: "High-Intent Google Ads",
        href: "/paid-advertising",
        description:
          "Capture immediate demand for Kalyan queries using tightly targeted campaigns and dedicated landing pages.",
      },
      {
        title: "Landing Pages for Local Conversions",
        href: "/web-architecture",
        description:
          "Create pages that answer objections fast and guide visitors to one next step.",
      },
      {
        title: "AI Follow-Up Workflows",
        href: "/ai-agents",
        description:
          "Keep Kalyan enquiries warm with instant replies, lead scoring, and follow-up sequences.",
      },
      {
        title: "Authority Content Systems",
        href: "/content-creation",
        description:
          "Build local authority with helpful articles, service explainers, and conversion-focused supporting content.",
      },
    ],
    blogTopics: [
      {
        title: "SEO Services in Kalyan: What Small Businesses Should Expect",
        description:
          "Break down deliverables, timelines, and realistic outcomes for local search growth.",
      },
      {
        title: "How Kalyan Clinics Can Get More Appointments From Google",
        description:
          "A local lead-generation framework for healthcare and diagnostic brands.",
      },
      {
        title: "Google Business Profile Tips for Kalyan Shops and Service Providers",
        description:
          "Tactics that improve local visibility, trust, and click-through rates from maps.",
      },
      {
        title: "Best Ads Strategy for Home Services in Kalyan",
        description:
          "How to structure ads, geo-targeting, and landing pages for fast quote requests.",
      },
      {
        title: "How to Build a Local Content Funnel for Kalyan Businesses",
        description:
          "A blog-to-lead structure that supports rankings and compounding traffic.",
      },
    ],
    relatedCities: [
      { label: "Digital Marketing in Badlapur", href: "/digital-marketing-badlapur" },
      { label: "Digital Marketing in Ambernath", href: "/digital-marketing-ambernath" },
    ],
  },
  ambernath: {
    slug: "ambernath",
    cityName: "Ambernath",
    canonicalPath: "/digital-marketing-ambernath",
    metaDescription:
      "Digital marketing agency in Ambernath for SEO services, marketing campaigns, website conversions, and local lead generation for industrial and service businesses.",
    overview:
      "Ambernath businesses need a mix of industrial credibility, local trust, and fast response systems to win search traffic and enquiries.",
    localIntent:
      "This landing page is designed for Ambernath manufacturers, contractors, clinics, coaching classes, retailers, and service businesses that want local visibility and measurable leads.",
    servicePitch:
      "To rank for Marketing Agency Ambernath and SEO Services in Ambernath queries, you need an exact-match page, city-specific content, and links into the core service pages.",
    painPoints: [
      {
        title: "Industrial and Service Demand",
        description:
          "Speak to both B2B and B2C buyers by pairing authority content with clear service pages.",
      },
      {
        title: "Quote Quality",
        description:
          "Pre-qualify enquiries with forms and copy that attract the right project sizes.",
      },
      {
        title: "Local Discovery",
        description:
          "Make your brand visible for nearby searches before buyers start comparing competitors.",
      },
    ],
    services: [
      {
        title: "SEO Services in Ambernath",
        href: "/organic-growth",
        description:
          "Improve rankings for city-specific and industry-specific searches with a strong content and authority plan.",
      },
      {
        title: "Campaigns for Quote Generation",
        href: "/paid-advertising",
        description:
          "Use paid media to drive industrial leads, appointments, and urgent service requests.",
      },
      {
        title: "Conversion-Focused Website Pages",
        href: "/web-architecture",
        description:
          "Present your offer clearly so Ambernath visitors know exactly why to contact you.",
      },
      {
        title: "AI Intake and Follow-Up",
        href: "/ai-agents",
        description:
          "Automate response speed so inbound leads are followed up while intent is highest.",
      },
      {
        title: "Content That Builds Authority",
        href: "/content-creation",
        description:
          "Publish problem-solving content that supports trust in a competitive market.",
      },
    ],
    blogTopics: [
      {
        title: "Digital Marketing for Ambernath Manufacturers and Contractors",
        description:
          "A B2B-focused playbook for brands that need qualified quote requests.",
      },
      {
        title: "SEO Checklist for Ambernath Businesses That Want Local Leads",
        description:
          "What to fix first on your website, maps listing, and content system.",
      },
      {
        title: "How Ambernath Clinics Can Fill Their Appointment Calendar",
        description:
          "A local search and conversion strategy for healthcare providers.",
      },
      {
        title: "Best WhatsApp Lead Funnel for Ambernath Service Businesses",
        description:
          "Turn local interest into faster conversations and more closed deals.",
      },
      {
        title: "What to Post Each Month If You Run a Business in Ambernath",
        description:
          "A content calendar that keeps your brand visible and useful.",
      },
    ],
    relatedCities: [
      { label: "Digital Marketing in Badlapur", href: "/digital-marketing-badlapur" },
      { label: "Digital Marketing in Kalyan", href: "/digital-marketing-kalyan" },
    ],
  },
};

export function getLocalSeoCity(slug: string) {
  return localSeoCities[slug];
}

/**
 * 🔧 SEO FIX: Enhanced Local Metadata
 * Uses constructMetadata for consistent OG and Twitter tags.
 */
export function buildLocalSeoMetadata(city: LocalSeoCity): Metadata {
  const title = `Digital Marketing Agency in ${city.cityName} | SEO & Paid Ads`;
  
  return constructMetadata({
    title,
    description: city.metaDescription,
    canonical: city.canonicalPath,
    keywords: [
      title,
      `SEO Services in ${city.cityName}`,
      `Marketing Agency ${city.cityName}`,
      `Local SEO ${city.cityName}`,
      `Digital Marketing ${city.cityName}`,
    ],
  });
}
