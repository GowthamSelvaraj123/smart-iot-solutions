import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Smart IoT Solutions",
  description: "Learn about our mission to bring secure and reliable smart automation to your homes and businesses.",
};

export default function AboutPage() {
  return (
    <>
    {/* Hero Section */}
    <section className="relative pt-32 pb-24 bg-[#0c121e] overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img src="/images/products/security.jpg" alt="Luxury Background" className="w-full h-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e] via-[#0c121e]/90 to-[#0c121e]/40"></div>
        </div>

        <div className="container relative z-10 text-center">
            <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-6 px-4 py-1.5 rounded-full border border-[#d0a353]/30 bg-[#d0a353]/10 backdrop-blur-sm">
                <Link href="/" className="text-gray-300 hover:text-white transition">HOME</Link> 
                <span className="text-[#d0a353]">/</span> ABOUT US
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Designing the future <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0a353] via-[#fdf0a6] to-[#ca9740]">of smart living.</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                Smart IoT Solutions is South India's premier automation integration company. We bring architecture and technology together, creating spaces that respond to your needs seamlessly.
            </p>
        </div>
    </section>

    {/* By The Numbers - Gold Accent Banner */}
    <section className="bg-gradient-to-r from-[#ca9740] via-[#dfb45e] to-[#ca9740] py-12 relative z-20 shadow-[0_0_50px_rgba(208,163,83,0.2)]">
        <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-[#0c121e]/10">
                <div>
                    <div className="text-3xl md:text-5xl font-bold text-[#0c121e] mb-1" style={{ fontFamily: "var(--font-heading)" }}>5+</div>
                    <div className="text-[0.65rem] font-bold text-[#0c121e]/70 uppercase tracking-widest">Years of Excellence</div>
                </div>
                <div>
                    <div className="text-3xl md:text-5xl font-bold text-[#0c121e] mb-1" style={{ fontFamily: "var(--font-heading)" }}>150+</div>
                    <div className="text-[0.65rem] font-bold text-[#0c121e]/70 uppercase tracking-widest">Projects Delivered</div>
                </div>
                <div>
                    <div className="text-3xl md:text-5xl font-bold text-[#0c121e] mb-1" style={{ fontFamily: "var(--font-heading)" }}>24/7</div>
                    <div className="text-[0.65rem] font-bold text-[#0c121e]/70 uppercase tracking-widest">Dedicated Support</div>
                </div>
                <div>
                    <div className="text-3xl md:text-5xl font-bold text-[#0c121e] mb-1" style={{ fontFamily: "var(--font-heading)" }}>100%</div>
                    <div className="text-[0.65rem] font-bold text-[#0c121e]/70 uppercase tracking-widest">Client Satisfaction</div>
                </div>
            </div>
        </div>
    </section>

    {/* Core Philosophy - Dark Premium Layout */}
    <section className="py-24 bg-[#0c121e] relative">
        <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4">
                    <span className="w-8 h-[1px] bg-[#d0a353]"></span> OUR PHILOSOPHY <span className="w-8 h-[1px] bg-[#d0a353]"></span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-white leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                    Technology should be <span className="text-[#d0a353] italic">invisible.</span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                    We don't just sell gadgets; we engineer experiences. By carefully selecting premium hardware and combining it with meticulous installation, we ensure that your automation system works effortlessly—enhancing your lifestyle rather than complicating it.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group bg-[#121417] p-10 rounded-3xl border border-white/5 hover:border-[#d0a353]/40 transition-colors duration-500 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d0a353]/5 rounded-full blur-3xl group-hover:bg-[#d0a353]/20 transition-all duration-700"></div>
                    <i className="fas fa-check-circle text-[#d0a353] text-3xl mb-6 relative z-10"></i>
                    <h4 className="font-bold text-white text-xl mb-3 relative z-10">Absolute Clarity</h4>
                    <p className="text-sm text-gray-500 leading-relaxed relative z-10">Honest scopes, transparent pricing, and thorough demonstrations before you ever commit.</p>
                </div>
                <div className="group bg-[#121417] p-10 rounded-3xl border border-white/5 hover:border-[#d0a353]/40 transition-colors duration-500 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d0a353]/5 rounded-full blur-3xl group-hover:bg-[#d0a353]/20 transition-all duration-700"></div>
                    <i className="fas fa-tools text-[#d0a353] text-3xl mb-6 relative z-10"></i>
                    <h4 className="font-bold text-white text-xl mb-3 relative z-10">Meticulous Craft</h4>
                    <p className="text-sm text-gray-500 leading-relaxed relative z-10">Clean wiring, flawless installation, and systems designed to age gracefully over time.</p>
                </div>
                <div className="group bg-[#121417] p-10 rounded-3xl border border-white/5 hover:border-[#d0a353]/40 transition-colors duration-500 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d0a353]/5 rounded-full blur-3xl group-hover:bg-[#d0a353]/20 transition-all duration-700"></div>
                    <i className="fas fa-headset text-[#d0a353] text-3xl mb-6 relative z-10"></i>
                    <h4 className="font-bold text-white text-xl mb-3 relative z-10">Enduring Care</h4>
                    <p className="text-sm text-gray-500 leading-relaxed relative z-10">We provide comprehensive handovers and ongoing local support long after the project is done.</p>
                </div>
                <div className="group bg-[#121417] p-10 rounded-3xl border border-white/5 hover:border-[#d0a353]/40 transition-colors duration-500 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#d0a353]/5 rounded-full blur-3xl group-hover:bg-[#d0a353]/20 transition-all duration-700"></div>
                    <i className="fas fa-shield-alt text-[#d0a353] text-3xl mb-6 relative z-10"></i>
                    <h4 className="font-bold text-white text-xl mb-3 relative z-10">Uncompromised Security</h4>
                    <p className="text-sm text-gray-500 leading-relaxed relative z-10">Your data and privacy are paramount. We deploy enterprise-grade security protocols for all homes.</p>
                </div>
            </div>
        </div>
    </section>

    {/* The Legacy Timeline */}
    <section className="py-24 bg-[#0a0f18] relative">
        <div className="container">
            <div className="text-center mb-20">
                <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4">
                    <span className="w-8 h-[1px] bg-[#d0a353]"></span> OUR JOURNEY <span className="w-8 h-[1px] bg-[#d0a353]"></span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                    Growing smarter, <span className="text-[#d0a353] italic">together.</span>
                </h2>
            </div>
            
            <div className="max-w-5xl mx-auto relative px-4">
                
                {/* Center Line */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-[1px] bg-gradient-to-b from-transparent via-[#d0a353]/50 to-transparent"></div>
                
                {/* Node 1 */}
                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-16 pl-12 md:pl-0">
                    <div className="md:w-[45%] md:text-right md:pr-12 order-2 md:order-1 mt-4 md:mt-0">
                        <h3 className="text-2xl font-bold text-white mb-3">The Beginning</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">Founded in Coimbatore with a focus on basic residential lighting and CCTV installations, laying the groundwork for our smart integration approach.</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[#0c121e] border-2 border-[#d0a353] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(208,163,83,0.5)] z-10 order-1 md:order-2">
                        <div className="w-2 h-2 bg-[#d0a353] rounded-full"></div>
                    </div>
                    <div className="md:w-[45%] md:pl-12 order-3 text-left">
                        <div className="text-3xl font-bold text-[#d0a353]/30" style={{ fontFamily: "var(--font-heading)" }}>2019</div>
                    </div>
                </div>
                
                {/* Node 2 */}
                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-16 pl-12 md:pl-0">
                    <div className="md:w-[45%] md:pr-12 order-3 md:order-1 text-left md:text-right hidden md:block">
                        <div className="text-3xl font-bold text-[#d0a353]/30" style={{ fontFamily: "var(--font-heading)" }}>2021</div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[#0c121e] border-2 border-[#d0a353] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(208,163,83,0.5)] z-10 order-1 md:order-2">
                        <div className="w-2 h-2 bg-[#d0a353] rounded-full"></div>
                    </div>
                    <div className="md:w-[45%] md:pl-12 order-2 md:order-3 mt-4 md:mt-0">
                        <div className="text-3xl font-bold text-[#d0a353]/30 md:hidden mb-2" style={{ fontFamily: "var(--font-heading)" }}>2021</div>
                        <h3 className="text-2xl font-bold text-white mb-3">Commercial Expansion</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">Expanded our portfolio to include smart boardroom automation, biometric access control, and large-scale networking for corporate offices.</p>
                    </div>
                </div>
                
                {/* Node 3 */}
                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-16 pl-12 md:pl-0">
                    <div className="md:w-[45%] md:text-right md:pr-12 order-2 md:order-1 mt-4 md:mt-0">
                        <h3 className="text-2xl font-bold text-white mb-3">Luxury Integration</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">Partnered with global luxury brands to provide high-end, centralized control systems for luxury villas and massive private estates.</p>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[#0c121e] border-2 border-[#d0a353] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(208,163,83,0.5)] z-10 order-1 md:order-2">
                        <div className="w-2 h-2 bg-[#d0a353] rounded-full"></div>
                    </div>
                    <div className="md:w-[45%] md:pl-12 order-3 text-left">
                        <div className="text-3xl font-bold text-[#d0a353]/30" style={{ fontFamily: "var(--font-heading)" }}>2023</div>
                    </div>
                </div>
                
                {/* Node 4 */}
                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full pl-12 md:pl-0">
                    <div className="md:w-[45%] md:pr-12 order-3 md:order-1 text-left md:text-right hidden md:block">
                        <div className="text-3xl font-bold text-[#d0a353]/30" style={{ fontFamily: "var(--font-heading)" }}>2025</div>
                    </div>
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(208,163,83,0.6)] z-10 order-1 md:order-2">
                        <i className="fas fa-rocket text-[#0c121e]"></i>
                    </div>
                    <div className="md:w-[45%] md:pl-12 order-2 md:order-3 mt-4 md:mt-0">
                        <div className="text-3xl font-bold text-[#d0a353]/30 md:hidden mb-2" style={{ fontFamily: "var(--font-heading)" }}>2025</div>
                        <h3 className="text-2xl font-bold text-white mb-3">South India Reach</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">Established a strong presence across Tamil Nadu, Karnataka, and Kerala with over 150+ successfully delivered premium projects.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    </>
  );
}
