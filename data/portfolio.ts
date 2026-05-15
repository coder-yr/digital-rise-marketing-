export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    url: string;
    image: string;
    features: string[];
    category: string;
    color: string;
}

export const projects: Project[] = [];

