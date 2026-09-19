import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Smart IoT Solutions",
  description: "Discover our comprehensive range of home automation, smart locks, and gate automation services.",
};

export default function ServicesPage() {
  return (
    <>

    {/* Hero Section */}
    <section className="relative pt-32 pb-24 bg-[#0c121e] overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="/images/products/interior.jpg" alt="Luxury Background" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-[#0c121e]/90 to-[#0c121e]/40"></div>
        </div>

        <div className="container relative z-10">
            <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-6 px-4 py-1.5 rounded-full border border-[#d0a353]/30 bg-[#d0a353]/10 backdrop-blur-sm">
                <Link href="/" className="text-gray-300 hover:text-white transition">HOME</Link> 
                <span className="text-[#d0a353]">/</span> SERVICES
            </div>
            
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                    Ecosystems of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0a353] via-[#fdf0a6] to-[#ca9740]">intelligence.</span>
                </h1>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
                    We engineer bespoke automation environments for luxury residences, forward-thinking enterprises, and world-class hospitality venues.
                </p>
            </div>
        </div>
    </section>

    {/* The Interactive Portals */}
    <section className="bg-[#0c121e] pb-24">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                {/* Residential Portal */}
                <div className="group relative rounded-3xl overflow-hidden h-[600px] shadow-2xl">
                    <img src="/images/products/exterior.jpg" alt="Residential Automation" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-[#0c121e]/60 to-transparent"></div>
                    
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                        <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4">
                            <span className="w-8 h-[1px] bg-[#d0a353]"></span> RESIDENTIAL
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                            The Responsive <br /><span className="text-[#d0a353] italic">Home.</span>
                        </h2>
                        <p className="text-gray-300 text-sm max-w-sm mb-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                            Immersive home theater audio, automated climate control, and enterprise-grade perimeter security managed from a single elegant interface.
                        </p>
                        
                        {/* Glass Panel Features */}
                        <div className="grid grid-cols-2 gap-4 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200">
                            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                                <i className="fas fa-lightbulb text-[#d0a353] text-xl mb-2"></i>
                                <h4 className="text-white text-sm font-bold">Smart Lighting</h4>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                                <i className="fas fa-shield-alt text-[#d0a353] text-xl mb-2"></i>
                                <h4 className="text-white text-sm font-bold">Perimeter Security</h4>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                                <i className="fas fa-door-open text-[#d0a353] text-xl mb-2"></i>
                                <h4 className="text-white text-sm font-bold">Motorized Gates</h4>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                                <i className="fas fa-temperature-low text-[#d0a353] text-xl mb-2"></i>
                                <h4 className="text-white text-sm font-bold">Climate Control</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Commercial Portal */}
                <div className="group relative rounded-3xl overflow-hidden h-[600px] shadow-2xl">
                    <img src="/images/products/interior.jpg" alt="Commercial Automation" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-[#0c121e]/60 to-transparent"></div>
                    
                    <div className="absolute inset-0 p-10 flex flex-col justify-end">
                        <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4">
                            <span className="w-8 h-[1px] bg-[#d0a353]"></span> COMMERCIAL
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-white leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                            The Intelligent <br /><span className="text-[#d0a353] italic">Enterprise.</span>
                        </h2>
                        <p className="text-gray-300 text-sm max-w-sm mb-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                            Reduce energy costs by 30%, secure assets with biometric protocols, and enable seamless boardroom presentations with one-touch AV routing.
                        </p>
                        
                        {/* Glass Panel Features */}
                        <div className="grid grid-cols-2 gap-4 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-200">
                            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                                <i className="fas fa-fingerprint text-[#d0a353] text-xl mb-2"></i>
                                <h4 className="text-white text-sm font-bold">Biometric Access</h4>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                                <i className="fas fa-leaf text-[#d0a353] text-xl mb-2"></i>
                                <h4 className="text-white text-sm font-bold">Energy Sensors</h4>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                                <i className="fas fa-tv text-[#d0a353] text-xl mb-2"></i>
                                <h4 className="text-white text-sm font-bold">Boardroom AV</h4>
                            </div>
                            <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl">
                                <i className="fas fa-server text-[#d0a353] text-xl mb-2"></i>
                                <h4 className="text-white text-sm font-bold">Network Infrastructure</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    {/* How We Work - Dark Theme Redesign */}
    <section className="py-24 bg-[#0a0f18] relative border-t border-white/5">
        <div className="container">
            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4">
                    <span className="w-8 h-[1px] bg-[#d0a353]"></span> METHODOLOGY <span className="w-8 h-[1px] bg-[#d0a353]"></span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                    Execution without <span className="text-[#d0a353] italic">compromise.</span>
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                <div className="hidden md:block absolute top-8 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#d0a353]/30 to-transparent z-0"></div>
                
                <div className="relative group">
                    <div className="w-16 h-16 mx-auto bg-[#121417] border border-[#d0a353]/30 rounded-2xl rotate-45 flex items-center justify-center mb-8 z-10 relative group-hover:bg-[#d0a353] transition-colors duration-500 shadow-[0_0_30px_rgba(208,163,83,0.1)]">
                        <span className="-rotate-45 text-[#d0a353] group-hover:text-[#0c121e] text-xl font-bold">01</span>
                    </div>
                    <div className="text-center px-4">
                        <h4 className="font-bold text-white mb-3 text-lg">Consultation</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">On-site analysis of your lifestyle or business workflows to outline exact technological requirements.</p>
                    </div>
                </div>
                
                <div className="relative group">
                    <div className="w-16 h-16 mx-auto bg-[#121417] border border-[#d0a353]/30 rounded-2xl rotate-45 flex items-center justify-center mb-8 z-10 relative group-hover:bg-[#d0a353] transition-colors duration-500 shadow-[0_0_30px_rgba(208,163,83,0.1)]">
                        <span className="-rotate-45 text-[#d0a353] group-hover:text-[#0c121e] text-xl font-bold">02</span>
                    </div>
                    <div className="text-center px-4">
                        <h4 className="font-bold text-white mb-3 text-lg">Architecture</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Detailed CAD schematics, network blueprints, and transparent Bill of Materials (BOQ).</p>
                    </div>
                </div>
                
                <div className="relative group">
                    <div className="w-16 h-16 mx-auto bg-[#121417] border border-[#d0a353]/30 rounded-2xl rotate-45 flex items-center justify-center mb-8 z-10 relative group-hover:bg-[#d0a353] transition-colors duration-500 shadow-[0_0_30px_rgba(208,163,83,0.1)]">
                        <span className="-rotate-45 text-[#d0a353] group-hover:text-[#0c121e] text-xl font-bold">03</span>
                    </div>
                    <div className="text-center px-4">
                        <h4 className="font-bold text-white mb-3 text-lg">Deployment</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">Flawless, clean installations executed by our certified network and automation engineers.</p>
                    </div>
                </div>
                
                <div className="relative group">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#ca9740] to-[#dfb45e] border border-[#d0a353]/30 rounded-2xl rotate-45 flex items-center justify-center mb-8 z-10 relative shadow-[0_0_40px_rgba(208,163,83,0.3)]">
                        <span className="-rotate-45 text-[#0c121e] text-xl font-bold"><i className="fas fa-check"></i></span>
                    </div>
                    <div className="text-center px-4">
                        <h4 className="font-bold text-white mb-3 text-lg">Support</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">24/7 dedicated local support, preventative maintenance, and seamless software updates.</p>
                    </div>
                </div>
            </div>
            
            <div className="text-center mt-20">
                <Link href="/contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] hover:from-[#b58635] hover:to-[#ca9740] text-[#0c121e] px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-[0_10px_30px_rgba(208,163,83,0.3)] hover:-translate-y-1">
                    Book a Consultation <i className="fas fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    </section>

    </>
  );
}
