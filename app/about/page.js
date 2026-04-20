"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, ArrowLeft, Phone, Settings2, Gamepad2, Palette } from "lucide-react";

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

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#080f1e] text-[#EDF0FC] selection:bg-[#4782E4]/30" style={{ position: "relative" }}>
            <StarField />
            <div style={{ position: "relative", zIndex: 1 }}>
                <Header />
                <main>

                    {/* ——— BANDE TITRE : À propos de moi ——— */}
                    <section className="py-10 text-center border-b border-[#C3D0F6]/10">
                        <motion.h1 variants={fadeUp} initial="initial" animate="animate"
                            className="text-4xl font-semibold tracking-tight text-[#EDF0FC]">
                            À propos de moi
                        </motion.h1>
                    </section>

                    {/* ——— SECTION 1 : Texte gauche + Photo droite ——— */}
                    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
                        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
                            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                            <motion.div variants={fadeUp} className="flex flex-col gap-6 text-[#C3D0F6] text-lg leading-relaxed">
                                <p>
                                    Je m'appelle Lou-Ann Barry, j'ai 20 ans et je suis étudiante en Game Design à l'ICAN Lyon. Mais puisque vous êtes sur cette page, vous voulez en savoir un peu plus.
                                </p>
                                <p>
                                    Passionnée par le jeu vidéo depuis toujours, j'ai grandi avec des jeux qui m'ont appris que les histoires les plus fortes se racontent à travers l'interactivité. C'est cette conviction qui m'a poussée vers le Game Design, et plus précisément vers la production.
                                </p>
                                <p>
                                    Au fil de mes projets — d'un souls-like en Unreal Engine 5 à un jeu de société coopératif — j'ai réalisé que mon vrai point fort est la <strong className="text-[#EDF0FC]">coordination des équipes</strong> et la <strong className="text-[#EDF0FC]">vision globale du projet</strong>. Faire en sorte que tout le monde avance dans la même direction, anticiper les blocages, maintenir la cohérence créative : c'est ce qui me fait vibrer.
                                </p>
                                <p>
                                    Mon stage chez StellarPunk m'a confirmé cette direction : j'aime être à la croisée entre la vision artistique et les contraintes de production, au service du jeu et de l'équipe.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeUp} className="flex justify-center md:justify-end">
                                <Image src="/moi.png" alt="Photo de Lou-Ann Barry" width={420} height={500}
                                    className="rounded-3xl object-cover shadow-2xl border border-[#C3D0F6]/10" priority />
                            </motion.div>
                        </motion.div>
                    </section>

                    {/* ——— SECTION 2 : Photo gauche + "Ce qui me motive" droite ——— */}
                    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24 border-t border-[#C3D0F6]/10">
                        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
                            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                            <motion.div variants={fadeUp} className="flex justify-center md:justify-start">
                                <Image src="/moi.png" alt="Lou-Ann Barry" width={420} height={500}
                                    className="rounded-3xl object-cover shadow-2xl border border-[#C3D0F6]/10" />
                            </motion.div>

                            <motion.div variants={fadeUp} className="flex flex-col gap-6">
                                <h2 className="text-3xl font-semibold tracking-tight text-[#EDF0FC]">
                                    Qu'est-ce qui me motive ?
                                </h2>
                                <div className="flex flex-col gap-4 text-[#C3D0F6] text-lg leading-relaxed">
                                    <p>
                                        En tant que productrice, ce qui me drive c'est de créer le jeu le plus abouti possible — en sachant que la perfection n'existe pas, mais qu'on peut toujours s'en approcher.
                                    </p>
                                    <p>
                                        Pour y arriver, je me concentre sur l'amélioration et le soutien des personnes qui m'entourent. Créer un jeu est un effort d'équipe, et faciliter la progression de toute l'équipe tout au long du développement est l'un de mes moteurs principaux — cela améliore à la fois la qualité de l'équipe et du produit final.
                                    </p>
                                    <p>
                                        C'est, selon moi, la base du succès, et ce que je cherche à atteindre dans chaque équipe dont je fais partie.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </section>

                    {/* ——— SECTION 3 : 3 icônes expertise ——— */}
                    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20 border-t border-[#C3D0F6]/10">
                        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
                            className="grid md:grid-cols-3 gap-10 text-center">
                            {[
                                { icon: Settings2, title: "Production & Gestion de projet", desc: "Agile, Waterfall, Kanban, Scrum · JIRA, Notion · Roadmapping, Risk Management, Sprint Planning" },
                                { icon: Gamepad2, title: "Game Design & Level Design", desc: "Conception de mécaniques · Écriture narrative · Unreal Engine 5 · Unity 6 · Jeux de société" },
                                { icon: Palette, title: "Direction Artistique & TechArt", desc: "Identité visuelle · Cohérence artistique · Coordination Art & Technique · Charte graphique" },
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="flex flex-col items-center gap-3">
                                    <item.icon className="h-12 w-12 text-[#EDF0FC]" strokeWidth={1.5} />
                                    <h3 className="text-sm font-semibold text-[#EDF0FC] uppercase tracking-wider">{item.title}</h3>
                                    <p className="text-[#8BA8EE] text-sm italic leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </section>

                    {/* ——— BANDE TITRE : Informations de contact ——— */}
                    <section className="py-10 text-center border-y border-[#C3D0F6]/10">
                        <motion.h2 variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                            className="text-3xl font-semibold tracking-tight text-[#EDF0FC]">
                            Informations de contact
                        </motion.h2>
                    </section>

                    {/* ——— SECTION CONTACT ——— */}
                    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
                        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}
                            className="flex flex-col items-center gap-6 text-center">
                            <motion.div variants={fadeUp}>
                                <Phone className="h-12 w-12 text-[#EDF0FC] mx-auto mb-4" strokeWidth={1.5} />
                                <p className="text-[#C3D0F6] text-lg mb-2">
                                    N'hésitez pas à me contacter à tout moment, je répondrai le plus vite possible.
                                </p>
                            </motion.div>
                            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 text-[#C3D0F6] text-lg">
                                <a href={`mailto:${LINKS.email}`} className="hover:text-[#EDF0FC] transition underline underline-offset-4">
                                    {LINKS.email}
                                </a>
                                <span className="text-[#C3D0F6]/30">·</span>
                                <a href={LINKS.linkedin} className="hover:text-[#EDF0FC] transition underline underline-offset-4">
                                    LinkedIn
                                </a>
                            </motion.div>
                        </motion.div>
                    </section>

                    {/* ——— FOOTER BANDE (comme Shane) ——— */}
                    <section className="border-t border-[#C3D0F6]/10 bg-[#1F3E71]/20 py-10">
                        <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-4 text-center">
                            <p className="text-2xl font-semibold tracking-tight text-[#EDF0FC]">Lou-Ann Barry</p>
                            <div className="flex items-center gap-6 text-[#8BA8EE]">
                                <a href={`mailto:${LINKS.email}`} className="hover:text-[#EDF0FC] transition"><Mail className="h-5 w-5" /></a>
                                <a href={LINKS.linkedin} className="hover:text-[#EDF0FC] transition"><Linkedin className="h-5 w-5" /></a>
                                <a href={LINKS.github} className="hover:text-[#EDF0FC] transition"><Github className="h-5 w-5" /></a>
                            </div>
                            <p className="text-[#8BA8EE] text-sm">© {new Date().getFullYear()} Lou-Ann Barry. Tous droits réservés.</p>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
}
