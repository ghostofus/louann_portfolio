"use client";
import { useLanguage } from "../contexts/LanguageContext";

export default function LangToggle() {
    const { lang, setLang } = useLanguage();
    return (
        <div className="flex items-center text-sm border border-[#C3D0F6]/20 rounded-xl overflow-hidden">
            <button
                onClick={() => setLang("fr")}
                className={`px-2.5 py-1.5 transition ${lang === "fr" ? "bg-[#1F3E71]/50 text-[#EDF0FC]" : "text-[#8BA8EE] hover:text-[#EDF0FC]"}`}
            >FR</button>
            <span className="text-[#C3D0F6]/20 select-none px-0.5">|</span>
            <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1.5 transition ${lang === "en" ? "bg-[#1F3E71]/50 text-[#EDF0FC]" : "text-[#8BA8EE] hover:text-[#EDF0FC]"}`}
            >EN</button>
        </div>
    );
}
