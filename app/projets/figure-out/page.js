"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Users, Clock, Trophy, ChevronLeft, Github, Linkedin, Mail } from "lucide-react";

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { animate: { transition: { staggerChildren: 0.12 } } };

// ——— Données à remplir ———
const PROJECT = {
    title: "Figure Out",
    period: "2023/2024",
    role: "Directrice Artistique",
    summary: "Click & Point 3D développé sous Unreal Engine.",
    src: "/figureout.jpg",
    teamSize: "À remplir",
    duration: "À remplir",
    awards: "À remplir",
    description: `À remplir — décris ici ton projet en quelques phrases. De quoi s'agit-il ? Quel était le contexte ? Quelle était ta mission principale ?`,
    mainRole: {
        title: "À remplir — Titre de ton rôle principal",
        items: [
            "À remplir — première responsabilité",
            "À remplir — deuxième responsabilité",
            "À remplir — troisième responsabilité",
            "À remplir — quatrième responsabilité",
        ],
    },
    secondaryRole: null, // Mets un objet { title, items } si tu avais un rôle secondaire, sinon laisse null
    screenshots: [], // Ajoute ici les chemins vers tes screenshots ex: ["/ira-screen1.png", "/ira-screen2.png"]
    videoUrl: "", // Lien YouTube si tu en as un
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
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.2 + 0.2,
            alpha: Math.random() * 0.5 + 0.15,
            offset: Math.random() * Math.PI * 2,
            vx: (Math.random() - 0.5) * 0.25,
            vy: (Math.random() - 0.5) * 0.25,
        }));
        let t = 0;
        const draw = () => {
            t += 0.02;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((s) => {
                s.x += s.vx; s.y += s.vy;
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
        return () => cancelAnimationFrame(animationId);
    }, []);
    return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}

export default function ProjetFigureOut() {
    return (
        <div className="min-h-screen bg-[#080f1e] text-[#EDF0FC]" style={{ position: "relative" }}>
            <StarField />
            <div style={{ position: "relative", zIndex: 1 }}>
                {/* Header */}
                <div className="sticky top-0 z-50 backdrop-blur bg-[#080f1e]/70 border-b border-[#C3D0F6]/10">
                    <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
                        <a href="/" className="inline-flex items-center gap-2 text-[#8BA8EE] hover:text-[#EDF0FC] transition text-sm">
                            <ChevronLeft className="h-4 w-4" /> Retour au portfolio
                        </a>
                        <span className="font-semibold text-[#EDF0FC] hidden md:block">Lou-Ann Barry</span>
                    </div>
                </div>

                <main className="mx-auto max-w-6xl px-6 py-16">
                    {/* Titre + résumé */}
                    <motion.div variants={stagger} initial="initial" animate="animate" className="mb-14">
                        <motion.p variants={fadeUp} className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-2">
                            {PROJECT.period}
                        </motion.p>
                        <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                            {PROJECT.title}
                        </motion.h1>
                        <motion.p variants={fadeUp} className="text-[#C3D0F6] text-lg max-w-2xl">
                            {PROJECT.summary}
                        </motion.p>
                    </motion.div>

                    {/* Image principale */}
                    <motion.div variants={fadeUp} initial="initial" animate="animate"
                        className="rounded-3xl overflow-hidden border border-[#C3D0F6]/10 mb-14">
                        <Image src={PROJECT.src} alt={PROJECT.title} width={1200} height={600} className="w-full object-cover" />
                    </motion.div>

                    {/* Stats */}
                    <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
                        className="grid grid-cols-3 gap-4 mb-14">
                        {[
                            { icon: <Users className="h-6 w-6" />, label: "Taille d'équipe", value: PROJECT.teamSize },
                            { icon: <Clock className="h-6 w-6" />, label: "Durée du projet", value: PROJECT.duration },
                            { icon: <Trophy className="h-6 w-6" />, label: "Récompenses", value: PROJECT.awards },
                        ].map((stat, i) => (
                            <motion.div key={i} variants={fadeUp}
                                className="rounded-2xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-5 text-center">
                                <div className="text-[#8BA8EE] flex justify-center mb-2">{stat.icon}</div>
                                <p className="text-xs text-[#8BA8EE] mb-1">{stat.label}</p>
                                <p className="font-medium text-[#EDF0FC]">{stat.value}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 mb-14">
                        {/* Description */}
                        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                            className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7">
                            <h2 className="text-sm font-semibold text-[#8BA8EE] uppercase tracking-widest mb-4">À propos du projet</h2>
                            <p className="text-[#C3D0F6] leading-relaxed text-sm">{PROJECT.description}</p>
                        </motion.div>

                        {/* Rôle principal */}
                        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                            className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7">
                            <h2 className="text-sm font-semibold text-[#8BA8EE] uppercase tracking-widest mb-2">Responsabilités</h2>
                            <p className="text-[#C3D0F6] text-sm italic mb-4">Rôle : {PROJECT.role}</p>
                            <ul className="space-y-2 text-[#C3D0F6] text-sm list-disc pl-5">
                                {PROJECT.mainRole.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Rôle secondaire (si applicable) */}
                    {PROJECT.secondaryRole && (
                        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                            className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7 mb-14">
                            <h2 className="text-sm font-semibold text-[#8BA8EE] uppercase tracking-widest mb-2">Rôle secondaire</h2>
                            <p className="text-[#C3D0F6] text-sm italic mb-4">{PROJECT.secondaryRole.title}</p>
                            <ul className="space-y-2 text-[#C3D0F6] text-sm list-disc pl-5">
                                {PROJECT.secondaryRole.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </motion.div>
                    )}

                    {/* Screenshots */}
                    <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                        className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7 mb-14">
                        <h2 className="text-sm font-semibold text-[#8BA8EE] uppercase tracking-widest mb-5">Screenshots</h2>
                        {PROJECT.screenshots.length > 0 ? (
                            <div className="grid grid-cols-2 gap-4">
                                {PROJECT.screenshots.map((src, i) => (
                                    <div key={i} className="rounded-2xl overflow-hidden border border-[#C3D0F6]/10">
                                        <Image src={src} alt={`Screenshot ${i + 1}`} width={600} height={340} className="w-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="aspect-video rounded-2xl bg-[#0D1F3E]/60 border border-[#C3D0F6]/10 flex items-center justify-center">
                                <p className="text-[#8BA8EE] text-sm text-center px-6">
                                    Ajoute tes screenshots en remplissant le tableau <code className="bg-[#0D1F3E] px-1 rounded">screenshots</code> en haut du fichier
                                </p>
                            </div>
                        )}
                    </motion.div>

                    {/* Retour */}
                    <div className="text-center">
                        <a href="/#projets" className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-5 py-2.5 text-sm hover:bg-[#1F3E71]/35 transition">
                            <ChevronLeft className="h-4 w-4" /> Voir tous les projets
                        </a>
                    </div>
                </main>

                {/* Footer */}
                <footer className="border-t border-[#C3D0F6]/10 mt-16">
                    <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-[#8BA8EE]">
                        <span>© {new Date().getFullYear()} Lou-Ann Barry.</span>
                        <div className="flex items-center gap-4">
                            <a href="https://github.com/" className="hover:text-[#EDF0FC] transition"><Github className="h-4 w-4" /></a>
                            <a href="https://linkedin.com/in/" className="hover:text-[#EDF0FC] transition"><Linkedin className="h-4 w-4" /></a>
                            <a href="mailto:louann.barry05@gmail.com" className="hover:text-[#EDF0FC] transition"><Mail className="h-4 w-4" /></a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
