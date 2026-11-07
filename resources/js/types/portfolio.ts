// Bentuk data ini sama dengan isi config/portfolio.php yang dikirim PortfolioController.

export type Social = { label: string; url: string };

export type HeadlineLine = { text: string; muted: boolean };

export type Profile = {
    name: string;
    nickname: string;
    role: string;
    location: string;
    timezone: string;
    available: boolean;
    availability: string;
    response_time: string;
    headline: HeadlineLine[];
    intro: string;
    bio: string[];
    photo: string | null;
    email: string;
    whatsapp: string;
    socials: Social[];
};

export type Feature = { title: string; description: string };

export type ProjectGroup = 'web' | 'iot' | 'automation';

export type Project = {
    slug: string;
    title: string;
    category: string;
    tagline: string;
    group: ProjectGroup;
    year: string;
    featured: boolean;
    summary: string;
    stack: string[];
    url: string | null;
    role: string;
    status: string;
    problem: string | null;
    solution: string | null;
    features: Feature[];
    learning: string | null;
};

export type Experience = {
    title: string;
    place: string;
    period: string;
    current: boolean;
};

export type Learning = {
    title: string;
    description: string;
    current: number;
    total: number;
    topic: string;
};

export type Step = { title: string; description: string };

export type Value = { title: string; description: string };

export type Stat = { value: string; label: string };

export type SkillGroup = { group: string; items: string[] };

export type Faq = { question: string; answer: string };
