import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { notFound } from 'next/navigation';
import ProjectTemplate from '@/components/project/ProjectTemplate';
import { constructMetadata } from '@/lib/seo';
import StructuredData from '@/components/ui/StructuredData';
import { ProjectData } from '@/components/project/ProjectTemplate';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://digirise-backend-production.up.railway.app/';

async function getProject(slug: string): Promise<ProjectData | null> {
    try {
        const cleanUrl = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;
        const res = await fetch(`${cleanUrl}/api/projects/${slug}`, {
            // ✅ SEO FIX: revalidate every 60s so project edits appear quickly
            next: { revalidate: 60 }
        });
        if (!res.ok) return null;
        const data = await res.json();
        if (!data || typeof data !== 'object' || data.error) return null;
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}

// ✅ SEO FIX: Pre-generate static paths for all existing projects at build time
export async function generateStaticParams() {
    try {
        const cleanUrl = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL;
        const res = await fetch(`${cleanUrl}/api/projects`, { cache: 'no-store' });
        if (!res.ok) return [];
        const projects: ProjectData[] = await res.json();
        return projects.map((p: any) => ({ slug: p.slug }));
    } catch {
        return [];
    }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProject(slug);

    if (!project) return constructMetadata({ title: 'Not Found' });

    return constructMetadata({
        title: (project as any).metaTitle || `${project.title} | Projects | DigitalRise Marketing`,
        description: (project as any).metaDescription || project.description,
        image: project.images && project.images.length > 0 ? project.images[0] : '/icon.png',
        canonical: `/projects/${(project as any).slug}`,
    });
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProject(slug);

    if (!project) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: project.title,
        description: project.description,
        image: project.images && project.images.length > 0
            ? project.images[0]
            : 'https://www.digitalrisemarketing.in/icon.png',
        url: project.liveUrl,
        dateCreated: (project as any).createdAt,
    };

    return (
        <>
            <Header />
            <StructuredData data={jsonLd} />
            <ProjectTemplate project={project} />
            <Footer />
        </>
    );
}
