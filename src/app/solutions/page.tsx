import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Smart IoT Solutions",
  description: "Discover our comprehensive range of home automation, smart locks, and gate automation solutions.",
};

export default function SolutionsPage() {
  return (
    <>



    <section className="relative pt-32 pb-20 bg-[#121417] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
            <img src="images/hero_background_1786093261462.png" alt="Solutions Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121417] via-[#121417]/90 to-transparent"></div>
        </div>
        <div className="container relative z-10">
            <div className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                <a href="/" className="text-gray-400 hover:text-white transition">HOME</a> 
                <span className="text-gray-600">/</span> SOLUTIONS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Comprehensive <span className="text-[#d0a353] font-serif">Solutions.</span>
            </h1>
            <p className="text-gray-300 max-w-xl text-sm leading-relaxed">
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
                        Transform your house into a <span className="text-[#d0a353] font-serif italic">responsive home.</span>
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
                        Smart infrastructure for <span className="text-[#d0a353] font-serif italic">modern business.</span>
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



    <section className="relative bg-[#0c121e] overflow-hidden">
        
        <div className="absolute top-0 left-0 bottom-0 w-1/2 z-0">
            <img src="images/hero_pool_1786093934613.png" alt="Smart Home" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0c121e]/80 to-[#0c121e]"></div>
        </div>
        
        
        <div className="absolute bottom-0 right-0 w-1/3 h-full z-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at bottom right, transparent 0%, transparent 40%, rgba(208,163,83,0.3) 41%, transparent 42%)" }}></div>
    
        <div className="container relative z-10 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 hidden lg:block"></div>
            
            
            <div className="lg:col-span-4 text-white text-center lg:text-left">
                <h2 className="text-4xl lg:text-[2.75rem] mb-4 font-bold leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                    Let's Build Your<br />
                    <span className="text-[#d0a353] font-serif tracking-wide">Smart Home</span>
                </h2>
                <p className="text-[0.8rem] text-gray-300 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed pr-4">
                    Schedule a free consultation and let our experts design the perfect automation solution for your space.
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <a href="#" className="bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white px-4 py-2.5 rounded text-[0.65rem] font-bold whitespace-nowrap shadow-md hover:shadow-lg transition flex items-center gap-2">
                        <i className="far fa-calendar-alt"></i> SCHEDULE FREE CONSULTATION
                    </a>
                    <a href="#" className="border border-[#d0a353] text-[#d0a353] px-4 py-2.5 rounded text-[0.65rem] font-bold whitespace-nowrap hover:bg-[#d0a353] hover:text-white transition flex items-center gap-2">
                        <i className="fab fa-whatsapp text-lg"></i> WHATSAPP US
                    </a>
                    <a href="#" className="border border-[#d0a353] text-[#d0a353] px-4 py-2.5 rounded text-[0.65rem] font-bold whitespace-nowrap hover:bg-[#d0a353] hover:text-white transition flex items-center gap-2">
                        <i className="fas fa-phone-alt"></i> CALL NOW
                    </a>
                </div>
            </div>
            
            
            <div className="lg:col-span-3 pl-0 lg:pl-10 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0">
                <ul className="space-y-6">
                    <li className="flex items-center gap-4 text-white text-[0.85rem] font-medium tracking-wide">
                        <i className="fas fa-shield-alt text-[#d0a353] text-xl w-6 text-center"></i>
                        Free Site Visit
                    </li>
                    <li className="flex items-center gap-4 text-white text-[0.85rem] font-medium tracking-wide">
                        <i className="fas fa-user-cog text-[#d0a353] text-xl w-6 text-center"></i>
                        Personalized Solution
                    </li>
                    <li className="flex items-center gap-4 text-white text-[0.85rem] font-medium tracking-wide">
                        <i className="fas fa-certificate text-[#d0a353] text-xl w-6 text-center"></i>
                        Expert Guidance
                    </li>
                    <li className="flex items-center gap-4 text-white text-[0.85rem] font-medium tracking-wide">
                        <i className="fas fa-shield-check text-[#d0a353] text-xl w-6 text-center"></i>
                        Best Price Guarantee
                    </li>
                </ul>
            </div>
        </div>
    </section>

    
    <section className="bg-[#fdfcf9] py-12 border-b-4 border-[#0b101a]">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                
                <div>
                    <h4 className="text-[#d0a353] text-xs font-bold tracking-[0.15em] uppercase mb-6">GET IN TOUCH</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full border border-[#d0a353]/30 flex items-center justify-center text-[#d0a353] shrink-0 mt-0.5"><i className="fas fa-phone-alt text-[10px]"></i></div>
                            <span className="text-sm font-bold text-gray-700 mt-1">+91 98765 43210</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full border border-[#d0a353]/30 flex items-center justify-center text-[#d0a353] shrink-0 mt-0.5"><i className="fas fa-envelope text-[10px]"></i></div>
                            <a href="mailto:info@smartsolutioniot.com" className="text-[0.8rem] font-bold text-gray-700 mt-1 hover:text-[#d0a353]">info@smartsolutioniot.com</a>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full border border-[#d0a353]/30 flex items-center justify-center text-[#d0a353] shrink-0 mt-0.5"><i className="fas fa-map-marker-alt text-[10px]"></i></div>
                            <div className="text-[0.7rem] font-medium text-gray-600 leading-relaxed pt-1 pr-4">
                                No. 123, 1st Floor, Tech Park,<br />Coimbatore - 641062, Tamil Nadu, India
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full border border-[#d0a353]/30 flex items-center justify-center text-[#d0a353] shrink-0 mt-0.5"><i className="far fa-clock text-[10px]"></i></div>
                            <span className="text-[0.8rem] font-bold text-gray-700 mt-1">Mon - Sat : 9:00 AM - 7:00 PM</span>
                        </li>
                    </ul>
                </div>
                
                
                <div className="lg:border-l lg:border-[#d0a353]/20 lg:pl-8">
                    <h4 className="text-[#d0a353] text-xs font-bold tracking-[0.15em] uppercase mb-6">SCAN TO CONNECT</h4>
                    <p className="text-[0.8rem] text-gray-700 mb-4 max-w-[180px]">Scan the QR code to chat with us on WhatsApp</p>
                    <div className="inline-block border border-gray-200 p-2 rounded-lg bg-white shadow-sm relative">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://wa.me/919876543210" alt="WhatsApp QR" className="w-20 h-20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white rounded-full p-0.5 shadow-sm">
                                <i className="fab fa-whatsapp text-green-500 text-lg"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="lg:border-l lg:border-[#d0a353]/20 lg:pl-8">
                    <h4 className="text-[#d0a353] text-xs font-bold tracking-[0.15em] uppercase mb-6">FOLLOW US</h4>
                    <div className="flex gap-3 mt-4">
                        <a href="#" className="w-8 h-8 rounded-full border border-[#d0a353]/50 flex items-center justify-center text-[#d0a353] hover:bg-[#d0a353] hover:text-white transition"><i className="fab fa-facebook-f text-sm"></i></a>
                        <a href="#" className="w-8 h-8 rounded-full border border-[#d0a353]/50 flex items-center justify-center text-[#d0a353] hover:bg-[#d0a353] hover:text-white transition"><i className="fab fa-instagram text-sm"></i></a>
                        <a href="#" className="w-8 h-8 rounded-full border border-[#d0a353]/50 flex items-center justify-center text-[#d0a353] hover:bg-[#d0a353] hover:text-white transition"><i className="fab fa-linkedin-in text-sm"></i></a>
                        <a href="#" className="w-8 h-8 rounded-full border border-[#d0a353]/50 flex items-center justify-center text-[#d0a353] hover:bg-[#d0a353] hover:text-white transition"><i className="fab fa-youtube text-sm"></i></a>
                    </div>
                </div>
                
                
                <div className="lg:border-l lg:border-[#d0a353]/20 lg:pl-8">
                    <h4 className="text-[#d0a353] text-xs font-bold tracking-[0.15em] uppercase mb-6">OUR LOCATION</h4>
                    <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm relative h-32 max-w-xs">
                        <img src="images/map.png" alt="Map View" className="w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/30">
                            <i className="fas fa-map-marker-alt text-red-500 text-3xl drop-shadow-md"></i>
                            <span className="text-[0.55rem] font-bold text-red-600 bg-white/90 px-2 py-0.5 rounded shadow mt-1">Smart Solution IoT</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    
    
    </>
  );
}

