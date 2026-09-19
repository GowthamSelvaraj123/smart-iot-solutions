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
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                
                <div className="lg:col-span-5">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900" style={{ fontFamily: "var(--font-heading)" }}>
                        Get in Touch
                    </h2>
                    
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full border border-[#d0a353]/30 flex items-center justify-center text-[#d0a353] shrink-0 bg-[#d0a353]/5">
                                <i className="fas fa-phone-alt fa-flip-horizontal"></i>
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
                            <button type="submit" id="submit-button" className="cursor-pointer bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white px-8 py-3.5 rounded text-sm font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition uppercase tracking-wider w-full">
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>



    </>
  );
}

