"use client";
import React, { useRef, useState } from 'react';

export default function SolutionsSlider({ solutions }: { solutions: any[] }) {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState('All');

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -364, behavior: 'smooth' }); // 340 + 24(gap)
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 364, behavior: 'smooth' });
        }
    };

    const filteredSolutions = activeCategory === 'All' 
        ? solutions 
        : solutions.filter(s => s.category === activeCategory);

    return (
        <section className="py-[60px] bg-white relative overflow-hidden">
            <div className="container relative z-10">
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="flex flex-col gap-6">
                        <h2 className="font-heading text-4xl lg:text-[3.2rem] font-bold text-[#1a202c] tracking-tight">
                            Explore smart automation.
                        </h2>
                        
                        <div className="flex flex-wrap gap-2">
                            <button 
                                onClick={() => setActiveCategory('All')}
                                className={`cursor-pointer px-5 py-2 rounded-full text-sm font-bold transition shadow-sm ${activeCategory === 'All' ? 'bg-[#1a202c] text-white hover:bg-black' : 'bg-transparent text-gray-700 hover:bg-gray-200 border border-transparent hover:border-gray-200'}`}>
                                All solutions
                            </button>
                            <button 
                                onClick={() => setActiveCategory('Residential')}
                                className={`cursor-pointer px-5 py-2 rounded-full text-sm font-bold transition ${activeCategory === 'Residential' ? 'bg-[#1a202c] text-white shadow-sm hover:bg-black' : 'bg-transparent text-gray-700 hover:bg-gray-200 border border-transparent hover:border-gray-200'}`}>
                                Residential
                            </button>
                            <button 
                                onClick={() => setActiveCategory('Commercial')}
                                className={`cursor-pointer px-5 py-2 rounded-full text-sm font-bold transition ${activeCategory === 'Commercial' ? 'bg-[#1a202c] text-white shadow-sm hover:bg-black' : 'bg-transparent text-gray-700 hover:bg-gray-200 border border-transparent hover:border-gray-200'}`}>
                                Commercial
                            </button>
                            <button 
                                onClick={() => setActiveCategory('Specialized')}
                                className={`cursor-pointer px-5 py-2 rounded-full text-sm font-bold transition ${activeCategory === 'Specialized' ? 'bg-[#1a202c] text-white shadow-sm hover:bg-black' : 'bg-transparent text-gray-700 hover:bg-gray-200 border border-transparent hover:border-gray-200'}`}>
                                Specialized
                            </button>
                        </div>
                    </div>
                    
                    {/* Navigation Arrows */}
                    <div className="hidden md:flex gap-3 pb-2">
                        <button onClick={scrollLeft} className="w-11 h-11 rounded-full bg-white border border-[#d0a353]/30 flex items-center justify-center text-[#ca9740] hover:bg-[#ca9740] hover:text-white transition shadow-sm font-nav cursor-pointer z-10">
                            <i className="fas fa-chevron-left text-sm"></i>
                        </button>
                        <button onClick={scrollRight} className="w-11 h-11 rounded-full bg-white border border-[#d0a353]/30 flex items-center justify-center text-[#ca9740] hover:bg-[#ca9740] hover:text-white transition shadow-sm font-nav cursor-pointer z-10">
                            <i className="fas fa-chevron-right text-sm"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Full-width slider container that bleeds to the right but aligns with the left container edge */}
            <div 
                ref={sliderRef} 
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 hide-scroll-bar pb-8 pt-4" 
                style={{ 
                    scrollBehavior: 'smooth',
                    marginLeft: 'calc(max(0px, (100% - 1200px) / 2) + 1.5rem)',
                    paddingRight: 'calc(max(0px, (100% - 1200px) / 2) + 1.5rem)'
                }}
            >
                {filteredSolutions.map((item, idx) => (
                    <div key={idx} className="w-[85vw] md:w-[320px] lg:w-[340px] shrink-0 snap-start bg-white rounded-[2rem] p-6 flex flex-col transition hover:shadow-[0_15px_40px_rgba(208,163,83,0.1)] hover:-translate-y-1 shadow-[0_5px_15px_rgba(0,0,0,0.03)] border border-[#d0a353]/10 group">
                        <div className="w-full h-48 mb-6 relative overflow-hidden rounded-xl border border-gray-100">
                            <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" alt={item.title} />
                        </div>
                        
                        <div className="flex justify-center gap-1.5 mb-5">
                            <span className="w-2 h-2 rounded-full bg-[#ca9740]/40"></span>
                            <span className="w-2 h-2 rounded-full bg-[#ca9740]/80"></span>
                            <span className="w-2 h-2 rounded-full bg-[#1a202c]"></span>
                        </div>
                        
                        <h3 className="font-heading text-xl lg:text-2xl font-bold text-[#1a202c] mb-2 text-center">{item.title}</h3>
                        <p className="text-[0.85rem] text-gray-500 mb-8 font-medium px-2 text-center leading-relaxed flex-grow">{item.desc}</p>
                        
                        <div className="mt-auto flex justify-center items-center gap-6">
                            <button className="cursor-pointer bg-gradient-to-r from-[#ca9740] to-[#dfb45e] hover:shadow-lg hover:-translate-y-0.5 text-white px-5 py-2 rounded-full text-[0.7rem] font-bold transition uppercase tracking-wider">Learn more</button>
                            <span className="text-[#ca9740] hover:underline text-[0.75rem] cursor-pointer font-bold tracking-wide uppercase">Quote <i className="fas fa-chevron-right text-[8px] ml-1"></i></span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
