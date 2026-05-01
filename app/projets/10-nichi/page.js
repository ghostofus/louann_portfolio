"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, Linkedin, Mail, Users, Clock, Monitor, FileText, X } from "lucide-react";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { animate: { transition: { staggerChildren: 0.14 } } };

const PROJECT = {
    title: "10 Nichi!",
    period: "2023",
    engine: "Jeu de société",
    platform: "Physique",
    teamSize: "4",
    duration: "4 mois",
    src: "/10nichi.png",
    summary: `10-Nichi ! est un jeu de plateau coopératif pour 3 à 5 joueurs, dans lequel les joueurs incarnent des Samouraïs chargés de protéger un village menacé dans le Japon féodal. Leur objectif est de faire survivre la population pendant 10 jours, en attendant l’arrivée des renforts du Shogun.`,
    keyFeatures: [
        { title: "Gestion stratégique du village sous pression temporelle", description: "Les joueurs doivent coopérer pour faire survivre un village pendant 10 jours, en gérant simultanément ressources, population et défense. Chaque décision impacte directement la survie collective : mal nourrir les villageois ou mal anticiper les besoins peut entraîner des pertes irréversibles et compromettre la victoire." },
        { title: "Système d’événements et de bénédictions dynamiques", description: "Le jeu repose sur un système d’aléas (événements, climat, bénédictions ou malédictions des Kami) qui viennent perturber la stratégie des joueurs. Chaque journée apporte son lot d’imprévus, obligeant les joueurs à s’adapter constamment et à coopérer pour limiter les conséquences négatives." },
        { title: "Placement tactique des unités et optimisation des actions", description: "Chaque jour, les joueurs placent leurs Samouraïs et villageois sur différents emplacements (récolte, défense, production), créant une couche stratégique forte. Il faut optimiser les placements pour produire des ressources tout en protégeant le village des menaces, avec des choix parfois risqués entre sécurité et rendement." },
    ],
    mainRole: {
        title: "Conceptrice de jeu",
        items: [
            "Participer à la conception des mécaniques et des règles du jeu, avec itérations successives basées sur les retours des sessions de test.",
            "Créer les illustrations et icônes des éléments de jeu (gourde, feu, etc.) sur Illustrator.",
            "Animer les sessions de playtesting : présentation des règles, observation des joueurs et collecte de feedback structuré.",
            "Présenter le jeu devant un jury et auprès de testeurs externes.",
        ],
    },
    secondaryRole: null,
    analysis: [
        { heading: "Conception du jeu", text: `Le développement de 10-Nichi ! s’est construit autour d’un concept central : proposer une expérience coopérative où les joueurs doivent gérer un village sous pression sur une durée limitée de 10 jours. Dès les premières phases de conception, l’objectif était de créer une tension constante entre gestion de ressources, défense et prise de décision collective.Les premières versions du jeu étaient plus simples dans leur structure, mais rapidement, des mécaniques ont été ajoutées pour enrichir la profondeur stratégique, comme le système de phases journalières (matin, journée, soir) et l’introduction d’événements aléatoires.Au fil des itérations, certaines mécaniques ont été ajustées ou simplifiées pour améliorer la lisibilité du jeu. Par exemple, la gestion des ressources et du Grenier a été clarifiée afin de rendre les choix plus compréhensibles pour les joueurs. L’ajout des bénédictions et malédictions des Kami a également permis de renforcer l’aspect imprévisible et la rejouabilité.L’équilibrage a été un point central du processus, notamment pour trouver un bon compromis entre difficulté et accessibilité. L’objectif n’était pas de créer un jeu punitif, mais un jeu exigeant où la coopération et la communication sont essentielles.`, image: "/10nichi/Images/cartes.png", imageCaption: "Les cartes du jeu" },
        { heading: "Sessions de playtesting", text: `Les sessions de playtesting ont été essentielles pour affiner les mécaniques et valider les choix de design. Elles ont été organisées de manière régulière, en impliquant à la fois des membres de l’équipe et des joueurs extérieurs afin d’obtenir des retours variés.Lors de ces sessions, plusieurs observations ont été faites. Tout d’abord, les joueurs avaient tendance à sous-estimer l’importance de la gestion de la nourriture, ce qui entraînait rapidement des situations critiques. Cela a permis de rééquilibrer certains aspects pour mieux guider les joueurs dans leurs priorités.Les retours ont également mis en évidence une forte appréciation du côté coopératif du jeu, notamment dans les phases de discussion et de prise de décision collective. En revanche, certains joueurs pouvaient se sentir perdus face à la quantité d’informations et de règles au début de la partie, ce qui a conduit à simplifier certaines explications et à améliorer la clarté du livret.Un point particulièrement intéressant a été de constater que les moments les plus marquants pour les joueurs étaient liés aux imprévus (événements, malédictions), confirmant l’intérêt de conserver une part d’aléatoire forte dans l’expérience.`, image: "/10nichi/Images/plateau.png", imageCaption: "Le plateau de jeu" },
        { heading: "Défis et apprentissages", text: `Le principal défi du projet a été l’équilibrage du jeu. Concevoir un système à la fois stratégique, coopératif et dépendant d’aléas nécessite de nombreux ajustements pour éviter qu’une partie soit trop facile ou, au contraire, frustrante.Un autre défi important a été la complexité des règles. Il a fallu trouver un équilibre entre richesse mécanique et accessibilité, afin de ne pas décourager les joueurs dès les premières parties.Ce projet a également permis de mieux comprendre l’importance du playtesting dans la conception d’un jeu de société. Les retours des joueurs ont été essentiels pour identifier des problèmes qui n’étaient pas visibles en interne, notamment sur la compréhension des règles et le ressenti global.Enfin, ce travail a renforcé des compétences en conception systémique, en équilibrage et en travail d’équipe. Il a mis en évidence l’importance de l’itération, de l’écoute des retours et de la capacité à remettre en question ses idées initiales pour améliorer l’expérience finale.`, image: null },
    ],
    documents: [
        { title: "Livret de Règles", description: " Il contient tout les éléments suivants : Un cadre général sur l'univers et l'ambiance de notre JdS", cover: null, file: "/10nichi/Documents/10-Nichi !.pdf", type: "pdf" },
    ],
    screenshots: [
        "/10nichi/samourai.png",
        "/10nichi/plateau.jpg",
    ],
};

const LINKS = { github: "https://github.com/", linkedin: "https://linkedin.com/in/", email: "louann.barry05@gmail.com" };
const NAV_ITEMS = [
    { label: "Infos générales", href: "#general" },
    { label: "Rôle & Responsabilités", href: "#roles" },
    { label: "Analyse", href: "#analyse" },
    { label: "Documents", href: "#documents" },
];

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
    const screens = PROJECT.screenshots;
    const prev = () => setCurrent((c) => (c - 1 + Math.max(screens.length, 1)) % Math.max(screens.length, 1));
    const next = () => setCurrent((c) => (c + 1) % Math.max(screens.length, 1));
    if (screens.length === 0) {
        return (
            <div className="rounded-3xl border border-dashed border-[#C3D0F6]/20 bg-[#0D1F3E]/40 h-80 flex flex-col items-center justify-center gap-2">
                <p className="text-[#8BA8EE] text-sm">Screenshots à ajouter</p>
                <p className="text-xs text-[#8BA8EE]/50">Remplis le tableau screenshots[] dans PROJECT</p>
            </div>
        );
    }
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
        <motion.div variants={fadeUp} onClick={onClick}
            className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 overflow-hidden cursor-pointer hover:border-[#8BA8EE]/40 transition-all group">
            <div className="h-44 bg-[#0D1F3E]/60 overflow-hidden flex items-center justify-center">
                {doc.cover ? (
                    <img src={doc.cover} alt={doc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                ) : doc.type === "pdf" ? (
                    <iframe src={`${doc.file}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`} className="w-full h-full border-0 pointer-events-none" title={doc.title} />
                ) : (
                    <div className="flex flex-col items-center gap-2">
                        <FileText className="h-12 w-12 text-[#4782E4]/50" />
                        <span className="text-xs text-[#8BA8EE]/60 uppercase tracking-wider">Image</span>
                    </div>
                )}
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
                <div>
                    <h3 className="font-semibold text-[#EDF0FC]">{doc.title}</h3>
                    {documents.length > 1 && <p className="text-xs text-[#8BA8EE] mt-0.5">{index + 1} / {documents.length}</p>}
                </div>
                <button onClick={onClose} className="rounded-xl border border-[#C3D0F6]/20 p-2 hover:bg-[#1F3E71]/35 transition">
                    <X className="h-5 w-5 text-[#EDF0FC]" />
                </button>
            </div>
            <div className="flex-1 relative overflow-hidden">
                {doc.type === "pdf" ? (
                    <iframe src={doc.file} className="w-full h-full border-0" title={doc.title} />
                ) : (
                    <img src={doc.file} alt={doc.title} className="w-full h-full object-contain p-4" />
                )}
                {documents.length > 1 && index > 0 && (
                    <button onClick={() => setIndex(i => i - 1)} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-[#080f1e]/80 backdrop-blur p-3 hover:bg-[#1F3E71] transition">
                        <ChevronLeft className="h-6 w-6 text-[#EDF0FC]" />
                    </button>
                )}
                {documents.length > 1 && index < documents.length - 1 && (
                    <button onClick={() => setIndex(i => i + 1)} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-[#080f1e]/80 backdrop-blur p-3 hover:bg-[#1F3E71] transition">
                        <ChevronRight className="h-6 w-6 text-[#EDF0FC]" />
                    </button>
                )}
            </div>
            <div className="px-6 py-4 border-t border-[#C3D0F6]/10 flex-shrink-0 bg-[#080f1e]/80">
                <p className="text-[#C3D0F6] text-sm leading-relaxed">{doc.description}</p>
            </div>
        </div>
    );
}

function SectionTitle({ label, title }) {
    return <div className="mb-8"><p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-2">{label}</p><h2 className="text-2xl font-semibold tracking-tight">{title}</h2></div>;
}

function Sidebar() {
    return (
        <aside className="hidden lg:flex flex-col gap-1 w-52 flex-shrink-0 sticky top-24">
            <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-3 px-3">{PROJECT.title}</p>
            {NAV_ITEMS.map((item) => (
                <a key={item.href} href={item.href} className="px-3 py-2 rounded-xl text-sm text-[#C3D0F6] hover:text-[#EDF0FC] hover:bg-[#1F3E71]/30 transition">{item.label}</a>
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
    );
}

export default function Projet10Nichi() {
    const [viewerIndex, setViewerIndex] = React.useState(null);
    return (
        <div className="min-h-screen bg-[#080f1e] text-[#EDF0FC]" style={{ position: "relative" }}>
            <StarField />
            <div style={{ position: "relative", zIndex: 1 }}>
                <div className="sticky top-0 z-50 backdrop-blur bg-[#080f1e]/70 border-b border-[#C3D0F6]/10">
                    <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
                        <Link href="/" className="inline-flex items-center gap-2 text-[#8BA8EE] hover:text-[#EDF0FC] transition text-sm"><ChevronLeft className="h-4 w-4" /> Retour au portfolio</Link>
                        <span className="font-semibold text-[#EDF0FC] hidden md:block">{PROJECT.title}</span>
                    </div>
                </div>
                <div className="mx-auto max-w-7xl px-6 pt-10 pb-0">
                    <motion.div variants={fadeUp} initial="initial" animate="animate" className="grid md:grid-cols-2 gap-4">
                        <div className="rounded-3xl overflow-hidden border border-[#C3D0F6]/10 h-80">
                            <Image src={PROJECT.src} alt={PROJECT.title} width={700} height={400} className="w-full h-full object-cover" priority />
                        </div>
                        <ScreenshotCarousel />
                    </motion.div>
                </div>
                <div className="mx-auto max-w-7xl px-6 py-10 flex gap-10 items-start">
                    <Sidebar />
                    <main className="flex-1 min-w-0 flex flex-col gap-16">

                        <section id="general" className="scroll-mt-24">
                            <SectionTitle label="Le projet" title="Informations générales" />
                            <div className="grid md:grid-cols-2 gap-8">
                                <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7 flex flex-col gap-3">
                                    <h3 className="text-sm font-semibold text-[#8BA8EE] uppercase tracking-widest">Résumé du jeu</h3>
                                    <p className="text-[#C3D0F6] text-sm leading-relaxed">{PROJECT.summary}</p>
                                </motion.div>
                                <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7 flex flex-col gap-4">
                                    <h3 className="text-sm font-semibold text-[#8BA8EE] uppercase tracking-widest">Infos de développement</h3>
                                    {[{ label: "Taille de l'équipe", value: `${PROJECT.teamSize} personnes` }, { label: "Durée du projet", value: PROJECT.duration }, { label: "Type", value: PROJECT.engine }, { label: "Support", value: PROJECT.platform }].map((info, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-[#C3D0F6]/10 pb-2 last:border-0 last:pb-0">
                                            <span className="text-xs text-[#8BA8EE]">{info.label}</span>
                                            <span className="text-sm font-medium text-[#EDF0FC]">{info.value}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6 mt-6">
                                {PROJECT.keyFeatures.map((f, i) => (
                                    <motion.div key={i} variants={fadeUp} className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-6 flex flex-col gap-3">
                                        <h3 className="text-sm font-semibold text-[#EDF0FC]">{f.title}</h3>
                                        <p className="text-[#C3D0F6] text-sm leading-relaxed">{f.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </section>

                        <div className="h-px bg-gradient-to-r from-transparent via-[#C3D0F6]/20 to-transparent" />

                        <section id="roles" className="scroll-mt-24">
                            <SectionTitle label="Ma contribution" title="Rôle & Responsabilités" />
                            <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="rounded-xl bg-[#4782E4]/15 p-2.5"><Users className="h-5 w-5 text-[#4782E4]" /></div>
                                    <div><p className="text-xs text-[#8BA8EE] uppercase tracking-widest">Rôle principal</p><h3 className="font-semibold text-[#EDF0FC]">{PROJECT.mainRole.title}</h3></div>
                                </div>
                                <ul className="space-y-2.5 text-[#C3D0F6] text-sm list-disc pl-5">
                                    {PROJECT.mainRole.items.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                            </motion.div>
                        </section>

                        <div className="h-px bg-gradient-to-r from-transparent via-[#C3D0F6]/20 to-transparent" />

                        <section id="analyse" className="scroll-mt-24">
                            <SectionTitle label="Retour d'expérience" title="Analyse & Processus" />
                            <div className="flex flex-col gap-10">
                                {PROJECT.analysis.map((block, i) => (
                                    <motion.div key={i} variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.1 }} className={`grid ${block.image ? "md:grid-cols-[3fr_2fr]" : "grid-cols-1"} gap-8 items-start`}>
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-lg font-semibold text-[#EDF0FC]">{block.heading}</h3>
                                            <p className="text-[#C3D0F6] leading-relaxed text-sm">{block.text}</p>
                                        </div>
                                        {block.image && (
                                            <div className="flex flex-col gap-2">
                                                <div className="rounded-xl overflow-hidden border border-[#C3D0F6]/10">
                                                    <Image src={block.image} alt={block.imageCaption || block.heading} width={500} height={360} className="w-full object-cover" />
                                                </div>
                                                {block.imageCaption && <p className="text-xs text-[#8BA8EE]/80 text-center italic">{block.imageCaption}</p>}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        <div className="h-px bg-gradient-to-r from-transparent via-[#C3D0F6]/20 to-transparent" />

                        <section id="documents" className="scroll-mt-24">
                            <SectionTitle label="Livrables" title="Documents de production" />
                            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
                                {PROJECT.documents.map((doc, i) => (
                                    <DocumentCard key={i} doc={doc} onClick={() => setViewerIndex(i)} />
                                ))}
                            </motion.div>
                            {viewerIndex !== null && (
                                <DocumentViewer documents={PROJECT.documents} initialIndex={viewerIndex} onClose={() => setViewerIndex(null)} />
                            )}
                        </section>

                        <div className="flex flex-wrap justify-between items-center gap-4 pt-4">
                            <Link href="/projets/figure-out" className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-5 py-2.5 text-sm hover:bg-[#1F3E71]/35 transition"><ChevronLeft className="h-4 w-4" /> Projet précédent : Figure Out</Link>
                            <Link href="/#projets" className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0D1F3E] px-5 py-2.5 font-medium hover:bg-[#EDF0FC] transition text-sm">Voir tous les projets →</Link>
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
