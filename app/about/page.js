"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, ArrowLeft, MapPin, GraduationCap, Heart } from "lucide-react";

const LINKS = {
    resumeUrl: "/CV.pdf",
    email: "louann.barry05@gmail.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
};

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
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

// ——— Header ———
function Header() {
    return (
        <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#080f1e]/70 border-b border-[#C3D0F6]/10">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex items-center justify-between py-4">
                    <Link href="/" className="flex items-center gap-2 text-[#C3D0F6] text-sm hover:text-[#EDF0FC] transition">
                        <ArrowLeft className="h-4 w-4" />
                        Retour au portfolio
                    </Link>
                    <div className="flex items-center gap-4">
                        <a href={LINKS.github} className="text-[#8BA8EE] hover:text-[#EDF0FC] transition" aria-label="GitHub">
                            <Github className="h-4 w-4" />
                        </a>
                        <a href={LINKS.linkedin} className="text-[#8BA8EE] hover:text-[#EDF0FC] transition" aria-label="LinkedIn">
                            <Linkedin className="h-4 w-4" />
                        </a>
                        <a href={LINKS.resumeUrl} download
                            className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-3 py-1.5 text-sm text-[#C3D0F6] hover:bg-[#1F3E71]/35 transition">
                            <Download className="h-4 w-4" /> CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
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

// ——— Page ———
export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#080f1e] text-[#EDF0FC] selection:bg-[#4782E4]/30" style={{ position: "relative" }}>
            <StarField />
            <div style={{ position: "relative", zIndex: 1 }}>
                <Header />
                <main>
                    {/* ——— Hero ——— */}
                    <section className="relative overflow-hidden">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(71,130,228,0.18),transparent_60%)]" />
                        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                            <motion.div variants={stagger} initial="initial" animate="animate"
                                className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                                <div className="flex flex-col gap-5">
                                    <motion.p variants={fadeUp} className="text-xs text-[#8BA8EE] uppercase tracking-widest">
                                        À propos de moi
                                    </motion.p>
                                    <motion.h1 variants={fadeUp} className="text-4xl/tight md:text-5xl/tight font-semibold tracking-tight">
                                        Lou-Ann Barry
                                    </motion.h1>
                                    <motion.p variants={fadeUp} className="text-[#8BA8EE] text-lg">
                                        Game Designer · Productrice en devenir
                                    </motion.p>
                                    <motion.div variants={fadeUp} className="flex flex-wrap gap-3 text-sm text-[#C3D0F6]">
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C3D0F6]/15 bg-[#0D1F3E]/40 px-3 py-1">
                                            <MapPin className="h-3.5 w-3.5 text-[#8BA8EE]" /> Lyon, France
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C3D0F6]/15 bg-[#0D1F3E]/40 px-3 py-1">
                                            <GraduationCap className="h-3.5 w-3.5 text-[#8BA8EE]" /> ICAN Lyon · 3ème année
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C3D0F6]/15 bg-[#0D1F3E]/40 px-3 py-1">
                                            <Heart className="h-3.5 w-3.5 text-[#8BA8EE]" /> 20 ans
                                        </span>
                                    </motion.div>
                                    <motion.div variants={fadeUp} className="flex gap-3 pt-2">
                                        <a href={`mailto:${LINKS.email}`}
                                            className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0D1F3E] px-5 py-2.5 font-medium hover:bg-[#EDF0FC] transition text-sm">
                                            <Mail className="h-4 w-4" /> Me contacter
                                        </a>
                                        <a href={LINKS.resumeUrl} download
                                            className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-5 py-2.5 text-sm hover:bg-[#1F3E71]/35 transition">
                                            <Download className="h-4 w-4" /> Mon CV
                                        </a>
                                    </motion.div>
                                </div>

                                <motion.div variants={fadeUp} className="flex justify-center md:justify-end">
                                    <Image src="/moi.png" alt="Photo de Lou-Ann Barry" width={380} height={460}
                                        className="rounded-3xl object-cover shadow-2xl border border-[#C3D0F6]/10" priority />
                                </motion.div>
                            </motion.div>
                        </div>
                    </section>

                    {/* ——— Divider ——— */}
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-[#C3D0F6]/20 to-transparent" />
                    </div>

                    {/* ——— Mon histoire ——— */}
                    <section className="mx-auto max-w-6xl px-6 py-20">
                        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
                            className="grid md:grid-cols-2 gap-12 md:gap-20">

                            <div className="flex flex-col gap-6">
                                <motion.div variants={fadeUp}>
                                    <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-2">Mon histoire</p>
                                    <h2 className="text-2xl font-semibold tracking-tight">Parcours & motivations</h2>
                                </motion.div>
                                <motion.p variants={fadeUp} className="text-[#C3D0F6] leading-relaxed">
                                    Passionnée par le jeu vidéo depuis mon enfance, j'ai toujours été fascinée par la façon dont les jeux arrivent à raconter des histoires, créer des émotions et rassembler des gens. C'est cette passion qui m'a poussée vers une formation en Game Design à l'ICAN Lyon.
                                </motion.p>
                                <motion.p variants={fadeUp} className="text-[#C3D0F6] leading-relaxed">
                                    Au fil de mes projets, j'ai découvert que ma vraie force — et ma vraie envie — se trouve dans la <strong className="text-[#EDF0FC]">coordination des équipes</strong> et la <strong className="text-[#EDF0FC]">vision globale du projet</strong>. Orchestrer les différents pôles créatifs, maintenir le cap, anticiper les risques : c'est ça qui me fait vibrer.
                                </motion.p>
                                <motion.p variants={fadeUp} className="text-[#C3D0F6] leading-relaxed">
                                    Mon stage chez StellarPunk m'a confirmé cette direction : j'aime être au centre du flux créatif, à la croisée entre la vision artistique et les contraintes techniques et de production.
                                </motion.p>
                            </div>

                            <div className="flex flex-col gap-6">
                                <motion.div variants={fadeUp}>
                                    <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-2">Ma formation</p>
                                    <h2 className="text-2xl font-semibold tracking-tight">ICAN Lyon</h2>
                                </motion.div>

                                <motion.div variants={fadeUp}
                                    className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7 flex flex-col gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="rounded-2xl bg-[#4782E4]/20 p-3">
                                            <GraduationCap className="h-6 w-6 text-[#8BA8EE]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-[#EDF0FC]">Bachelor Game Design</h3>
                                            <p className="text-[#8BA8EE] text-sm">Spécialisation TechArt · 3ème année</p>
                                            <p className="text-[#C3D0F6] text-sm mt-1">ICAN — Institut de Création et Animation Numériques, Lyon</p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-[#C3D0F6]/10" />
                                    <ul className="space-y-2 text-[#C3D0F6] text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4782E4] flex-shrink-0" />
                                            Game Design & Level Design
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4782E4] flex-shrink-0" />
                                            Gestion de projet Agile & Waterfall
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4782E4] flex-shrink-0" />
                                            Direction Artistique · TechArt
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4782E4] flex-shrink-0" />
                                            Unreal Engine 5 · Unity 6
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4782E4] flex-shrink-0" />
                                            Écriture narrative & Conception de jeux de société
                                        </li>
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>
                    </section>

                    {/* ——— Divider ——— */}
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-[#C3D0F6]/20 to-transparent" />
                    </div>

                    {/* ——— Valeurs ——— */}
                    <section className="mx-auto max-w-6xl px-6 py-20">
                        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="mb-12">
                            <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-2">Ce qui me définit</p>
                            <h2 className="text-2xl font-semibold tracking-tight">Ma vision de la production</h2>
                        </motion.div>

                        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
                            className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Humain avant tout",
                                    body: "Je crois qu'une équipe épanouie fait les meilleurs jeux. Mon rôle de productrice, c'est d'abord de créer un environnement où chacun peut donner le meilleur de lui-même.",
                                },
                                {
                                    title: "Vision globale",
                                    body: "Comprendre les contraintes de chaque pôle — art, code, design — pour trouver les compromis intelligents et garder le cap sur la vision créative du projet.",
                                },
                                {
                                    title: "Rigueur & Créativité",
                                    body: "La production ce n'est pas étouffer la créativité, c'est lui donner un cadre pour s'épanouir. Roadmaps, sprints, KPIs : des outils au service du jeu, pas l'inverse.",
                                },
                            ].map((v, i) => (
                                <motion.div key={i} variants={fadeUp}
                                    className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7 flex flex-col gap-3">
                                    <h3 className="font-semibold text-[#EDF0FC]">{v.title}</h3>
                                    <p className="text-[#C3D0F6] text-sm leading-relaxed">{v.body}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    {/* ——— Divider ——— */}
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="h-px bg-gradient-to-r from-transparent via-[#C3D0F6]/20 to-transparent" />
                    </div>

                    {/* ——— CTA Contact ——— */}
                    <section className="mx-auto max-w-6xl px-6 py-20">
                        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                            className="rounded-3xl border border-[#C3D0F6]/10 bg-gradient-to-br from-[#1F3E71]/30 to-[#0D1F3E]/20 p-12 text-center">
                            <h2 className="text-3xl font-semibold tracking-tight mb-3">On se parle ?</h2>
                            <p className="text-[#C3D0F6] mb-8">Une opportunité, un projet, une question ? Je suis disponible.</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                <a href={`mailto:${LINKS.email}`}
                                    className="inline-flex items-center gap-2 rounded-xl bg-white text-[#0D1F3E] px-5 py-2.5 font-medium hover:bg-[#EDF0FC] transition text-sm">
                                    <Mail className="h-4 w-4" /> {LINKS.email}
                                </a>
                                <a href={LINKS.linkedin}
                                    className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-5 py-2.5 text-sm hover:bg-[#1F3E71]/35 transition">
                                    <Linkedin className="h-4 w-4" /> LinkedIn
                                </a>
                                <Link href="/#projets"
                                    className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-5 py-2.5 text-sm hover:bg-[#1F3E71]/35 transition">
                                    Voir mes projets
                                </Link>
                            </div>
                        </motion.div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}
