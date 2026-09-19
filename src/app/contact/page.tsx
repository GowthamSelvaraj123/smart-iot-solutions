import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Smart IoT Solutions",
  description: "Get in touch for a free site visit and personalized automation solutions.",
};

export default function ContactPage() {
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
                <span className="text-[#d0a353]">/</span> CONTACT US
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0a353] via-[#fdf0a6] to-[#ca9740]">smarter.</span>
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
                Free site visit. Personalized solution. Expert guidance across South India. Drop us a message and our team will get back to you within 24 hours.
            </p>
        </div>
    </section>

    <section className="py-24 bg-white relative">
        <div className="container max-w-[1200px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                
                {/* Left Side: Contact Info & Image */}
                <div className="lg:col-span-5 flex flex-col">
                    <h2 className="text-4xl font-bold mb-8 text-[#1a202c]" style={{ fontFamily: "var(--font-heading)" }}>
                        Get in Touch
                    </h2>
                    
                    <div className="space-y-8 mb-12">
                        <div className="flex gap-5 group">
                            <div className="w-14 h-14 rounded-2xl border border-[#d0a353]/30 flex items-center justify-center text-[#d0a353] shrink-0 bg-white shadow-sm group-hover:bg-[#d0a353] group-hover:text-white transition-colors duration-300">
                                <i className="fas fa-phone-alt fa-flip-horizontal text-lg"></i>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="font-bold text-gray-900 text-[0.8rem] uppercase tracking-wider mb-1">Phone</h4>
                                <p className="text-gray-600 font-medium"><a href="tel:+919876543210" className="hover:text-[#d0a353] transition">+91 98765 43210</a></p>
                            </div>
                        </div>
                        <div className="flex gap-5 group">
                            <div className="w-14 h-14 rounded-2xl border border-[#d0a353]/30 flex items-center justify-center text-[#d0a353] shrink-0 bg-white shadow-sm group-hover:bg-[#d0a353] group-hover:text-white transition-colors duration-300">
                                <i className="fas fa-envelope text-lg"></i>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="font-bold text-gray-900 text-[0.8rem] uppercase tracking-wider mb-1">Email</h4>
                                <p className="text-gray-600 font-medium"><a href="mailto:hello@smartiotsolutions.in" className="hover:text-[#d0a353] transition">hello@smartiotsolutions.in</a></p>
                            </div>
                        </div>
                        <div className="flex gap-5 group">
                            <div className="w-14 h-14 rounded-2xl border border-[#d0a353]/30 flex items-center justify-center text-[#d0a353] shrink-0 bg-white shadow-sm group-hover:bg-[#d0a353] group-hover:text-white transition-colors duration-300">
                                <i className="fas fa-map-marker-alt text-lg"></i>
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="font-bold text-gray-900 text-[0.8rem] uppercase tracking-wider mb-1">Experience Center</h4>
                                <p className="text-gray-600 text-sm leading-relaxed font-medium">RS Puram, Coimbatore,<br />Tamil Nadu 641002</p>
                            </div>
                        </div>
                    </div>

                    {/* Fills the white space beautifully */}
                    <div className="mt-auto relative rounded-[2rem] overflow-hidden shadow-2xl h-[280px] border border-gray-100 group">
                        <img src="/images/products/interior.jpg" alt="Our Experience Center" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e]/90 via-[#0c121e]/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8">
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-[0.6rem] font-bold uppercase tracking-widest text-white border border-white/20 mb-3 w-max">
                                <i className="fas fa-map-marker-alt text-[#d0a353]"></i> Visit Us
                            </div>
                            <h4 className="text-white font-bold text-xl leading-tight" style={{ fontFamily: "var(--font-heading)" }}>Step into the future.</h4>
                            <p className="text-gray-300 text-xs mt-1">Book a live demo at our showroom.</p>
                        </div>
                    </div>
                </div>
                
                {/* Right Side: The Form */}
                <div className="lg:col-span-7">
                    {/* Gradient Border Wrapper */}
                    <div className="bg-gradient-to-r from-[#ca9740] via-[#fdf0a6] to-[#ca9740] p-[1.5px] rounded-[2rem] shadow-[0_20px_50px_rgba(208,163,83,0.15)]">
                        <div className="bg-white rounded-[2rem] p-8 lg:p-12 relative overflow-hidden">
                            {/* Decorative background element */}
                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-[#d0a353]/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

                            <div className="mb-8">
                                <h3 className="text-3xl font-bold text-[#1a202c]" style={{ fontFamily: "var(--font-heading)" }}>Request a Quote</h3>
                                <p className="text-gray-500 text-sm mt-2">Fill out the form below and our automation experts will contact you shortly.</p>
                            </div>

                            <form id="contact-form" className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                                        <input type="text" name="user_name" className="w-full bg-[#fdfcf9] border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#d0a353] focus:ring-2 focus:ring-[#d0a353]/20 transition-all text-gray-800 placeholder-gray-400 font-medium" placeholder="Your name" required />
                                    </div>
                                    <div>
                                        <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest mb-2">Phone</label>
                                        <input type="tel" name="user_phone" className="w-full bg-[#fdfcf9] border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#d0a353] focus:ring-2 focus:ring-[#d0a353]/20 transition-all text-gray-800 placeholder-gray-400 font-medium" placeholder="+91" required />
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                                    <input type="email" name="user_email" className="w-full bg-[#fdfcf9] border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#d0a353] focus:ring-2 focus:ring-[#d0a353]/20 transition-all text-gray-800 placeholder-gray-400 font-medium" placeholder="you@example.com" required />
                                </div>
                                
                                <div>
                                    <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest mb-2">I'm interested in</label>
                                    <div className="relative">
                                        <select name="interest" className="w-full bg-[#fdfcf9] border border-gray-200 rounded-xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#d0a353] focus:ring-2 focus:ring-[#d0a353]/20 transition-all text-gray-800 font-medium appearance-none cursor-pointer">
                                            <option value="Premium Home Package">Premium Home Package</option>
                                            <option value="Luxury Villa Package">Luxury Villa Package</option>
                                            <option value="Commercial / Office">Commercial / Office</option>
                                            <option value="Security & Gate">Security & Gate</option>
                                            <option value="Site Visit Only">Site Visit Only</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none text-gray-400">
                                            <i className="fas fa-chevron-down text-xs"></i>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-widest mb-2">Message</label>
                                    <textarea name="message" className="w-full bg-[#fdfcf9] border border-gray-200 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-[#d0a353] focus:ring-2 focus:ring-[#d0a353]/20 transition-all text-gray-800 placeholder-gray-400 h-32 resize-none font-medium" placeholder="Tell us about your project or specific requirements..." required></textarea>
                                </div>
                                
                                <div id="form-status" className="text-xs font-bold hidden"></div>
                                
                                <button type="submit" id="submit-button" className="cursor-pointer bg-gradient-to-r from-[#ca9740] to-[#dfb45e] hover:from-[#b58635] hover:to-[#ca9740] text-[#0c121e] px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all shadow-[0_10px_30px_rgba(208,163,83,0.3)] hover:-translate-y-1 w-full flex items-center justify-center gap-3 mt-4">
                                    Send Request <i className="fas fa-paper-plane text-xs"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    </>
  );
}

