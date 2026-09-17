import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Smart IoT Solutions",
  description: "Get in touch for a free site visit and personalized automation solutions.",
};

export default function ContactPage() {
  return (
    <>



    <section className="relative pt-32 pb-20 bg-[#121417] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80" alt="Contact Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121417] via-[#121417]/90 to-transparent"></div>
        </div>
        <div className="container relative z-10">
            <div className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
                <a href="/" className="text-gray-400 hover:text-white transition">HOME</a> 
                <span className="text-gray-600">/</span> CONTACT US
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Let's build <span className="text-[#d0a353] font-heading">smarter.</span>
            </h1>
            <p className="text-gray-300 max-w-xl text-sm leading-relaxed">
                Free site visit. Personalized solution. Expert guidance across South India. Drop us a message and our team will get back to you within 24 hours.
            </p>
        </div>
    </section>

    <section className="py-24 bg-white relative">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                <div className="lg:col-span-5">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                        Get in Touch
                    </h2>
                    
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full border border-[#d0a353]/30 flex items-center justify-center text-[#d0a353] shrink-0 bg-[#d0a353]/5">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm mb-1">Phone</h4>
                                <p className="text-gray-600 text-sm"><a href="tel:+919876543210" className="hover:text-[#d0a353] transition">+91 98765 43210</a></p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full border border-[#d0a353]/30 flex items-center justify-center text-[#d0a353] shrink-0 bg-[#d0a353]/5">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm mb-1">Email</h4>
                                <p className="text-gray-600 text-sm"><a href="mailto:hello@smartiotsolutions.in" className="hover:text-[#d0a353] transition">hello@smartiotsolutions.in</a></p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full border border-[#d0a353]/30 flex items-center justify-center text-[#d0a353] shrink-0 bg-[#d0a353]/5">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm mb-1">Office</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">RS Puram, Coimbatore,<br />Tamil Nadu 641002</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="lg:col-span-7">
                    <div className="bg-[#f9f8f4] rounded-2xl p-8 lg:p-12 border border-[#d0a353]/20 shadow-xl">
                        <h3 className="text-2xl font-bold mb-6 text-gray-900">Request a Quote</h3>
                        <form id="contact-form" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name</label>
                                    <input type="text" name="user_name" className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#d0a353]" placeholder="Your name" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Phone</label>
                                    <input type="tel" name="user_phone" className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#d0a353]" placeholder="+91" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email</label>
                                <input type="email" name="user_email" className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#d0a353]" placeholder="you@example.com" required />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">I'm interested in</label>
                                <select name="interest" className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#d0a353] text-gray-600">
                                    <option value="Premium Home Package">Premium Home Package</option>
                                    <option value="Luxury Villa Package">Luxury Villa Package</option>
                                    <option value="Commercial / Office">Commercial / Office</option>
                                    <option value="Security & Gate">Security & Gate</option>
                                    <option value="Site Visit Only">Site Visit Only</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Message</label>
                                <textarea name="message" className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#d0a353] h-32 resize-none" placeholder="Tell us about your project..." required></textarea>
                            </div>
                            <div id="form-status" className="text-xs font-bold hidden"></div>
                            <button type="submit" id="submit-button" className="bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white px-8 py-3.5 rounded text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition uppercase tracking-wider w-full">
                                Send Request
                            </button>
                        </form>
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

