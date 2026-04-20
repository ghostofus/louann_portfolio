"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, ArrowLeft, Settings2, Gamepad2, Palette } from "lucide-react";

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
const fadeLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { animate: { transition: { staggerChildren: 0.12 } } };

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
        const onResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
        window.addEventListener("resize", onResize);
        return () => { cancelAnimationFrame(animationId); window.removeEventListener("resize", onResize); };
    }, []);
    return <canvas ref={canvasRef} style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
}

function Divider() {
    return (
        <div className="mx-auto max-w-6xl px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#C3D0F6]/20 to-transparent" />
        </div>
    );
}

function Header() {
    return (
        <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#080f1e]/70 border-b border-[#C3D0F6]/10">
            <div className="mx-auto max-w-6xl px-6">
                <div className="flex items-center justify-between py-4">
                    <Link href="/" className="flex items-center gap-2 text-[#C3D0F6] text-sm hover:text-[#EDF0FC] transition">
                        <ArrowLeft className="h-4 w-4" /> Retour au portfolio
                    </Link>
                    <div className="flex items-center gap-4">
                        <a href={LINKS.github} className="text-[#8BA8EE] hover:text-[#EDF0FC] transition"><Github className="h-4 w-4" /></a>
                        <a href={LINKS.linkedin} className="text-[#8BA8EE] hover:text-[#EDF0FC] transition"><Linkedin className="h-4 w-4" /></a>
                        <a href={LINKS.resumeUrl} download className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-3 py-1.5 text-sm text-[#C3D0F6] hover:bg-[#1F3E71]/35 transition">
                            <Download className="h-4 w-4" /> CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

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

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#080f1e] text-[#EDF0FC] selection:bg-[#4782E4]/30" style={{ position: "relative" }}>
            <StarField />
            <div style={{ position: "relative", zIndex: 1 }}>
                <Header />
                <main>

                    {/* ——— SECTION 1 : Texte gauche + Photo droite ——— */}
                    <section className="relative overflow-hidden mx-auto max-w-6xl px-6 py-20 md:py-28">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_35%_at_70%_50%,rgba(71,130,228,0.12),transparent_60%)]" />
                        <motion.div variants={stagger} initial="initial" animate="animate"
                            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                            <div className="flex flex-col gap-6">
                                <motion.div variants={fadeUp}>
                                    <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-2">À propos de moi</p>
                                    <h1 className="text-4xl font-semibold tracking-tight">Qui suis-je ?</h1>
                                </motion.div>
                                <motion.p variants={fadeUp} className="text-[#C3D0F6] leading-relaxed">
                                    Je m'appelle Lou-Ann Barry, j'ai 20 ans et je suis étudiante en Game Design à l'ICAN Lyon. Mais puisque vous êtes sur cette page, vous voulez en savoir un peu plus.
                                </motion.p>
                                <motion.p variants={fadeUp} className="text-[#C3D0F6] leading-relaxed">
                                    Passionnée par le jeu vidéo depuis toujours, j'ai grandi avec des jeux qui m'ont appris que les histoires les plus fortes se racontent à travers l'interactivité. C'est cette conviction qui m'a poussée vers le Game Design, et plus précisément vers la <strong className="text-[#EDF0FC]">production</strong>.
                                </motion.p>
                                <motion.p variants={fadeUp} className="text-[#C3D0F6] leading-relaxed">
                                    Au fil de mes projets — d'un souls-like en Unreal Engine 5 à un jeu de société coopératif — j'ai réalisé que mon vrai point fort est la <strong className="text-[#EDF0FC]">coordination des équipes</strong> et la <strong className="text-[#EDF0FC]">vision globale du projet</strong>.
                                </motion.p>
                                <motion.p variants={fadeUp} className="text-[#C3D0F6] leading-relaxed">
                                    Mon stage chez StellarPunk m'a confirmé cette direction : j'aime être à la croisée entre la vision artistique et les contraintes de production, au service du jeu et de l'équipe.
                                </motion.p>
                            </div>

                            <motion.div variants={fadeUp} className="flex justify-center md:justify-end">
                                <Image src="/moi.png" alt="Photo de Lou-Ann Barry" width={420} height={500}
                                    className="rounded-3xl object-cover shadow-2xl border border-[#C3D0F6]/10" priority />
                            </motion.div>
                        </motion.div>
                    </section>

                    <Divider />

                    {/* ——— SECTION 2 : Photo gauche + "Ce qui me motive" droite ——— */}
                    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
                            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                            <motion.div variants={fadeLeft} className="flex justify-center md:justify-start">
                                <Image src="/moi.png" alt="Lou-Ann Barry" width={420} height={500}
                                    className="rounded-3xl object-cover shadow-2xl border border-[#C3D0F6]/10" />
                            </motion.div>

                            <motion.div variants={fadeUp} className="flex flex-col gap-6">
                                <div>
                                    <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-2">Ma vision</p>
                                    <h2 className="text-3xl font-semibold tracking-tight">Qu'est-ce qui me motive ?</h2>
                                </div>
                                <div className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7 flex flex-col gap-4">
                                    <p className="text-[#C3D0F6] leading-relaxed">
                                        En tant que productrice, ce qui me drive c'est de créer le jeu le plus abouti possible — en sachant que la perfection n'existe pas, mais qu'on peut toujours s'en approcher.
                                    </p>
                                    <p className="text-[#C3D0F6] leading-relaxed">
                                        Pour y arriver, je me concentre sur l'amélioration et le soutien des personnes autour de moi. Créer un jeu est un effort d'équipe, et faciliter la progression de chacun tout au long du développement est l'un de mes moteurs principaux.
                                    </p>
                                    <p className="text-[#C3D0F6] leading-relaxed">
                                        C'est, selon moi, la base du succès — et ce que je cherche à atteindre dans chaque équipe dont je fais partie.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </section>

                    <Divider />

                    {/* ——— SECTION 3 : 3 domaines (cards de ton portfolio) ——— */}
                    <section className="mx-auto max-w-6xl px-6 py-20">
                        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="mb-12">
                            <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-2">Mes domaines</p>
                            <h2 className="text-3xl font-semibold tracking-tight">Ce que je fais</h2>
                        </motion.div>

                        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
                            className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Settings2, title: "Production & Gestion", desc: "Agile, Waterfall, Kanban, Scrum · JIRA, Notion · Roadmapping, Risk Management, Sprint Planning" },
                                { icon: Gamepad2, title: "Game Design & Level Design", desc: "Conception de mécaniques · Écriture narrative · Unreal Engine 5 · Unity 6 · Jeux de société" },
                                { icon: Palette, title: "Direction Artistique & TechArt", desc: "Identité visuelle · Cohérence artistique · Coordination Art & Technique · Charte graphique" },
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp}
                                    className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7 flex flex-col items-center text-center gap-4">
                                    <item.icon className="h-10 w-10 text-[#EDF0FC]" strokeWidth={1.5} />
                                    <h3 className="text-sm font-semibold text-[#EDF0FC] uppercase tracking-wider">{item.title}</h3>
                                    <p className="text-[#8BA8EE] text-sm italic leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    <Divider />

                    {/* ——— SECTION CONTACT (style de ton portfolio) ——— */}
                    <section className="mx-auto max-w-6xl px-6 py-20">
                        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                            className="rounded-3xl border border-[#C3D0F6]/10 bg-gradient-to-br from-[#1F3E71]/30 to-[#0D1F3E]/20 p-12 text-center">
                            <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-2">Me contacter</p>
                            <h2 className="text-3xl font-semibold tracking-tight mb-3">On se parle ?</h2>
                            <p className="text-[#C3D0F6] mb-8">
                                N'hésitez pas à me contacter à tout moment, je répondrai le plus vite possible.
                            </p>
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
