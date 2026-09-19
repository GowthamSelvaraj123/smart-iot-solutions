import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Smart IoT Solutions",
  description: "Explore our portfolio of smart home and commercial automation projects.",
};

export default function ProjectsPage() {
  return (
    <>



    <section className="relative pt-32 pb-20 bg-[#0c121e] overflow-hidden">
        {/* Glitter Background with Opacity and Blend Mode */}
        <div className="absolute inset-0 z-0">
            <img src="/images/gold_glitter.jpg" alt="Gold Glitter Background" className="w-full h-full object-cover opacity-20 mix-blend-color-dodge" />
            <div className="absolute inset-0 bg-[#d0a353]/30 mix-blend-multiply pointer-events-none"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-[#0c121e]/80 to-transparent z-0"></div>

        <div className="container relative z-10 text-center">
            <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4 px-4 py-1.5 rounded-full border border-[#d0a353]/40 bg-[#d0a353]/10 shadow-inner">
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  HOME
                </Link> 
                <span className="text-[#d0a353]">/</span> PROJECTS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0a353] via-[#fdf0a6] to-[#ca9740]">Masterpieces.</span>
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
                Explore a curated selection of our finest installations. We take pride in delivering flawless integration across a diverse range of architectures and client requirements.
            </p>
        </div>
    </section>

    <section className="py-12 bg-white border-b border-gray-100">
        <div className="container">
            <div className="flex flex-wrap justify-center gap-4">
                <button className="cursor-pointer px-6 py-2 rounded-full bg-[#121417] text-white text-xs font-bold uppercase tracking-wider">All Projects</button>
                <button className="cursor-pointer px-6 py-2 rounded-full bg-[#f9f8f4] text-gray-600 hover:text-[#d0a353] border border-gray-200 text-xs font-bold uppercase tracking-wider transition">Residential</button>
                <button className="cursor-pointer px-6 py-2 rounded-full bg-[#f9f8f4] text-gray-600 hover:text-[#d0a353] border border-gray-200 text-xs font-bold uppercase tracking-wider transition">Commercial</button>
                <button className="cursor-pointer px-6 py-2 rounded-full bg-[#f9f8f4] text-gray-600 hover:text-[#d0a353] border border-gray-200 text-xs font-bold uppercase tracking-wider transition">Hospitality</button>
            </div>
        </div>
    </section>

    <section className="py-20 bg-white relative">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                
                <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition duration-500 bg-white">
                    <div className="h-80 overflow-hidden relative">
                        <img src="images/smart_home_villa_1786093285055.png" alt="Luxury Villa" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-[#d0a353]">Residential</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">The Ooty Hillside Retreat</h3>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">A sprawling 8,000 sq.ft luxury villa nestled in the hills. The client required complete climate automation, centralized lighting, and an invisible multi-room audio system.</p>
                        
                        <div className="border-t border-gray-100 pt-4 mb-6">
                            <div className="text-xs font-bold text-gray-900 mb-2">Scope of Work:</div>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-[#f9f8f4] px-2 py-1 rounded text-[10px] text-gray-600 border border-gray-200">Smart Lighting</span>
                                <span className="bg-[#f9f8f4] px-2 py-1 rounded text-[10px] text-gray-600 border border-gray-200">Climate Control</span>
                                <span className="bg-[#f9f8f4] px-2 py-1 rounded text-[10px] text-gray-600 border border-gray-200">Home Theater AV</span>
                                <span className="bg-[#f9f8f4] px-2 py-1 rounded text-[10px] text-gray-600 border border-gray-200">Motorized Gates</span>
                            </div>
                        </div>
                        
                        <a href="#" className="inline-flex items-center gap-2 text-[#d0a353] text-xs font-bold uppercase tracking-wider group-hover:text-[#ca9740] transition">Read Full Case Study <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                
                <div className="group relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition duration-500 bg-white">
                    <div className="h-80 overflow-hidden relative">
                        <img src="images/auto_office_1786094016416.png" alt="Corporate Office" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-[#d0a353]">Commercial</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">FinTech HQ, Bangalore</h3>
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">A modern 25,000 sq.ft workspace demanding high-level biometric security, automated energy management, and state-of-the-art boardroom AV setups.</p>
                        
                        <div className="border-t border-gray-100 pt-4 mb-6">
                            <div className="text-xs font-bold text-gray-900 mb-2">Scope of Work:</div>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-[#f9f8f4] px-2 py-1 rounded text-[10px] text-gray-600 border border-gray-200">Biometric Access</span>
                                <span className="bg-[#f9f8f4] px-2 py-1 rounded text-[10px] text-gray-600 border border-gray-200">Network Security</span>
                                <span className="bg-[#f9f8f4] px-2 py-1 rounded text-[10px] text-gray-600 border border-gray-200">Boardroom Automation</span>
                                <span className="bg-[#f9f8f4] px-2 py-1 rounded text-[10px] text-gray-600 border border-gray-200">Energy Sensors</span>
                            </div>
                        </div>
                        
                        <a href="#" className="inline-flex items-center gap-2 text-[#d0a353] text-xs font-bold uppercase tracking-wider group-hover:text-[#ca9740] transition">Read Full Case Study <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>



    </>
  );
}

