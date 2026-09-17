import Link from 'next/link';
import { Metadata } from "next";
import HeroSlider from '@/components/HeroSlider';
import TrustBadgeSlider from '@/components/TrustBadgeSlider';

export const metadata: Metadata = {
  title: "Smart IoT Solutions | Automation Experts",
  description: "Delivering smarter, safer and more connected spaces through innovative IoT and automation solutions.",
};


import SolutionsSlider from '@/components/SolutionsSlider';

const solutions = [
  { title: "Luxury Villa", desc: "Smart living with advanced automation and control.", img: "images/auto_villa_1786093987554.png", category: "Residential" },
  { title: "Apartment", desc: "Smart solutions for comfortable and convenient living.", img: "images/auto_apartment_1786094001400.png", category: "Residential" },
  { title: "Office", desc: "Boost productivity with smart office automation.", img: "images/auto_office_1786094016416.png", category: "Commercial" },
  { title: "Hospital", desc: "Intelligent systems for better patient care and management.", img: "images/auto_hospital_1786094034170.png", category: "Commercial" },
  { title: "Hostel / PG", desc: "Smart & secure living for hostels and PG accommodations.", img: "images/auto_hostel_1786094051526.png", category: "Commercial" },
  { title: "Shopping Mall", desc: "Enhance customer experience with smart technology.", img: "images/hero.png", category: "Commercial" },
  { title: "Warehouse", desc: "Automate operations and improve overall efficiency.", img: "images/auto_office_1786094016416.png", category: "Commercial" },
  { title: "Farmhouse", desc: "Smart automation for a greener and safer lifestyle.", img: "images/hero_pool_1786093934613.png", category: "Residential" },
  { title: "Hotel / Resort", desc: "Deliver luxury and comfort with smart automation.", img: "images/smart_home_villa_1786093285055.png", category: "Commercial" },
  { title: "Software / App Dev", desc: "Custom software, websites, and application development.", img: "https://picsum.photos/seed/software/400/300", category: "Specialized" },
  { title: "Jewellery Shop", desc: "Advanced security and smart automation for premium retail.", img: "https://picsum.photos/seed/jewellery/400/300", category: "Commercial" }
];

const clients = [
    "Motion detection Sensor", "PIR Sensor", "Temperature Controller", "Occupancy Sensor",
    "MS builders", "Sri Builders", "Sri Surya Constructions", "Kumar builders", "Sri Sai builders",
    "Kongu builders", "Ustar Constructions", "SP Constructions", "Kawinn buildtech", "Urukkagam Associates",
    "Jais Developers", "Poppyes", "CTS", "Bricks Houses", "SRS Construction", "Arasan Construction",
    "Green Nest Properties & builders", "Sri Daksha", "Sri Ram Properties", "D square city developers",
    "Tranz Layout", "Magic Bricks", "Government of TN", "Tulip Properties", "Silicon City", "Aira Properties",
    "Agam Interiors", "Spazio Interiors", "Redme Interio", "Sheetla Interiors", "Royal Interiors",
    "Guhan Interiors", "Home Lane", "Dot interiors & Traders", "Arch Firm", "Seventh Sense Architect",
    "Core Design Studio", "Innout Architecture", "Masterpiece", "Urban Space Architects", "Bead Architects",
    "Fab Builders", "Ray Architects", "DeeJas Architects", "Feathers Architects", "DNA Studio",
    "Squaretree Architects", "Gravity Engineering", "CASA GRAND", "PUDAVI BUILDERS", "Subway", "KFC",
    "Naturals", "MK Builders & Promoters", "SRI Balaji builders", "Aura", "Toni&Guy", "Baby Hug",
    "Just Born", "B.C. Studio", "Cb Emporio", "DR Probuilders", "Minn Inspiring Designers",
    "Warp", "Green Trends", "Shree Construction"
];

export default function IndexPage() {
  return (
    <>


    
    <section className="hero-wrapper">
        
        <div className="hero-diagonal"></div>
        <div className="hero-left-img"></div>

        <div className="container relative z-20 flex flex-wrap items-center h-full pt-16 pb-12">
            
            <div className="w-full lg:w-[50%] hero-content-left pt-10">
                
                <TrustBadgeSlider />

                
                <h1 className="font-heading text-[4rem] font-bold text-white leading-[1.1] mb-4 tracking-wide"
                   >
                    An <span className="text-gold">Automation</span><br />Company
                </h1>

                
                <p className="text-gray-300 text-xl mb-12 tracking-wide font-light">Smart Solutions for a Smarter Tomorrow
                </p>

                
                <a href="#"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white px-10 py-4 rounded text-sm font-medium hover:shadow-[0_0_30px_rgba(207,168,94,0.5)] transition">
                    Explore Solutions <i className="fas fa-chevron-right text-xs"></i>
                </a>
            </div>

            
            <div className="w-full lg:w-[50%] hero-content-right pl-10 relative pt-10">
                
                <HeroSlider />

                
                <div
                    className="hero-features-box w-full max-w-lg rounded-xl p-6 flex justify-between items-start mx-auto shadow-sm">
                    <div className="flex flex-col items-center text-center w-1/4 px-1">
                        <i className="fas fa-home text-gold text-[1.7rem] mb-3"></i>
                        <span className="text-[0.65rem] font-bold text-gray-600 leading-snug">Smart
                            Living<br />Solutions</span>
                    </div>
                    <div className="flex flex-col items-center text-center w-1/4 px-1">
                        <i className="fas fa-leaf text-gold text-[1.7rem] mb-3"></i>
                        <span
                            className="text-[0.65rem] font-bold text-gray-600 leading-snug">Energy<br />Efficient<br />Systems</span>
                    </div>
                    <div className="flex flex-col items-center text-center w-1/4 px-1">
                        <i className="fas fa-shield-alt text-gold text-[1.7rem] mb-3"></i>
                        <span className="text-[0.65rem] font-bold text-gray-600 leading-snug">Secure
                            &<br />Reliable<br />Technology</span>
                    </div>
                    <div className="flex flex-col items-center text-center w-1/4 px-1">
                        <i className="fas fa-mobile-alt text-gold text-[1.7rem] mb-3"></i>
                        <span className="text-[0.65rem] font-bold text-gray-600 leading-snug">Easy
                            to<br />Control<br />Anywhere</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <SolutionsSlider solutions={solutions} />

    
    <section className="py-[60px] relative overflow-hidden bg-[#fdfcf9]">
        
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <svg className="absolute top-0 right-[-10%] w-[60%] h-full text-[#f2eee3]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,0 C40,40 20,80 100,100 L100,0 Z" fill="currentColor"></path>
            </svg>
            <svg className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] text-[#f2eee3]" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,100 C60,80 80,30 100,0 L0,0 Z" fill="currentColor"></path>
            </svg>
            <div className="absolute top-0 bottom-0 left-0 right-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 10% 90%, #d0a353 0%, transparent 40%), radial-gradient(circle at 90% 10%, #d0a353 0%, transparent 40%)" }}></div>
        </div>

        <div className="container relative z-10 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                
                
                <div className="lg:col-span-5 relative pt-0">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.15em] uppercase font-nav whitespace-nowrap">OUR REACH, THEIR TRUST</span>
                        <span className="flex-grow h-[1px] bg-[#d0a353]/40 relative">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#d0a353] rotate-45"></span>
                        </span>
                    </div>
                    <h2 className="font-heading text-[2rem] lg:text-[2.2rem] mb-3 font-bold text-[#1a202c] leading-[1.1] tracking-tight">
                        RAISES YOUR VOICE<br />
                        <span className="text-[#d0a353] font-heading font-medium tracking-wide">RULE YOUR TERRITORY</span>
                    </h2>
                    <p className="text-[0.75rem] text-gray-600 mb-8 max-w-[300px] leading-relaxed font-medium">
                        Proudly empowering businesses and homes across South India with smart & secure solutions.
                    </p>
                    
                    <div className="relative w-full max-w-[420px] mx-auto lg:ml-0 mt-8 pl-4">
                        <img src="images/map.png" alt="South India Map" className="w-full drop-shadow-[0_10px_25px_rgba(208,163,83,0.2)] relative z-10 scale-105 transform origin-left" />
                        
                        <div className="absolute top-[55%] -right-8 z-20 bg-white/95 backdrop-blur-sm rounded-[1rem] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#d0a353]/20 py-4 px-5 text-center flex flex-col items-center justify-center transform hover:-translate-y-1 transition duration-300">
                            <i className="far fa-handshake text-[#d0a353] text-2xl mb-1.5"></i>
                            <div className="text-[8px] text-gray-500 font-medium mb-1 tracking-wide uppercase">Trusted by</div>
                            <div className="text-[#ca9740] font-bold text-3xl leading-none mb-1.5 font-heading">50+</div>
                            <div className="text-[8px] text-gray-600 font-bold leading-tight">Brands Across<br />South India</div>
                        </div>
                    </div>
                </div>
                
                
                <div className="lg:col-span-7 pt-0">
                    <div className="flex items-center gap-4 mb-10">
                        <span className="flex-grow h-[1px] bg-[#d0a353]/30 relative">
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#d0a353] rotate-45"></span>
                        </span>
                        <span className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.15em] uppercase font-nav">OUR VALUED PARTNERS & CLIENTS</span>
                        <span className="w-12 lg:w-24 h-[1px] bg-[#d0a353]/30 relative">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#d0a353] rotate-45"></span>
                        </span>
                    </div>
                    
                    
                    <div className="flex flex-col gap-4 overflow-hidden pb-4" style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
                        {[
                            clients.slice(0, 18),
                            clients.slice(18, 36),
                            clients.slice(36, 54),
                            clients.slice(54)
                        ].map((rowClients, rowIdx) => (
                            <div key={rowIdx} className="flex relative w-max overflow-hidden hover-pause">
                                <div className={`flex gap-4 w-max ${rowIdx % 2 !== 0 ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
                                    {[...rowClients, ...rowClients].map((client, idx) => (
                                        <div key={idx} className="w-[180px] h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition group shrink-0">
                                            <span className="font-badge text-[10px] sm:text-[11px] font-bold text-gray-800 text-center uppercase leading-tight tracking-wider group-hover:text-[#d0a353] transition-colors">{client}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            
            <div className="mt-14 bg-white/80 backdrop-blur-md rounded-[1.25rem] p-4 lg:py-5 lg:px-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-[#d0a353]/20 flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 relative z-30">
                
                <div className="flex-grow flex flex-col sm:flex-row items-center sm:items-start lg:items-center justify-between gap-4 pr-0 lg:pr-2">
                    <div className="text-center sm:text-left">
                        <div className="text-[0.65rem] font-bold text-gray-900 uppercase tracking-[0.1em] font-nav mb-1">LET&apos;S BUILD SMARTER TOGETHER</div>
                        <div className="text-[0.65rem] text-gray-500 font-medium">Your vision, our technology - a smarter tomorrow.</div>
                    </div>
                    <a href="#" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white px-6 py-2.5 rounded text-[0.65rem] font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition uppercase tracking-wider whitespace-nowrap shrink-0 font-nav">
                        GET IN TOUCH <i className="fas fa-chevron-right text-[8px]"></i>
                    </a>
                </div>
                
                <div className="hidden lg:block w-[1px] h-12 bg-gray-200 mx-2"></div>
                
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] text-lg bg-[#d0a353]/5 shrink-0">
                        <i className="fas fa-users"></i>
                    </div>
                    <div>
                        <div className="font-bold text-xl text-gray-900 leading-none mb-1">50+</div>
                        <div className="text-[0.65rem] text-gray-500 font-medium whitespace-nowrap">Happy Clients</div>
                    </div>
                </div>
                
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] text-lg bg-[#d0a353]/5 shrink-0">
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <div>
                        <div className="font-bold text-xl text-gray-900 leading-none mb-1">100+</div>
                        <div className="text-[0.65rem] text-gray-500 font-medium whitespace-nowrap">Projects Delivered</div>
                    </div>
                </div>
                
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] text-lg bg-[#d0a353]/5 shrink-0">
                        <i className="fas fa-shield-alt"></i>
                    </div>
                    <div>
                        <div className="font-bold text-xl text-gray-900 leading-none mb-1">5+</div>
                        <div className="text-[0.65rem] text-gray-500 font-medium whitespace-nowrap">Years of Trust</div>
                    </div>
                </div>
                
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] text-lg bg-[#d0a353]/5 shrink-0">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                        <div className="font-bold text-[0.8rem] text-gray-900 leading-tight mb-0.5">Across</div>
                        <div className="text-[0.65rem] text-gray-500 font-medium whitespace-nowrap">South India</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="py-[60px] bg-white">
        <div className="container max-w-[1400px]">
            <div className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.15em] uppercase font-nav mb-2">OUR COMPLETED PROJECTS</div>
            <h2 className="font-heading text-3xl lg:text-[2.5rem] mb-2 font-bold text-[#1a202c]">
                Projects That Speak for Themselves
            </h2>
            
            
            <div className="flex items-center justify-start gap-3 mt-3 mb-4">
                <i className="fas fa-gem text-[#d0a353] text-[10px]"></i>
                <span className="w-24 h-[1px] bg-gradient-to-r from-[#d0a353]/50 to-transparent"></span>
            </div>
            
            <p className="text-sm text-gray-600 font-medium mb-8">Smart Solutions. Beautiful Spaces. Happy Clients.</p>

                        {/* Creative Bento Box Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-6 mt-10 lg:h-[600px] mb-8">
                
                {/* 1. Large Feature Card (Luxury Villa) */}
                <div className="group relative overflow-hidden rounded-2xl md:col-span-2 lg:col-span-2 lg:row-span-2 shadow-lg cursor-pointer">
                    <img src="images/auto_villa_1786093987554.png" alt="Luxury Villa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
                    
                    {/* Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e]/90 via-[#0c121e]/40 to-transparent"></div>
                    
                    {/* Location Badge */}
                    <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-md text-white text-[0.65rem] px-4 py-2 rounded-full flex items-center gap-2 shadow-sm font-bold tracking-wide z-10 border border-white/20">
                        <i className="fas fa-map-marker-alt text-[#d0a353]"></i> Coimbatore
                    </div>
                    
                    {/* Glassmorphism Content Panel */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-heading font-black text-3xl lg:text-4xl text-white mb-4 tracking-wide group-hover:text-[#d0a353] transition-colors">Luxury Villa</h3>
                        
                        <div className="flex flex-wrap gap-x-5 gap-y-3 mb-6 text-[0.75rem] font-bold text-gray-300">
                            <span className="flex items-center gap-2"><i className="fas fa-home text-[#d0a353] text-sm"></i> Home Automation</span>
                            <span className="flex items-center gap-2"><i className="fas fa-video text-[#d0a353] text-sm"></i> CCTV</span>
                            <span className="flex items-center gap-2"><i className="fas fa-torii-gate text-[#d0a353] text-sm"></i> Gate Automation</span>
                        </div>
                        
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            <button className="bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-[#0c121e] px-7 py-3 rounded-full text-xs font-black tracking-wide shadow-[0_0_15px_rgba(208,163,83,0.4)] hover:shadow-[0_0_25px_rgba(208,163,83,0.6)] transition-all">
                                EXPLORE PROJECT <i className="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* 2. Top Right Square (Hill View Villa) */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer min-h-[300px] lg:min-h-0">
                    <img src="images/hero_pool_1786093934613.png" alt="Hill View Villa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e]/90 via-[#0c121e]/20 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-[0.6rem] px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20 z-10 font-bold">
                        <i className="fas fa-map-marker-alt text-[#d0a353]"></i> Ooty
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-[#d0a353] transition-colors">Hill View Villa</h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-2 mb-3 text-[0.65rem] font-bold text-gray-300">
                            <span className="flex items-center gap-1.5"><i className="fas fa-home text-[#d0a353]"></i> Automation</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-video text-[#d0a353]"></i> CCTV</span>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#d0a353] text-[0.65rem] font-bold tracking-wide hover:text-white">
                            VIEW DETAILS <i className="fas fa-arrow-right ml-1"></i>
                        </button>
                    </div>
                </div>

                {/* 3. Tall Right Panel (Premium Residence) */}
                <div className="group relative overflow-hidden rounded-2xl lg:row-span-2 shadow-lg cursor-pointer min-h-[350px] lg:min-h-0">
                    <img src="images/auto_apartment_1786094001400.png" alt="Premium Residence" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e]/90 via-[#0c121e]/30 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-[0.6rem] px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20 z-10 font-bold">
                        <i className="fas fa-map-marker-alt text-[#d0a353]"></i> Bangalore
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-heading font-bold text-2xl text-white mb-4 group-hover:text-[#d0a353] transition-colors">Premium Residence</h3>
                        <div className="flex flex-col gap-3 mb-6 text-[0.7rem] font-bold text-gray-300">
                            <span className="flex items-center gap-2"><i className="fas fa-home text-[#d0a353] w-3"></i> Home Automation</span>
                            <span className="flex items-center gap-2"><i className="fas fa-video text-[#d0a353] w-3"></i> CCTV Security</span>
                            <span className="flex items-center gap-2"><i className="fas fa-mobile-alt text-[#d0a353] w-3"></i> Video Door Phone</span>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white border-2 border-[#d0a353]/80 bg-[#d0a353]/10 px-5 py-2.5 rounded-full text-[0.65rem] font-bold hover:bg-[#d0a353] hover:text-[#0c121e] tracking-wide transition-colors">
                            DISCOVER <i className="fas fa-arrow-right ml-1"></i>
                        </button>
                    </div>
                </div>
                
                {/* 4. Bottom Right Square (Beachside Villa) */}
                <div className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer min-h-[300px] lg:min-h-0">
                    <img src="images/hero_gate_1786093948118.png" alt="Beachside Villa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c121e]/90 via-[#0c121e]/20 to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md text-white text-[0.6rem] px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20 z-10 font-bold">
                        <i className="fas fa-map-marker-alt text-[#d0a353]"></i> Chennai
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-[#d0a353] transition-colors">Beachside Villa</h3>
                        <div className="flex flex-wrap gap-x-3 gap-y-2 mb-3 text-[0.65rem] font-bold text-gray-300">
                            <span className="flex items-center gap-1.5"><i className="fas fa-home text-[#d0a353]"></i> Automation</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-torii-gate text-[#d0a353]"></i> Gate</span>
                        </div>
                        <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[#d0a353] text-[0.65rem] font-bold tracking-wide hover:text-white">
                            VIEW DETAILS <i className="fas fa-arrow-right ml-1"></i>
                        </button>
                    </div>
                </div>

            </div>

            
        </div>
    </section>

    
    <section className="py-[60px] bg-[#d0a353]">
        <div className="container max-w-[1400px]">
            <div className="text-center mb-12">
                <div className="text-[0.65rem] font-bold text-white tracking-[0.15em] uppercase font-nav mb-4">CHOOSE YOUR PERFECT SOLUTION</div>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] mb-4 font-bold text-[#1a202c]">
                    Smart Home <span className="text-white font-heading">Automation Packages</span>
                </h2>
                
                <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/60"></span>
                    <i className="fas fa-gem text-white text-[10px]"></i>
                    <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-white/60"></span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col overflow-hidden h-full">
                    <div className="p-8 pb-6 flex-grow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#d0a353] text-white flex items-center justify-center text-3xl shadow-md shadow-[#d0a353]/30">
                                <i className="fas fa-home"></i>
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="font-black text-sm lg:text-base text-gray-900 tracking-wide break-words leading-tight mb-1">ESSENTIAL</h3>
                                <p className="text-[0.65rem] lg:text-[0.7rem] text-gray-500 font-medium leading-tight">Smart & Secure Living</p>
                            </div>
                        </div>
                        
                        <div className="mb-2">
                            <span className="text-2xl lg:text-[1.75rem] font-black text-gray-900 tracking-tight">₹ 99,000</span>
                        </div>
                        <p className="text-[0.65rem] text-gray-400 font-bold mb-6">* Starting Price</p>
                        
                        <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
                        
                        <ul className="text-[0.8rem] text-gray-600 space-y-4 font-medium">
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> Smart Lighting</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> Smart Door Lock</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> CCTV (4 Cameras)</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> Mobile App Control</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> Basic Automation</li>
                        </ul>
                    </div>
                    <div className="px-8 pb-8 mt-auto">
                        <button className="cursor-pointer w-full py-3.5 border-2 border-[#d0a353] text-[#d0a353] text-[0.8rem] font-bold rounded tracking-wide hover:bg-[#d0a353] hover:text-white transition">GET STARTED</button>
                    </div>
                </div>

                <div className="bg-white rounded-xl shadow-[0_15px_40px_rgba(208,163,83,0.15)] border border-[#d0a353]/30 flex flex-col h-full relative">
                    <div className="absolute w-[80%] -top-[14px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white text-center py-1.5 px-4 text-[0.65rem] font-bold tracking-[0.15em] uppercase rounded-[6px] shadow-md z-10">
                        MOST POPULAR
                    </div>
                    <div className="p-8 pb-6 flex-grow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#1a202c] text-white flex items-center justify-center text-3xl shadow-lg">
                                <i className="far fa-gem"></i>
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="font-black text-sm lg:text-base text-gray-900 tracking-wide break-words leading-tight mb-1">PREMIUM</h3>
                                <p className="text-[0.65rem] lg:text-[0.7rem] text-gray-500 font-medium leading-tight">Elevate Your Lifestyle</p>
                            </div>
                        </div>
                        
                        <div className="mb-2">
                            <span className="text-2xl lg:text-[1.75rem] font-black text-gray-900 tracking-tight">₹ 2,99,000</span>
                        </div>
                        <p className="text-[0.65rem] text-gray-400 font-bold mb-6">* Starting Price</p>
                        
                        <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
                        
                        <ul className="text-[0.8rem] text-gray-600 space-y-4 font-medium">
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> Everything in Essential</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> Curtain Automation</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> AC / TV Control</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> Voice Control (Alexa/Google)</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> Advanced App Control</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> Scene Automation</li>
                        </ul>
                    </div>
                    <div className="px-8 pb-8 mt-auto">
                        <button className="cursor-pointer w-full py-3.5 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white text-[0.8rem] font-bold rounded tracking-wide hover:opacity-90 shadow-md transition">GET STARTED</button>
                    </div>
                </div>

                
                <div className="bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col overflow-hidden h-full">
                    <div className="p-8 pb-6 flex-grow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#d0a353] text-white flex items-center justify-center text-3xl shadow-md shadow-[#d0a353]/30">
                                <i className="fas fa-crown"></i>
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="font-black text-sm lg:text-base text-gray-900 tracking-wide break-words leading-tight mb-1">LUXURY VILLA</h3>
                                <p className="text-[0.65rem] lg:text-[0.7rem] text-gray-500 font-medium leading-tight">Complete Intelligent Living</p>
                            </div>
                        </div>
                        
                        <div className="mb-2">
                            <span className="text-2xl lg:text-[1.75rem] font-black text-gray-900 tracking-tight">₹ 6,99,000</span>
                        </div>
                        <p className="text-[0.65rem] text-gray-400 font-bold mb-6">* Starting Price and above</p>
                        
                        <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
                        
                        <ul className="text-[0.8rem] text-gray-600 space-y-4 font-medium">
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> Everything in Premium</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> Multi-Room Audio</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> Video Door Phone</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> Energy Management</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> Motion & Safety Sensors</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 bg-white text-base"></i> Priority Support & AMC</li>
                        </ul>
                    </div>
                    <div className="px-8 pb-8 mt-auto">
                        <button className="cursor-pointer w-full py-3.5 border-2 border-[#d0a353] text-[#d0a353] text-[0.8rem] font-bold rounded tracking-wide hover:bg-[#d0a353] hover:text-white transition">GET STARTED</button>
                    </div>
                </div>

                
                <div className="bg-[#fcfbf9] rounded-xl border border-gray-100 p-6 flex flex-col h-full shadow-[0_5px_20px_rgba(0,0,0,0.02)] relative">
                    <div className="absolute inset-0 border border-[#d0a353]/10 rounded-xl m-2 pointer-events-none"></div>
                    <div className="grid grid-cols-2 gap-0 h-full relative z-10">
                        
                        <div className="flex flex-col items-center justify-center p-4 text-center border-b border-r border-gray-200">
                            <i className="fas fa-couch text-[#d0a353] text-2xl mb-3"></i>
                            <p className="text-[0.7rem] font-bold text-gray-800 leading-tight">Premium<br />Global Brands</p>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center p-4 text-center border-b border-gray-200">
                            <i className="fas fa-tools text-[#d0a353] text-2xl mb-3"></i>
                            <p className="text-[0.7rem] font-bold text-gray-800 leading-tight">Expert<br />Installation</p>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center p-4 text-center border-b border-r border-gray-200">
                            <i className="fas fa-project-diagram text-[#d0a353] text-2xl mb-3"></i>
                            <p className="text-[0.7rem] font-bold text-gray-800 leading-tight">Customized<br />Solutions</p>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center p-4 text-center border-b border-gray-200">
                            <i className="fas fa-microchip text-[#d0a353] text-2xl mb-3"></i>
                            <p className="text-[0.7rem] font-bold text-gray-800 leading-tight">Neat & Clean<br />Wiring</p>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center p-4 text-center border-r border-gray-200">
                            <i className="fas fa-shield-alt text-[#d0a353] text-2xl mb-3"></i>
                            <p className="text-[0.7rem] font-bold text-gray-800 leading-tight">5 Year<br />Warranty</p>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center p-4 text-center">
                            <i className="fas fa-headset text-[#d0a353] text-2xl mb-3"></i>
                            <p className="text-[0.7rem] font-bold text-gray-800 leading-tight">AMC & 24/7<br />Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
        
        <div className="absolute inset-0 z-0">
            <img src="images/hero_pool_1786093934613.png" alt="Living Room Background" className="w-full h-full object-cover opacity-[0.03] filter grayscale blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white"></div>
        </div>

        <div className="container relative z-10 max-w-[1400px]">
            <div className="text-center mb-12">
                <div className="text-[0.6rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase font-nav mb-3">EXPERIENCE INTELLIGENT LIVING</div>
                <h2 className="font-heading text-3xl lg:text-4xl text-[#1a202c] mb-4 font-bold">
                    Everything Under Your Control
                </h2>
                
                <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d0a353]/50"></span>
                    <i className="fas fa-gem text-[#d0a353] text-[8px]"></i>
                    <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d0a353]/50"></span>
                </div>
            </div>

            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-nowrap justify-between gap-y-10 lg:gap-0 mt-10">
                
                
                <div className="flex flex-col items-center text-center px-4 relative lg:w-1/8">
                    <i className="far fa-lightbulb text-[#d0a353] text-3xl mb-4 h-8 flex items-center justify-center"></i>
                    <div className="text-sm font-bold text-gray-900 mb-2 tracking-wide">Lighting</div>
                    <div className="text-[0.65rem] text-gray-500 leading-snug font-medium">Set the mood<br />with smart lights</div>
                    <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-[#d0a353]/30 to-transparent"></div>
                </div>

                
                <div className="flex flex-col items-center text-center px-4 relative lg:w-1/8">
                    <i className="fas fa-shield-alt text-[#d0a353] text-3xl mb-4 h-8 flex items-center justify-center"></i>
                    <div className="text-sm font-bold text-gray-900 mb-2 tracking-wide">Security</div>
                    <div className="text-[0.65rem] text-gray-500 leading-snug font-medium">Complete protection<br />for your home</div>
                    <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-[#d0a353]/30 to-transparent"></div>
                </div>

                
                <div className="flex flex-col items-center text-center px-4 relative lg:w-1/8">
                    <i className="fas fa-person-booth text-[#d0a353] text-3xl mb-4 h-8 flex items-center justify-center"></i>
                    <div className="text-sm font-bold text-gray-900 mb-2 tracking-wide">Curtains</div>
                    <div className="text-[0.65rem] text-gray-500 leading-snug font-medium">Open or close with<br />a single touch</div>
                    <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-[#d0a353]/30 to-transparent"></div>
                </div>

                
                <div className="flex flex-col items-center text-center px-4 relative lg:w-1/8">
                    <i className="fas fa-thermometer-half text-[#d0a353] text-3xl mb-4 h-8 flex items-center justify-center"></i>
                    <div className="text-sm font-bold text-gray-900 mb-2 tracking-wide">Climate</div>
                    <div className="text-[0.65rem] text-gray-500 leading-snug font-medium">Perfect temperature,<br />always</div>
                    <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-[#d0a353]/30 to-transparent"></div>
                </div>

                
                <div className="flex flex-col items-center text-center px-4 relative lg:w-1/8">
                    <i className="fas fa-music text-[#d0a353] text-3xl mb-4 h-8 flex items-center justify-center"></i>
                    <div className="text-sm font-bold text-gray-900 mb-2 tracking-wide">Entertainment</div>
                    <div className="text-[0.65rem] text-gray-500 leading-snug font-medium">Multi-room audio<br />at your command</div>
                    <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-[#d0a353]/30 to-transparent"></div>
                </div>

                
                <div className="flex flex-col items-center text-center px-4 relative lg:w-1/8">
                    <i className="fas fa-unlock-alt text-[#d0a353] text-3xl mb-4 h-8 flex items-center justify-center"></i>
                    <div className="text-sm font-bold text-gray-900 mb-2 tracking-wide">Access</div>
                    <div className="text-[0.65rem] text-gray-500 leading-snug font-medium">Smart locks for<br />safe access</div>
                    <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-[#d0a353]/30 to-transparent"></div>
                </div>

                
                <div className="flex flex-col items-center text-center px-4 relative lg:w-1/8">
                    <i className="fas fa-eye text-[#d0a353] text-3xl mb-4 h-8 flex items-center justify-center"></i>
                    <div className="text-sm font-bold text-gray-900 mb-2 tracking-wide">Monitoring</div>
                    <div className="text-[0.65rem] text-gray-500 leading-snug font-medium">Watch live from<br />anywhere</div>
                    <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-[#d0a353]/30 to-transparent"></div>
                </div>

                
                <div className="flex flex-col items-center text-center px-4 relative lg:w-1/8">
                    <i className="fas fa-broadcast-tower text-[#d0a353] text-3xl mb-4 h-8 flex items-center justify-center"></i>
                    <div className="text-sm font-bold text-gray-900 mb-2 tracking-wide">Sensors</div>
                    <div className="text-[0.65rem] text-gray-500 leading-snug font-medium">Smart sensors for<br />maximum safety</div>
                </div>

            </div>
        </div>
    </section>

    
    <section className="relative py-20 lg:py-32 bg-[#0c121e] overflow-hidden">
        {/* Real Gold Glitter Texture Background */}
        <div className="absolute inset-0 z-0">
            <img src="/images/gold_glitter.jpg" alt="Gold Glitter Background" className="w-full h-full object-cover" />
            {/* Dark overlay so text is readable, but glitter clearly shows through */}
            <div className="absolute inset-0 bg-[#0c121e]/75"></div>
            {/* Soft Gold Glow Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#d0a353]/30 via-transparent to-transparent pointer-events-none"></div>
        </div>
        
        <div className="container relative z-10 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 hidden lg:block"></div>
            
            <div className="lg:col-span-4 text-white text-center lg:text-left relative">
                {/* Background glow just for text */}
                <div className="absolute -inset-10 bg-[#d0a353]/10 blur-3xl rounded-full z-0 pointer-events-none"></div>
                
                <h2 className="font-heading text-4xl lg:text-[2.75rem] mb-4 font-bold leading-tight relative z-10">
                    Let's Build Your<br />
                    <span className="font-heading tracking-wide bg-gradient-to-r from-[#d0a353] via-[#f7d084] to-[#d0a353] text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(208,163,83,0.5)]">Smart Home</span>
                </h2>
                <p className="text-[0.8rem] text-gray-300 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed pr-4 relative z-10">
                    Schedule a free consultation and let our experts design the perfect automation solution for your space.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start relative z-10">
                    <a href="#" className="bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-[#0c121e] px-6 py-3.5 rounded text-[0.7rem] font-black whitespace-nowrap shadow-[0_0_20px_rgba(208,163,83,0.4)] hover:shadow-[0_0_25px_rgba(208,163,83,0.6)] hover:-translate-y-0.5 transition-all flex items-center gap-2">
                        <i className="far fa-calendar-alt"></i> SCHEDULE FREE CONSULTATION
                    </a>
                    <a href="#" className="border-2 border-[#d0a353]/70 text-[#d0a353] px-6 py-3.5 rounded text-[0.7rem] font-bold whitespace-nowrap hover:bg-[#d0a353]/10 hover:border-[#d0a353] hover:shadow-[0_0_15px_rgba(208,163,83,0.3)] transition-all flex items-center gap-2">
                        <i className="fab fa-whatsapp text-lg"></i> WHATSAPP US
                    </a>
                </div>
            </div>
            
            <div className="lg:col-span-3 pl-0 lg:pl-12 border-t lg:border-t-0 lg:border-l border-[#d0a353]/30 pt-10 lg:pt-0 relative z-10">
                <ul className="space-y-6">
                    <li className="flex items-center gap-5 text-white text-[0.85rem] font-medium tracking-wide">
                        <div className="w-10 h-10 rounded-full bg-[#d0a353]/10 border border-[#d0a353]/40 flex items-center justify-center shadow-[0_0_15px_rgba(208,163,83,0.2)] shrink-0">
                            <i className="fas fa-shield-alt text-[#d0a353] text-[0.85rem]"></i>
                        </div>
                        <span className="drop-shadow-md">Free Site Visit</span>
                    </li>
                    <li className="flex items-center gap-5 text-white text-[0.85rem] font-medium tracking-wide">
                        <div className="w-10 h-10 rounded-full bg-[#d0a353]/10 border border-[#d0a353]/40 flex items-center justify-center shadow-[0_0_15px_rgba(208,163,83,0.2)] shrink-0">
                            <i className="fas fa-user-cog text-[#d0a353] text-[0.85rem]"></i>
                        </div>
                        <span className="drop-shadow-md">Personalized Solution</span>
                    </li>
                    <li className="flex items-center gap-5 text-white text-[0.85rem] font-medium tracking-wide">
                        <div className="w-10 h-10 rounded-full bg-[#d0a353]/10 border border-[#d0a353]/40 flex items-center justify-center shadow-[0_0_15px_rgba(208,163,83,0.2)] shrink-0">
                            <i className="fas fa-certificate text-[#d0a353] text-[0.85rem]"></i>
                        </div>
                        <span className="drop-shadow-md">Expert Guidance</span>
                    </li>
                    <li className="flex items-center gap-5 text-white text-[0.85rem] font-medium tracking-wide">
                        <div className="w-10 h-10 rounded-full bg-[#d0a353]/10 border border-[#d0a353]/40 flex items-center justify-center shadow-[0_0_15px_rgba(208,163,83,0.2)] shrink-0">
                            <i className="fas fa-shield-check text-[#d0a353] text-[0.85rem]"></i>
                        </div>
                        <span className="drop-shadow-md">Best Price Guarantee</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    
    <section className="bg-[#fdfcf9] py-20 lg:py-24 border-b-4 border-[#0b101a] relative">
        <div className="container max-w-[1200px]">
            <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 p-10 lg:p-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x divide-gray-100">
                    
                    {/* GET IN TOUCH */}
                    <div className="flex flex-col items-center text-center px-4">
                        <div className="w-16 h-16 rounded-full bg-[#d0a353]/10 flex items-center justify-center text-[#d0a353] text-2xl mb-6 shadow-sm">
                            <i className="fas fa-headset"></i>
                        </div>
                        <h4 className="font-heading text-gray-900 text-lg font-black mb-3 tracking-wide">Get In Touch</h4>
                        <p className="text-[0.8rem] text-gray-600 font-bold mb-1">+91 98765 43210</p>
                        <a href="mailto:info@smartsolutioniot.com" className="text-[0.8rem] text-[#d0a353] font-bold hover:underline cursor-pointer">info@smartsolutioniot.com</a>
                    </div>
                    
                    {/* OUR LOCATION */}
                    <div className="flex flex-col items-center text-center px-4">
                        <div className="w-16 h-16 rounded-full bg-[#d0a353]/10 flex items-center justify-center text-[#d0a353] text-2xl mb-6 shadow-sm">
                            <i className="fas fa-map-marked-alt"></i>
                        </div>
                        <h4 className="font-heading text-gray-900 text-lg font-black mb-3 tracking-wide">Our Location</h4>
                        <p className="text-[0.8rem] text-gray-600 font-medium leading-relaxed max-w-[220px]">
                            No. 123, 1st Floor, Tech Park,<br/>Coimbatore - 641062, Tamil Nadu
                        </p>
                    </div>
                    
                    {/* FOLLOW US */}
                    <div className="flex flex-col items-center text-center px-4">
                        <div className="w-16 h-16 rounded-full bg-[#d0a353]/10 flex items-center justify-center text-[#d0a353] text-2xl mb-6 shadow-sm">
                            <i className="fas fa-share-alt"></i>
                        </div>
                        <h4 className="font-heading text-gray-900 text-lg font-black mb-5 tracking-wide">Follow Us</h4>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#d0a353] hover:text-white hover:border-[#d0a353] shadow-sm transition-all"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#d0a353] hover:text-white hover:border-[#d0a353] shadow-sm transition-all"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#d0a353] hover:text-white hover:border-[#d0a353] shadow-sm transition-all"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#d0a353] hover:text-white hover:border-[#d0a353] shadow-sm transition-all"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    
    
    </>
  );
}




