"use client";
import { useState, useEffect } from "react";

/* ---------- image pools for each auto-cycling card ---------- */
const card1Images = [
    { src: "images/auto_villa_1786093987554.png",        location: "Coimbatore" },
    { src: "images/smart_home_villa_1786093285055.png",  location: "Bangalore" },
    { src: "images/hero_pool_1786093934613.png",         location: "Chennai" },
    { src: "images/hero_gate_1786093948118.png",         location: "Ooty" },
];

const card2Images = [
    { src: "images/hero_pool_1786093934613.png",        location: "Ooty" },
    { src: "images/auto_villa_1786093987554.png",        location: "Kodaikanal" },
    { src: "images/hero_lighting_1786093923075.png",     location: "Mysuru" },
    { src: "images/smart_home_villa_1786093285055.png",  location: "Coorg" },
];

const card3Images = [
    { src: "images/auto_apartment_1786094001400.png",    location: "Bangalore" },
    { src: "images/auto_office_1786094016416.png",       location: "Hyderabad" },
    { src: "images/auto_hospital_1786094034170.png",     location: "Chennai" },
    { src: "images/auto_hostel_1786094051526.png",       location: "Pune" },
];

const card4Images = [
    { src: "images/hero_gate_1786093948118.png",         location: "Chennai" },
    { src: "images/auto_villa_1786093987554.png",        location: "Pondicherry" },
    { src: "images/hero_pool_1786093934613.png",         location: "Madurai" },
    { src: "images/auto_apartment_1786094001400.png",    location: "Salem" },
];

/* ---------- hook: returns current index + prev index + fading flag ---------- */
function useCycling(length: number, interval: number) {
    const [cur, setCur]       = useState(0);
    const [prev, setPrev]     = useState<number | null>(null);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        const t = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setCur(c => {
                    const next = (c + 1) % length;
                    setPrev(c);
                    return next;
                });
                setFading(false);
            }, 600);
        }, interval);
        return () => clearInterval(t);
    }, [length, interval]);

    return { cur, prev, fading };
}

/* ---------- sub-component: a card whose images cycle ---------- */
function CyclingCard({
    images,
    interval,
    className = "",
    badgeClassName = "top-4 left-4 px-3 py-1.5 text-[0.6rem]",
    children,
}: {
    images: { src: string; location: string }[];
    interval: number;
    className?: string;
    badgeClassName?: string;
    children: (location: string) => React.ReactNode;
}) {
    const { cur, prev, fading } = useCycling(images.length, interval);

    return (
        <div className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ${className}`}>
            {/* All images stacked; only cur/prev are visible */}
            {images.map((img, i) => {
                const isCur  = i === cur;
                const isPrev = i === prev;
                let opacity  = 0;
                if (isCur)  opacity = fading ? 0 : 1;
                if (isPrev) opacity = fading ? 1 : 0;

                return (
                    <img
                        key={i}
                        src={img.src}
                        alt={img.location}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                        style={{
                            opacity,
                            transition: "opacity 0.6s ease-in-out",
                            zIndex: isCur ? 2 : isPrev ? 1 : 0,
                        }}
                    />
                );
            })}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e]/90 via-[#0c121e]/20 to-transparent z-[3]" />

            {/* Location badge – updates with image */}
            <div
                key={cur}
                className={`absolute bg-white/10 backdrop-blur-md text-white rounded-full flex items-center gap-1.5 border border-white/20 z-[4] font-bold animate-fadeIn ${badgeClassName}`}
            >
                <i className="fas fa-map-marker-alt text-[#d0a353]" />
                &nbsp;{images[cur].location}
            </div>

            {/* Content slot */}
            <div className="absolute inset-0 z-[5] pointer-events-none">
                {children(images[cur].location)}
            </div>
        </div>
    );
}

/* ================================================================
   Main export
   ================================================================ */
export default function ProjectsBento() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-6 mt-10 lg:h-[600px] mb-8">

            {/* ── 1. Large Feature Card (Luxury Villa) – auto-cycling ── */}
            <CyclingCard 
                images={card1Images} 
                interval={4500} 
                className="md:col-span-2 lg:col-span-2 lg:row-span-2"
                badgeClassName="top-5 left-5 px-4 py-2 text-[0.65rem] shadow-sm tracking-wide"
            >
                {() => (
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 pointer-events-auto">
                        <h3 className="font-heading font-black text-3xl lg:text-4xl text-white mb-4 tracking-wide group-hover:text-[#d0a353] transition-colors">
                            Luxury Villa
                        </h3>
                        <div className="flex flex-wrap gap-x-5 gap-y-3 mb-6 text-[0.75rem] font-bold text-gray-300">
                            <span className="flex items-center gap-2"><i className="fas fa-home text-[#d0a353] text-sm" /> Home Automation</span>
                            <span className="flex items-center gap-2"><i className="fas fa-video text-[#d0a353] text-sm" /> CCTV</span>
                            <span className="flex items-center gap-2"><i className="fas fa-torii-gate text-[#d0a353] text-sm" /> Gate Automation</span>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            <button className="bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-[#0c121e] px-7 py-3 rounded-full text-xs font-black tracking-wide shadow-[0_0_15px_rgba(208,163,83,0.4)] hover:shadow-[0_0_25px_rgba(208,163,83,0.6)] transition-all cursor-pointer">
                                EXPLORE PROJECT <i className="fas fa-arrow-right ml-2" />
                            </button>
                        </div>
                    </div>
                )}
            </CyclingCard>

            {/* ── 2. Top-middle (Hill View Villa) – auto-cycling ── */}
            <CyclingCard images={card2Images} interval={3200} className="min-h-[300px] lg:min-h-0">
                {() => (
                    <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-auto transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-[#d0a353] transition-colors">Hill View Villa</h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-2 mb-3 text-[0.65rem] font-bold text-gray-300">
                            <span className="flex items-center gap-1.5"><i className="fas fa-home text-[#d0a353]" /> Automation</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-video text-[#d0a353]" /> CCTV</span>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#d0a353] text-[0.65rem] font-bold tracking-wide hover:text-white cursor-pointer">
                            VIEW DETAILS <i className="fas fa-arrow-right ml-1" />
                        </button>
                    </div>
                )}
            </CyclingCard>

            {/* ── 3. Tall-right (Premium Residence) – auto-cycling ── */}
            <CyclingCard images={card3Images} interval={4000} className="lg:row-span-2 min-h-[350px] lg:min-h-0">
                {() => (
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 pointer-events-auto transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-heading font-bold text-2xl text-white mb-4 group-hover:text-[#d0a353] transition-colors">Premium Residence</h3>
                        <div className="flex flex-col gap-3 mb-6 text-[0.7rem] font-bold text-gray-300">
                            <span className="flex items-center gap-2"><i className="fas fa-home text-[#d0a353] w-3" /> Home Automation</span>
                            <span className="flex items-center gap-2"><i className="fas fa-video text-[#d0a353] w-3" /> CCTV Security</span>
                            <span className="flex items-center gap-2"><i className="fas fa-mobile-alt text-[#d0a353] w-3" /> Video Door Phone</span>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white border-2 border-[#d0a353]/80 bg-[#d0a353]/10 px-5 py-2.5 rounded-full text-[0.65rem] font-bold hover:bg-[#d0a353] hover:text-[#0c121e] tracking-wide transition-colors cursor-pointer">
                            DISCOVER <i className="fas fa-arrow-right ml-1" />
                        </button>
                    </div>
                )}
            </CyclingCard>

            {/* ── 4. Bottom-middle (Beachside Villa) – auto-cycling ── */}
            <CyclingCard images={card4Images} interval={3600} className="min-h-[300px] lg:min-h-0">
                {() => (
                    <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-auto transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-[#d0a353] transition-colors">Beachside Villa</h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-2 mb-3 text-[0.65rem] font-bold text-gray-300">
                            <span className="flex items-center gap-1.5"><i className="fas fa-home text-[#d0a353]" /> Automation</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-torii-gate text-[#d0a353]" /> Gate</span>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#d0a353] text-[0.65rem] font-bold tracking-wide hover:text-white cursor-pointer">
                            VIEW DETAILS <i className="fas fa-arrow-right ml-1" />
                        </button>
                    </div>
                )}
            </CyclingCard>

        </div>
    );
}
