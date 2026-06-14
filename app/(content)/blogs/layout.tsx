import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Perspective | DigitalRise Marketing Blog',
    description: 'Expert insights on SEO, AI Automation, and High-Performance Marketing. Read our blueprints on how to dominate local markets like Badlapur.',
    openGraph: {
        title: 'The Perspective | DigitalRise Marketing Blog',
        description: 'Blueprints for high-performance marketing and local dominance.',
        type: 'website',
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

