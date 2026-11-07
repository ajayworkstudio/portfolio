import { Head } from '@inertiajs/react';
import About from '@/components/portfolio/about';
import Contact from '@/components/portfolio/contact';
import Faq from '@/components/portfolio/faq';
import Hero from '@/components/portfolio/hero';
import Navbar from '@/components/portfolio/navbar';
import Process from '@/components/portfolio/process';
import Projects from '@/components/portfolio/projects';
import Services from '@/components/portfolio/services';
import type { PortfolioProps } from '@/types/portfolio';

/**
 * Halaman ini hanya menyusun section. Isi tiap section ada di
 * resources/js/components/portfolio/, datanya dari PortfolioController.
 */
export default function Portfolio({
    profile,
    projects,
    services,
    stack,
    experience,
    process,
    faqs,
}: PortfolioProps) {
    return (
        <>
            <Head title={`${profile.name} - ${profile.role}`}>
                <meta name="description" content={profile.intro} />
            </Head>

            {/* Warna & font ditetapkan di sini supaya halaman tidak ikut dark mode dashboard. */}
            <div className="min-h-screen bg-paper font-sans text-ink antialiased selection:bg-volt">
                <Navbar profile={profile} />
                <main>
                    <Hero
                        profile={profile}
                        stack={stack}
                        projectCount={projects.length}
                    />
                    <Projects projects={projects} />
                    <Services services={services} stack={stack} />
                    <About profile={profile} experience={experience} />
                    <Process steps={process} />
                    <Faq faqs={faqs} profile={profile} />
                </main>
                <Contact profile={profile} />
            </div>
        </>
    );
}
