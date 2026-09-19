import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Smart IoT Solutions",
  description: "Explore our portfolio of smart home and commercial automation projects.",
};

export default function ProjectsPage() {
  return (
    <>

    {/* Hero Section */}
    <section className="relative pt-32 pb-20 bg-[#0c121e] overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="/images/products/exterior.jpg" alt="Luxury Background" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-[#0c121e]/90 to-[#0c121e]/40"></div>
        </div>

        <div className="container relative z-10 text-center">
            <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-6 px-4 py-1.5 rounded-full border border-[#d0a353]/30 bg-[#d0a353]/10 backdrop-blur-sm">
                <Link href="/" className="text-gray-300 hover:text-white transition">HOME</Link> 
                <span className="text-[#d0a353]">/</span> PROJECTS
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Architectural <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0a353] via-[#fdf0a6] to-[#ca9740]">Masterpieces.</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                Explore a curated gallery of our finest automation integrations. From hillside villas to corporate headquarters, we deliver flawless invisible technology.
            </p>
        </div>
    </section>

    {/* Immersive Dark Gallery Section */}
    <section className="bg-[#0c121e] pb-32">
        <div className="container">
            
            {/* Elegant Filter Menu */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-white/5 pb-8">
                <button className="cursor-pointer px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-[#0c121e] text-[0.65rem] font-bold uppercase tracking-widest shadow-[0_4px_15px_rgba(208,163,83,0.3)]">All Projects</button>
                <button className="cursor-pointer px-6 py-2.5 rounded-full bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-[#d0a353]/50 text-[0.65rem] font-bold uppercase tracking-widest transition-all">Residential</button>
                <button className="cursor-pointer px-6 py-2.5 rounded-full bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-[#d0a353]/50 text-[0.65rem] font-bold uppercase tracking-widest transition-all">Commercial</button>
                <button className="cursor-pointer px-6 py-2.5 rounded-full bg-white/5 text-gray-400 hover:text-white border border-white/10 hover:border-[#d0a353]/50 text-[0.65rem] font-bold uppercase tracking-widest transition-all">Hospitality</button>
            </div>

            <div className="flex flex-col gap-12">
                
                {/* Project 1 - Full Width Immersive */}
                <div className="group relative w-full h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <img src="/images/products/exterior.jpg" alt="Luxury Villa" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                    
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0c121e]/90 via-[#0c121e]/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-transparent opacity-80"></div>
                    
                    {/* Content Panel */}
                    <div className="absolute bottom-0 left-0 w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-end h-full">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-[0.6rem] font-bold uppercase tracking-widest text-[#d0a353] border border-white/10 mb-6 w-max">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d0a353]"></span> Residential
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>The Ooty Hillside <br />Retreat</h3>
                        <p className="text-gray-300 text-sm mb-8 leading-relaxed max-w-md">
                            A sprawling 8,000 sq.ft luxury villa nestled in the hills. The client required complete climate automation, centralized lighting, and an invisible multi-room audio system.
                        </p>
                        
                        <div className="mb-10">
                            <div className="text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest mb-3">Scope of Work:</div>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-[#0c121e]/50 backdrop-blur-sm px-4 py-2 rounded-lg text-[0.7rem] font-bold text-gray-300 border border-white/10">Smart Lighting</span>
                                <span className="bg-[#0c121e]/50 backdrop-blur-sm px-4 py-2 rounded-lg text-[0.7rem] font-bold text-gray-300 border border-white/10">Climate Control</span>
                                <span className="bg-[#0c121e]/50 backdrop-blur-sm px-4 py-2 rounded-lg text-[0.7rem] font-bold text-gray-300 border border-white/10">Home Theater AV</span>
                            </div>
                        </div>
                        
                        <Link href="#" className="inline-flex items-center gap-3 text-white text-[0.7rem] font-bold uppercase tracking-widest hover:text-[#d0a353] transition-colors w-max group/link">
                            View Case Study <i className="fas fa-arrow-right transform group-hover/link:translate-x-1 transition-transform"></i>
                        </Link>
                    </div>
                </div>
                
                {/* Project 2 - Full Width Immersive */}
                <div className="group relative w-full h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <img src="/images/products/interior.jpg" alt="Corporate Office" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                    
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0c121e]/90 via-[#0c121e]/40 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-transparent to-transparent opacity-80"></div>
                    
                    {/* Content Panel */}
                    <div className="absolute bottom-0 left-0 w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-end h-full">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-[0.6rem] font-bold uppercase tracking-widest text-[#d0a353] border border-white/10 mb-6 w-max">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d0a353]"></span> Commercial
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>FinTech HQ, <br />Bangalore</h3>
                        <p className="text-gray-300 text-sm mb-8 leading-relaxed max-w-md">
                            A modern 25,000 sq.ft workspace demanding high-level biometric security, automated energy management, and state-of-the-art boardroom AV setups.
                        </p>
                        
                        <div className="mb-10">
                            <div className="text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest mb-3">Scope of Work:</div>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-[#0c121e]/50 backdrop-blur-sm px-4 py-2 rounded-lg text-[0.7rem] font-bold text-gray-300 border border-white/10">Biometric Access</span>
                                <span className="bg-[#0c121e]/50 backdrop-blur-sm px-4 py-2 rounded-lg text-[0.7rem] font-bold text-gray-300 border border-white/10">Network Security</span>
                                <span className="bg-[#0c121e]/50 backdrop-blur-sm px-4 py-2 rounded-lg text-[0.7rem] font-bold text-gray-300 border border-white/10">Boardroom AV</span>
                            </div>
                        </div>
                        
                        <Link href="#" className="inline-flex items-center gap-3 text-white text-[0.7rem] font-bold uppercase tracking-widest hover:text-[#d0a353] transition-colors w-max group/link">
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
