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
    title: "IRA",
    period: "2025/2026",
    engine: "Unreal Engine 5",
    platform: "PC",
    teamSize: "8",
    src: "/ira.png",
    screenshots: ["/IRA/arene.png", "/IRA/Kaia.png", "/IRA/jeuglobal.png", "/IRA/temple.png", "/IRA/sbire-parade.png"],
    analysisMedia: [
        { image: "/IRA/images/reunion discord.jpg" },
        { image: "/IRA/images/reunion2.0.jpg" },
        { pdfPreview: "/IRA/images/Moodboard.pdf" },
    ],
    docFiles: [
        { cover: null, file: "/IRA/Documents/Gestion document.pdf", type: "pdf" },
        { cover: null, file: "/IRA/Documents/OrganisationPFE.pdf", type: "pdf" },
        { cover: null, file: "/IRA/Documents/Plandeproduction.pdf", type: "pdf" },
        { cover: null, file: "/IRA/Documents/RetroPlanning.pdf", type: "pdf" },
        { cover: null, file: "/IRA/Documents/Reunion.pdf", type: "pdf" },
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
            gameSummary: "Résumé du jeu", devInfo: "Infos de développement (en cours)",
            teamSizeLabel: "Taille de l'équipe", durationLabel: "Durée du projet",
            engineLabel: "Moteur", platformLabel: "Plateforme", people: "personnes",
            contribution: "Ma contribution", rolesTitle: "Rôle & Responsabilités",
            mainRoleLabel: "Rôle principal",
            analysisSection: "Retour d'expérience", analysisTitle: "Analyse & Processus",
            deliverables: "Livrables", docsTitle: "Documents de production",
            allProjects: "Tous les projets", nextProject: "Projet suivant : Gecko Pulco →",
        },
        project: {
            duration: "10 mois",
            summary: `Dans un empire né d'une guerre sans fin, les Dreadborn ont pris le pouvoir et fondé Deador  une dystopie dictatoriale à l'allure romaine, bâtie sur les ruines des Solari. Lorsque le Voidwalker a massacré ses parents, Kaia Valdrik, dernière héritière Solari, a juré vengeance. Depuis, elle vit loin des cités impériales, au sein de la résistance Solari, traquant sans relâche la créature responsable de la chute de sa lignée. Mais plus elle s'approche du Voidwalker, plus elle sent quelque chose d'étrange se réveiller en elle. Une ombre ancienne, un écho du monstre qu'elle pourchasse. Jusqu'à comprendre la vérité : le démon qu'elle cherche à détruire… vit peut-être déjà dans son propre corps.`,
            keyFeatures: [
                { title: "Maîtrisez l'art du combat", description: "En incarnant Kaia, vous choisissez votre approche à chaque affrontement. Enchaînez des combos légers rapides pour maintenir la pression, chargez des frappes lourdes dévastatrices pour briser la posture de vos ennemis, ou harcelez-les à distance avec des projectiles. Remplissez votre jauge de Rage au fil des combats pour déclencher une transformation frénétique, boostant vos dégâts et votre vitesse pour quelques instants de domination totale." },
                { title: "Combattez avec intelligence, pas seulement avec la force", description: "Survivre dans IRA demande bien plus que la brutalité. Adaptez votre approche en plein combat en alternant entre trois postures tactiques : offensive, défensive ou équilibrée, chacune modifiant la façon dont Kaia attaque et encaisse les coups. Maîtrisez le timing de la parade parfaite pour étourdir vos adversaires et les ouvrir à une contre-attaque, ou déchaînez des sorts élémentaires alimentés par votre Rage pour contrôler la foule, brûler votre cible ou vous protéger des projectiles ennemis." },
                { title: "Démêlez une identité sombre", description: "Incarnez Kaia Valdrik, dernière héritière des Solari, dans une traque implacable de la créature qui a anéanti sa lignée. Plus vous approchez de la vérité, plus la frontière entre la chasseuse et le monstre s'efface car les ténèbres anciennes qu'elle pourchasse vivent peut-être déjà en elle. Explorez un monde d'empires effondrés et de secrets enfouis, reconstituez le passé de Kaia, et découvrez ce que signifie vraiment être la dernière de son espèce." },
            ],
            mainRole: {
                title: "Producer / Cheffe de Projet",
                items: ["Établir un contrat de communication définissant les règles de fonctionnement, le temps hebdomadaire requis et les modalités de réunion.", "Organiser des entretiens individuels réguliers avec l'ensemble de l'équipe tout au long du projet.", "Fournir aux départements Art et Audio des listes de ressources afin de prioriser les tâches et d'éviter les dépendances.", "Animer les réunions de planification de sprint et les rétrospectives conformément à notre approche agile.", "Définir les deadlines et les livrables clés et assurer leur suivi tout au long du projet.", "Gérer le scope et prendre des décisions de coupure de contenu en fonction des contraintes.", "Organisation et coordination des sessions de playtesting.", "Gestion de la documentation de production et du GDD.", "Médiation et résolution de conflits au sein de l'équipe."],
            },
            secondaryRole: null,
            analysis: [
                { heading: "Mise en place du projet", text: `Dès le lancement d'IRA, j'ai structuré l'équipe autour de deux leads : une Lead Game Art et un Lead Game Programer afin d'établir une hiérarchie claire et des canaux de communication efficaces entre les départements qui dans cette catégorie était assez nombreux. Les réunions d'équipe se tenaient chaque mercredi, en présentiel ou à distance, complétées par un suivi continu sur Discord. L'ensemble de la production était centralisé sur Notion : backlog, sprints, attribution des tâches par département et comptes rendus hebdomadaires.`, imageCaption: "Réunion hebdomadaire sur Discord" },
                { heading: "Déroulement du développement", text: `La phase de pré-production s'est bien déroulée. La Direction Artistique a fourni un travail solide très tôt, ce qui a permis aux artistes de disposer d'une base visuelle claire dès le départ. De leur côté, les programmeurs ont pu commencer à travailler directement après la définition des mécaniques. Je coordonnais les décisions de design en collaboration avec les leads, en m'assurant de recueillir leur avis avant de trancher. Certains désaccords ont émergé autour des mécaniques de combat , notamment sur l'armement du personnage et c'est moi qui ai pris la décision finale après concertation. Face aux contraintes de temps imposées par le cadre scolaire, nous avons dû réduire le scope à deux reprises. Le nombre d'ennemis prévus a été réduit : le projet initial comprenait cinq ennemis dont un boss final, une charge trop importante pour notre character artist seule dans le temps imparti. Les environnements ont également été rescopés , le jeu devait initialement comprendre trois zones (la ville, le marché et la zone du boss). Après de longues discussions en équipe, nous avons décidé de nous concentrer sur les deux zones les plus importantes pour la vertical slice, réduisant également le nombre de props à produire pour notre environment artist.`, imageCaption: "Réunion en présentiel" },
                { heading: "Défis rencontrés", text: `Les principaux défis étaient humains. Des inégalités d'implication au sein de l'équipe ont créé des tensions : certains membres très investis se frustraient de voir d'autres contribuer moins. Plutôt que de laisser ces tensions s'installer, j'ai organisé des entretiens individuels avec chaque personne concernée. Ces discussions m'ont permis de comprendre qu'il s'agissait avant tout de malentendus. Des compromis ont été trouvés, sans promesses vides ,chacun a pu ajuster son implication sans générer de frustration supplémentaire ni de conflit ouvert. C'est l'une des décisions dont je suis la plus fière sur ce projet.`, pdfCaption: "Moodboard" },
            ],
            documents: [
                { title: "Production documentation", description: "Ce document a permis a l'equipe de centraliser tous nos fichiers , éviter de chercher partout et structurer le savoir du projet" },
                { title: "Structure d'équipe", description: "Répartition par personne avec leurs rôles et responsabilités (prog, sound, DA, etc.)" },
                { title: "Production Roadmap", description: "J'ai structuré le projet via un planning de production par milestones, détaillant les tâches assignées à chaque membre de l'équipe." },
                { title: "Rétro Planning", description: "J'ai concu 2 retroplanning à partir de dexu deadlines (nos deux rendu de projet fin d'année) et remonter pour définir toutes les étapes" },
                { title: "Meeting reports", description: "Ce document à permis a l'équipe de suivre l'avancement en gardant une trace des décisions et synchroniser l'équipe" },
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
            gameSummary: "Game summary", devInfo: "Development info (in progress)",
            teamSizeLabel: "Team size", durationLabel: "Project duration",
            engineLabel: "Engine", platformLabel: "Platform", people: "people",
            contribution: "My contribution", rolesTitle: "Role & Responsibilities",
            mainRoleLabel: "Main role",
            analysisSection: "Feedback", analysisTitle: "Analysis & Process",
            deliverables: "Deliverables", docsTitle: "Production documents",
            allProjects: "All projects", nextProject: "Next project: Gecko Pulco →",
        },
        project: {
            duration: "10 months",
            summary: `In an empire born from endless war, the Dreadborn seized power and founded Deador, a Roman-styled dictatorial dystopia built on the ruins of the Solari. When the Voidwalker slaughtered her parents, Kaia Valdrik, the last Solari heir, swore revenge. Since then, she has lived far from the imperial cities, within the Solari resistance, relentlessly hunting the creature responsible for the fall of her lineage. But the closer she gets to the Voidwalker, the more she feels something strange awakening within her. An ancient shadow, an echo of the monster she pursues. Until she comes to understand the truth: the demon she seeks to destroy... may already live within her own body.`,
            keyFeatures: [
                { title: "Master the art of combat", description: "Playing as Kaia, you choose your approach in every fight. Chain quick light combos to keep up the pressure, charge devastating heavy strikes to break enemy posture, or harass from range with projectiles. Fill your Rage gauge through battle to trigger a frantic transformation, boosting your damage and speed for a few moments of total domination." },
                { title: "Fight with intelligence, not just strength", description: "Surviving in IRA demands far more than brutality. Adapt your approach mid-combat by switching between three tactical stances: offensive, defensive or balanced, each changing how Kaia attacks and takes hits. Master the timing of a perfect parry to stun enemies and open them to a counter-attack, or unleash elemental spells fuelled by your Rage to control crowds, burn your target or shield yourself from incoming projectiles." },
                { title: "Unravel a dark identity", description: "Play as Kaia Valdrik, the last Solari heir, in a relentless hunt for the creature that destroyed her lineage. The closer you get to the truth, the more the line between hunter and monster blurs, as the ancient darkness she pursues may already live within her. Explore a world of fallen empires and buried secrets, piece together Kaia's past, and discover what it truly means to be the last of your kind." },
            ],
            mainRole: {
                title: "Producer / Project Manager",
                items: ["Establish a communication charter defining the team's ground rules, weekly time requirements and meeting arrangements.", "Organise regular one-on-one meetings with the entire team throughout the project.", "Provide Art and Audio departments with resource lists to prioritise tasks and avoid dependencies.", "Facilitate sprint planning meetings and retrospectives in line with our agile approach.", "Define key deadlines and deliverables and monitor them throughout the project.", "Manage scope and make content cut decisions based on constraints.", "Organise and coordinate playtesting sessions.", "Manage production documentation and GDD.", "Mediation and conflict resolution within the team."],
            },
            secondaryRole: null,
            analysis: [
                { heading: "Project setup", text: "From the launch of IRA, I structured the team around two leads: a Lead Game Artist and a Lead Game Programmer, to establish a clear hierarchy and efficient communication channels between departments, which were fairly numerous. Team meetings were held every Wednesday, in person or remotely, complemented by continuous follow-up on Discord. All production was centralised on Notion: backlog, sprints, task assignment by department and weekly meeting notes.", imageCaption: "Weekly meeting on Discord" },
                { heading: "Development progress", text: "The pre-production phase went well. The Art Direction delivered solid work early on, giving the artists a clear visual foundation from the start. Meanwhile, the programmers were able to get to work directly after mechanics were defined. I coordinated design decisions in collaboration with the leads, making sure to gather their input before making final calls. Some disagreements arose around combat mechanics, particularly regarding the character's weapons, and I made the final decision after consultation. Faced with the time constraints imposed by the academic setting, we had to reduce scope twice. The number of planned enemies was cut: the original project included five enemies including a final boss, too heavy a workload for our character artist alone within the time available. Environments were also rescoped: the game was initially to include three zones (the city, the market and the boss area). After lengthy team discussions, we decided to focus on the two most important zones for the vertical slice, also reducing the number of props our environment artist needed to produce.", imageCaption: "In-person meeting" },
                { heading: "Challenges faced", text: "The main challenges were human. Unequal levels of commitment within the team created tension: some highly invested members grew frustrated seeing others contributing less. Rather than letting these tensions settle in, I organised one-on-ones with each person involved. These conversations helped me understand that the issues were primarily misunderstandings. Compromises were found, without empty promises: each person was able to adjust their commitment without generating further frustration or open conflict. It is one of the decisions I am most proud of on this project.", pdfCaption: "Moodboard" },
            ],
            documents: [
                { title: "Production documentation", description: "This document allowed the team to centralise all our files, avoid searching everywhere and structure the project's knowledge base." },
                { title: "Team structure", description: "Breakdown by person with their roles and responsibilities (programming, sound, AD, etc.)" },
                { title: "Production Roadmap", description: "I structured the project through a milestone-based production schedule, detailing the tasks assigned to each team member." },
                { title: "Retro Planning", description: "I designed 2 retroplannings from two deadlines (our two year-end project deliverables) and worked backwards to define all the steps." },
                { title: "Meeting reports", description: "This document allowed the team to track progress, keep a record of decisions and keep the team in sync." },
            ],
        },
    },
};

const LINKS = {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    email: "louann.barry05@gmail.com",
};

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
                ctx.fillStyle = `rgba(220, 185, 100, ${Math.max(0.05, pulse)})`; ctx.fill();
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

function ScreenshotCarousel() {
    const [current, setCurrent] = React.useState(0);
    const screens = PROJECT_BASE.screenshots;
    const prev = () => setCurrent((c) => (c - 1 + screens.length) % screens.length);
    const next = () => setCurrent((c) => (c + 1) % screens.length);
    return (
        <div className="rounded-3xl overflow-hidden border border-[#C8B890]/10 h-80 relative">
            <Image src={screens[current]} alt={`Screenshot ${current + 1}`} width={700} height={400} className="w-full h-full object-cover" />
            {screens.length > 1 && (
                <>
                    <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-[#100C06]/70 backdrop-blur p-2 hover:bg-[#2A1C08] transition"><ChevronLeft className="h-5 w-5 text-[#F0E8D2]" /></button>
                    <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[#100C06]/70 backdrop-blur p-2 hover:bg-[#2A1C08] transition"><ChevronRight className="h-5 w-5 text-[#F0E8D2]" /></button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {screens.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition ${i === current ? "bg-[#F0E8D2]" : "bg-[#F0E8D2]/30"}`} />)}
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
            <div className="relative rounded-xl overflow-hidden border border-[#C8B890]/10">
                <Image src={images[current]} alt={`${caption} ${current + 1}`} width={500} height={360} className="w-full object-cover" />
                {images.length > 1 && (
                    <>
                        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-[#100C06]/75 backdrop-blur p-1.5 hover:bg-[#2A1C08] transition"><ChevronLeft className="h-4 w-4 text-[#F0E8D2]" /></button>
                        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#100C06]/75 backdrop-blur p-1.5 hover:bg-[#2A1C08] transition"><ChevronRight className="h-4 w-4 text-[#F0E8D2]" /></button>
                    </>
                )}
            </div>
            {caption && <p className="text-xs text-[#8A7654]/80 text-center italic">{caption}</p>}
        </div>
    );
}

function DocumentCard({ doc, onClick }) {
    return (
        <motion.div variants={fadeUp} onClick={onClick}
            className="rounded-3xl border border-[#C8B890]/10 bg-[#2A1C08]/20 overflow-hidden cursor-pointer hover:border-[#8A7654]/40 transition-all group">
            <div className="h-44 bg-[#1A0E04]/60 overflow-hidden flex items-center justify-center">
                {doc.cover ? (
                    <img src={doc.cover} alt={doc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : doc.type === "pdf" ? (
                    <iframe src={`${doc.file}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`} className="w-full h-full border-0 pointer-events-none" title={doc.title} />
                ) : (
                    <div className="flex flex-col items-center gap-2">
                        <FileText className="h-12 w-12 text-[#C8923A]/50" />
                        <span className="text-xs text-[#8A7654]/60 uppercase tracking-wider">Image</span>
                    </div>
                )}
            </div>
            <div className="p-5 flex flex-col gap-1.5">
                <h3 className="font-semibold text-[#F0E8D2] text-sm">{doc.title}</h3>
                <p className="text-[#C8B890] text-xs leading-relaxed line-clamp-2">{doc.description}</p>
            </div>
        </motion.div>
    );
}

function DocumentViewer({ documents, initialIndex, onClose }) {
    const [index, setIndex] = React.useState(initialIndex);
    const doc = documents[index];
    return (
        <div className="fixed inset-0 z-[100] bg-[#100C06]/95 backdrop-blur flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#C8B890]/10 flex-shrink-0">
                <div>
                    <h3 className="font-semibold text-[#F0E8D2]">{doc.title}</h3>
                    {documents.length > 1 && <p className="text-xs text-[#8A7654] mt-0.5">{index + 1} / {documents.length}</p>}
                </div>
                <button onClick={onClose} className="rounded-xl border border-[#C8B890]/20 p-2 hover:bg-[#2A1C08]/35 transition"><X className="h-5 w-5 text-[#F0E8D2]" /></button>
            </div>
            <div className="flex-1 relative overflow-hidden">
                {doc.type === "pdf" ? (
                    <iframe src={doc.file} className="w-full h-full border-0" title={doc.title} />
                ) : (
                    <img src={doc.file} alt={doc.title} className="w-full h-full object-contain p-4" />
                )}
                {documents.length > 1 && index > 0 && (
                    <button onClick={() => setIndex(i => i - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-[#100C06]/80 backdrop-blur p-3 hover:bg-[#2A1C08] transition"><ChevronLeft className="h-6 w-6 text-[#F0E8D2]" /></button>
                )}
                {documents.length > 1 && index < documents.length - 1 && (
                    <button onClick={() => setIndex(i => i + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-[#100C06]/80 backdrop-blur p-3 hover:bg-[#2A1C08] transition"><ChevronRight className="h-6 w-6 text-[#F0E8D2]" /></button>
                )}
            </div>
            <div className="px-6 py-4 border-t border-[#C8B890]/10 flex-shrink-0 bg-[#100C06]/80">
                <p className="text-[#C8B890] text-sm leading-relaxed">{doc.description}</p>
            </div>
        </div>
    );
}

function SectionTitle({ label, title }) {
    return (
        <div className="mb-8">
            <p className="text-xs text-[#8A7654] uppercase tracking-widest mb-2">{label}</p>
            <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        </div>
    );
}

export default function ProjetIRA() {
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
        <div className="min-h-screen bg-[#100C06] text-[#F0E8D2]" style={{ position: "relative" }}>
            <StarField />
            <div style={{ position: "relative", zIndex: 1 }}>

                {/* Header */}
                <div className="sticky top-0 z-50 backdrop-blur bg-[#100C06]/70 border-b border-[#C8B890]/10">
                    <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                        <Link href="/" className="inline-flex items-center gap-2 text-[#8A7654] hover:text-[#F0E8D2] transition text-sm">
                            <ChevronLeft className="h-4 w-4" /> {t.backLink}
                        </Link>
                        <div className="flex items-center gap-4">
                            <span className="font-semibold text-[#F0E8D2] hidden md:block">{PROJECT_BASE.title}</span>
                            <LangToggle />
                        </div>
                    </div>
                </div>

                {/* Hero images */}
                <div className="mx-auto max-w-7xl px-6 pt-10 pb-0">
                    <motion.div variants={fadeUp} initial="initial" animate="animate" className="grid md:grid-cols-2 gap-4">
                        <div className="rounded-3xl overflow-hidden border border-[#C8B890]/10 h-80">
                            <Image src={PROJECT_BASE.src} alt={PROJECT_BASE.title} width={700} height={400} className="w-full h-full object-cover" priority />
                        </div>
                        <ScreenshotCarousel />
                    </motion.div>
                </div>

                {/* Layout */}
                <div className="mx-auto max-w-7xl px-6 py-10 flex gap-10 items-start">

                    {/* Sidebar */}
                    <aside className="hidden lg:flex flex-col gap-1 w-52 flex-shrink-0 sticky top-24">
                        <p className="text-xs text-[#8A7654] uppercase tracking-widest mb-3 px-3">{PROJECT_BASE.title}</p>
                        {t.nav.map((item) => (
                            <a key={item.href} href={item.href} className="px-3 py-2 rounded-xl text-sm text-[#C8B890] hover:text-[#F0E8D2] hover:bg-[#2A1C08]/30 transition">{item.label}</a>
                        ))}
                        <div className="mt-6 px-3">
                            <div className="h-px bg-[#C8B890]/10 mb-4" />
                            <div className="flex flex-col gap-2 text-xs text-[#8A7654]">
                                <div className="flex items-center gap-2"><Users className="h-3.5 w-3.5" /> {PROJECT_BASE.teamSize} {ui.people}</div>
                                <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> {p.duration}</div>
                                <div className="flex items-center gap-2"><Monitor className="h-3.5 w-3.5" /> {PROJECT_BASE.engine}</div>
                            </div>
                        </div>
                    </aside>

                    {/* Content */}
                    <main className="flex-1 min-w-0 flex flex-col gap-16">

                        {/* General info */}
                        <section id="general" className="scroll-mt-24">
                            <SectionTitle label={ui.sectionProject} title={ui.sectionGeneral} />
                            <div className="grid md:grid-cols-2 gap-8">
                                <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="rounded-3xl border border-[#C8B890]/10 bg-[#2A1C08]/20 p-7 flex flex-col gap-3">
                                    <h3 className="text-sm font-semibold text-[#8A7654] uppercase tracking-widest">{ui.gameSummary}</h3>
                                    <p className="text-[#C8B890] text-sm leading-relaxed">{p.summary}</p>
                                </motion.div>
                                <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="rounded-3xl border border-[#C8B890]/10 bg-[#2A1C08]/20 p-7 flex flex-col gap-4">
                                    <h3 className="text-sm font-semibold text-[#8A7654] uppercase tracking-widest">{ui.devInfo}</h3>
                                    {[
                                        { label: ui.teamSizeLabel, value: `${PROJECT_BASE.teamSize} ${ui.people}` },
                                        { label: ui.durationLabel, value: p.duration },
                                        { label: ui.engineLabel, value: PROJECT_BASE.engine },
                                        { label: ui.platformLabel, value: PROJECT_BASE.platform },
                                    ].map((info, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-[#C8B890]/10 pb-2 last:border-0 last:pb-0">
                                            <span className="text-xs text-[#8A7654]">{info.label}</span>
                                            <span className="text-sm font-medium text-[#F0E8D2]">{info.value}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 mt-6">
                                {p.keyFeatures.map((f, i) => (
                                    <motion.div key={i} variants={fadeUp} className="rounded-3xl border border-[#C8B890]/10 bg-[#2A1C08]/20 p-6 flex flex-col gap-3">
                                        <h3 className="text-sm font-semibold text-[#F0E8D2]">{f.title}</h3>
                                        <p className="text-[#C8B890] text-sm leading-relaxed">{f.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="mt-6">
                                <video src="/IRA/Vidéos/Gameplay.mp4" controls className="w-full rounded-3xl border border-[#C8B890]/10" />
                            </motion.div>
                        </section>

                        <div className="h-px bg-gradient-to-r from-transparent via-[#C8B890]/20 to-transparent" />

                        {/* Roles */}
                        <section id="roles" className="scroll-mt-24">
                            <SectionTitle label={ui.contribution} title={ui.rolesTitle} />
                            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="rounded-3xl border border-[#C8B890]/10 bg-[#2A1C08]/20 p-7 mb-6">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="rounded-xl bg-[#C8923A]/15 p-2.5"><Users className="h-5 w-5 text-[#C8923A]" /></div>
                                    <div>
                                        <p className="text-xs text-[#8A7654] uppercase tracking-widest">{ui.mainRoleLabel}</p>
                                        <h3 className="font-semibold text-[#F0E8D2]">{p.mainRole.title}</h3>
                                    </div>
                                </div>
                                <ul className="space-y-2.5 text-[#C8B890] text-sm list-disc pl-5">
                                    {p.mainRole.items.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </motion.div>
                        </section>

                        <div className="h-px bg-gradient-to-r from-transparent via-[#C8B890]/20 to-transparent" />

                        {/* Analysis */}
                        <section id="analyse" className="scroll-mt-24">
                            <SectionTitle label={ui.analysisSection} title={ui.analysisTitle} />
                            <div className="flex flex-col gap-10">
                                {p.analysis.map((block, i) => (
                                    <motion.div key={i} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.1 }}
                                        className={`grid ${(block.image || block.pdfPreview) ? "md:grid-cols-[3fr_2fr]" : "grid-cols-1"} gap-8 items-start`}>
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-lg font-semibold text-[#F0E8D2]">{block.heading}</h3>
                                            <p className="text-[#C8B890] leading-relaxed text-sm">{block.text}</p>
                                        </div>
                                        {block.image && (
                                            <div className="flex flex-col gap-2">
                                                <div className="rounded-xl overflow-hidden border border-[#C8B890]/10 h-52">
                                                    <Image src={block.image} alt={block.imageCaption || block.heading} width={500} height={360} className="w-full h-full object-cover" />
                                                </div>
                                                {block.imageCaption && <p className="text-xs text-[#8A7654]/80 text-center italic">{block.imageCaption}</p>}
                                            </div>
                                        )}
                                        {block.pdfPreview && (
                                            <div className="flex flex-col gap-2">
                                                <div className="rounded-xl overflow-hidden border border-[#C8B890]/10 h-64">
                                                    <iframe src={`${block.pdfPreview}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`} className="w-full h-full border-0" title={block.pdfCaption || "Document"} />
                                                </div>
                                                {block.pdfCaption && <p className="text-xs text-[#8A7654]/80 text-center italic">{block.pdfCaption}</p>}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        <div className="h-px bg-gradient-to-r from-transparent via-[#C8B890]/20 to-transparent" />

                        {/* Documents */}
                        <section id="documents" className="scroll-mt-24">
                            <SectionTitle label={ui.deliverables} title={ui.docsTitle} />
                            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
                                {p.documents.map((doc, i) => <DocumentCard key={i} doc={doc} onClick={() => setViewerIndex(i)} />)}
                            </motion.div>
                            {viewerIndex !== null && (
                                <DocumentViewer documents={p.documents} initialIndex={viewerIndex} onClose={() => setViewerIndex(null)} />
                            )}
                        </section>

                        {/* Navigation */}
                        <div className="flex flex-wrap justify-end items-center gap-4 pt-4">
                            <Link href="/projets/gecko-pulco" className="inline-flex items-center gap-2 rounded-xl bg-white text-[#1A0E04] px-5 py-2.5 font-medium hover:bg-[#F0E8D2] transition text-sm">
                                {ui.nextProject}
                            </Link>
                        </div>
                    </main>
                </div>

                <footer className="border-t border-[#C8B890]/10 mt-8">
                    <div className="mx-auto max-w-7xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-[#8A7654]">
                        <span>© {new Date().getFullYear()} Lou-Ann Barry.</span>
                        <div className="flex items-center gap-4">
                            <a href={LINKS.github} className="hover:text-[#F0E8D2] transition"><Github className="h-4 w-4" /></a>
                            <a href={LINKS.linkedin} className="hover:text-[#F0E8D2] transition"><Linkedin className="h-4 w-4" /></a>
                            <a href={`mailto:${LINKS.email}`} className="hover:text-[#F0E8D2] transition"><Mail className="h-4 w-4" /></a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
