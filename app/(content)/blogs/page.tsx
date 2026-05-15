import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogIndexClient from '@/components/blog/BlogIndexClient';
import { fetchJsonWithFallback } from '@/lib/api';

type BlogSummary = {
    title: string;
    slug: string;
    createdAt?: string;
    date?: string;
};

// Metadata for SEO
export const metadata: Metadata = {
    title: 'Digital Marketing Blogs | DigitalRise',
    description: 'Read the latest digital marketing blogs, SEO guides, and performance marketing strategies from DigitalRise to scale your local business.',
    alternates: {
        canonical: '/blogs',
    },
};

// Fetch posts on the server
async function getBlogs() {
    try {
        const blogs = await fetchJsonWithFallback<BlogSummary[]>(['/api/blog']);
        return blogs || [];
    } catch (error) {
        console.error('Failed to fetch blogs:', error);
    }
    
    return [];
}

export default async function BlogIndexPage() {
    const blogs = await getBlogs();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Digital Marketing Blogs | DigitalRise',
        url: 'https://www.digitalrisemarketing.in/blogs',
        blogPost: blogs.map((blog) => ({
            '@type': 'BlogPosting',
            headline: blog.title,
            url: `https://www.digitalrisemarketing.in/blogs/${blog.slug}`,
            datePublished: blog.createdAt || blog.date,
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <BlogIndexClient blogs={blogs} />
            <Footer />
        </>
    );
}

