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
    title: "Gecko Pulco",
    period: "2025",
    engine: "Unity 6",
    platform: "PC",
    teamSize: "4",
    src: "/gecko.jpg",
    screenshots: ["/GeckoPulco/GP1.png", "/GeckoPulco/GP2.png", "/GeckoPulco/GP3.png"],
    playUrl: "https://fauwly.itch.io/gecko-pulco",
    playIcon: "/GeckoPulco/icone.png",
    analysisMedia: [
        { image: "/A propos de moi/equipe.jpg" },
        { carousel: ["/GeckoPulco/Moodboard/1.jpg", "/GeckoPulco/Moodboard/2.jpg", "/GeckoPulco/Moodboard/3.jpg"] },
        { carousel: ["/GeckoPulco/ConceptArt/Ennemie.jpg", "/GeckoPulco/ConceptArt/Pulco.jpg"] },
        { video: "/GeckoPulco/Vidéo/turnaround_gp.mp4" },
    ],
    docFiles: [
        { cover: null, file: "/GeckoPulco/Documents/GeckoPulcoGDD.pdf", type: "pdf" },
        { cover: "/GeckoPulco/Documents/DiagrammeGantt.png", file: "/GeckoPulco/Documents/DiagrammeGantt.png", type: "image" },
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
            playGame: "Jouer au jeu sur itch.io",
            prevProject: "Projet précédent : IRA", nextProject: "Projet suivant : Figure Out →",
        },
        project: {
            duration: "4 mois",
            summary: `Vous incarnez Pulco, un gecko dont la famille a été enlevée par des aigles dans le monde céleste. Dernier à échapper à la capture, vous devez affronter les dangers des cieux, explorer des îles flottantes et retrouver les vôtres pour rentrer sain et sauf.`,
            keyFeatures: [
                { title: "Exploration par compétences évolutives", description: "Le joueur incarne Pulco, un gecko capable de grimper, sprinter et utiliser la force. Chaque île introduit une nouvelle compétence que le joueur doit maîtriser avant de devoir la combiner avec les précédentes pour progresser." },
                { title: "Gestion de l'endurance", description: "Chaque utilisation de compétence consomme de l'endurance une ressource limitée que le joueur doit gérer stratégiquement. Savoir quand économiser ou régénérer ses capacités devient central dans la progression." },
                { title: "Libération des geckos & score de fin", description: "L'objectif principal est de libérer des geckos disséminés dans le monde certains obligatoires, d'autres cachés pour récompenser l'exploration. Un score de fin récapitule les geckos trouvés, ajoutant une dimension de rejouabilité et de satisfaction." },
            ],
            mainRole: {
                title: "Producer / Cheffe de Projet",
                items: ["Établir un contrat de communication définissant les règles de fonctionnement de l'équipe dès le lancement du projet.", "Mettre en place et gérer le backlog de l'équipe via Notion et Figma.", "Animer les réunions hebdomadaires d'équipe chaque mercredi, en présentiel.", "Gérer le scope et prendre des décisions de coupure de contenu en fonction des contraintes de temps.", "Médiation et résolution de conflits au sein de l'équipe."],
            },
            secondaryRole: {
                title: "Directrice Artistique",
                items: ["Créer les références visuelles et définir l'ambiance générale du jeu en collaboration avec la game artist.", "Fournir un feedback créatif itératif sur le character design et l'UI."],
            },
            analysis: [
                { heading: "Mise en place du projet", text: `Gecko Pulco est un projet réalisé du 21 février au 5 juin 2025, dans le cadre de ma formation à l'ICAN Lyon. Un jeu d'aventure/plateforme 3D où l'on incarne Pulco, un petit gecko évoluant dans un monde coloré fait d'îles flottantes. Dès le départ, j'ai mis en place la structure de production sur Notion et Figma, établi un contrat de communication définissant les règles de fonctionnement de l'équipe, et organisé des réunions hebdomadaires chaque mercredi en présentiel.`, imageCaption: "L'équipe" },
                { heading: "Déroulement du développement", text: `La phase de pré-production a bien démarré. En collaboration avec notre game artist, j'ai défini les références visuelles et l'ambiance générale du jeu, ce qui a permis à l'équipe d'avoir une direction claire dès le début. Les mécaniques ont été définies rapidement et les programmeurs ont pu se mettre au travail sans attendre. Je donnais des retours réguliers sur le character design et l'UI pour m'assurer que tout restait cohérent avec la direction artistique établie.`, carouselCaption: "Moodboard" },
                { heading: "Défis rencontrés", text: `Les principaux défis étaient humains et techniques. Des tensions de communication ont émergé au sein de l'équipe résolues grâce aux méthodes agiles et à la mise en place de règles collectives et de concessions mutuelles. Le manque de temps a provoqué des baisses de motivation, ce qu'on a anticipé en instaurant un système de parole où chacun pouvait signaler une difficulté en avance pour s'adapter. Des tensions techniques sont également apparues autour de l'implémentation du son sur Unity, réglées par la discussion et une aide externe. Le projet s'est avéré trop ambitieux dans sa forme initiale. Plutôt que de s'épuiser sur un scope inatteignable, nous avons décidé de couper du contenu pour nous concentrer sur ce qui comptait vraiment livrer un jeu fun, cohérent et satisfaisant. Ce regard nouveau sur le projet nous a permis de retrouver de la motivation et de terminer quelque chose dont on est fiers.`, carouselCaption: "Concept Art" },
                { heading: "Direction artistique & personnage", text: `En tant que directrice artistique, j'ai travaillé en étroite collaboration avec la game artist pour définir l'identité visuelle de Pulco et de ses ennemis. Le turnaround du personnage illustre le soin apporté au character design : proportions, couleurs, et expressivité ont été itérées plusieurs fois pour correspondre à l'univers coloré et dynamique du jeu.`, videoCaption: "Turnaround de Pulco" },
            ],
            documents: [
                { title: "Game Design Document", description: "" },
                { title: "Diagramme de Gantt", description: "Diagramme fais avant conception nous permettant de planifier et coordonner les tâches dans un délai donné" },
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
            playGame: "Play the game on itch.io",
            prevProject: "Previous project: IRA", nextProject: "Next project: Figure Out →",
        },
        project: {
            duration: "4 months",
            summary: `You play as Pulco, a gecko whose family has been kidnapped by eagles in the celestial world. The last to escape capture, you must face the dangers of the skies, explore floating islands and find your loved ones to return home safely.`,
            keyFeatures: [
                { title: "Exploration through evolving skills", description: "The player plays as Pulco, a gecko capable of climbing, sprinting and using strength. Each island introduces a new skill that the player must master before having to combine it with the previous ones to progress." },
                { title: "Stamina management", description: "Each skill use consumes stamina, a limited resource the player must manage strategically. Knowing when to save or regenerate your abilities becomes central to progression." },
                { title: "Gecko liberation and end score", description: "The main objective is to free geckos scattered across the world, some mandatory, others hidden to reward exploration. An end score summarises the geckos found, adding a dimension of replayability and satisfaction." },
            ],
            mainRole: {
                title: "Producer / Project Manager",
                items: ["Establish a communication charter defining the team's ground rules from the project launch.", "Set up and manage the team backlog via Notion and Figma.", "Facilitate weekly team meetings every Wednesday, in person.", "Manage scope and make content cut decisions based on time constraints.", "Mediation and conflict resolution within the team."],
            },
            secondaryRole: {
                title: "Art Director",
                items: ["Create visual references and define the game's overall atmosphere in collaboration with the game artist.", "Provide iterative creative feedback on character design and UI."],
            },
            analysis: [
                { heading: "Project setup", text: `Gecko Pulco is a project carried out from 21 February to 5 June 2025, as part of my training at ICAN Lyon. A 3D adventure/platformer in which you play as Pulco, a small gecko evolving in a colourful world of floating islands. From the outset, I set up the production structure on Notion and Figma, established a communication charter defining the team's ground rules, and organised weekly in-person meetings every Wednesday.`, imageCaption: "The team" },
                { heading: "Development progress", text: `The pre-production phase got off to a good start. In collaboration with our game artist, I defined the visual references and overall atmosphere of the game, which gave the team a clear direction from the beginning. The mechanics were defined quickly and the programmers were able to get to work without waiting. I gave regular feedback on the character design and UI to ensure everything remained consistent with the established art direction.`, carouselCaption: "Moodboard" },
                { heading: "Challenges faced", text: `The main challenges were both human and technical. Communication tensions emerged within the team, resolved through agile methods and the establishment of collective rules and mutual concessions. Lack of time caused drops in motivation, which we anticipated by putting in place a speaking system where anyone could flag a difficulty in advance to adapt. Technical tensions also arose around sound implementation in Unity, resolved through discussion and external help. The project turned out to be too ambitious in its original form. Rather than wearing ourselves out on an unreachable scope, we decided to cut content to focus on what really mattered: delivering a fun, cohesive and satisfying game. This fresh perspective on the project helped us regain motivation and finish something we are proud of.`, carouselCaption: "Concept Art" },
                { heading: "Art direction and character design", text: `As art director, I worked closely with the game artist to define the visual identity of Pulco and his enemies. The character turnaround illustrates the care put into character design: proportions, colours and expressiveness were iterated multiple times to match the game's colourful and dynamic universe.`, videoCaption: "Pulco turnaround" },
            ],
            documents: [
                { title: "Game Design Document", description: "" },
                { title: "Gantt Chart", description: "Chart created before design to help us plan and coordinate tasks within a given timeframe" },
            ],
        },
    },
};

const LINKS = { github: "https://github.com/", linkedin: "https://linkedin.com/in/", email: "louann.barry05@gmail.com" };

function GeckoField() {
    const geckos = React.useMemo(() =>
        Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: `${(i * 37 + 13) % 92}%`,
            top: `${(i * 53 + 7) % 88}%`,
            size: 30 + (i * 7) % 38,
            opacity: 0.05 + (i * 0.007) % 0.10,
            duration: `${16 + (i * 3) % 20}s`,
            delay: `${-((i * 2.7) % 18)}s`,
            anim: i % 2 === 0 ? "gecko-float" : "gecko-drift",
        })),
    []);
    return (
        <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
            {geckos.map((g) => (
                <img
                    key={g.id}
                    src="/GeckoPulco/icone.png"
                    alt=""
                    style={{
                        position: "absolute",
                        left: g.left,
                        top: g.top,
                        width: g.size,
                        height: g.size,
                        opacity: g.opacity,
                        objectFit: "contain",
                        animation: `${g.anim} ${g.duration} ease-in-out ${g.delay} infinite`,
                    }}
                />
            ))}
        </div>
    );
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

function AnalysisCarousel({ images, caption }) {
    const [current, setCurrent] = React.useState(0);
    const prev = () => setCurrent(c => (c - 1 + images.length) % images.length);
    const next = () => setCurrent(c => (c + 1) % images.length);
    return (
        <div className="flex flex-col gap-2">
            <div className="relative rounded-xl overflow-hidden border border-[#C3D0F6]/10">
                <Image src={images[current]} alt={`${caption} ${current + 1}`} width={500} height={360} className="w-full object-cover" />
                {images.length > 1 && (
                    <>
                        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-[#080f1e]/75 backdrop-blur p-1.5 hover:bg-[#1F3E71] transition"><ChevronLeft className="h-4 w-4 text-[#EDF0FC]" /></button>
                        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#080f1e]/75 backdrop-blur p-1.5 hover:bg-[#1F3E71] transition"><ChevronRight className="h-4 w-4 text-[#EDF0FC]" /></button>
                    </>
                )}
            </div>
            {caption && <p className="text-xs text-[#8BA8EE]/80 text-center italic">{caption}</p>}
        </div>
    );
}

function DocumentCard({ doc, onClick }) {
    return (
        <motion.div variants={fadeUp} onClick={onClick} className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 overflow-hidden cursor-pointer hover:border-[#8BA8EE]/40 transition-all group">
            <div className="h-44 bg-[#0D1F3E]/60 overflow-hidden flex items-center justify-center">
                {doc.cover ? <img src={doc.cover} alt={doc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    : doc.type === "pdf" ? <iframe src={`${doc.file}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`} className="w-full h-full border-0 pointer-events-none" title={doc.title} />
                    : <div className="flex flex-col items-center gap-2"><FileText className="h-12 w-12 text-[#4782E4]/50" /><span className="text-xs text-[#8BA8EE]/60 uppercase tracking-wider">Image</span></div>}
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

export default function ProjetGeckoPulco() {
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
            <GeckoField />
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
                {PROJECT_BASE.playUrl && (
                    <div className="mx-auto max-w-7xl px-6 pt-5">
                        <a href={PROJECT_BASE.playUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-2xl bg-white text-[#0D1F3E] px-6 py-3 font-semibold hover:bg-[#EDF0FC] transition text-sm">
                            {PROJECT_BASE.playIcon && <img src={PROJECT_BASE.playIcon} alt="itch.io" className="h-6 w-6 object-contain" />}
                            {ui.playGame}
                        </a>
                    </div>
                )}
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
                            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="mt-6">
                                <video src="/GeckoPulco/Vidéo/CinematiqueGp.mp4" controls className="w-full rounded-3xl border border-[#C3D0F6]/10" />
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
                                    <motion.div key={i} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.1 }} className={`grid ${(block.image || block.carousel || block.video) ? "md:grid-cols-[3fr_2fr]" : "grid-cols-1"} gap-8 items-start`}>
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
                                        {block.carousel && <AnalysisCarousel images={block.carousel} caption={block.carouselCaption} />}
                                        {block.video && (
                                            <div className="flex flex-col gap-2">
                                                <video src={block.video} autoPlay loop muted playsInline className="w-full rounded-xl border border-[#C3D0F6]/10 object-cover" />
                                                {block.videoCaption && <p className="text-xs text-[#8BA8EE]/80 text-center italic">{block.videoCaption}</p>}
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
                            <Link href="/projets/ira" className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-5 py-2.5 text-sm hover:bg-[#1F3E71]/35 transition"><ChevronLeft className="h-4 w-4" /> {ui.prevProject}</Link>
                            <Link href="/projets/figure-out" className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0D1F3E] px-5 py-2.5 font-medium hover:bg-[#EDF0FC] transition text-sm">{ui.nextProject}</Link>
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
