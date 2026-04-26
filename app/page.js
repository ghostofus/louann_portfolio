"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, Users, Clock, ChevronRight } from "lucide-react";

// ——— Données ———
const PROJECTS = [
    {
        title: "IRA",
        period: "2025/2026 : 10 mois",
        role: "Producer / Cheffe de Projet",
        summary: "Souls like narratif 3D réaliste - Unreal Engine 5",
        tags: ["Agile", "Notion", "Roadmapping", "Playtesting", "GDD"],
        src: "/ira.png",
        slug: "ira",
        teamSize: "8",
        duration: "10 mois" ,
        responsibilities: [
            "Organiser des entretiens individuels réguliers avec l'ensemble de l'équipe tout au long du projet.",
            "Fournir aux départements Art et Audio des listes de ressources afin de prioriser les tâches et d'éviter les dépendances.",
            "Animer les réunions de planification de sprint et les rétrospectives conformément à notre approche agile.",
            "Organisation et coordination des sessions de playtesting.",
            "Gestion de la documentation de production et du GDD.",
        ],
    },
    {
        title: "Gecko Pulco",
        period: "2025 : 4 mois",
        role: "Producer / Cheffe de Projet",
        summary: "Plateformer 3D cartoon - Unity 6",
        tags: ["Agile", "Notion", "Roadmapping"],
        src: "/gecko.jpg",
        slug: "gecko-pulco",
        teamSize: "4",
        duration: "4 mois",
        responsibilities: [
            "Rédiger le document de cadrage initial du projet (scope, organisation, livrables) via le GDD.",
            "Créer un planning haut niveau et l'utiliser comme base pour structurer les plannings hebdomadaires.",
            "Suivre la vélocité et l'avancement en fournissant des rapports de progression à l'équipe.",
            "Définir les deadlines et les livrables clés et assurer leur suivi tout au long du projet.",
            "Gérer le scope et prendre des décisions de coupure de contenu en fonction des contraintes.",
            "Gérer le backlog et résoudre les conflits au sein de l'équipe.",
        ],
    },
    {
        title: "Figure Out",
        period: "2023/2024",
        role: "Directrice Artistique / Producer",
        summary: "Click & Point 3D - Unreal",
        tags: ["Jira", "Nuclino", "Figma"],
        src: "/figureout.jpg",
        slug: "figure-out",
        teamSize: "13",
        duration: "1 ans",
        responsibilities: [
            {
                category: "DIRECTION ARTISTIQUE",
                items: [
                    "Définir l'ambiance générale et la direction visuelle du jeu, en se concentrant sur la direction des environnements.",
                    "Rédiger et maintenir l'Art Style Guide en s'appuyant sur une veille de jeux et techniques de référence.",
                    "Collaborer avec les artistes en fournissant un feedback créatif itératif pour guider la production visuelle.",
                ],
            },
            {
                category: "PRODUCTION",
                items: [
                    "Gérer le backlog et les tâches de l'ensemble de l'équipe artistique via Jira.",
                    "Assurer l'intégration et la documentation de la production sur Nuclino.",
                    "Former et accompagner l'équipe à l'utilisation de Jira et Nuclino tout au long du projet.",
                    "Produire des comptes rendus hebdomadaires à destination du chef de projet suite aux réunions d'équipe."
                ],
            },
        ],
    },
    {
        title: "10 Nichi!",
        period: "2023 : 4 mois",
        role: "Conceptrice de jeu",
        summary: "Jeu de société coopératif stratégique - Univers Japon féodal/Samouraïs",
        tags: ["Playtesting", "QA"],
        src: "/10nichi.png",
        slug: "10-nichi",
        teamSize: "4",
        duration: "4 mois",
        responsibilities: [
            "Participer à la conception des mécaniques et des règles du jeu, avec itérations successives basées sur les retours des sessions de test.",
            "Créer les illustrations et icônes des éléments de jeu (gourde, feu, etc.) sur Illustrator.",
            "Animer les sessions de playtesting : présentation des règles, observation des joueurs et collecte de feedback structuré.",
            "Présenter le jeu devant un jury et auprès de testeurs externes.",
        ],
    },
];

const SKILLS_TOP = [
    {
        emoji: "👥",
        title: "Leadership & Ambition",
        description: "Je cherche à m'améliorer chaque jour et à appliquer cette progression constante aux équipes dont je fais partie. Je crois fermement en la facilitation et le soutien de l'équipe pour qu'elle grandisse tout au long d'un projet, que ce soit via des entretiens individuels, des rétrospectives ou des post-mortems. Cela favorise une réflexion individuelle qui bénéficie à l'ensemble du groupe.",
    },
    {
        emoji: "✏️",
        title: "Créativité",
        description: "Autant que je suis productrice, je suis aussi game designer et je comprends les aspects créatifs de la conception de jeux. J'essaie d'apporter cette créativité dans mon rôle de productrice — non pas en étant limitée à une boîte à outils ou une méthode éprouvée, mais en proposant des solutions créatives et adaptées aux défis d'un projet. C'est pourquoi je cherche continuellement à apprendre et à trouver le bon équilibre entre méthode et touche personnelle.",
    },
];

const SKILLS_PRODUCTION = [
    "Identification et gestion des risques",
    "JIRA · Confluence · Notion",
    "Scrum et méthodologies Agile",
    "Kanban · Waterfall",
    "Suivi KPIs & vélocité",
    "Sprint Planning & Rétrospectives",
    "Décomposition du scope et du budget",
    "Gestion des ressources",
    "Définition des jalons et deadlines",
    "Suivi de la progression individuelle",
    "Représentation d'un projet ou d'une équipe",
    "Réalisation de présentations",
    "Gestion de la sous-traitance",
    "Planification haut niveau & dépendances",
    "Surveillance du scope projet",
];

const SKILLS_DESIGN = [
    "Level Design (esquisse → final)",
    "Intégration design, programmation et art",
    "Analyse concurrentielle",
    "Écriture narrative & scénario",
    "Game Design & conception de mécaniques",
    "Direction Artistique",
    "Conception de jeux de société",
    "Veille créative & références",
];

const SKILLS_SOFTWARE = [
    "Unreal Engine 5",
    "Unity 6",
    "JIRA · Confluence",
    "Notion · Nuclino",
    "Figma",
    "Adobe Illustrator",
    "Photoshop",
    "Microsoft Office Suite",
    "GitHub",
];

const LANGUAGES = [
    { flag: "🇫🇷", name: "Français", level: "Natif" },
    { flag: "🇬🇧", name: "Anglais", level: "Courant" },
];

const EXPERIENCE = [
    {
        period: "2026 - 90 jours",
        title: "Stage - Gestion de projets Data",
        place: "Orange",
        items: ["À remplir", "À remplir"],
    },
    {
        period: "2025 - 44 jours",
        title: "Stage - Game / Narrative Designer",
        place: "StellarPunk",
        items: [
            "Développement de jeu de société",
            "Animation de sessions de jeu",
            "Game design & Ecriture narrative",
        ],
    },
    {
        period: "2023 — 2025",
        title: "Job étudiant - Assistante Administrative",
        place: "Fradin & Associés : Huissiers de Justice",
        items: [
            "Gestion du courrier entrant et sortant (tri, scan, enregistrement)",
            "Classement et archivage de documents administratifs",
            "Soutien à l'équipe pour diverses tâches de bureau",
        ],
    },
];

const LINKS = {
    resumeUrl: "/CV.pdf",
    email: "louann.barry05@gmail.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
};

// ——— Animations ———
const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { animate: { transition: { staggerChildren: 0.12 } } };

// ——— StarField ———
function StarField() {
    const canvasRef = React.useRef(null);
    React.useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationId;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const stars = Array.from({ length: 180 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.4 + 0.2,
            alpha: Math.random() * 0.6 + 0.2,
            offset: Math.random() * Math.PI * 2,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
        }));
        let t = 0;
        const draw = () => {
            t += 0.02;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((s) => {
                s.x += s.vx;
                s.y += s.vy;
                if (s.x < 0) s.x = canvas.width;
                if (s.x > canvas.width) s.x = 0;
                if (s.y < 0) s.y = canvas.height;
                if (s.y > canvas.height) s.y = 0;
                const pulse = s.alpha + Math.sin(t + s.offset) * 0.3;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(195, 215, 255, ${Math.max(0.05, pulse)})`;
                ctx.fill();
            });
            animationId = requestAnimationFrame(draw);
        };
        draw();
        const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        window.addEventListener("resize", onResize);
        return () => { cancelAnimationFrame(animationId); window.removeEventListener("resize", onResize); };
    }, []);
    return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}

// ——— Page ———
export default function Page() {
    return (
        <div className="min-h-screen bg-[#080f1e] text-[#EDF0FC] selection:bg-[#4782E4]/30" style={{ position: "relative" }}>
            <StarField />
            <div style={{ position: "relative", zIndex: 1 }}>
                <Header />
                <main>
                    <Hero />
                    <Divider />
                    <ProjectShowcase />
                    <Divider />
                    <Skills />
                    <Divider />
                    <Experience />
                    <Divider />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}

// ——— Header ———
function Header() {
    return (
        <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#080f1e]/70 border-b border-[#C3D0F6]/10">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full border border-[#C3D0F6]/20 bg-[#1F3E71]/40 flex items-center justify-center text-[#EDF0FC] font-semibold text-sm tracking-widest select-none">
                            LB
                        </div>
                        <span className="font-semibold tracking-tight text-[#EDF0FC]">Lou-Ann Barry</span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-[#C3D0F6] text-sm">
                        <Link href="/about" className="hover:text-[#EDF0FC] transition">À propos</Link>
                        <a href="#projets" className="hover:text-[#EDF0FC] transition">Projets</a>
                        <a href="#competences" className="hover:text-[#EDF0FC] transition">Compétences</a>
                        <a href="#experience" className="hover:text-[#EDF0FC] transition">Expérience</a>
                        <a href="#contact" className="hover:text-[#EDF0FC] transition">Contact</a>
                        <a href={LINKS.resumeUrl} download className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-3 py-1.5 text-sm hover:bg-[#1F3E71]/35 transition">
                            <Download className="h-4 w-4" /> CV
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}

// ——— Hero ———
function Hero() {
    return (
        <section id="home" className="relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(71,130,228,0.18),transparent_60%)]" />
            <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
                <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.4 }}
                    className="grid gap-10 md:grid-cols-2 md:items-center">
                    <div>
                        <motion.h1 variants={fadeUp} className="text-4xl/tight md:text-5xl/tight font-semibold tracking-tight">
                            Bonjour, je m'appelle<br />BARRY Lou-Ann
                        </motion.h1>
                        <motion.p variants={fadeUp} className="mt-6 text-[#C3D0F6] leading-relaxed">
                            J'ai 20 ans et je suis actuellement étudiante en troisième année à l'ICAN à Lyon, où je suis une formation en Game Design, avec une spécialisation en TechArt. <strong className="text-[#EDF0FC]">Dans l'optique de devenir productrice,</strong> cette formation m'a permis de mener à bien des projets au sein d'équipes importantes et plus réduites.
                        </motion.p>
                        <motion.p variants={fadeUp} className="mt-3 text-[#C3D0F6] leading-relaxed">
                            Parmi mes compétences : gestion de projet Agile, Waterfall, Kanban, Scrum, JIRA, et bien plus. Consultez la section <a href="#competences" className="text-[#8BA8EE] underline underline-offset-4 hover:text-[#EDF0FC]">Compétences</a> pour plus d'informations.
                        </motion.p>
                        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                            <a href="#projets" className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0D1F3E] px-5 py-2.5 font-medium hover:bg-[#EDF0FC] transition text-sm">
                                Voir mes projets <ChevronRight className="h-4 w-4" />
                            </a>
                            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-5 py-2.5 text-sm hover:bg-[#1F3E71]/35 transition">
                                Me contacter
                            </a>
                        </motion.div>
                        <motion.div variants={fadeUp} className="mt-6 flex items-center gap-4 text-[#8BA8EE]">
                            <a href={LINKS.github} className="hover:text-[#EDF0FC] transition" aria-label="GitHub"><Github className="h-5 w-5" /></a>
                            <a href={LINKS.linkedin} className="hover:text-[#EDF0FC] transition" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                            <a href={`mailto:${LINKS.email}`} className="hover:text-[#EDF0FC] transition" aria-label="Email"><Mail className="h-5 w-5" /></a>
                        </motion.div>
                    </div>
                    <motion.div variants={fadeUp} className="flex flex-col items-center md:items-end gap-4">
                        <Image src="/moi.png" alt="Photo de Lou-Ann Barry" width={360} height={480}
                            className="rounded-3xl object-cover shadow-2xl border border-[#C3D0F6]/10" priority />
                        <Link href="/about" className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-5 py-2.5 text-sm text-[#C3D0F6] hover:bg-[#1F3E71]/35 hover:text-[#EDF0FC] transition">
                            À propos de moi <ChevronRight className="h-4 w-4" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// ——— Divider ———
function Divider() {
    return (
        <div className="mx-auto max-w-6xl px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#C3D0F6]/20 to-transparent" />
        </div>
    );
}

// ——— Project Showcase ———
function ProjectShowcase() {
    return (
        <section id="projets" className="mx-auto max-w-6xl px-6 py-20">
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="mb-14">
                <h2 className="text-3xl font-semibold tracking-tight">Projets</h2>
            </motion.div>

            <div className="grid gap-24">
                {PROJECTS.map((p, i) => (
                    <ProjectRow key={i} project={p} reverse={i % 2 !== 0} />
                ))}
            </div>
        </section>
    );
}

function ProjectRow({ project, reverse }) {
    return (
        <motion.div
            variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col gap-8"
        >
            {/* ——— Haut : image + infos (2 colonnes alternées) ——— */}
            <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>

                {/* Image */}
                <motion.div variants={fadeLeft} className="overflow-hidden rounded-2xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20">
                    <Image src={project.src} alt={project.title} width={600} height={340}
                        className="w-full object-cover" />
                </motion.div>

                {/* Infos : titre + tags + stats + bouton */}
                <motion.div variants={fadeUp} className="flex flex-col gap-5">
                    <div>
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                        <p className="mt-1 text-[#8BA8EE] text-sm">{project.period}</p>
                        <p className="mt-2 text-[#C3D0F6]">{project.summary}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {project.tags.map((t, idx) => (
                                <span key={idx} className="rounded-full border border-[#C3D0F6]/15 bg-[#0D1F3E]/40 px-3 py-1 text-xs text-[#EDF0FC]">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-4 text-center">
                            <Users className="h-5 w-5 mx-auto mb-1.5 text-[#8BA8EE]" />
                            <p className="text-xs text-[#8BA8EE] mb-1">Équipe</p>
                            <p className="text-sm font-medium text-[#EDF0FC]">{project.teamSize}</p>
                        </div>
                        <div className="rounded-2xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-4 text-center">
                            <Clock className="h-5 w-5 mx-auto mb-1.5 text-[#8BA8EE]" />
                            <p className="text-xs text-[#8BA8EE] mb-1">Durée</p>
                            <p className="text-sm font-medium text-[#EDF0FC]">{project.duration}</p>
                        </div>
                    </div>

                    <a href={`/projets/${project.slug}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0D1F3E] px-5 py-2.5 font-medium hover:bg-[#EDF0FC] transition text-sm self-start">
                        En savoir plus <ChevronRight className="h-4 w-4" />
                    </a>
                </motion.div>
            </div>

            {/* ——— Bas : responsabilités (pleine largeur) ——— */}
            <motion.div variants={fadeUp} className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7">
                <h4 className="text-sm font-semibold text-[#8BA8EE] uppercase tracking-widest mb-2">Responsabilités</h4>
                <p className="text-[#C3D0F6] text-sm italic mb-4">Rôle : {project.role}</p>

                {typeof project.responsibilities[0] === "string" ? (
                    <ul className="grid md:grid-cols-2 gap-x-10 gap-y-2 text-[#C3D0F6] text-sm list-disc pl-5">
                        {project.responsibilities.map((r, idx) => (
                            <li key={idx}>{r}</li>
                        ))}
                    </ul>
                ) : (
                    <div className="grid md:grid-cols-2 gap-8">
                        {project.responsibilities.map((group, idx) => (
                            <div key={idx}>
                                <p className="text-xs font-semibold text-[#4782E4] uppercase tracking-widest mb-3">{group.category}</p>
                                <ul className="text-[#C3D0F6] text-sm space-y-2 list-disc pl-5">
                                    {group.items.map((r, i) => <li key={i}>{r}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}

// ——— Skills ———
function Skills() {
    return (
        <section id="competences" className="mx-auto max-w-6xl px-6 py-20">
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="mb-14">
                <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-2">Ce que je sais faire</p>
                <h2 className="text-3xl font-semibold tracking-tight">Compétences</h2>
            </motion.div>

            {/* ——— Bloc 1 : Leadership & Créativité (2 colonnes, icône + texte long) ——— */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 mb-16">
                {SKILLS_TOP.map((s, i) => (
                    <motion.div key={i} variants={fadeUp}
                        className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-8 flex flex-col items-center text-center gap-4">
                        <span className="text-4xl">{s.emoji}</span>
                        <h3 className="text-base font-semibold text-[#8BA8EE] uppercase tracking-wider">{s.title}</h3>
                        <p className="text-[#C3D0F6] text-sm leading-relaxed">{s.description}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* ——— Bloc 2 : 3 colonnes de listes (Production / Design / Logiciels) ——— */}
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                    { title: "Compétences de Production", items: SKILLS_PRODUCTION },
                    { title: "Compétences Design", items: SKILLS_DESIGN },
                    { title: "Logiciels & Outils", items: SKILLS_SOFTWARE },
                ].map((col, i) => (
                    <motion.div key={i} variants={fadeUp} className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-[#8BA8EE] uppercase tracking-widest text-center pb-2 border-b border-[#C3D0F6]/10">
                            {col.title}
                        </h3>
                        <ul className="space-y-2">
                            {col.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-[#C3D0F6] text-sm">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4782E4] flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>

            {/* ——— Bloc 3 : Langues (drapeaux centrés) ——— */}
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                className="flex flex-col items-center gap-6">
                <h3 className="text-sm font-semibold text-[#8BA8EE] uppercase tracking-widest">Langues</h3>
                <div className="flex gap-12">
                    {LANGUAGES.map((l, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <span className="text-4xl">{l.flag}</span>
                            <p className="text-[#EDF0FC] text-sm font-medium">{l.name}</p>
                            <p className="text-[#8BA8EE] text-xs">{l.level}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

// ——— Experience ———
function Experience() {
    return (
        <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="mb-14">
                <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-2">Mon parcours</p>
                <h2 className="text-3xl font-semibold tracking-tight">Expérience</h2>
            </motion.div>

            <div className="grid gap-5">
                {EXPERIENCE.map((e, i) => (
                    <motion.div key={i} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                        className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7">
                        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                            <div>
                                <h3 className="text-lg font-semibold">{e.title}</h3>
                                <p className="text-[#8BA8EE] text-sm mt-0.5">{e.place}</p>
                            </div>
                            <span className="text-xs text-[#8BA8EE] border border-[#C3D0F6]/15 rounded-full px-3 py-1">{e.period}</span>
                        </div>
                        <ul className="space-y-1.5 text-[#C3D0F6] text-sm list-disc pl-5">
                            {e.items.map((it, idx) => <li key={idx}>{it}</li>)}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

// ——— Contact ———
function Contact() {
    return (
        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                className="rounded-3xl border border-[#C3D0F6]/10 bg-gradient-to-br from-[#1F3E71]/30 to-[#0D1F3E]/20 p-12 text-center">
                <h2 className="text-3xl font-semibold tracking-tight mb-3">Discutons !</h2>
                <p className="text-[#C3D0F6] mb-8">Un projet, une opportunité, des questions ? Écrivez-moi.</p>
                <div className="flex flex-wrap justify-center gap-3">
                    <a href={`mailto:${LINKS.email}`} className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0D1F3E] px-5 py-2.5 font-medium hover:bg-[#EDF0FC] transition text-sm">
                        <Mail className="h-4 w-4" /> {LINKS.email}
                    </a>
                    <a href={LINKS.linkedin} className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-5 py-2.5 text-sm hover:bg-[#1F3E71]/35 transition">
                        <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                    <a href={LINKS.github} className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-5 py-2.5 text-sm hover:bg-[#1F3E71]/35 transition">
                        <Github className="h-4 w-4" /> GitHub
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

// ——— Footer ———
function Footer() {
    return (
        <footer className="border-t border-[#C3D0F6]/10">
            <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-[#8BA8EE]">
                <span>© {new Date().getFullYear()} Lou-Ann Barry. Tous droits réservés.</span>
                <div className="flex items-center gap-4">
                    <a href={LINKS.github} className="hover:text-[#EDF0FC] transition"><Github className="h-4 w-4" /></a>
                    <a href={LINKS.linkedin} className="hover:text-[#EDF0FC] transition"><Linkedin className="h-4 w-4" /></a>
                    <a href={`mailto:${LINKS.email}`} className="hover:text-[#EDF0FC] transition"><Mail className="h-4 w-4" /></a>
                </div>
            </div>
        </footer>
    );
}
