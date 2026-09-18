"use client";
import { useState, useEffect } from "react";

/* ---------- image pools for each auto-cycling card ---------- */
const card2Images = [
    { src: "images/hero_pool_1786093934613.png",      location: "Ooty" },
    { src: "images/auto_villa_1786093987554.png",     location: "Kodaikanal" },
    { src: "images/hero_lighting_1786093923075.png",  location: "Mysuru" },
    { src: "images/smart_home_villa_1786093285055.png", location: "Coorg" },
];

const card3Images = [
    { src: "images/auto_apartment_1786094001400.png", location: "Bangalore" },
    { src: "images/auto_office_1786094016416.png",    location: "Hyderabad" },
    { src: "images/auto_hospital_1786094034170.png",  location: "Chennai" },
    { src: "images/auto_hostel_1786094051526.png",    location: "Pune" },
];

const card4Images = [
    { src: "images/hero_gate_1786093948118.png",      location: "Chennai" },
    { src: "images/auto_villa_1786093987554.png",     location: "Pondicherry" },
    { src: "images/hero_pool_1786093934613.png",      location: "Madurai" },
    { src: "images/auto_apartment_1786094001400.png", location: "Salem" },
];

/* ---------- helper: cycling image with crossfade ---------- */
function CyclingImage({
    images,
    interval = 3000,
    className = "",
}: {
    images: { src: string; location: string }[];
    interval?: number;
    className?: string;
}) {
    const [current, setCurrent] = useState(0);
    const [fading, setFading]   = useState(false);
    const [location, setLocation] = useState(images[0].location);

    useEffect(() => {
        const timer = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setCurrent(prev => {
                    const next = (prev + 1) % images.length;
                    setLocation(images[next].location);
                    return next;
                });
                setFading(false);
            }, 600); // crossfade duration
        }, interval);
        return () => clearInterval(timer);
    }, [images, interval]);

    return { src: images[current].src, fading, location };
}

/* ---------- main component ---------- */
export default function ProjectsBento() {
    const img2 = CyclingImage({ images: card2Images, interval: 3200 });
    const img3 = CyclingImage({ images: card3Images, interval: 4000 });
    const img4 = CyclingImage({ images: card4Images, interval: 3600 });

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-6 mt-10 lg:h-[600px] mb-8">

            {/* ── 1. Large Feature Card (Luxury Villa) – static ── */}
            <div className="group relative overflow-hidden rounded-2xl md:col-span-2 lg:col-span-2 lg:row-span-2 shadow-lg cursor-pointer">
                <img
                    src="images/auto_villa_1786093987554.png"
                    alt="Luxury Villa"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e]/90 via-[#0c121e]/40 to-transparent" />
                <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-md text-white text-[0.65rem] px-4 py-2 rounded-full flex items-center gap-2 shadow-sm font-bold tracking-wide z-10 border border-white/20">
                    <i className="fas fa-map-marker-alt text-[#d0a353]" /> Coimbatore
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-heading font-black text-3xl lg:text-4xl text-white mb-4 tracking-wide group-hover:text-[#d0a353] transition-colors">Luxury Villa</h3>
                    <div className="flex flex-wrap gap-x-5 gap-y-3 mb-6 text-[0.75rem] font-bold text-gray-300">
                        <span className="flex items-center gap-2"><i className="fas fa-home text-[#d0a353] text-sm" /> Home Automation</span>
                        <span className="flex items-center gap-2"><i className="fas fa-video text-[#d0a353] text-sm" /> CCTV</span>
                        <span className="flex items-center gap-2"><i className="fas fa-torii-gate text-[#d0a353] text-sm" /> Gate Automation</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <button className="bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-[#0c121e] px-7 py-3 rounded-full text-xs font-black tracking-wide shadow-[0_0_15px_rgba(208,163,83,0.4)] hover:shadow-[0_0_25px_rgba(208,163,83,0.6)] transition-all">
                            EXPLORE PROJECT <i className="fas fa-arrow-right ml-2" />
                        </button>
                    </div>
                </div>
            </div>

            {/* ── 2. Top-middle (Hill View Villa) – auto-cycling ── */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer min-h-[300px] lg:min-h-0">
                {/* cycling images with crossfade */}
                {card2Images.map((img, i) => (
                    <img
                        key={i}
                        src={img.src}
                        alt="Project"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                        style={{
                            opacity: i === (card2Images.indexOf(card2Images.find(x => x.src === img2.src)!) !== -1 ? card2Images.indexOf(card2Images.find(x => x.src === img2.src)!) : 0) ? (img2.fading ? 0 : 1) : 0,
                            transition: "opacity 0.6s ease-in-out",
                            zIndex: i === card2Images.findIndex(x => x.src === img2.src) ? 1 : 0,
                        }}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e]/90 via-[#0c121e]/20 to-transparent z-[2]" />
                {/* location badge updates with image */}
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-[0.6rem] px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20 z-[3] font-bold transition-all duration-500">
                    <i className="fas fa-map-marker-alt text-[#d0a353]" /> {img2.location}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 z-[3]">
                    <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-[#d0a353] transition-colors">Hill View Villa</h3>
                    <div className="flex flex-wrap gap-x-3 gap-y-2 mb-3 text-[0.65rem] font-bold text-gray-300">
                        <span className="flex items-center gap-1.5"><i className="fas fa-home text-[#d0a353]" /> Automation</span>
                        <span className="flex items-center gap-1.5"><i className="fas fa-video text-[#d0a353]" /> CCTV</span>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#d0a353] text-[0.65rem] font-bold tracking-wide hover:text-white">
                        VIEW DETAILS <i className="fas fa-arrow-right ml-1" />
                    </button>
                </div>
            </div>

            {/* ── 3. Tall-right (Premium Residence) – auto-cycling ── */}
            <div className="group relative overflow-hidden rounded-2xl lg:row-span-2 shadow-lg cursor-pointer min-h-[350px] lg:min-h-0">
                {card3Images.map((img, i) => (
                    <img
                        key={i}
                        src={img.src}
                        alt="Project"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                        style={{
                            opacity: i === card3Images.findIndex(x => x.src === img3.src) ? (img3.fading ? 0 : 1) : 0,
                            transition: "opacity 0.6s ease-in-out",
                            zIndex: i === card3Images.findIndex(x => x.src === img3.src) ? 1 : 0,
                        }}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e]/90 via-[#0c121e]/30 to-transparent z-[2]" />
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-[0.6rem] px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20 z-[3] font-bold transition-all duration-500">
                    <i className="fas fa-map-marker-alt text-[#d0a353]" /> {img3.location}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 z-[3]">
                    <h3 className="font-heading font-bold text-2xl text-white mb-4 group-hover:text-[#d0a353] transition-colors">Premium Residence</h3>
                    <div className="flex flex-col gap-3 mb-6 text-[0.7rem] font-bold text-gray-300">
                        <span className="flex items-center gap-2"><i className="fas fa-home text-[#d0a353] w-3" /> Home Automation</span>
                        <span className="flex items-center gap-2"><i className="fas fa-video text-[#d0a353] w-3" /> CCTV Security</span>
                        <span className="flex items-center gap-2"><i className="fas fa-mobile-alt text-[#d0a353] w-3" /> Video Door Phone</span>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white border-2 border-[#d0a353]/80 bg-[#d0a353]/10 px-5 py-2.5 rounded-full text-[0.65rem] font-bold hover:bg-[#d0a353] hover:text-[#0c121e] tracking-wide transition-colors">
                        DISCOVER <i className="fas fa-arrow-right ml-1" />
                    </button>
                </div>
            </div>

            {/* ── 4. Bottom-middle (Beachside Villa) – auto-cycling ── */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer min-h-[300px] lg:min-h-0">
                {card4Images.map((img, i) => (
                    <img
                        key={i}
                        src={img.src}
                        alt="Project"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                        style={{
                            opacity: i === card4Images.findIndex(x => x.src === img4.src) ? (img4.fading ? 0 : 1) : 0,
                            transition: "opacity 0.6s ease-in-out",
                            zIndex: i === card4Images.findIndex(x => x.src === img4.src) ? 1 : 0,
                        }}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e]/90 via-[#0c121e]/20 to-transparent z-[2]" />
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-[0.6rem] px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20 z-[3] font-bold transition-all duration-500">
                    <i className="fas fa-map-marker-alt text-[#d0a353]" /> {img4.location}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 z-[3]">
                    <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-[#d0a353] transition-colors">Beachside Villa</h3>
                    <div className="flex flex-wrap gap-x-3 gap-y-2 mb-3 text-[0.65rem] font-bold text-gray-300">
                        <span className="flex items-center gap-1.5"><i className="fas fa-home text-[#d0a353]" /> Automation</span>
                        <span className="flex items-center gap-1.5"><i className="fas fa-torii-gate text-[#d0a353]" /> Gate</span>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#d0a353] text-[0.65rem] font-bold tracking-wide hover:text-white">
                        VIEW DETAILS <i className="fas fa-arrow-right ml-1" />
                    </button>
                </div>
            </div>

        </div>
    );
}
