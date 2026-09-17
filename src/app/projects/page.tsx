import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Smart IoT Solutions",
  description: "Explore our portfolio of smart home and commercial automation projects.",
};

export default function ProjectsPage() {
  return (
    <>



    <section className="relative pt-32 pb-20 bg-[#121417] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
            <img src="images/hero_pool_1786093934613.png" alt="Projects Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121417] via-[#121417]/90 to-transparent"></div>
        </div>
        <div className="container relative z-10">
            <div className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                <a href="/" className="text-gray-400 hover:text-white transition">HOME</a> 
                <span className="text-gray-600">/</span> PROJECTS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Our <span className="text-[#d0a353] font-heading">Masterpieces.</span>
            </h1>
            <p className="text-gray-300 max-w-xl text-sm leading-relaxed">
                Explore a curated selection of our finest installations. We take pride in delivering flawless integration across a diverse range of architectures and client requirements.
            </p>
        </div>
    </section>

    <section className="py-12 bg-white border-b border-gray-100">
        <div className="container">
            <div className="flex flex-wrap justify-center gap-4">
                <button className="px-6 py-2 rounded-full bg-[#121417] text-white text-xs font-bold uppercase tracking-wider">All Projects</button>
                <button className="px-6 py-2 rounded-full bg-[#f9f8f4] text-gray-600 hover:text-[#d0a353] border border-gray-200 text-xs font-bold uppercase tracking-wider transition">Residential</button>
                <button className="px-6 py-2 rounded-full bg-[#f9f8f4] text-gray-600 hover:text-[#d0a353] border border-gray-200 text-xs font-bold uppercase tracking-wider transition">Commercial</button>
                <button className="px-6 py-2 rounded-full bg-[#f9f8f4] text-gray-600 hover:text-[#d0a353] border border-gray-200 text-xs font-bold uppercase tracking-wider transition">Hospitality</button>
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
                    <span className="text-[#d0a353] font-heading tracking-wide">Smart Home</span>
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

