import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Smart IoT Solutions",
  description: "Explore our portfolio of smart home and commercial automation projects.",
};

export default function ProjectsPage() {
  return (
    <>

    {/* Hero Section - Dark */}
    <section className="relative pt-32 pb-20 bg-[#0c121e] overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="/images/gold_glitter.jpg" alt="Gold Glitter Background" className="w-full h-full object-cover opacity-20 mix-blend-color-dodge" />
            <div className="absolute inset-0 bg-[#d0a353]/30 mix-blend-multiply pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-[#0c121e]/80 to-transparent"></div>
        </div>

        <div className="container relative z-10 text-center">
            <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-6 px-4 py-1.5 rounded-full border border-[#d0a353]/40 bg-[#d0a353]/10 shadow-inner">
                <Link href="/" className="text-gray-300 hover:text-white transition">HOME</Link> 
                <span className="text-[#d0a353]">/</span> PROJECTS
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Architectural <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0a353] via-[#fdf0a6] to-[#ca9740]">Masterpieces.</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                Explore a curated gallery of our finest automation integrations. From hillside villas to corporate headquarters, we deliver flawless invisible technology.
            </p>
        </div>
    </section>

    {/* Immersive Gallery Section - Light Theme */}
    <section className="bg-[#fdfcf9] pb-32 pt-16 relative">
        <div className="container max-w-[1200px]">
            
            {/* Elegant Filter Menu */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                <button className="cursor-pointer px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white text-[0.65rem] font-bold uppercase tracking-widest shadow-[0_4px_15px_rgba(208,163,83,0.3)] border border-[#d0a353]">All Projects</button>
                <button className="cursor-pointer px-6 py-2.5 rounded-full bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-[#d0a353]/50 text-[0.65rem] font-bold uppercase tracking-widest transition-all shadow-sm">Residential</button>
                <button className="cursor-pointer px-6 py-2.5 rounded-full bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-[#d0a353]/50 text-[0.65rem] font-bold uppercase tracking-widest transition-all shadow-sm">Commercial</button>
                <button className="cursor-pointer px-6 py-2.5 rounded-full bg-white text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-[#d0a353]/50 text-[0.65rem] font-bold uppercase tracking-widest transition-all shadow-sm">Hospitality</button>
            </div>

            <div className="flex flex-col gap-16">
                
                {/* Project 1 */}
                <div className="group relative w-full h-auto md:h-[600px] rounded-[2rem] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col md:flex-row overflow-hidden">
                    <div className="w-full md:w-[60%] h-[300px] md:h-full relative overflow-hidden">
                        <img src="/images/products/exterior.jpg" alt="Luxury Villa" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                    </div>
                    
                    <div className="w-full md:w-[40%] p-8 md:p-12 flex flex-col justify-center bg-white relative z-10 shadow-[-10px_0_30px_rgba(0,0,0,0.03)]">
                        <div className="inline-flex items-center gap-2 bg-[#f9f8f4] px-3 py-1.5 rounded-full text-[0.6rem] font-bold uppercase tracking-widest text-[#ca9740] border border-[#d0a353]/20 mb-6 w-max">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d0a353]"></span> Residential
                        </div>
                        
                        <h3 className="text-3xl font-bold text-[#1a202c] mb-4 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>The Ooty Hillside Retreat</h3>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                            A sprawling 8,000 sq.ft luxury villa nestled in the hills. The client required complete climate automation, centralized lighting, and an invisible multi-room audio system.
                        </p>
                        
                        <div className="mb-10">
                            <div className="text-[0.65rem] font-bold text-[#ca9740] uppercase tracking-widest mb-3">Scope of Work</div>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-50 px-3 py-1.5 rounded-lg text-[0.7rem] font-bold text-gray-700 border border-gray-100">Smart Lighting</span>
                                <span className="bg-gray-50 px-3 py-1.5 rounded-lg text-[0.7rem] font-bold text-gray-700 border border-gray-100">Climate Control</span>
                                <span className="bg-gray-50 px-3 py-1.5 rounded-lg text-[0.7rem] font-bold text-gray-700 border border-gray-100">Home Theater AV</span>
                            </div>
                        </div>
                        
                        <Link href="#" className="inline-flex items-center gap-3 text-[#1a202c] text-[0.7rem] font-bold uppercase tracking-widest hover:text-[#d0a353] transition-colors w-max group/link">
                            View Case Study <i className="fas fa-arrow-right transform group-hover/link:translate-x-1 transition-transform"></i>
                        </Link>
                    </div>
                </div>
                
                {/* Project 2 */}
                <div className="group relative w-full h-auto md:h-[600px] rounded-[2rem] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col md:flex-row-reverse overflow-hidden">
                    <div className="w-full md:w-[60%] h-[300px] md:h-full relative overflow-hidden">
                        <img src="/images/products/interior.jpg" alt="Corporate Office" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                    </div>
                    
                    <div className="w-full md:w-[40%] p-8 md:p-12 flex flex-col justify-center bg-white relative z-10 shadow-[10px_0_30px_rgba(0,0,0,0.03)]">
                        <div className="inline-flex items-center gap-2 bg-[#f9f8f4] px-3 py-1.5 rounded-full text-[0.6rem] font-bold uppercase tracking-widest text-[#ca9740] border border-[#d0a353]/20 mb-6 w-max">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d0a353]"></span> Commercial
                        </div>
                        
                        <h3 className="text-3xl font-bold text-[#1a202c] mb-4 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>FinTech HQ, Bangalore</h3>
                        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                            A modern 25,000 sq.ft workspace demanding high-level biometric security, automated energy management, and state-of-the-art boardroom AV setups.
                        </p>
                        
                        <div className="mb-10">
                            <div className="text-[0.65rem] font-bold text-[#ca9740] uppercase tracking-widest mb-3">Scope of Work</div>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-50 px-3 py-1.5 rounded-lg text-[0.7rem] font-bold text-gray-700 border border-gray-100">Biometric Access</span>
                                <span className="bg-gray-50 px-3 py-1.5 rounded-lg text-[0.7rem] font-bold text-gray-700 border border-gray-100">Network Security</span>
                                <span className="bg-gray-50 px-3 py-1.5 rounded-lg text-[0.7rem] font-bold text-gray-700 border border-gray-100">Boardroom AV</span>
                            </div>
                        </div>
                        
                        <Link href="#" className="inline-flex items-center gap-3 text-[#1a202c] text-[0.7rem] font-bold uppercase tracking-widest hover:text-[#d0a353] transition-colors w-max group/link">
                            View Case Study <i className="fas fa-arrow-right transform group-hover/link:translate-x-1 transition-transform"></i>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    </section>

    </>
  );
}
