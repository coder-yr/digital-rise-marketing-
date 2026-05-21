import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import StructuredData from '@/components/ui/StructuredData'
import { constructBlogMetadata } from '@/lib/seo'
import { blogPostingSchema, breadcrumbSchema } from '@/lib/schema'
import BlogTemplate from '@/components/blog/BlogTemplate'
import { fetchJsonWithFallback, getApiBaseUrls } from '@/lib/api'

interface BlogPost {
  id: number
  slug: string
  title: string
  content: string
  excerpt: string
  date: string
  readTime: string
  category: string
  authorName?: string
  image?: string
  metaTitle?: string
  metaDescription?: string
  focusKeyword?: string
  createdAt?: string
  updatedAt?: string
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return fetchJsonWithFallback<BlogPost>([`/api/blog/${slug}`])
}

async function getRelatedPosts(currentSlug: string): Promise<BlogPost[]> {
  try {
    const blogs = await fetchJsonWithFallback<BlogPost[]>(['/api/blog'])
    if (!blogs) {
      return []
    }

    return blogs.filter((blog) => blog.slug !== currentSlug).slice(0, 3)
  } catch {
    return []
  }
}

// ✅ SEO FIX: Pre-generate static paths for all existing blogs at build time
// New blogs added via admin will be ISR-rendered on first visit then cached
export async function generateStaticParams() {
  try {
    if (process.env.NODE_ENV !== 'production') {
      const blogs = await fetchJsonWithFallback<BlogPost[]>(['/api/blog'])
      if (!blogs) return []
      return blogs.map((blog) => ({ slug: blog.slug }))
    }

    const apiBaseUrl = getApiBaseUrls()[0]
    const cleanApiUrl = apiBaseUrl.endsWith('/') ? apiBaseUrl.slice(0, -1) : apiBaseUrl
    const res = await fetch(`${cleanApiUrl}/api/blog`, { cache: 'no-store' })
    if (!res.ok) return []
    const blogs: BlogPost[] = await res.json()
    return blogs.map((blog) => ({ slug: blog.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return constructBlogMetadata({
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    slug: post.slug,
    image: post.image,
    publishedTime: post.createdAt || post.date,
    modifiedTime: post.updatedAt || post.createdAt || post.date,
    authorName: post.authorName,
    focusKeyword: post.focusKeyword,
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const [post, relatedPosts] = await Promise.all([
    getBlogPost(slug),
    getRelatedPosts(slug),
  ])

  if (!post) {
    notFound()
  }

  const wordCount = post.content.split(/\s+/).length

  const articleSchema = blogPostingSchema({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    image: post.image,
    datePublished: post.createdAt || post.date,
    dateModified: post.updatedAt || post.createdAt || post.date,
    authorName: post.authorName,
    wordCount,
  })

  const breadcrumbs = breadcrumbSchema([
    { name: 'Blogs', url: '/blogs' },
    { name: post.title, url: `/blogs/${post.slug}` },
  ])

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbs} />
      <BlogTemplate post={post} relatedPosts={relatedPosts} />
    </>
  )
}
