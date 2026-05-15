import { Metadata } from 'next'

const BASE_URL = 'https://www.digitalrisemarketing.in'
const SITE_NAME = 'DigitalRise Marketing'
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`

interface ConstructMetadataProps {
  title?: string
  description?: string
  image?: string
  canonical?: string
  noIndex?: boolean
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  keywords?: string[]
}

export function constructMetadata({
  title = `${SITE_NAME} | #1 Digital Marketing Agency in Badlapur City`,
  description = 'DigitalRise Marketing is the leading digital marketing agency in Badlapur City. We specialize in AI automation, SEO, paid ads, and high-conversion web architecture.',
  image = DEFAULT_OG_IMAGE,
  canonical,
  noIndex = false,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  keywords,
}: ConstructMetadataProps = {}): Metadata {
  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${BASE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : undefined

  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),

    ...(keywords && { keywords }),

    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),

    openGraph: {
      title,
      description,
      url: canonicalUrl || BASE_URL,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: typeof title === 'string' ? title : SITE_NAME,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@digitalrise',
      site: '@digitalrise',
    },

    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },

    icons: {
      icon: '/icon.png',
      shortcut: '/icon.png',
      apple: '/icon.png',
    },
  }
}

/**
 * ✅ SEO FIX: Updated to accept focusKeyword from the blog admin
 */
export function constructBlogMetadata({
  title,
  description,
  slug,
  image,
  publishedTime,
  modifiedTime,
  authorName,
  focusKeyword,
}: {
  title: string
  description: string
  slug: string
  image?: string
  publishedTime?: string
  modifiedTime?: string
  authorName?: string
  focusKeyword?: string
}): Metadata {
  // Build rich keyword set including the focus keyword from admin
  const keywords = [
    'digital marketing',
    'SEO',
    'Badlapur',
    title.toLowerCase(),
    ...(focusKeyword ? [focusKeyword] : []),
  ].filter(Boolean)

  return constructMetadata({
    title,
    description,
    image: image || DEFAULT_OG_IMAGE,
    canonical: `/blogs/${slug}`,
    type: 'article',
    publishedTime,
    modifiedTime,
    authors: authorName ? [authorName] : ['DigitalRise Team'],
    keywords,
  })
}
