"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, ArrowLeft, Music, Package } from "lucide-react";

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

const GAMES = [
    { name: "The Last of Us Part II",  src: "/Games/tlou.png" },
    { name: "God of War Ragnarök",     src: "/Games/gow.png" },
    { name: "Resident Evil Biohazard", src: "/Games/re.png" },
    { name: "Red Dead Redemption 2",   src: "/Games/rd2.png" },
    { name: "Dying Light",             src: "/Games/DL.png" },
    { name: "Super Mario Galaxy",      src: "/Games/SMG.png" },
    { name: "Until Dawn",              src: "/Games/UD.png" },
    { name: "Far Cry 4",               src: "/Games/F4.png" },
    { name: "Dispatch",                src: "/Games/D.png" },
    { name: "Cyberpunk 2077",          src: "/Games/C2077.png" },
    { name: "Road 96",                 src: "/Games/R96.png" },
];

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
                        <Link href="/cv" className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-3 py-1.5 text-sm text-[#C3D0F6] hover:bg-[#1F3E71]/35 transition">
                            <Download className="h-4 w-4" /> CV
                        </Link>
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

function GamesMarquee() {
    const doubled = [...GAMES, ...GAMES];
    return (
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative overflow-hidden pb-4">
            <div className="marquee-track flex gap-8 py-2 items-center">
                {doubled.map((game, i) => (
                    <div key={i} className="flex-none rounded-2xl bg-[#1F3E71]/20 border border-[#C3D0F6]/10 p-5">
                        <img
                            src={game.src}
                            alt={game.name}
                            className="h-32 w-auto object-contain opacity-80 hover:opacity-100 transition"
                        />
                    </div>
                ))}
            </div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080f1e] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#080f1e] to-transparent pointer-events-none z-10" />
        </motion.div>
    );
}


const COLLECTION_PHOTOS = [
    { src: "/A propos de moi/C1.jpg", aspect: "3/4" },
    { src: "/A propos de moi/C2.jpg", aspect: "4/3" },
    { src: "/A propos de moi/C3.jpg", aspect: "3/4" },
];

function AutoSlider({ images }) {
    const [current, setCurrent] = React.useState(0);
    React.useEffect(() => {
        const id = setInterval(() => setCurrent(c => (c + 1) % images.length), 3000);
        return () => clearInterval(id);
    }, [images.length]);
    return (
        <div className="relative w-full overflow-hidden rounded-2xl transition-all duration-700" style={{ aspectRatio: images[current].aspect }}>
            {images.map((img, i) => (
                <Image key={i} src={img.src} alt={`Collection ${i + 1}`} width={600} height={800}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                    style={{ opacity: i === current ? 1 : 0 }} />
            ))}
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

                    {/* ——— SECTION 1 : Mon parcours ——— */}
                    <section className="relative overflow-hidden mx-auto max-w-6xl px-6 py-20 md:py-28">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_35%_at_70%_50%,rgba(71,130,228,0.12),transparent_60%)]" />
                        <motion.div variants={stagger} initial="initial" animate="animate"
                            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                            <div className="flex flex-col gap-6">
                                <motion.div variants={fadeUp}>
                                    <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-2">À propos de moi</p>
                                    <h1 className="text-4xl font-semibold tracking-tight">Qui je suis ?</h1>
                                </motion.div>
                                <motion.p variants={fadeUp} className="text-[#C3D0F6] leading-relaxed">
                                    Je suis Lou-Ann Barry, étudiante en dernière année de licence à l'ICAN Lyon, et je me spécialise vers la production de jeux vidéo. Si vous êtes arrivé sur cette page, c'est que vous voulez en savoir un peu plus sur moi.
                                </motion.p>
                                <motion.p variants={fadeUp} className="text-[#C3D0F6] leading-relaxed">
                                    J'ai grandi en jouant en cachette à des jeux qui n'étaient pas vraiment de mon âge (<b><i>Destiny, Far Cry 4</i></b>). J'ai été attirée par leurs univers riches et les histoires qui me laissaient bouche bée. C'est en posant les mains sur <b><i>The Last of Us</i></b> que tout a basculé. C'est en posant les mains sur The Last of Us que tout a basculé. La façon dont il réussit à toucher les gens en mariant narration et gameplay m'a donné envie de comprendre et d'intégrer cet univers.
                                </motion.p>
                                <motion.p variants={fadeUp} className="text-[#C3D0F6] leading-relaxed">
                                    Ce qui m'a amenée vers la production, c'est mon envie de voir un projet mené jusqu'au bout, avec une équipe soudée où chacun se sent à sa place. Pas de petit rôle, pas de personne mise de côté tout le monde compte et tout le monde avance ensemble.
                                </motion.p>
                                <motion.p variants={fadeUp} className="text-[#C3D0F6] leading-relaxed">
                                    En équipe, on remarque souvent mon enthousiasme et ma façon de coordoner les choses : j'écoute, je facilite, et je fais en sorte que les tensions se règlent avant de devenir des blocages. Selon moi, un bon producer c'est quelqu'un qui sait maintenir la cohésion humaine du projet autant que sa cohésion technique.
                                </motion.p>
                            </div>

                            <motion.div variants={fadeLeft} className="flex justify-center md:justify-end">
                                <Image src="/moi.png" alt="Photo de Lou-Ann Barry" width={420} height={500}
                                    className="rounded-3xl object-cover shadow-2xl border border-[#C3D0F6]/10" priority />
                            </motion.div>
                        </motion.div>
                        <div className="mt-14">
                            <GamesMarquee />
                        </div>
                    </section>

                    <Divider />

                    {/* ——— SECTION : Qu'est-ce qui me motive ? ——— */}
                    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }}
                            className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                            <motion.div variants={fadeLeft} className="flex justify-center md:justify-start">
                                <Image src="/A propos de moi/equipe.jpg" alt="Mon équipe" width={580} height={720}
                                    className="rounded-3xl object-cover shadow-2xl border border-[#C3D0F6]/10" />
                            </motion.div>

                            <motion.div variants={fadeUp} className="flex flex-col gap-6">
                                <div>
                                    <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-2">À propos de moi</p>
                                    <h2 className="text-3xl font-semibold tracking-tight">Qu'est-ce qui me motive ?</h2>
                                </div>
                                <div className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 p-7 flex flex-col gap-4">
                                    <p className="text-[#C3D0F6] leading-relaxed">
                                        Ce qui me motive est de créer le jeu le plus abouti possible , en sachant que la perfection n'existe pas, mais qu'on peut toujours s'en approcher.
                                    </p>
                                    <p className="text-[#C3D0F6] leading-relaxed">
                                        Pour y arriver, je me concentre sur l'amélioration et le soutien des personnes autour de moi. Créer un jeu est un effort d'équipe, et faciliter la progression de chacun tout au long du développement est l'un de mes moteurs principaux.
                                    </p>
                                    <p className="text-[#C3D0F6] leading-relaxed">
                                        C'est, selon moi, la base du succès et ce que je cherche à atteindre dans chaque équipe dont je fais partie.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </section>

                    <Divider />

                    {/* ——— SECTION 2 : Mes passions ——— */}
                    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
                        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="mb-12">
                            <h2 className="text-3xl font-semibold tracking-tight">Mes passions</h2>
                        </motion.div>

                        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.15 }}
                            className="grid md:grid-cols-2 gap-8">

                            {/* Collection */}
                            <motion.div variants={fadeUp}
                                className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 overflow-hidden flex flex-col">
                                <div className="p-6 pb-0">
                                    <AutoSlider images={COLLECTION_PHOTOS} />
                                </div>
                                <div className="p-7 flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-xl bg-[#4782E4]/15 p-2.5">
                                            <Package className="h-5 w-5 text-[#4782E4]" />
                                        </div>
                                        <h3 className="text-lg font-semibold">La collection</h3>
                                    </div>
                                    <p className="text-[#C3D0F6] text-sm leading-relaxed">
                                        Je suis également une collectionneuse : <b>figurines, objets collector, artbooks</b> principalement autour d'univers qui m'ont marquée comme Arcane, The Last of Us, God of War ou Star Wars etc.. Les artbooks en particulier m'ont toujours attirée pour ce qu'ils révèlent sur les coulisses de la création, les choix artistiques, le making-of. C'est d'ailleurs cette curiosité pour ce qui se passe derrière l'écran qui m'a, en partie, donné envie de travailler dans le jeu vidéo.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Musique */}
                            <motion.div variants={fadeUp}
                                className="rounded-3xl border border-[#C3D0F6]/10 bg-[#1F3E71]/20 overflow-hidden flex flex-col">
                                <div className="p-6 pb-0">
                                    <Image src="/A propos de moi/collectionvinyle.jpg" alt="Ma collection de vinyles" width={600} height={450} className="w-full h-full object-cover object-top" />
                                </div>
                                <div className="p-7 flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="rounded-xl bg-[#4782E4]/15 p-2.5">
                                            <Music className="h-5 w-5 text-[#4782E4]" />
                                        </div>
                                        <h3 className="text-lg font-semibold">La musique</h3>
                                    </div>
                                    <p className="text-[#C3D0F6] text-sm leading-relaxed">
                                        La musique occupe aussi une grande place dans ma vie. J'ai toujours aimé en faire : des compositions personnelles, des mix etc.. même si par manque de temps aujourd'hui ça se traduit surtout par une collection de vinyles et de CDs. C'est une de mes façon de continuer à nourrir ma sensibilité artistique et d'enrichir ma vision sur les projets.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </section>

                    <Divider />

                    {/* ——— SECTION CONTACT ——— */}
                    <section className="mx-auto max-w-6xl px-6 py-20">
                        <motion.div variants={fadeUp} initial="initial" whileInView="animate" viewport={{ once: true }}
                            className="rounded-3xl border border-[#C3D0F6]/10 bg-gradient-to-br from-[#1F3E71]/30 to-[#0D1F3E]/20 p-12 text-center">
                            <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-2">Me contacter</p>
                            <h2 className="text-3xl font-semibold tracking-tight mb-3">Discutons!</h2>
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
