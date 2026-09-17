import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Smart IoT Solutions",
  description: "Learn about our mission to bring secure and reliable smart automation to your homes and businesses.",
};

export default function AboutPage() {
  return (
    <>



    
    <section className="relative pt-32 pb-20 bg-[#121417] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80" alt="About Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121417] via-[#121417]/90 to-transparent"></div>
        </div>
        <div className="container relative z-10">
            <div className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                <a href="/" className="text-gray-400 hover:text-white transition">HOME</a> 
                <span className="text-gray-600">/</span> ABOUT US
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Designing the future<br />of <span className="text-[#d0a353] font-heading">smart living.</span>
            </h1>
            <p className="text-gray-300 max-w-xl text-sm leading-relaxed">
                Smart IoT Solutions is South India's premier automation integration company. We bring architecture and technology together, creating spaces that respond to your needs seamlessly and elegantly.
            </p>
        </div>
    </section>

    
    <section className="py-24 bg-white relative">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" alt="Smart Home Interface" className="rounded-xl shadow-2xl z-10 relative" />
                    <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#f9f8f4] rounded-full z-0 pointer-events-none"></div>
                    <div className="absolute -top-8 -left-8 w-32 h-32 border border-[#d0a353]/30 rounded-full z-0 pointer-events-none"></div>
                    
                    <div className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl border border-gray-100 z-20 w-48 text-center">
                        <div className="text-[#d0a353] text-4xl mb-2"><i className="fas fa-medal"></i></div>
                        <div className="text-2xl font-bold text-gray-900 leading-none mb-1">5+</div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Years of Excellence</div>
                    </div>
                </div>
                <div>
                    <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4">
                        <span className="w-8 h-[1px] bg-[#d0a353]"></span> OUR PHILOSOPHY
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                        Technology should be <span className="text-[#d0a353] font-heading italic">invisible</span> until you need it.
                    </h2>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        Founded in Coimbatore, Smart IoT Solutions was born from a simple observation: smart home technology was often too complicated, unreliable, and visually obtrusive. We set out to change that.
                    </p>
                    <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                        We don't just sell gadgets; we engineer experiences. By carefully selecting premium hardware from global brands and combining it with meticulous installation and custom programming, we ensure that your automation system works effortlessly—enhancing your lifestyle rather than complicating it.
                    </p>
                    
                    
                    <div className="grid grid-cols-2 gap-6 mt-10">
                        <div className="bg-[#fdfcf9] p-6 rounded-lg border border-[#d0a353]/20 shadow-sm hover:shadow-md transition">
                            <i className="fas fa-check-circle text-[#d0a353] text-2xl mb-4"></i>
                            <h4 className="font-bold text-gray-900 text-base mb-2">Absolute Clarity</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Honest scopes, transparent pricing, and thorough demonstrations before you ever commit.</p>
                        </div>
                        <div className="bg-[#fdfcf9] p-6 rounded-lg border border-[#d0a353]/20 shadow-sm hover:shadow-md transition">
                            <i className="fas fa-tools text-[#d0a353] text-2xl mb-4"></i>
                            <h4 className="font-bold text-gray-900 text-base mb-2">Meticulous Craft</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Clean wiring, flawless installation, and systems designed to age gracefully over time.</p>
                        </div>
                        <div className="bg-[#fdfcf9] p-6 rounded-lg border border-[#d0a353]/20 shadow-sm hover:shadow-md transition">
                            <i className="fas fa-headset text-[#d0a353] text-2xl mb-4"></i>
                            <h4 className="font-bold text-gray-900 text-base mb-2">Enduring Care</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">We provide comprehensive handovers and ongoing local support long after the project is done.</p>
                        </div>
                        <div className="bg-[#fdfcf9] p-6 rounded-lg border border-[#d0a353]/20 shadow-sm hover:shadow-md transition">
                            <i className="fas fa-shield-alt text-[#d0a353] text-2xl mb-4"></i>
                            <h4 className="font-bold text-gray-900 text-base mb-2">Uncompromised Security</h4>
                            <p className="text-xs text-gray-500 leading-relaxed">Your data and privacy are paramount. We deploy enterprise-grade security protocols for all homes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="py-24 bg-[#f9f8f4] relative border-t border-gray-200">
        <div className="container">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4">
                    <span className="w-8 h-[1px] bg-[#d0a353]"></span> OUR JOURNEY <span className="w-8 h-[1px] bg-[#d0a353]"></span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                    Growing smarter, together.
                </h2>
            </div>
            
            <div className="max-w-4xl mx-auto relative">
                
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#d0a353]/30"></div>
                
                
                <div className="relative flex justify-between items-center w-full mb-12">
                    <div className="w-5/12 text-right pr-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">The Beginning</h3>
                        <p className="text-sm text-gray-600">Founded in Coimbatore with a focus on basic residential lighting and CCTV installations.</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-[#d0a353] rounded-full flex items-center justify-center font-bold text-[10px] text-[#d0a353] shadow-lg z-10">2019</div>
                    <div className="w-5/12 pl-8"></div>
                </div>
                
                
                <div className="relative flex justify-between items-center w-full mb-12">
                    <div className="w-5/12 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#d0a353] border-4 border-white rounded-full flex items-center justify-center font-bold text-[10px] text-white shadow-lg z-10">2021</div>
                    <div className="w-5/12 text-left pl-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Commercial Expansion</h3>
                        <p className="text-sm text-gray-600">Expanded our portfolio to include smart boardroom automation, biometric access control, and large-scale networking for corporate offices.</p>
                    </div>
                </div>
                
                
                <div className="relative flex justify-between items-center w-full mb-12">
                    <div className="w-5/12 text-right pr-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Luxury Integration</h3>
                        <p className="text-sm text-gray-600">Partnered with global luxury brands to provide high-end, centralized control systems for luxury villas and estates.</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-[#d0a353] rounded-full flex items-center justify-center font-bold text-[10px] text-[#d0a353] shadow-lg z-10">2023</div>
                    <div className="w-5/12 pl-8"></div>
                </div>
                
                
                <div className="relative flex justify-between items-center w-full">
                    <div className="w-5/12 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-[#d0a353] border-4 border-white rounded-full flex items-center justify-center font-bold text-[10px] text-white shadow-lg z-10">2025</div>
                    <div className="w-5/12 text-left pl-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">South India Reach</h3>
                        <p className="text-sm text-gray-600">Established a strong presence across Tamil Nadu, Karnataka, and Kerala with over 100+ successfully delivered premium projects.</p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                
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

