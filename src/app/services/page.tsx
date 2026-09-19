import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Smart IoT Solutions",
  description: "Discover our comprehensive range of home automation, smart locks, and gate automation services.",
};

export default function ServicesPage() {
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
                <span className="text-[#d0a353]">/</span> SERVICES
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0a353] via-[#fdf0a6] to-[#ca9740]">Services.</span>
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
                We engineer intelligent ecosystems tailored to the specific needs of residential, commercial, and hospitality environments. Experience the perfect synergy of comfort, security, and efficiency.
            </p>
        </div>
    </section>

    
    <section className="py-24 bg-white relative border-b border-gray-100">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4">
                        <span className="w-8 h-[1px] bg-[#d0a353]"></span> RESIDENTIAL
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                        Transform your house into a <span className="text-[#d0a353] font-heading italic">responsive home.</span>
                    </h2>
                    <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                        Imagine a home that anticipates your needs. Wake up to natural light as smart curtains open, enjoy the perfect climate when you return from work, and secure your entire perimeter with a single "Goodnight" command. Our residential solutions merge luxury with unparalleled convenience.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-4">
                            <i className="fas fa-check-circle text-[#d0a353] mt-1"></i>
                            <div>
                                <strong className="block text-gray-900 text-sm mb-1">Intelligent Lighting & Climate</strong>
                                <span className="text-xs text-gray-500">Create mood-based scenes and automatically adjust ACs based on room occupancy.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <i className="fas fa-check-circle text-[#d0a353] mt-1"></i>
                            <div>
                                <strong className="block text-gray-900 text-sm mb-1">Home Theater & Multi-Room Audio</strong>
                                <span className="text-xs text-gray-500">Immersive audiovisual experiences distributed perfectly throughout your living spaces.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <i className="fas fa-check-circle text-[#d0a353] mt-1"></i>
                            <div>
                                <strong className="block text-gray-900 text-sm mb-1">Advanced Security & Access</strong>
                                <span className="text-xs text-gray-500">Biometric locks, video doorbells, and AI-powered perimeter cameras accessible from your phone.</span>
                            </div>
                        </li>
                    </ul>
                    <a href="/contact" className="inline-block bg-[#121417] text-white px-8 py-3 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#d0a353] transition duration-300">Consult for your home</a>
                </div>
                <div className="order-1 lg:order-2 relative">
                    <img src="images/smart_home_villa_1786093285055.png" alt="Residential Automation" className="rounded-xl shadow-2xl w-full h-[500px] object-cover" />
                    <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-gray-100 flex items-center gap-4 z-20">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ca9740] to-[#dfb45e] flex items-center justify-center text-white text-xl"><i className="fas fa-mobile-alt"></i></div>
                        <div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Control Everything</div>
                            <div className="text-sm font-bold text-gray-900">From One App</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="py-24 bg-[#f9f8f4] relative border-b border-gray-100">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <img src="images/auto_office_1786094016416.png" alt="Commercial Automation" className="rounded-xl shadow-2xl w-full h-[500px] object-cover" />
                    <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-xl border border-gray-100 flex items-center gap-4 z-20">
                        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-xl"><i className="fas fa-chart-line"></i></div>
                        <div>
                            <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Energy Savings</div>
                            <div className="text-sm font-bold text-gray-900">Up to 30% reduction</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4">
                        <span className="w-8 h-[1px] bg-[#d0a353]"></span> COMMERCIAL
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                        Smart infrastructure for <span className="text-[#d0a353] font-heading italic">modern business.</span>
                    </h2>
                    <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                        Optimize your workplace with intelligent systems that boost productivity, reduce energy costs, and ensure absolute security. From corporate boardrooms to sprawling tech parks, we deliver robust, scalable automation.
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-start gap-4">
                            <i className="fas fa-check-circle text-[#d0a353] mt-1"></i>
                            <div>
                                <strong className="block text-gray-900 text-sm mb-1">Boardroom & AV Integration</strong>
                                <span className="text-xs text-gray-500">One-touch presentation modes, motorized screens, and crystal-clear conferencing audio.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <i className="fas fa-check-circle text-[#d0a353] mt-1"></i>
                            <div>
                                <strong className="block text-gray-900 text-sm mb-1">Biometric Access & Attendance</strong>
                                <span className="text-xs text-gray-500">Manage employee access across multiple zones with centralized, tamper-proof reporting.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <i className="fas fa-check-circle text-[#d0a353] mt-1"></i>
                            <div>
                                <strong className="block text-gray-900 text-sm mb-1">Energy & Asset Management</strong>
                                <span className="text-xs text-gray-500">Automated HVAC schedules and lighting that turns off when zones are unoccupied.</span>
                            </div>
                        </li>
                    </ul>
                    <a href="/contact" className="inline-block bg-[#121417] text-white px-8 py-3 rounded text-xs font-bold uppercase tracking-wider hover:bg-[#d0a353] transition duration-300">Upgrade your office</a>
                </div>
            </div>
        </div>
    </section>

    
    <section className="py-24 bg-white relative">
        <div className="container text-center max-w-4xl">
            <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4">
                <span className="w-8 h-[1px] bg-[#d0a353]"></span> HOW WE WORK <span className="w-8 h-[1px] bg-[#d0a353]"></span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                A seamless process from concept to completion.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                
                <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-[#f9f8f4] border border-[#d0a353]/30 rounded-full flex items-center justify-center text-[#d0a353] text-xl font-bold mb-4 z-10 relative">01</div>
                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-gray-200 z-0"></div>
                    <h4 className="font-bold text-gray-900 mb-2">Consultation</h4>
                    <p className="text-xs text-gray-500 px-2">We visit your site, understand your lifestyle, and outline possibilities.</p>
                </div>
                
                <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-[#f9f8f4] border border-[#d0a353]/30 rounded-full flex items-center justify-center text-[#d0a353] text-xl font-bold mb-4 z-10 relative">02</div>
                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-gray-200 z-0"></div>
                    <h4 className="font-bold text-gray-900 mb-2">Design & BOQ</h4>
                    <p className="text-xs text-gray-500 px-2">We provide detailed wiring schematics and transparent pricing.</p>
                </div>
                
                <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white shadow-lg rounded-full flex items-center justify-center text-xl font-bold mb-4 z-10 relative">03</div>
                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-gray-200 z-0"></div>
                    <h4 className="font-bold text-gray-900 mb-2">Installation</h4>
                    <p className="text-xs text-gray-500 px-2">Our engineers execute clean, precision-driven installations.</p>
                </div>
                
                <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-[#121417] text-[#d0a353] shadow-lg rounded-full flex items-center justify-center text-xl font-bold mb-4 z-10 relative"><i className="fas fa-check"></i></div>
                    <h4 className="font-bold text-gray-900 mb-2">Handover & Support</h4>
                    <p className="text-xs text-gray-500 px-2">Full system walkthroughs and reliable 24/7 post-sale support.</p>
                </div>
            </div>
        </div>
    </section>



    </>
  );
}

