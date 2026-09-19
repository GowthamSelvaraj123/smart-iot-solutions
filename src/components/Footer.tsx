import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* 1. Glassmorphism CTA */}
      <section className="relative py-[60px] bg-[#0c121e] overflow-hidden">
          {/* Glitter Background with Opacity and Blend Mode */}
          <div className="absolute inset-0 z-0">
              <img src="/images/gold_glitter.jpg" alt="Gold Glitter Background" className="w-full h-full object-cover opacity-30 mix-blend-color-dodge" />
              <div className="absolute inset-0 bg-[#d0a353]/50 mix-blend-multiply pointer-events-none"></div>
          </div>
          
          <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 hidden lg:block"></div>
              
              {/* Modern Premium Glassmorphism Card */}
              <div className="col-span-12 relative z-10">
                  <div className="bg-[#0c121e]/85 backdrop-blur-xl border border-[#d0a353]/30 rounded-3xl p-10 lg:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.5)] max-w-[1100px] mx-auto overflow-hidden relative">
                      
                      {/* Subtle internal glow */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#d0a353]/10 rounded-full blur-3xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                          <div className="lg:col-span-7 text-white text-center lg:text-left">
                              <div className="inline-block px-4 py-1.5 rounded-full border border-[#d0a353]/40 bg-[#d0a353]/10 text-[#d0a353] text-[0.65rem] font-bold tracking-[0.2em] uppercase font-nav mb-6 shadow-inner">
                                  READY TO UPGRADE?
                              </div>
                              <h2 className="font-heading text-4xl lg:text-5xl mb-6 font-bold leading-tight">
                                  Let's Build Your<br />
                                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0a353] via-[#fdf0a6] to-[#ca9740]">Smart Home</span>
                              </h2>
                              <p className="text-[0.9rem] text-gray-300 mb-10 max-w-md mx-auto lg:mx-0 leading-relaxed">
                                  Schedule a free consultation and let our experts design the perfect automation solution for your space.
                              </p>
                              
                              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                  <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-[#0c121e] px-8 py-4 rounded-full text-[0.8rem] font-bold tracking-wide shadow-[0_0_20px_rgba(208,163,83,0.3)] hover:shadow-[0_0_30px_rgba(208,163,83,0.6)] transition-all overflow-hidden">
                                      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
                                      <i className="far fa-calendar-alt relative z-10"></i>
                                      <span className="relative z-10">BOOK CONSULTATION</span>
                                  </Link>
                                  <a href="#" className="inline-flex items-center justify-center gap-3 border border-white/20 bg-white/5 text-white px-8 py-4 rounded-full text-[0.8rem] font-bold tracking-wide hover:bg-white/10 hover:border-[#d0a353]/50 transition-all">
                                      <i className="fab fa-whatsapp text-green-400 text-lg"></i>
                                      <span>WHATSAPP US</span>
                                  </a>
                              </div>
                          </div>
                          
                          <div className="lg:col-span-5 lg:pl-12 lg:border-l border-white/10">
                              <ul className="space-y-8">
                                  <li className="flex items-start gap-5 group">
                                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d0a353]/20 to-transparent border border-[#d0a353]/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#d0a353] transition-all duration-300 shadow-[0_0_15px_rgba(208,163,83,0.1)]">
                                          <i className="fas fa-shield-alt text-[#d0a353] text-lg"></i>
                                      </div>
                                      <div>
                                          <h4 className="text-white font-bold text-[0.95rem] mb-1">Free Site Visit</h4>
                                          <p className="text-[0.7rem] text-gray-400 leading-relaxed">Our experts visit your home to assess and plan perfectly.</p>
                                      </div>
                                  </li>
                                  <li className="flex items-start gap-5 group">
                                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d0a353]/20 to-transparent border border-[#d0a353]/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#d0a353] transition-all duration-300 shadow-[0_0_15px_rgba(208,163,83,0.1)]">
                                          <i className="fas fa-user-cog text-[#d0a353] text-lg"></i>
                                      </div>
                                      <div>
                                          <h4 className="text-white font-bold text-[0.95rem] mb-1">Personalized Solution</h4>
                                          <p className="text-[0.7rem] text-gray-400 leading-relaxed">Tailor-made automation matching your exact lifestyle.</p>
                                      </div>
                                  </li>
                                  <li className="flex items-start gap-5 group">
                                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d0a353]/20 to-transparent border border-[#d0a353]/30 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-[#d0a353] transition-all duration-300 shadow-[0_0_15px_rgba(208,163,83,0.1)]">
                                          <i className="fas fa-certificate text-[#d0a353] text-lg"></i>
                                      </div>
                                      <div>
                                          <h4 className="text-white font-bold text-[0.95rem] mb-1">Expert Guidance</h4>
                                          <p className="text-[0.7rem] text-gray-400 leading-relaxed">End-to-end support from planning to installation.</p>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 2. Contact Strip */}
      <section className="bg-white py-16 lg:py-20 relative overflow-hidden">
          {/* Subtle gold top border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d0a353] to-transparent pointer-events-none"></div>

          <div className="container max-w-[1200px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
                  {/* GET IN TOUCH */}
                  <div className="flex flex-col items-center text-center px-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#d0a353]/10 border border-[#d0a353]/20 flex items-center justify-center text-[#d0a353] text-xl mb-5">
                          <i className="fas fa-headset"></i>
                      </div>
                      <h4 className="font-heading text-gray-900 text-base font-black mb-4 tracking-wide">Get In Touch</h4>
                      <p className="text-[0.82rem] text-gray-600 font-semibold mb-2">+91 98765 43210</p>
                      <a href="mailto:info@smartsolutioniot.com" className="text-[0.78rem] text-[#d0a353] font-medium hover:underline cursor-pointer">info@smartsolutioniot.com</a>
                  </div>

                  {/* OUR LOCATION */}
                  <div className="flex flex-col items-center text-center px-6 md:border-x border-gray-100">
                      <div className="w-14 h-14 rounded-2xl bg-[#d0a353]/10 border border-[#d0a353]/20 flex items-center justify-center text-[#d0a353] text-xl mb-5">
                          <i className="fas fa-map-marked-alt"></i>
                      </div>
                      <h4 className="font-heading text-gray-900 text-base font-black mb-4 tracking-wide">Our Location</h4>
                      <p className="text-[0.82rem] text-gray-600 font-medium leading-relaxed max-w-[200px]">
                          No. 123, 1st Floor, Tech Park,<br/>Coimbatore - 641062, Tamil Nadu
                      </p>
                  </div>

                  {/* FOLLOW US */}
                  <div className="flex flex-col items-center text-center px-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#d0a353]/10 border border-[#d0a353]/20 flex items-center justify-center text-[#d0a353] text-xl mb-5">
                          <i className="fas fa-share-alt"></i>
                      </div>
                      <h4 className="font-heading text-gray-900 text-base font-black mb-4 tracking-wide">Follow Us</h4>
                      <div className="grid grid-cols-4 gap-2.5">
                          <a href="#" title="Facebook"    className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 text-[0.8rem] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-200"><i className="fab fa-facebook-f"></i></a>
                          <a href="#" title="Instagram"   className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 text-[0.8rem] hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all duration-200"><i className="fab fa-instagram"></i></a>
                          <a href="#" title="LinkedIn"    className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 text-[0.8rem] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-200"><i className="fab fa-linkedin-in"></i></a>
                          <a href="#" title="YouTube"     className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 text-[0.8rem] hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all duration-200"><i className="fab fa-youtube"></i></a>
                          <a href="#" title="X / Twitter" className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 text-[0.8rem] hover:bg-black hover:text-white hover:border-black transition-all duration-200"><i className="fab fa-twitter"></i></a>
                          <a href="#" title="Pinterest"   className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 text-[0.8rem] hover:bg-[#BD081C] hover:text-white hover:border-[#BD081C] transition-all duration-200"><i className="fab fa-pinterest-p"></i></a>
                          <a href="#" title="WhatsApp"    className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 text-[0.8rem] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-200"><i className="fab fa-whatsapp"></i></a>
                          <a href="#" title="Telegram"    className="w-9 h-9 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 text-[0.8rem] hover:bg-[#2CA5E0] hover:text-white hover:border-[#2CA5E0] transition-all duration-200"><i className="fab fa-telegram-plane"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    {/* Dark Footer */}
    <footer className="bg-[#0b101a] pt-24 pb-16">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {/* Logo & About */}
        <div className="">
          <Link href="/" className="inline-flex items-center mb-10">
            <img
              src="/images/smart-iot-solutions.png"
              alt="Smart IoT Solution"
              className="h-16 object-contain"
            />
          </Link>
          <p className="text-[0.75rem] text-gray-400 leading-relaxed pr-4">
            Delivering smarter, safer and more connected spaces through innovative IoT and automation solutions.
          </p>
        </div>

        {/* OUR SERVICES */}
        <div className="">
          <h4 className="text-white text-xs font-bold tracking-wide uppercase mb-10">
            OUR SERVICES
          </h4>
          <div className="grid grid-cols-2 gap-x-2 gap-y-8">
            <Link
              href="/solutions"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              Home Automation
            </Link>
            <Link
              href="/solutions"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              Smart Lock Systems
            </Link>
            <Link
              href="/solutions"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              Gate Automation
            </Link>
            <Link
              href="/solutions"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              Intercom Solutions
            </Link>
            <Link
              href="/solutions"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              Door Automation
            </Link>
            <Link
              href="/solutions"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              IoT Integration
            </Link>
            <Link
              href="/solutions"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              CCTV Surveillance
            </Link>
            <Link
              href="/contact"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              Maintenance & Support
            </Link>
            <Link
              href="/solutions"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5 col-span-2"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              Access Control
            </Link>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="">
          <h4 className="text-white text-xs font-bold tracking-wide uppercase mb-10">
            QUICK LINKS
          </h4>
          <div className="grid grid-cols-2 gap-x-2 gap-y-8">
            <Link
              href="/"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              Home
            </Link>
            <Link
              href="/about"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              Why Choose Us
            </Link>
            <Link
              href="/about"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              About Us
            </Link>
            <Link
              href="#"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              Blog
            </Link>
            <Link
              href="/solutions"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              Solutions
            </Link>
            <Link
              href="/contact"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              Careers
            </Link>
            <Link
              href="/products"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              Products
            </Link>
            <Link
              href="/contact"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              Contact Us
            </Link>
            <Link
              href="/projects"
              className="text-[0.65rem] text-gray-400 hover:text-[#d0a353] flex items-center gap-1.5 col-span-2"
            >
              <i className="fas fa-chevron-right text-[#d0a353] text-[8px]"></i>{" "}
              Our Projects
            </Link>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="pl-0 lg:pl-4">
          <h4 className="text-[#d0a353] text-xs font-bold tracking-wide uppercase mb-10">
            NEWSLETTER
          </h4>
          <p className="text-[0.7rem] text-gray-400 mb-4">
            Stay updated with our latest solutions and offers.
          </p>
          <form className="flex rounded overflow-hidden h-10 border border-gray-700 focus-within:border-[#d0a353]">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#121824] px-4 w-full text-xs text-white outline-none"
            />
            <button
              type="submit"
              className="cursor-pointer bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-[#0b101a] px-4 text-[0.65rem] font-bold tracking-wide hover:opacity-90 transition"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="w-full border-t border-gray-800 mt-12">
        <div className="container flex flex-col md:flex-row flex-wrap justify-between items-center gap-4 text-[0.65rem] text-gray-400 text-center md:text-left" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
        <div>&copy; 2024 Smart Solution IoT. All Rights Reserved.</div>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 my-2 lg:my-0">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <span className="text-gray-700 hidden sm:inline">|</span>
          <Link href="#" className="hover:text-white">
            Terms & Conditions
          </Link>
          <span className="text-gray-700 hidden sm:inline">|</span>
          <Link href="#" className="hover:text-white">
            Sitemap
          </Link>
        </div>
        <div>
          Designed with <i className="fas fa-heart text-[#d0a353] mx-1"></i> for a smarter tomorrow
        </div>
      </div>
      </div>
    </footer>
    </>
  );
}
