"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, Github, Linkedin, Mail, Users, Clock, Monitor, FileText } from "lucide-react";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { animate: { transition: { staggerChildren: 0.14 } } };

const PROJECT = {
    title: "IRA",
    period: "2025/2026",
    engine: "Unreal Engine 5",
    platform: "PC",
    teamSize: "8",
    duration: "10 mois",
    src: "/ira.png",

    summary: `À remplir — résumé du jeu. De quoi s'agit-il ? Quel est le concept, l'univers, le gameplay principal ?`,

    keyFeatures: [
        { title: "Fonctionnalité clé 1", description: "À remplir — décris ici la première fonctionnalité marquante du jeu." },
        { title: "Fonctionnalité clé 2", description: "À remplir — décris ici la deuxième fonctionnalité marquante du jeu." },
        { title: "Fonctionnalité clé 3", description: "À remplir — décris ici la troisième fonctionnalité marquante du jeu." },
    ],

    mainRole: {
        title: "Producer / Cheffe de Projet",
        items: [
            "Organiser des entretiens individuels réguliers avec l'ensemble de l'équipe tout au long du projet.",
            "Fournir aux départements Art et Audio des listes de ressources afin de prioriser les tâches et d'éviter les dépendances.",
            "Animer les réunions de planification de sprint et les rétrospectives conformément à notre approche agile.",
            "Organisation et coordination des sessions de playtesting.",
            "Gestion de la documentation de production et du GDD.",
        ],
    },

    secondaryRole: null,

    analysis: [
        {
            heading: "Mise en place du projet",
            text: `À remplir — décris comment tu as mis en place le projet. Comment l'équipe s'est-elle formée ? Quels ont été les premiers défis organisationnels ? Comment as-tu structuré la production dès le départ ?`,
            image: null,
        },
        {
            heading: "Déroulement du développement",
            text: `À remplir — raconte le déroulement du développement. Quelles phases as-tu traversées ? Comment as-tu géré les imprévus, les changements de scope, les problèmes techniques ou humains ?`,
            image: null,
        },
        {
            heading: "Défis rencontrés",
            text: `À remplir — quels ont été les principaux défis du projet ? Comment les as-tu surmontés ? Qu'as-tu appris de ces expériences en tant que productrice ?`,
            image: null,
        },
    ],

    documents: [
        { title: "Document de cadrage", description: "À remplir — décris ce document et ce qu'il contient.", url: "#" },
        { title: "Planning de production", description: "À remplir — décris ce document et ce qu'il contient.", url: "#" },
    ],

    screenshots: [],
};

const LINKS = {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    email: "louann.barry05@gmail.com",
};

const NAV_ITEMS = [
    { label: "Infos générales", href: "#general" },
    { label: "Rôle & Responsabilités", href: "#roles" },
    { label: "Analyse", href: "#analyse" },
    { label: "Documents", href: "#documents" },
];

function StarField() {
    const canvasRef = React.useRef(null);
    React.useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let animationId;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const stars = Array.from({ length: 140 }, () => ({
            x: Math.random() * canvas.width, y: Math.random() * canvas.height,
            r: Math.random() * 1.2 + 0.2, alpha: Math.random() * 0.5 + 0.15,
            offset: Math.random() * Math.PI * 2,
            vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        }));
        let t = 0;
        const draw = () => {
            t += 0.02;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((s) => {
                s.x += s.vx; s.y += s.vy;
                if (s.x < 0) s.x = canvas.width; if (s.x > canvas.width) s.x = 0;
                if (s.y < 0) s.y = canvas.height; if (s.y > canvas.height) s.y = 0;
                const pulse = s.alpha + Math.sin(t + s.offset) * 0.3;
                ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(195, 215, 255, ${Math.max(0.05, pulse)})`; ctx.fill();
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

function SectionTitle({ label, title }) {
    return (
        <div className="mb-8">
            <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-2">{label}</p>
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        </div>
    );
}

export default function ProjetIRA() {
    return (
        <div className="min-h-screen bg-[#080f1e] text-[#EDF0FC]" style={{ position: "relative" }}>
            <StarField />
            <div style={{ position: "relative", zIndex: 1 }}>

                {/* Header */}
                <div className="sticky top-0 z-50 backdrop-blur bg-[#080f1e]/70 border-b border-[#C3D0F6]/10">
                    <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                        <Link href="/" className="inline-flex items-center gap-2 text-[#8BA8EE] hover:text-[#EDF0FC] transition text-sm">
                            <ChevronLeft className="h-4 w-4" /> Retour au portfolio
                        </Link>
                        <span className="font-semibold text-[#EDF0FC] hidden md:block">{PROJECT.title}</span>
                    </div>
                </div>

                {/* Hero image */}
                <div className="mx-auto max-w-7xl px-6 pt-10 pb-0">
                    <motion.div variants={fadeUp} initial="initial" animate="animate"
                        className="rounded-3xl overflow-hidden border border-[#C3D0F6]/10 max-h-96">
                        <Image src={PROJECT.src} alt={PROJECT.title} width={1400} height={500}
                            className="w-full object-cover" priority />
                    </motion.div>
                </div>

                {/* Layout principal : sidebar + contenu */}
                <div className="mx-auto max-w-7xl px-6 py-10 flex gap-10 items-start">

                    {/* ——— Sidebar ——— */}
                    <aside className="hidden lg:flex flex-col gap-1 w-52 flex-shrink-0 sticky top-24">
                        <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-3 px-3">{PROJECT.title}</p>
                        {NAV_ITEMS.map((item) => (
                            <a key={item.href} href={item.href}
                                className="px-3 py-2 rounded-xl text-sm text-[#C3D0F6] hover:text-[#EDF0FC] hover:bg-[#1F3E71]/30 transition">
                                {item.label}
                            </a>
                        ))}
                        <div className="mt-6 px-3">
                            <div className="h-px bg-[#C3D0F6]/10 mb-4" />
                            <div className="flex flex-col gap-2 text-xs text-[#8BA8EE]">
                                <div className="flex items-center gap-2"><Users className="h-3.5 w-3.5" /> {PROJECT.teamSize} personnes</div>
                                <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> {PROJECT.duration}</div>
                                <div className="flex items-center gap-2"><Monitor className="h-3.5 w-3.5" /> {PROJECT.engine}</div>
                            </div>
                        </div>
                    </aside>

                    {/* ——— Contenu ——— */}
                    <main className="flex-1 min-w-0 flex flex-col gap-16">

                        {/* ——— INFOS GÉNÉRALES ——— */}
                        <section id="general" className="scroll-mt-24">
                            <SectionTitle label="Le projet" title="Informations générales" />

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Résumé */}
                                <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                                    className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7 flex flex-col gap-3">
                                    <h3 className="text-sm font-semibold text-[#8BA8EE] uppercase tracking-widest">Résumé du jeu</h3>
                                    <p className="text-[#C3D0F6] text-sm leading-relaxed">{PROJECT.summary}</p>
                                </motion.div>

                                {/* Infos de développement */}
                                <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                                    className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7 flex flex-col gap-4">
                                    <h3 className="text-sm font-semibold text-[#8BA8EE] uppercase tracking-widest">Infos de développement</h3>
                                    {[
                                        { label: "Taille de l'équipe", value: `${PROJECT.teamSize} personnes` },
                                        { label: "Durée du projet", value: PROJECT.duration },
                                        { label: "Moteur", value: PROJECT.engine },
                                        { label: "Plateforme", value: PROJECT.platform },
                                    ].map((info, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-[#C3D0F6]/10 pb-2 last:border-0 last:pb-0">
                                            <span className="text-xs text-[#8BA8EE]">{info.label}</span>
                                            <span className="text-sm font-medium text-[#EDF0FC]">{info.value}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Fonctionnalités clés */}
                            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
                                className="grid md:grid-cols-3 gap-6 mt-6">
                                {PROJECT.keyFeatures.map((f, i) => (
                                    <motion.div key={i} variants={fadeUp}
                                        className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-6 flex flex-col gap-3">
                                        <h3 className="text-sm font-semibold text-[#EDF0FC]">{f.title}</h3>
                                        <p className="text-[#C3D0F6] text-sm leading-relaxed">{f.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Screenshots */}
                            {PROJECT.screenshots.length > 0 && (
                                <div className="grid md:grid-cols-2 gap-4 mt-6">
                                    {PROJECT.screenshots.map((src, i) => (
                                        <div key={i} className="rounded-2xl overflow-hidden border border-[#C3D0F6]/10">
                                            <Image src={src} alt={`Screenshot ${i + 1}`} width={700} height={400} className="w-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>

                        <div className="h-px bg-gradient-to-r from-transparent via-[#C3D0F6]/20 to-transparent" />

                        {/* ——— RÔLE & RESPONSABILITÉS ——— */}
                        <section id="roles" className="scroll-mt-24">
                            <SectionTitle label="Ma contribution" title="Rôle & Responsabilités" />

                            {/* Rôle principal */}
                            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                                className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7 mb-6">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="rounded-xl bg-[#4782E4]/15 p-2.5">
                                        <Users className="h-5 w-5 text-[#4782E4]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#8BA8EE] uppercase tracking-widest">Rôle principal</p>
                                        <h3 className="font-semibold text-[#EDF0FC]">{PROJECT.mainRole.title}</h3>
                                    </div>
                                </div>
                                <ul className="space-y-2.5 text-[#C3D0F6] text-sm list-disc pl-5">
                                    {PROJECT.mainRole.items.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </motion.div>

                            {/* Rôle secondaire */}
                            {PROJECT.secondaryRole && (
                                <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                                    className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="rounded-xl bg-[#4782E4]/15 p-2.5">
                                            <Users className="h-5 w-5 text-[#4782E4]" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#8BA8EE] uppercase tracking-widest">Rôle secondaire</p>
                                            <h3 className="font-semibold text-[#EDF0FC]">{PROJECT.secondaryRole.title}</h3>
                                        </div>
                                    </div>
                                    <ul className="space-y-2.5 text-[#C3D0F6] text-sm list-disc pl-5">
                                        {PROJECT.secondaryRole.items.map((item, i) => <li key={i}>{item}</li>)}
                                    </ul>
                                </motion.div>
                            )}
                        </section>

                        <div className="h-px bg-gradient-to-r from-transparent via-[#C3D0F6]/20 to-transparent" />

                        {/* ——— ANALYSE & PROCESSUS ——— */}
                        <section id="analyse" className="scroll-mt-24">
                            <SectionTitle label="Retour d'expérience" title="Analyse & Processus" />

                            <div className="flex flex-col gap-10">
                                {PROJECT.analysis.map((block, i) => (
                                    <motion.div key={i} variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.15 }}
                                        className={`grid ${block.image ? "md:grid-cols-2" : "grid-cols-1"} gap-8 items-start`}>
                                        <motion.div variants={fadeUp} className="flex flex-col gap-4">
                                            <h3 className="text-lg font-semibold text-[#EDF0FC]">{block.heading}</h3>
                                            <p className="text-[#C3D0F6] leading-relaxed text-sm">{block.text}</p>
                                        </motion.div>
                                        {block.image && (
                                            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden border border-[#C3D0F6]/10">
                                                <Image src={block.image} alt={block.heading} width={600} height={380} className="w-full object-cover" />
                                            </motion.div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        <div className="h-px bg-gradient-to-r from-transparent via-[#C3D0F6]/20 to-transparent" />

                        {/* ——— DOCUMENTS DE PRODUCTION ——— */}
                        <section id="documents" className="scroll-mt-24">
                            <SectionTitle label="Livrables" title="Documents de production" />

                            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
                                className="grid md:grid-cols-2 gap-6">
                                {PROJECT.documents.map((doc, i) => (
                                    <motion.div key={i} variants={fadeUp}
                                        className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7 flex flex-col gap-4">
                                        <div className="flex items-start gap-3">
                                            <div className="rounded-xl bg-[#4782E4]/15 p-2.5 flex-shrink-0">
                                                <FileText className="h-5 w-5 text-[#4782E4]" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-[#EDF0FC] mb-1">{doc.title}</h3>
                                                <p className="text-[#C3D0F6] text-sm leading-relaxed">{doc.description}</p>
                                            </div>
                                        </div>
                                        {doc.url !== "#" && (
                                            <a href={doc.url} target="_blank" rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0D1F3E] px-4 py-2 text-sm font-medium hover:bg-[#EDF0FC] transition self-start">
                                                Télécharger
                                            </a>
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </section>

                        {/* Navigation entre projets */}
                        <div className="flex flex-wrap justify-between items-center gap-4 pt-4">
                            <Link href="/#projets" className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-5 py-2.5 text-sm hover:bg-[#1F3E71]/35 transition">
                                <ChevronLeft className="h-4 w-4" /> Tous les projets
                            </Link>
                            <Link href="/projets/gecko-pulco" className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0D1F3E] px-5 py-2.5 font-medium hover:bg-[#EDF0FC] transition text-sm">
                                Projet suivant : Gecko Pulco →
                            </Link>
                        </div>
                    </main>
                </div>

                <footer className="border-t border-[#C3D0F6]/10 mt-8">
                    <div className="mx-auto max-w-7xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-[#8BA8EE]">
                        <span>© {new Date().getFullYear()} Lou-Ann Barry.</span>
                        <div className="flex items-center gap-4">
                            <a href={LINKS.github} className="hover:text-[#EDF0FC] transition"><Github className="h-4 w-4" /></a>
                            <a href={LINKS.linkedin} className="hover:text-[#EDF0FC] transition"><Linkedin className="h-4 w-4" /></a>
                            <a href={`mailto:${LINKS.email}`} className="hover:text-[#EDF0FC] transition"><Mail className="h-4 w-4" /></a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
