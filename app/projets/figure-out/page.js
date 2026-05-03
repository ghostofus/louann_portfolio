"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail, Users, Clock, Monitor, FileText, X } from "lucide-react";
import LangToggle from "../../components/LangToggle";
import { useLanguage } from "../../contexts/LanguageContext";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { animate: { transition: { staggerChildren: 0.14 } } };

const PROJECT_BASE = {
    title: "Figure Out",
    period: "2023/2024",
    engine: "Unreal Engine",
    platform: "PC",
    teamSize: "13",
    src: "/figureout.jpg",
    screenshots: ["/Figureout/FO.png", "/Figureout/ND1.png", "/Figureout/ND2.png"],
    analysisMedia: [
        { image: "/Figureout/Images/reunion 1.png" },
        { image: "/Figureout/Images/Taches.png" },
        { image: "/Figureout/Images/CA_Prosopagnosie.jpg" },
        {},
    ],
    docFiles: [
        { cover: null, file: "/Figureout/Document/Concept_Environnement.pdf", type: "pdf" },
        { cover: null, file: "/Figureout/Document/FO-RM.pdf", type: "pdf" },
        { cover: null, file: "/Figureout/Document/Roles.pdf", type: "pdf" },
    ],
};

const TR = {
    fr: {
        backLink: "Retour au portfolio",
        nav: [
            { label: "Infos générales", href: "#general" },
            { label: "Rôle & Responsabilités", href: "#roles" },
            { label: "Analyse", href: "#analyse" },
            { label: "Documents", href: "#documents" },
        ],
        ui: {
            sectionProject: "Le projet", sectionGeneral: "Informations générales",
            gameSummary: "Résumé du jeu", devInfo: "Infos de développement",
            teamSizeLabel: "Taille de l'équipe", durationLabel: "Durée du projet",
            engineLabel: "Moteur", platformLabel: "Plateforme", people: "personnes",
            contribution: "Ma contribution", rolesTitle: "Rôle & Responsabilités",
            mainRoleLabel: "Rôle principal", secondaryRoleLabel: "Rôle secondaire",
            analysisSection: "Retour d'expérience", analysisTitle: "Analyse & Processus",
            deliverables: "Livrables", docsTitle: "Documents de production",
            prevProject: "Projet précédent : Gecko Pulco", nextProject: "Projet suivant : 10 Nichi! →",
        },
        project: {
            duration: "1 an",
            summary: `Figure Out est un jeu vidéo en visual novel et point'n click, s'inscrivant dans le genre du drame policier, et prenant place dans un Paris moderne et fictif. Le joueur y incarne un détective privé jouissant d'une certaine renommée à travers la capitale française et une assez longue carrière d'une quinzaine d'année. Un détail le concernant, il est prosopagnosique, soit qu'il est incapable de reconnaître les visages qui lui font face, pas même son propre portrait. Une tare qui l'a conduit à se concentrer sur les moindres détails découvre la vérité qui s'y dissimule.`,
            keyFeatures: [
                { title: "Enquête basée sur la prosopagnosie", description: "Le joueur incarne un détective incapable de reconnaître les visages, ce qui transforme profondément la manière d'enquêter. Il doit s'appuyer sur des indices alternatifs (voix, vêtements, habitudes, détails environnementaux) pour identifier les suspects et reconstituer les événements." },
                { title: "Système de déduction et d'embranchements narratifs", description: "Les informations collectées s'organisent sous forme de fils d'enquête que le joueur relie pour faire émerger des conclusions. Chaque choix d'interprétation influence la suite de l'histoire, débloquant différents chemins narratifs et révélations." },
                { title: "Exploration interactive en Point'n Click", description: "Le joueur explore des scènes détaillées (appartement, lieux d'enquête…) en interagissant avec des objets, documents et souvenirs. Chaque élément peut révéler des indices cachés ou déclencher des dialogues, renforçant l'immersion et la progression dans l'enquête." },
            ],
            mainRole: {
                title: "Directrice Artistique",
                items: ["Définir l'ambiance générale et la direction visuelle du jeu, en se concentrant sur la direction des environnements.", "Rédiger et maintenir l'Art Style Guide en s'appuyant sur une veille de jeux et techniques de référence.", "Collaborer avec les artistes en fournissant un feedback créatif itératif pour guider la production visuelle."],
            },
            secondaryRole: {
                title: "Producer / Support de Production",
                items: ["Gérer le backlog et les tâches de l'ensemble de l'équipe artistique via Jira.", "Assurer l'intégration et la documentation de la production sur Nuclino.", "Former et accompagner l'équipe à l'utilisation de Jira et Nuclino tout au long du projet.", "Produire des comptes rendus hebdomadaires à destination du chef de projet suite aux réunions d'équipe."],
            },
            analysis: [
                { heading: "Mise en place du projet", text: `Figure Out est un projet de Visual Novel / Point'n Click développé en équipe de 13 personnes. Le jeu propose une enquête narrative dans un univers polar, centrée sur un détective atteint de prosopagnosie. J'occupais principalement un rôle de direction artistique, tout en prenant une place importante en producing. Je gérais notamment le suivi des tâches sur Jira, la mise à jour du Game Design Document sur Notion, ainsi que la communication entre les différents pôles et le chef de projet. Dès le début, nous avons mis en place une organisation basée sur plusieurs outils (Notion, Figma, Discord, Git, Unity) avec un fonctionnement en sprints hebdomadaires. Des réunions régulières étaient organisées, notamment au sein de l'équipe artistique que j'ai progressivement été amené à encadrer.`, imageCaption: "Réunion d'équipe #1" },
                { heading: "Déroulement du développement", text: `La phase de pré-production s'est globalement bien déroulée, avec une bonne définition des intentions artistiques et narratives. Cependant, elle s'est révélée plus longue que prévu, notamment à cause de retards sur certains rendus et de nombreux changements de direction. Un tournant majeur du projet a été le passage d'un jeu initialement pensé en 3D vers un format Visual Novel / Point'n Click. Ce changement a eu un impact important sur l'ensemble de l'équipe, autant pour les programmeurs que pour les artistes, en remettant en question la direction artistique et les besoins techniques. Malgré cela, l'équipe artistique est restée structurée et productive. Avec la Lead Artist, nous avons mis en place des points réguliers, donné des retours fréquents, et assuré une cohérence visuelle tout au long du projet.`, imageCaption: "Suivi des tâches" },
                { heading: "Défis rencontrés", text: `Le projet a été marqué par plusieurs défis importants, à la fois humains et organisationnels. Des tensions sont apparues au sein de l'équipe, en partie dues à l'ambition du projet et au manque d'expérience globale face à un sujet aussi exigeant. L'absence de lead clair côté programmation a également entraîné un certain déséquilibre dans l'avancement, laissant certains membres sans direction précise. Les nombreux changements de scope ont été un facteur de démotivation pour une partie de l'équipe. Certains membres ont progressivement décroché, rendant la coordination plus complexe. Face à cela, j'ai pris l'initiative d'organiser des réunions plus ciblées, notamment avec l'équipe artistique, afin de maintenir la motivation et recréer une dynamique de groupe. Des échanges plus personnels ont également permis d'identifier certains problèmes internes et d'y répondre de manière plus adaptée.`, imageCaption: "Concept Art" },
                { heading: "Bilan et apprentissages", text: "Le projet n'a finalement pas pu être mené à terme, notamment suite au départ du chef de projet, qui a entraîné une perte de repères et de motivation au sein de l'équipe. Malgré plusieurs tentatives pour relancer la dynamique, le manque de leadership global a empêché la finalisation du jeu. Cependant, cette expérience reste très formatrice. La gestion d'une équipe de plus de 7 personnes sur le pôle artistique a été un véritable défi, qui m'a permis de développer des compétences en organisation, communication et encadrement. Ce projet a surtout confirmé mon intérêt pour la production et la gestion d'équipe. Avec du recul, je serais plus attentive à la définition du scope dès le départ, à la stabilité des décisions, et à la mise en place de leads clairs dans chaque pôle afin d'assurer un meilleur équilibre de production." },
            ],
            documents: [
                { title: "Art Development Log", description: "Ce document regroupe les différentes itérations de direction artistique de l'environnement, en intégrant notre avancement au chef de projet en détaillant l'évolution de la production." },
                { title: "Project Charter", description: "Nous avons réalisé un Project Charter, servant de document de cadrage en début de conception du jeu" },
                { title: "Structure d'équipe", description: "Répartition par personne avec leurs rôles et responsabilités (prog, sound, DA, etc.)" },
            ],
        },
    },
    en: {
        backLink: "Back to portfolio",
        nav: [
            { label: "General info", href: "#general" },
            { label: "Role & Responsibilities", href: "#roles" },
            { label: "Analysis", href: "#analyse" },
            { label: "Documents", href: "#documents" },
        ],
        ui: {
            sectionProject: "The project", sectionGeneral: "General information",
            gameSummary: "Game summary", devInfo: "Development info",
            teamSizeLabel: "Team size", durationLabel: "Project duration",
            engineLabel: "Engine", platformLabel: "Platform", people: "people",
            contribution: "My contribution", rolesTitle: "Role & Responsibilities",
            mainRoleLabel: "Main role", secondaryRoleLabel: "Secondary role",
            analysisSection: "Feedback", analysisTitle: "Analysis & Process",
            deliverables: "Deliverables", docsTitle: "Production documents",
            prevProject: "Previous project: Gecko Pulco", nextProject: "Next project: 10 Nichi! →",
        },
        project: {
            duration: "1 year",
            summary: `Figure Out is a visual novel and point 'n' click video game set in the crime drama genre, taking place in a modern, fictional Paris. The player takes on the role of a private detective with a certain renown across the French capital and a career of about fifteen years. One detail about him: he is prosopagnosic, meaning he is unable to recognise the faces in front of him, not even his own portrait. A trait that led him to focus on the smallest details to uncover the truth hidden within them.`,
            keyFeatures: [
                { title: "Investigation based on prosopagnosia", description: "The player takes on a detective unable to recognise faces, which profoundly transforms the way investigations work. They must rely on alternative clues (voice, clothing, habits, environmental details) to identify suspects and piece together events." },
                { title: "Deduction system and narrative branching", description: "Information collected is organised as investigation threads that the player connects to draw conclusions. Each interpretive choice influences the story's direction, unlocking different narrative paths and revelations." },
                { title: "Interactive exploration in Point 'n' Click", description: "The player explores detailed scenes (apartment, crime scenes...) by interacting with objects, documents and memories. Each element can reveal hidden clues or trigger dialogues, reinforcing immersion and progression through the investigation." },
            ],
            mainRole: {
                title: "Art Director",
                items: ["Define the overall atmosphere and visual direction of the game, focusing on environment direction.", "Write and maintain the Art Style Guide based on a review of reference games and techniques.", "Collaborate with artists by providing iterative creative feedback to guide visual production."],
            },
            secondaryRole: {
                title: "Producer / Production Support",
                items: ["Manage the backlog and tasks for the entire art team via Jira.", "Ensure production integration and documentation on Nuclino.", "Train and support the team in using Jira and Nuclino throughout the project.", "Produce weekly reports for the project manager following team meetings."],
            },
            analysis: [
                { heading: "Project setup", text: "Figure Out is a Visual Novel / Point'n Click project developed by a team of 13 people. The game offers a narrative investigation in a crime thriller universe, centred on a detective with prosopagnosia. I primarily held an art direction role, while also playing a significant part in production. I managed task tracking on Jira, updates to the Game Design Document on Notion, and communication between the different teams and the project manager. From the start, we set up an organisation based on several tools (Notion, Figma, Discord, Git, Unity) with weekly sprints. Regular meetings were organised, particularly within the art team, which I progressively came to oversee.", imageCaption: "Team meeting #1" },
                { heading: "Development progress", text: "The pre-production phase went broadly well, with a good definition of artistic and narrative intentions. However, it proved longer than expected, particularly due to delays on certain deliverables and many changes of direction. A major turning point in the project was the shift from a game initially conceived in 3D to a Visual Novel / Point'n Click format. This change had a significant impact on the entire team, for both programmers and artists, calling into question the art direction and technical requirements. Despite this, the art team remained structured and productive. Along with the Lead Artist, we set up regular check-ins, gave frequent feedback, and maintained visual consistency throughout the project.", imageCaption: "Task tracking" },
                { heading: "Challenges faced", text: "The project was marked by several major challenges, both human and organisational. Tensions arose within the team, partly due to the project's ambition and the team's overall inexperience when faced with such a demanding subject. The absence of a clear lead on the programming side also created a certain imbalance in progress, leaving some members without clear direction. The numerous scope changes were a source of demotivation for part of the team. Some members gradually disengaged, making coordination more complex. In response, I took the initiative to organise more focused meetings, particularly with the art team, to maintain motivation and rebuild group dynamics. More personal conversations also helped identify some internal issues and respond to them more appropriately.", imageCaption: "Concept Art" },
                { heading: "Lessons learned", text: "The project ultimately could not be completed, largely following the departure of the project manager, which led to a loss of direction and motivation within the team. Despite several attempts to restart the momentum, the overall lack of leadership prevented the game from being finalised. However, this experience remains very formative. Managing a team of over 7 people on the art side was a real challenge, which allowed me to develop skills in organisation, communication and team oversight. This project above all confirmed my interest in production and team management. With hindsight, I would pay more attention to scope definition from the start, to the stability of decisions, and to putting clear leads in place in each area to ensure a better production balance." },
            ],
            documents: [
                { title: "Art Development Log", description: "This document brings together the different art direction iterations for the environment, integrating our progress for the project manager and detailing the evolution of production." },
                { title: "Project Charter", description: "We produced a Project Charter, serving as a framing document at the start of the game's design." },
                { title: "Team structure", description: "Breakdown by person with their roles and responsibilities (programming, sound, AD, etc.)" },
            ],
        },
    },
};

const LINKS = { github: "https://github.com/", linkedin: "https://linkedin.com/in/", email: "louann.barry05@gmail.com" };

function StarField() {
    const canvasRef = React.useRef(null);
    React.useEffect(() => {
        const canvas = canvasRef.current; const ctx = canvas.getContext("2d"); let animationId;
        canvas.width = window.innerWidth; canvas.height = window.innerHeight;
        const stars = Array.from({ length: 140 }, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.2 + 0.2, alpha: Math.random() * 0.5 + 0.15, offset: Math.random() * Math.PI * 2, vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25 }));
        let t = 0;
        const draw = () => { t += 0.02; ctx.clearRect(0, 0, canvas.width, canvas.height); stars.forEach((s) => { s.x += s.vx; s.y += s.vy; if (s.x < 0) s.x = canvas.width; if (s.x > canvas.width) s.x = 0; if (s.y < 0) s.y = canvas.height; if (s.y > canvas.height) s.y = 0; const pulse = s.alpha + Math.sin(t + s.offset) * 0.3; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(195, 215, 255, ${Math.max(0.05, pulse)})`; ctx.fill(); }); animationId = requestAnimationFrame(draw); };
        draw();
        const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        window.addEventListener("resize", onResize);
        return () => { cancelAnimationFrame(animationId); window.removeEventListener("resize", onResize); };
    }, []);
    return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}

function ScreenshotCarousel() {
    const [current, setCurrent] = React.useState(0);
    const screens = PROJECT_BASE.screenshots;
    const prev = () => setCurrent((c) => (c - 1 + screens.length) % screens.length);
    const next = () => setCurrent((c) => (c + 1) % screens.length);
    return (
        <div className="rounded-3xl overflow-hidden border border-[#C3D0F6]/10 h-80 relative">
            <Image src={screens[current]} alt={`Screenshot ${current + 1}`} width={700} height={400} className="w-full h-full object-cover" />
            {screens.length > 1 && (
                <>
                    <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-[#080f1e]/70 backdrop-blur p-2 hover:bg-[#1F3E71] transition"><ChevronLeft className="h-5 w-5 text-[#EDF0FC]" /></button>
                    <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[#080f1e]/70 backdrop-blur p-2 hover:bg-[#1F3E71] transition"><ChevronRight className="h-5 w-5 text-[#EDF0FC]" /></button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {screens.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition ${i === current ? "bg-[#EDF0FC]" : "bg-[#EDF0FC]/30"}`} />)}
                    </div>
                </>
            )}
        </div>
    );
}

function DocumentCard({ doc, onClick }) {
    return (
        <motion.div variants={fadeUp} onClick={onClick} className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 overflow-hidden cursor-pointer hover:border-[#8BA8EE]/40 transition-all group">
            <div className="h-44 bg-[#0D1F3E]/60 overflow-hidden flex items-center justify-center">
                {doc.cover ? <img src={doc.cover} alt={doc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    : doc.type === "pdf" ? <iframe src={`${doc.file}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`} className="w-full h-full border-0 pointer-events-none" title={doc.title} />
                    : <div className="flex flex-col items-center gap-2"><FileText className="h-12 w-12 text-[#4782E4]/50" /></div>}
            </div>
            <div className="p-5 flex flex-col gap-1.5">
                <h3 className="font-semibold text-[#EDF0FC] text-sm">{doc.title}</h3>
                <p className="text-[#C3D0F6] text-xs leading-relaxed line-clamp-2">{doc.description}</p>
            </div>
        </motion.div>
    );
}

function DocumentViewer({ documents, initialIndex, onClose }) {
    const [index, setIndex] = React.useState(initialIndex);
    const doc = documents[index];
    return (
        <div className="fixed inset-0 z-[100] bg-[#080f1e]/95 backdrop-blur flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#C3D0F6]/10 flex-shrink-0">
                <div><h3 className="font-semibold text-[#EDF0FC]">{doc.title}</h3>{documents.length > 1 && <p className="text-xs text-[#8BA8EE] mt-0.5">{index + 1} / {documents.length}</p>}</div>
                <button onClick={onClose} className="rounded-xl border border-[#C3D0F6]/20 p-2 hover:bg-[#1F3E71]/35 transition"><X className="h-5 w-5 text-[#EDF0FC]" /></button>
            </div>
            <div className="flex-1 relative overflow-hidden">
                {doc.type === "pdf" ? <iframe src={doc.file} className="w-full h-full border-0" title={doc.title} /> : <img src={doc.file} alt={doc.title} className="w-full h-full object-contain p-4" />}
                {documents.length > 1 && index > 0 && <button onClick={() => setIndex(i => i - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-[#080f1e]/80 backdrop-blur p-3 hover:bg-[#1F3E71] transition"><ChevronLeft className="h-6 w-6 text-[#EDF0FC]" /></button>}
                {documents.length > 1 && index < documents.length - 1 && <button onClick={() => setIndex(i => i + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-[#080f1e]/80 backdrop-blur p-3 hover:bg-[#1F3E71] transition"><ChevronRight className="h-6 w-6 text-[#EDF0FC]" /></button>}
            </div>
            <div className="px-6 py-4 border-t border-[#C3D0F6]/10 flex-shrink-0 bg-[#080f1e]/80"><p className="text-[#C3D0F6] text-sm leading-relaxed">{doc.description}</p></div>
        </div>
    );
}

function SectionTitle({ label, title }) {
    return <div className="mb-8"><p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-2">{label}</p><h2 className="text-2xl font-semibold tracking-tight">{title}</h2></div>;
}

function Sidebar({ ui, nav, duration }) {
    return (
        <aside className="hidden lg:flex flex-col gap-1 w-52 flex-shrink-0 sticky top-24">
            <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-3 px-3">{PROJECT_BASE.title}</p>
            {nav.map((item) => (
                <a key={item.href} href={item.href} className="px-3 py-2 rounded-xl text-sm text-[#C3D0F6] hover:text-[#EDF0FC] hover:bg-[#1F3E71]/30 transition">{item.label}</a>
            ))}
            <div className="mt-6 px-3">
                <div className="h-px bg-[#C3D0F6]/10 mb-4" />
                <div className="flex flex-col gap-2 text-xs text-[#8BA8EE]">
                    <div className="flex items-center gap-2"><Users className="h-3.5 w-3.5" /> {PROJECT_BASE.teamSize} {ui.people}</div>
                    <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> {duration}</div>
                    <div className="flex items-center gap-2"><Monitor className="h-3.5 w-3.5" /> {PROJECT_BASE.engine}</div>
                </div>
            </div>
        </aside>
    );
}

export default function ProjetFigureOut() {
    const [viewerIndex, setViewerIndex] = React.useState(null);
    const { lang } = useLanguage();
    const t = TR[lang];
    const ui = t.ui;
    const p = {
        ...PROJECT_BASE,
        duration: t.project.duration,
        summary: t.project.summary,
        keyFeatures: t.project.keyFeatures,
        mainRole: t.project.mainRole,
        secondaryRole: t.project.secondaryRole,
        analysis: t.project.analysis.map((a, i) => ({ ...a, ...PROJECT_BASE.analysisMedia[i] })),
        documents: t.project.documents.map((d, i) => ({ ...d, ...PROJECT_BASE.docFiles[i] })),
    };

    return (
        <div className="min-h-screen bg-[#080f1e] text-[#EDF0FC]" style={{ position: "relative" }}>
            <StarField />
            <div style={{ position: "relative", zIndex: 1 }}>
                <div className="sticky top-0 z-50 backdrop-blur bg-[#080f1e]/70 border-b border-[#C3D0F6]/10">
                    <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                        <Link href="/" className="inline-flex items-center gap-2 text-[#8BA8EE] hover:text-[#EDF0FC] transition text-sm"><ChevronLeft className="h-4 w-4" /> {t.backLink}</Link>
                        <div className="flex items-center gap-4">
                            <span className="font-semibold text-[#EDF0FC] hidden md:block">{PROJECT_BASE.title}</span>
                            <LangToggle />
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-6 pt-10 pb-0">
                    <motion.div variants={fadeUp} initial="initial" animate="animate" className="grid md:grid-cols-2 gap-4">
                        <div className="rounded-3xl overflow-hidden border border-[#C3D0F6]/10 h-80">
                            <Image src={PROJECT_BASE.src} alt={PROJECT_BASE.title} width={700} height={400} className="w-full h-full object-cover" priority />
                        </div>
                        <ScreenshotCarousel />
                    </motion.div>
                </div>
                <div className="mx-auto max-w-7xl px-6 py-10 flex gap-10 items-start">
                    <Sidebar ui={ui} nav={t.nav} duration={p.duration} />
                    <main className="flex-1 min-w-0 flex flex-col gap-16">

                        <section id="general" className="scroll-mt-24">
                            <SectionTitle label={ui.sectionProject} title={ui.sectionGeneral} />
                            <div className="grid md:grid-cols-2 gap-8">
                                <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7 flex flex-col gap-3">
                                    <h3 className="text-sm font-semibold text-[#8BA8EE] uppercase tracking-widest">{ui.gameSummary}</h3>
                                    <p className="text-[#C3D0F6] text-sm leading-relaxed">{p.summary}</p>
                                </motion.div>
                                <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7 flex flex-col gap-4">
                                    <h3 className="text-sm font-semibold text-[#8BA8EE] uppercase tracking-widest">{ui.devInfo}</h3>
                                    {[{ label: ui.teamSizeLabel, value: `${PROJECT_BASE.teamSize} ${ui.people}` }, { label: ui.durationLabel, value: p.duration }, { label: ui.engineLabel, value: PROJECT_BASE.engine }, { label: ui.platformLabel, value: PROJECT_BASE.platform }].map((info, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-[#C3D0F6]/10 pb-2 last:border-0 last:pb-0">
                                            <span className="text-xs text-[#8BA8EE]">{info.label}</span>
                                            <span className="text-sm font-medium text-[#EDF0FC]">{info.value}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 mt-6">
                                {p.keyFeatures.map((f, i) => (
                                    <motion.div key={i} variants={fadeUp} className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-6 flex flex-col gap-3">
                                        <h3 className="text-sm font-semibold text-[#EDF0FC]">{f.title}</h3>
                                        <p className="text-[#C3D0F6] text-sm leading-relaxed">{f.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </section>

                        <div className="h-px bg-gradient-to-r from-transparent via-[#C3D0F6]/20 to-transparent" />

                        <section id="roles" className="scroll-mt-24">
                            <SectionTitle label={ui.contribution} title={ui.rolesTitle} />
                            <div className="flex flex-col gap-6">
                                <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7">
                                    <div className="flex items-center gap-3 mb-5">
                                        <div className="rounded-xl bg-[#4782E4]/15 p-2.5"><Users className="h-5 w-5 text-[#4782E4]" /></div>
                                        <div><p className="text-xs text-[#8BA8EE] uppercase tracking-widest">{ui.mainRoleLabel}</p><h3 className="font-semibold text-[#EDF0FC]">{p.mainRole.title}</h3></div>
                                    </div>
                                    <ul className="space-y-2.5 text-[#C3D0F6] text-sm list-disc pl-5">{p.mainRole.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
                                </motion.div>
                                {p.secondaryRole && (
                                    <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7">
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="rounded-xl bg-[#4782E4]/15 p-2.5"><Users className="h-5 w-5 text-[#4782E4]" /></div>
                                            <div><p className="text-xs text-[#8BA8EE] uppercase tracking-widest">{ui.secondaryRoleLabel}</p><h3 className="font-semibold text-[#EDF0FC]">{p.secondaryRole.title}</h3></div>
                                        </div>
                                        <ul className="space-y-2.5 text-[#C3D0F6] text-sm list-disc pl-5">{p.secondaryRole.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
                                    </motion.div>
                                )}
                            </div>
                        </section>

                        <div className="h-px bg-gradient-to-r from-transparent via-[#C3D0F6]/20 to-transparent" />

                        <section id="analyse" className="scroll-mt-24">
                            <SectionTitle label={ui.analysisSection} title={ui.analysisTitle} />
                            <div className="flex flex-col gap-10">
                                {p.analysis.map((block, i) => (
                                    <motion.div key={i} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.1 }} className={`grid ${block.image ? "md:grid-cols-[3fr_2fr]" : "grid-cols-1"} gap-8 items-start`}>
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-lg font-semibold text-[#EDF0FC]">{block.heading}</h3>
                                            <p className="text-[#C3D0F6] leading-relaxed text-sm">{block.text}</p>
                                        </div>
                                        {block.image && (
                                            <div className="flex flex-col gap-2">
                                                <div className="rounded-xl overflow-hidden border border-[#C3D0F6]/10"><Image src={block.image} alt={block.imageCaption || block.heading} width={500} height={360} className="w-full object-cover" /></div>
                                                {block.imageCaption && <p className="text-xs text-[#8BA8EE]/80 text-center italic">{block.imageCaption}</p>}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        <div className="h-px bg-gradient-to-r from-transparent via-[#C3D0F6]/20 to-transparent" />

                        <section id="documents" className="scroll-mt-24">
                            <SectionTitle label={ui.deliverables} title={ui.docsTitle} />
                            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
                                {p.documents.map((doc, i) => <DocumentCard key={i} doc={doc} onClick={() => setViewerIndex(i)} />)}
                            </motion.div>
                            {viewerIndex !== null && <DocumentViewer documents={p.documents} initialIndex={viewerIndex} onClose={() => setViewerIndex(null)} />}
                        </section>

                        <div className="flex flex-wrap justify-between items-center gap-4 pt-4">
                            <Link href="/projets/gecko-pulco" className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-5 py-2.5 text-sm hover:bg-[#1F3E71]/35 transition"><ChevronLeft className="h-4 w-4" /> {ui.prevProject}</Link>
                            <Link href="/projets/10-nichi" className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0D1F3E] px-5 py-2.5 font-medium hover:bg-[#EDF0FC] transition text-sm">{ui.nextProject}</Link>
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
