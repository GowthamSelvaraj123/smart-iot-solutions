"use client";
import { useState } from "react";

/* ----------------------------------------------------------------
   Profile content - edit here.
   Photo: save the file as  public/images/team/gowtham.jpg
   ---------------------------------------------------------------- */
const profile = {
    name: "Gowtham Thanapandi",
    role: "Founder",
    company: "Smart IoT Solutions",
    photo: "/images/founder-profile.jpeg",
    initials: "GT",
    eyebrow: "MEET OUR FOUNDER",
    description: [
        "Gowtham Thanapandi founded Smart IoT Solutions in Coimbatore in 2019 with a simple belief: technology should make life easier, not more complicated. What began with residential lighting and CCTV installations has grown into a trusted automation and networking partner for homes, offices and luxury estates across South India.",
        "Hands-on in every project, he champions honest scopes, meticulous installation and long-term care, so every space we deliver works seamlessly for years to come.",
    ],
    philosophy: "Technology should be invisible.",
    stats: [
        { value: "2019", label: "Founded" },
        { value: "150+", label: "Projects Delivered" },
        { value: "South India", label: "Presence" },
    ],
    phone: "919626904991",
};

type Achievement = { icon: string; title: string; detail?: string };

// Adventures & achievements - add items here and they appear automatically.
const achievements: Achievement[] = [];

export default function FounderProfile() {
    const [photoFailed, setPhotoFailed] = useState(false);

    return (
        <section className="relative py-20 lg:py-28 bg-[#0c121e] overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="/images/gold_glitter.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-[0.12] mix-blend-color-dodge" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0c121e] via-transparent to-[#0c121e]" />
                <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#d0a353]/15 blur-[120px]" />
                <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#d0a353]/10 blur-[120px]" />
            </div>

            <div className="container max-w-[1200px] relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">

                    {/* ---------- Photo ---------- */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-[380px]">
                            {/* Offset gold outline */}
                            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-[#d0a353]/50" />
                            {/* Gold gradient frame */}
                            <div className="relative p-[3px] rounded-[2rem] bg-gradient-to-br from-[#ca9740] via-[#fdf0a6] to-[#ca9740] shadow-[0_30px_70px_rgba(208,163,83,0.25)]">
                                <div className="relative rounded-[1.9rem] overflow-hidden bg-[#1a202c] aspect-[3/4]">
                                    {!photoFailed ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={profile.photo}
                                            alt={profile.name}
                                            onError={() => setPhotoFailed(true)}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a202c] to-[#0c121e]">
                                            <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#d0a353] via-[#fdf0a6] to-[#ca9740]" style={{ fontFamily: "var(--font-heading)" }}>
                                                {profile.initials}
                                            </span>
                                        </div>
                                    )}
                                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0c121e]/80 to-transparent pointer-events-none" />
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-5 -left-4 lg:-left-8 bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.3)] px-5 py-3 flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ca9740] to-[#dfb45e] text-white flex items-center justify-center">
                                    <i className="fas fa-award"></i>
                                </div>
                                <div className="leading-tight">
                                    <div className="text-[0.55rem] font-bold text-gray-400 tracking-[0.15em] uppercase">{profile.role}</div>
                                    <div className="text-sm font-bold text-[#1a202c]">{profile.company}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ---------- Details ---------- */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-5 font-nav">
                            <span className="w-8 h-[1px] bg-[#d0a353]"></span> {profile.eyebrow}
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-bold text-white leading-[1.05] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0a353] via-[#fdf0a6] to-[#ca9740]">
                                {profile.name}
                            </span>
                        </h2>

                        <div className="inline-flex items-center gap-2 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-6 px-4 py-1.5 rounded-full border border-[#d0a353]/40 bg-[#d0a353]/10">
                            <i className="fas fa-star text-[0.5rem]"></i> {profile.role} · {profile.company}
                        </div>

                        <div className="space-y-4 mb-8">
                            {profile.description.map((p, i) => (
                                <p key={i} className="text-gray-300 text-sm lg:text-[0.95rem] leading-relaxed">
                                    {p}
                                </p>
                            ))}
                        </div>

                        {/* Philosophy quote */}
                        <div className="flex items-start gap-4 mb-8 pl-5 border-l-[3px] border-[#d0a353]">
                            <i className="fas fa-quote-left text-[#d0a353]/60 text-xl mt-1"></i>
                            <p className="text-xl lg:text-2xl text-white italic font-medium" style={{ fontFamily: "var(--font-heading)" }}>
                                {profile.philosophy}
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 lg:gap-4 mb-8">
                            {profile.stats.map((s) => (
                                <div key={s.label} className="rounded-2xl border border-[#d0a353]/20 bg-white/[0.04] backdrop-blur-sm px-3 py-4 text-center hover:border-[#d0a353]/50 hover:-translate-y-1 transition-all duration-300">
                                    <div className="text-xl lg:text-2xl font-bold text-[#fdf0a6] leading-tight" style={{ fontFamily: "var(--font-heading)" }}>{s.value}</div>
                                    <div className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-widest mt-1">{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Adventures & achievements */}
                        {achievements.length > 0 && (
                            <div className="mb-8">
                                <div className="flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4 font-nav">
                                    <i className="fas fa-mountain"></i> ADVENTURES &amp; ACHIEVEMENTS
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {achievements.map((a, i) => (
                                        <div key={i} className="group rounded-2xl border border-[#d0a353]/20 bg-white/[0.04] p-4 flex gap-4 items-start hover:border-[#d0a353]/50 hover:-translate-y-1 transition-all duration-300">
                                            <div className="w-10 h-10 shrink-0 rounded-xl bg-[#d0a353]/15 text-[#d0a353] flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#ca9740] group-hover:to-[#dfb45e] group-hover:text-white transition-all duration-300">
                                                <i className={`fas ${a.icon}`}></i>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-sm mb-1">{a.title}</h4>
                                                {a.detail && <p className="text-xs text-gray-400 leading-relaxed">{a.detail}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href={`https://wa.me/${profile.phone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-[#0c121e] px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase hover:shadow-[0_0_25px_rgba(207,168,94,0.5)] hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <i className="fab fa-whatsapp text-base"></i> Let&apos;s Connect
                            </a>
                            <a
                                href={`tel:+${profile.phone}`}
                                className="inline-flex items-center gap-2 border border-white/20 bg-white/5 text-white px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase hover:border-[#d0a353] hover:text-[#fdf0a6] transition-all duration-200"
                            >
                                <i className="fas fa-phone-alt text-sm"></i> Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
