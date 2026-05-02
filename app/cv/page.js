"use client";

import Link from "next/link";
import React from "react";
import { ArrowLeft, Download, Github, Linkedin, Mail } from "lucide-react";

const LINKS = {
    resumeUrl: "/CV.pdf",
    email: "louann.barry05@gmail.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
};

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

export default function CVPage() {
    return (
        <div className="min-h-screen bg-[#080f1e] text-[#EDF0FC]" style={{ position: "relative" }}>
            <StarField />
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>

                {/* Header */}
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
                                    <Download className="h-4 w-4" /> Télécharger
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* PDF Viewer */}
                <main className="flex-1 mx-auto w-full max-w-5xl px-6 py-10 flex flex-col gap-6">
                    <div>
                        <p className="text-xs text-[#8BA8EE] uppercase tracking-widest mb-1">Mon curriculum vitae</p>
                        <h1 className="text-3xl font-semibold tracking-tight">CV — Lou-Ann Barry</h1>
                    </div>

                    <div className="rounded-2xl border border-[#C3D0F6]/10 overflow-hidden bg-[#1F3E71]/10 flex-1" style={{ minHeight: "80vh" }}>
                        <iframe
                            src="/CV.pdf"
                            className="w-full h-full"
                            style={{ minHeight: "80vh", border: "none" }}
                            title="CV Lou-Ann Barry"
                        />
                    </div>

                    <div className="flex justify-center pb-4">
                        <a
                            href={LINKS.resumeUrl}
                            download
                            className="inline-flex items-center gap-2 rounded-xl border border-[#C3D0F6]/20 px-5 py-2.5 text-sm text-[#C3D0F6] hover:bg-[#1F3E71]/35 transition"
                        >
                            <Download className="h-4 w-4" /> Télécharger le CV
                        </a>
                    </div>
                </main>

                {/* Footer */}
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
            </div>
        </div>
    );
}
