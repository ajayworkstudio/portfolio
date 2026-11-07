// Bentuk data ini harus sama dengan array yang dikirim PortfolioController.php.

export type Social = {
    label: string;
    url: string;
};

export type Profile = {
    name: string;
    nickname: string;
    role: string;
    location: string;
    available: boolean;
    availability: string;
    headline: string;
    intro: string;
    bio: string[];
    email: string;
    whatsapp: string;
    socials: Social[];
};

export type Project = {
    title: string;
    category: string;
    year: string;
    description: string;
    stack: string[];
    url: string | null;
};

export type Service = {
    title: string;
    description: string;
};

export type Experience = {
    place: string;
    role: string;
    period: string;
};

export type Step = {
    title: string;
    description: string;
};

export type Faq = {
    question: string;
    answer: string;
};

export type PortfolioProps = {
    profile: Profile;
    projects: Project[];
    services: Service[];
    stack: string[];
    experience: Experience[];
    process: Step[];
    faqs: Faq[];
};
