/**
 * Centralized schema markup generators.
 */

import { SITE_DESCRIPTION, SITE_NAME, SITE_PHONE, SITE_URL, SOCIAL_LINKS } from './site'

const LOGO_URL = `${SITE_URL}/icon.png`

// ── Organization (appears sitewide) ──────────────────────────────
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
      width: 512,
      height: 512,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_PHONE,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
    sameAs: [
      SOCIAL_LINKS.instagram,
      // Add more social profiles as they go live
    ],
  }
}

// ── WebSite (enables sitelinks search box in Google) ─────────────
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blogs?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

// ── LocalBusiness (homepage + local SEO pages) ───────────────────
export function localBusinessSchema(overrides?: {
  name?: string
  url?: string
  description?: string
  areaServed?: Array<{ type: string; name: string }>
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${overrides?.url || SITE_URL}/#localbusiness`,
    name: overrides?.name || SITE_NAME,
    image: LOGO_URL,
    description:
      overrides?.description || SITE_DESCRIPTION,
    url: overrides?.url || SITE_URL,
    telephone: SITE_PHONE,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hendrepada, Badlapur West',
      addressLocality: 'Badlapur',
      addressRegion: 'Maharashtra',
      postalCode: '421503',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.1678,
      longitude: 73.2322,
    },
    areaServed: overrides?.areaServed?.map((a) => ({
      '@type': a.type,
      name: a.name,
    })) || [
      { '@type': 'City', name: 'Badlapur' },
      { '@type': 'City', name: 'Kalyan' },
      { '@type': 'City', name: 'Ambernath' },
      { '@type': 'City', name: 'Thane' },
      { '@type': 'City', name: 'Ghatkopar' },
      { '@type': 'City', name: 'Mumbai' },
      { '@type': 'State', name: 'Maharashtra' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
    sameAs: ['https://www.instagram.com/digitalrisemarketing'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Digital Marketing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'SEO & Organic Growth' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'AI Automation & CRM' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Paid Advertising (Meta/Google Ads)' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Web Architecture & Development' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Content Creation & Strategy' },
        },
      ],
    },
  }
}

// ── BreadcrumbList ───────────────────────────────────────────────
export function breadcrumbSchema(
  items: Array<{ name: string; url?: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        ...(item.url && { item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}` }),
      })),
    ],
  }
}

// ── BlogPosting ─────────────────────────────────────────────────
export function blogPostingSchema({
  title,
  description,
  slug,
  image,
  datePublished,
  dateModified,
  authorName,
  wordCount,
}: {
  title: string
  description: string
  slug: string
  image?: string
  datePublished?: string
  dateModified?: string
  authorName?: string
  wordCount?: number
}) {
  const articleUrl = `${SITE_URL}/blogs/${slug}`
  const imageUrl = image?.startsWith('http') ? image : `${SITE_URL}${image || '/icon.png'}`

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}/#article`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    headline: title,
    description,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
    },
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || datePublished || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: authorName || 'DigitalRise Team',
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
    ...(wordCount && { wordCount }),
    isPartOf: { '@id': `${SITE_URL}/#website` },
  }
}

// ── FAQPage ─────────────────────────────────────────────────────
export function faqSchema(
  questions: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }
}

// ── Service (for individual service pages) ──────────────────────
export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const serviceUrl = url.startsWith('http') ? url : `${SITE_URL}${url}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${serviceUrl}/#service`,
    name,
    description,
    url: serviceUrl,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'State',
      name: 'Maharashtra',
    },
  }
}
