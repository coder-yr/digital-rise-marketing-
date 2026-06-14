import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Marketing Agency in Badlapur | Dominate Local Search 2026',
    description: 'Looking for the best marketing agency in Badlapur? DigitalRise offers SEO, SMM, and AI-driven growth for local businesses in Badlapur East & West. Outrank competitors today.',
    keywords: 'Badlapur marketing, SMM services Badlapur, marketing agency in Badlapur, local SEO Badlapur, digital marketing Badlapur, social media agency Badlapur',
    openGraph: {
        title: 'Mastering Badlapur Marketing | The 2026 Growth Blueprint',
        description: 'The definitive guide for Badlapur local businesses to outrank competitors and dominate search results.',
        url: 'https://digitalrise.in/blogs/badlapur-marketing',
        siteName: 'DigitalRise Marketing',
        locale: 'en_IN',
        type: 'article',
    },
    alternates: {
        canonical: '/blogs/badlapur-marketing',
    },
};

export default function BadlapurMarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

