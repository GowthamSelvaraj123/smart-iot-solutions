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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                
                <div className="lg:col-span-5 relative pt-4">
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
                
                
                <div className="lg:col-span-7 pt-2">
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

    
    <SolutionsSlider solutions={solutions} />



    
    <section className="py-20 lg:py-32 bg-[#fdfcf9]">
        <div className="container max-w-[1400px] text-center">
            <div className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.15em] uppercase font-nav mb-2">OUR COMPLETED PROJECTS</div>
            <h2 className="font-heading text-3xl lg:text-[2.5rem] mb-2 font-bold text-[#1a202c]">
                Projects That Speak for Themselves
            </h2>
            
            
            <div className="flex items-center justify-center gap-2 mt-2 mb-2">
                <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d0a353]/50"></span>
                <i className="fas fa-gem text-[#d0a353] text-[10px]"></i>
                <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d0a353]/50"></span>
            </div>
            
            <p className="text-sm text-gray-600 font-medium mb-8">Smart Solutions. Beautiful Spaces. Happy Clients.</p>

            <style>{`
                .hide-scroll-bar::-webkit-scrollbar { display: none; }
                .hide-scroll-bar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
            <div id="projects-carousel" className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scroll-bar pb-4 text-left">
                
                
                <div className="flex-none w-[90%] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start bg-white border border-gray-100 rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-lg transition flex flex-col">
                    <div className="relative h-56">
                        <img src="images/auto_villa_1786093987554.png" alt="Luxury Villa" className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-[#1a202c]/90 backdrop-blur-sm text-white text-[0.65rem] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm font-bold tracking-wide">
                            <i className="fas fa-map-marker-alt text-[#d0a353]"></i> Coimbatore
                        </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                        <h3 className="font-heading font-bold text-lg text-gray-900 mb-4">Luxury Villa</h3>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-[0.65rem] font-bold text-gray-500">
                            <span className="flex items-center gap-1.5"><i className="fas fa-home text-[#d0a353]"></i> Home Automation</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-video text-[#d0a353]"></i> CCTV</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-torii-gate text-[#d0a353]"></i> Gate Automation</span>
                        </div>
                        
                        <div className="mt-auto">
                            <a href="#" className="inline-flex items-center justify-center gap-2 border border-[#d0a353] text-[#d0a353] px-6 py-2 rounded text-[0.7rem] font-bold hover:bg-[#d0a353] hover:text-white transition w-full md:w-max">
                                View Project <i className="fas fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                
                <div className="flex-none w-[90%] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start bg-white border border-gray-100 rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-lg transition flex flex-col">
                    <div className="relative h-56">
                        <img src="images/hero_pool_1786093934613.png" alt="Hill View Villa" className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-[#1a202c]/90 backdrop-blur-sm text-white text-[0.65rem] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm font-bold tracking-wide">
                            <i className="fas fa-map-marker-alt text-[#d0a353]"></i> Ooty
                        </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                        <h3 className="font-heading font-bold text-lg text-gray-900 mb-4">Hill View Villa</h3>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-[0.65rem] font-bold text-gray-500">
                            <span className="flex items-center gap-1.5"><i className="fas fa-home text-[#d0a353]"></i> Home Automation</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-video text-[#d0a353]"></i> CCTV</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-lock text-[#d0a353]"></i> Smart Lock</span>
                        </div>
                        
                        <div className="mt-auto">
                            <a href="#" className="inline-flex items-center justify-center gap-2 border border-[#d0a353] text-[#d0a353] px-6 py-2 rounded text-[0.7rem] font-bold hover:bg-[#d0a353] hover:text-white transition w-full md:w-max">
                                View Project <i className="fas fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                
                <div className="flex-none w-[90%] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start bg-white border border-gray-100 rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-lg transition flex flex-col">
                    <div className="relative h-56">
                        <img src="images/auto_apartment_1786094001400.png" alt="Premium Residence" className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-[#1a202c]/90 backdrop-blur-sm text-white text-[0.65rem] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm font-bold tracking-wide">
                            <i className="fas fa-map-marker-alt text-[#d0a353]"></i> Bangalore
                        </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                        <h3 className="font-heading font-bold text-lg text-gray-900 mb-4">Premium Residence</h3>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-[0.65rem] font-bold text-gray-500">
                            <span className="flex items-center gap-1.5"><i className="fas fa-home text-[#d0a353]"></i> Home Automation</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-video text-[#d0a353]"></i> CCTV</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-mobile-alt text-[#d0a353]"></i> Video Door Phone</span>
                        </div>
                        
                        <div className="mt-auto">
                            <a href="#" className="inline-flex items-center justify-center gap-2 border border-[#d0a353] text-[#d0a353] px-6 py-2 rounded text-[0.7rem] font-bold hover:bg-[#d0a353] hover:text-white transition w-full md:w-max">
                                View Project <i className="fas fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                
                <div className="flex-none w-[90%] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start bg-white border border-gray-100 rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-lg transition flex flex-col">
                    <div className="relative h-56">
                        <img src="images/hero_gate_1786093948118.png" alt="Beachside Villa" className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-[#1a202c]/90 backdrop-blur-sm text-white text-[0.65rem] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm font-bold tracking-wide">
                            <i className="fas fa-map-marker-alt text-[#d0a353]"></i> Chennai
                        </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                        <h3 className="font-heading font-bold text-lg text-gray-900 mb-4">Beachside Villa</h3>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-[0.65rem] font-bold text-gray-500">
                            <span className="flex items-center gap-1.5"><i className="fas fa-home text-[#d0a353]"></i> Home Automation</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-video text-[#d0a353]"></i> CCTV</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-torii-gate text-[#d0a353]"></i> Gate Automation</span>
                        </div>
                        
                        <div className="mt-auto">
                            <a href="#" className="inline-flex items-center justify-center gap-2 border border-[#d0a353] text-[#d0a353] px-6 py-2 rounded text-[0.7rem] font-bold hover:bg-[#d0a353] hover:text-white transition w-full md:w-max">
                                View Project <i className="fas fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                
                <div className="flex-none w-[90%] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start bg-white border border-gray-100 rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-lg transition flex flex-col">
                    <div className="relative h-56">
                        <img src="images/auto_villa_1786093987554.png" alt="Luxury Villa" className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-[#1a202c]/90 backdrop-blur-sm text-white text-[0.65rem] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm font-bold tracking-wide">
                            <i className="fas fa-map-marker-alt text-[#d0a353]"></i> Coimbatore
                        </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                        <h3 className="font-heading font-bold text-lg text-gray-900 mb-4">Luxury Villa</h3>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-[0.65rem] font-bold text-gray-500">
                            <span className="flex items-center gap-1.5"><i className="fas fa-home text-[#d0a353]"></i> Home Automation</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-video text-[#d0a353]"></i> CCTV</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-torii-gate text-[#d0a353]"></i> Gate Automation</span>
                        </div>
                        
                        <div className="mt-auto">
                            <a href="#" className="inline-flex items-center justify-center gap-2 border border-[#d0a353] text-[#d0a353] px-6 py-2 rounded text-[0.7rem] font-bold hover:bg-[#d0a353] hover:text-white transition w-full md:w-max">
                                View Project <i className="fas fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                
                <div className="flex-none w-[90%] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start bg-white border border-gray-100 rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-lg transition flex flex-col">
                    <div className="relative h-56">
                        <img src="images/hero_pool_1786093934613.png" alt="Hill View Villa" className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-[#1a202c]/90 backdrop-blur-sm text-white text-[0.65rem] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm font-bold tracking-wide">
                            <i className="fas fa-map-marker-alt text-[#d0a353]"></i> Ooty
                        </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                        <h3 className="font-heading font-bold text-lg text-gray-900 mb-4">Hill View Villa</h3>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-[0.65rem] font-bold text-gray-500">
                            <span className="flex items-center gap-1.5"><i className="fas fa-home text-[#d0a353]"></i> Home Automation</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-video text-[#d0a353]"></i> CCTV</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-lock text-[#d0a353]"></i> Smart Lock</span>
                        </div>
                        
                        <div className="mt-auto">
                            <a href="#" className="inline-flex items-center justify-center gap-2 border border-[#d0a353] text-[#d0a353] px-6 py-2 rounded text-[0.7rem] font-bold hover:bg-[#d0a353] hover:text-white transition w-full md:w-max">
                                View Project <i className="fas fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                
                <div className="flex-none w-[90%] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start bg-white border border-gray-100 rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-lg transition flex flex-col">
                    <div className="relative h-56">
                        <img src="images/auto_apartment_1786094001400.png" alt="Premium Residence" className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-[#1a202c]/90 backdrop-blur-sm text-white text-[0.65rem] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm font-bold tracking-wide">
                            <i className="fas fa-map-marker-alt text-[#d0a353]"></i> Bangalore
                        </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                        <h3 className="font-heading font-bold text-lg text-gray-900 mb-4">Premium Residence</h3>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-[0.65rem] font-bold text-gray-500">
                            <span className="flex items-center gap-1.5"><i className="fas fa-home text-[#d0a353]"></i> Home Automation</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-video text-[#d0a353]"></i> CCTV</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-mobile-alt text-[#d0a353]"></i> Video Door Phone</span>
                        </div>
                        
                        <div className="mt-auto">
                            <a href="#" className="inline-flex items-center justify-center gap-2 border border-[#d0a353] text-[#d0a353] px-6 py-2 rounded text-[0.7rem] font-bold hover:bg-[#d0a353] hover:text-white transition w-full md:w-max">
                                View Project <i className="fas fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                
                <div className="flex-none w-[90%] md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start bg-white border border-gray-100 rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-lg transition flex flex-col">
                    <div className="relative h-56">
                        <img src="images/hero_gate_1786093948118.png" alt="Beachside Villa" className="w-full h-full object-cover" />
                        <div className="absolute top-4 left-4 bg-[#1a202c]/90 backdrop-blur-sm text-white text-[0.65rem] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm font-bold tracking-wide">
                            <i className="fas fa-map-marker-alt text-[#d0a353]"></i> Chennai
                        </div>
                    </div>
                    <div className="p-5 flex-grow flex flex-col">
                        <h3 className="font-heading font-bold text-lg text-gray-900 mb-4">Beachside Villa</h3>
                        
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6 text-[0.65rem] font-bold text-gray-500">
                            <span className="flex items-center gap-1.5"><i className="fas fa-home text-[#d0a353]"></i> Home Automation</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-video text-[#d0a353]"></i> CCTV</span>
                            <span className="flex items-center gap-1.5"><i className="fas fa-torii-gate text-[#d0a353]"></i> Gate Automation</span>
                        </div>
                        
                        <div className="mt-auto">
                            <a href="#" className="inline-flex items-center justify-center gap-2 border border-[#d0a353] text-[#d0a353] px-6 py-2 rounded text-[0.7rem] font-bold hover:bg-[#d0a353] hover:text-white transition w-full md:w-max">
                                View Project <i className="fas fa-arrow-right text-[10px]"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>

            
            <div className="flex justify-center items-center gap-3 mt-4">
                <button id="prev-project" className="w-8 h-8 rounded-full border-2 border-[#d0a353]/30 flex items-center justify-center text-[#d0a353] hover:border-[#d0a353] hover:bg-[#d0a353] hover:text-white transition cursor-pointer">
                    <i className="fas fa-chevron-left text-xs"></i>
                </button>
                <div id="carousel-dots" className="flex items-center gap-2">
                    <button className="carousel-dot w-2 h-2 rounded-full bg-[#d0a353] transition-all duration-300" data-index="0"></button>
                    <button className="carousel-dot w-2 h-2 rounded-full border border-[#d0a353]/50 hover:bg-[#d0a353]/30 transition-all duration-300" data-index="1"></button>
                    <button className="carousel-dot w-2 h-2 rounded-full border border-[#d0a353]/50 hover:bg-[#d0a353]/30 transition-all duration-300" data-index="2"></button>
                    <button className="carousel-dot w-2 h-2 rounded-full border border-[#d0a353]/50 hover:bg-[#d0a353]/30 transition-all duration-300" data-index="3"></button>
                    <button className="carousel-dot w-2 h-2 rounded-full border border-[#d0a353]/50 hover:bg-[#d0a353]/30 transition-all duration-300" data-index="4"></button>
                </div>
                <button id="next-project" className="w-8 h-8 rounded-full border-2 border-[#d0a353]/30 flex items-center justify-center text-[#d0a353] hover:border-[#d0a353] hover:bg-[#d0a353] hover:text-white transition cursor-pointer">
                    <i className="fas fa-chevron-right text-xs"></i>
                </button>
            </div>

            
        </div>
    </section>

    
    <section className="py-20 lg:py-32 bg-[#fdfcf9]">
        <div className="container max-w-[1400px]">
            <div className="text-center mb-12">
                <div className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.15em] uppercase font-nav mb-4">CHOOSE YOUR PERFECT SOLUTION</div>
                <h2 className="font-heading text-3xl lg:text-[2.5rem] mb-4 font-bold text-[#1a202c]">
                    Smart Home <span className="text-[#1a202c] font-heading">Automation Packages</span>
                </h2>
                
                <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#d0a353]"></span>
                    <i className="fas fa-gem text-[#d0a353] text-[10px]"></i>
                    <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#d0a353]"></span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col overflow-hidden h-full">
                    <div className="p-8 pb-6 flex-grow">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-full bg-[#d0a353] text-white flex items-center justify-center text-3xl shadow-md shadow-[#d0a353]/30">
                                <i className="fas fa-home"></i>
                            </div>
                            <div>
                                <h3 className="font-heading font-black text-xl text-gray-900 tracking-wide">ESSENTIAL</h3>
                                <p className="text-[0.75rem] text-gray-500 font-medium">Smart & Secure Living</p>
                            </div>
                        </div>
                        
                        <div className="mb-2">
                            <span className="text-3xl font-black text-gray-900">₹ 99,000</span>
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
                        <button className="w-full py-3.5 border-2 border-[#d0a353] text-[#d0a353] text-[0.8rem] font-bold rounded tracking-wide hover:bg-[#d0a353] hover:text-white transition">GET STARTED</button>
                    </div>
                </div>

                
                <div className="bg-white rounded-xl shadow-[0_15px_40px_rgba(208,163,83,0.15)] border border-[#d0a353]/30 flex flex-col overflow-hidden h-full relative transform lg:-translate-y-2">
                    <div className="bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white text-center py-2 text-[0.65rem] font-bold tracking-[0.15em] uppercase font-nav">
                        MOST POPULAR
                    </div>
                    <div className="p-8 pb-6 flex-grow">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-full bg-[#1a202c] text-white flex items-center justify-center text-3xl shadow-lg">
                                <i className="far fa-gem"></i>
                            </div>
                            <div>
                                <h3 className="font-heading font-black text-xl text-gray-900 tracking-wide">PREMIUM</h3>
                                <p className="text-[0.75rem] text-gray-500 font-medium">Elevate Your Lifestyle</p>
                            </div>
                        </div>
                        
                        <div className="mb-2">
                            <span className="text-3xl font-black text-gray-900">₹ 1,79,000</span>
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
                        <button className="w-full py-3.5 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white text-[0.8rem] font-bold rounded tracking-wide hover:opacity-90 shadow-md transition">GET STARTED</button>
                    </div>
                </div>

                
                <div className="bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col overflow-hidden h-full">
                    <div className="p-8 pb-6 flex-grow">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-full bg-[#d0a353] text-white flex items-center justify-center text-3xl shadow-md shadow-[#d0a353]/30">
                                <i className="fas fa-crown"></i>
                            </div>
                            <div>
                                <h3 className="font-heading font-black text-xl text-gray-900 tracking-wide">LUXURY VILLA</h3>
                                <p className="text-[0.75rem] text-gray-500 font-medium">Complete Intelligent Living</p>
                            </div>
                        </div>
                        
                        <div className="mb-2">
                            <span className="text-3xl font-black text-gray-900">₹ 3,49,000</span>
                        </div>
                        <p className="text-[0.65rem] text-gray-400 font-bold mb-6">* Starting Price</p>
                        
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
                        <button className="w-full py-3.5 border-2 border-[#d0a353] text-[#d0a353] text-[0.8rem] font-bold rounded tracking-wide hover:bg-[#d0a353] hover:text-white transition">GET STARTED</button>
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

    
    <section className="relative py-20 lg:py-32 bg-[#0a0f18] overflow-hidden">
        
        <div className="absolute inset-0 z-0">
            <img src="images/hero_pool_1786093934613.png" alt="Living Room Background" className="w-full h-full object-cover opacity-20 filter grayscale blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f18]/90 via-[#0a0f18]/80 to-[#0a0f18]"></div>
        </div>

        <div className="container relative z-10 max-w-[1400px]">
            <div className="text-center mb-12">
                <div className="text-[0.6rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase font-nav mb-3">EXPERIENCE INTELLIGENT LIVING</div>
                <h2 className="font-heading text-3xl lg:text-4xl text-white mb-4">
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
                    <div className="text-sm font-bold text-white mb-2 tracking-wide">Lighting</div>
                    <div className="text-[0.65rem] text-gray-400 leading-snug">Set the mood<br />with smart lights</div>
                    <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-[#d0a353]/30 to-transparent"></div>
                </div>

                
                <div className="flex flex-col items-center text-center px-4 relative lg:w-1/8">
                    <i className="fas fa-shield-alt text-[#d0a353] text-3xl mb-4 h-8 flex items-center justify-center"></i>
                    <div className="text-sm font-bold text-white mb-2 tracking-wide">Security</div>
                    <div className="text-[0.65rem] text-gray-400 leading-snug">Complete protection<br />for your home</div>
                    <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-[#d0a353]/30 to-transparent"></div>
                </div>

                
                <div className="flex flex-col items-center text-center px-4 relative lg:w-1/8">
                    <i className="fas fa-person-booth text-[#d0a353] text-3xl mb-4 h-8 flex items-center justify-center"></i>
                    <div className="text-sm font-bold text-white mb-2 tracking-wide">Curtains</div>
                    <div className="text-[0.65rem] text-gray-400 leading-snug">Open or close with<br />a single touch</div>
                    <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-[#d0a353]/30 to-transparent"></div>
                </div>

                
                <div className="flex flex-col items-center text-center px-4 relative lg:w-1/8">
                    <i className="fas fa-thermometer-half text-[#d0a353] text-3xl mb-4 h-8 flex items-center justify-center"></i>
                    <div className="text-sm font-bold text-white mb-2 tracking-wide">Climate</div>
                    <div className="text-[0.65rem] text-gray-400 leading-snug">Perfect temperature,<br />always</div>
                    <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-[#d0a353]/30 to-transparent"></div>
                </div>

                
                <div className="flex flex-col items-center text-center px-4 relative lg:w-1/8">
                    <i className="fas fa-music text-[#d0a353] text-3xl mb-4 h-8 flex items-center justify-center"></i>
                    <div className="text-sm font-bold text-white mb-2 tracking-wide">Entertainment</div>
                    <div className="text-[0.65rem] text-gray-400 leading-snug">Multi-room audio<br />at your command</div>
                    <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-[#d0a353]/30 to-transparent"></div>
                </div>

                
                <div className="flex flex-col items-center text-center px-4 relative lg:w-1/8">
                    <i className="fas fa-unlock-alt text-[#d0a353] text-3xl mb-4 h-8 flex items-center justify-center"></i>
                    <div className="text-sm font-bold text-white mb-2 tracking-wide">Access</div>
                    <div className="text-[0.65rem] text-gray-400 leading-snug">Smart locks for<br />safe access</div>
                    <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-[#d0a353]/30 to-transparent"></div>
                </div>

                
                <div className="flex flex-col items-center text-center px-4 relative lg:w-1/8">
                    <i className="fas fa-eye text-[#d0a353] text-3xl mb-4 h-8 flex items-center justify-center"></i>
                    <div className="text-sm font-bold text-white mb-2 tracking-wide">Monitoring</div>
                    <div className="text-[0.65rem] text-gray-400 leading-snug">Watch live from<br />anywhere</div>
                    <div className="hidden lg:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-[#d0a353]/30 to-transparent"></div>
                </div>

                
                <div className="flex flex-col items-center text-center px-4 relative lg:w-1/8">
                    <i className="fas fa-broadcast-tower text-[#d0a353] text-3xl mb-4 h-8 flex items-center justify-center"></i>
                    <div className="text-sm font-bold text-white mb-2 tracking-wide">Sensors</div>
                    <div className="text-[0.65rem] text-gray-400 leading-snug">Smart sensors for<br />maximum safety</div>
                </div>

            </div>
        </div>
    </section>

    
    <section className="relative py-20 lg:py-32 bg-[#0c121e] overflow-hidden">
        
        <div className="absolute top-0 left-0 bottom-0 w-1/2 z-0">
            <img src="images/hero_pool_1786093934613.png" alt="Smart Home" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0c121e]/80 to-[#0c121e]"></div>
        </div>
        
        
        <div className="absolute bottom-0 right-0 w-1/3 h-full z-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at bottom right, transparent 0%, transparent 40%, rgba(208,163,83,0.3) 41%, transparent 42%)" }}></div>
    
        <div className="container relative z-10 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 hidden lg:block"></div>
            
            
            <div className="lg:col-span-4 text-white text-center lg:text-left">
                <h2 className="font-heading text-4xl lg:text-[2.75rem] mb-4 font-bold leading-tight">
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

    
    <section className="bg-[#fdfcf9] py-20 lg:py-32 border-b-4 border-[#0b101a]">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                
                <div>
                    <h4 className="font-heading text-[#d0a353] text-xs font-bold tracking-[0.15em] uppercase font-nav mb-6">GET IN TOUCH</h4>
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
                    <h4 className="font-heading text-[#d0a353] text-xs font-bold tracking-[0.15em] uppercase font-nav mb-6">SCAN TO CONNECT</h4>
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
                    <h4 className="font-heading text-[#d0a353] text-xs font-bold tracking-[0.15em] uppercase font-nav mb-6">FOLLOW US</h4>
                    <div className="flex gap-3 mt-4">
                        <a href="#" className="w-8 h-8 rounded-full border border-[#d0a353]/50 flex items-center justify-center text-[#d0a353] hover:bg-[#d0a353] hover:text-white transition"><i className="fab fa-facebook-f text-sm"></i></a>
                        <a href="#" className="w-8 h-8 rounded-full border border-[#d0a353]/50 flex items-center justify-center text-[#d0a353] hover:bg-[#d0a353] hover:text-white transition"><i className="fab fa-instagram text-sm"></i></a>
                        <a href="#" className="w-8 h-8 rounded-full border border-[#d0a353]/50 flex items-center justify-center text-[#d0a353] hover:bg-[#d0a353] hover:text-white transition"><i className="fab fa-linkedin-in text-sm"></i></a>
                        <a href="#" className="w-8 h-8 rounded-full border border-[#d0a353]/50 flex items-center justify-center text-[#d0a353] hover:bg-[#d0a353] hover:text-white transition"><i className="fab fa-youtube text-sm"></i></a>
                    </div>
                </div>
                
                
                <div className="lg:border-l lg:border-[#d0a353]/20 lg:pl-8">
                    <h4 className="font-heading text-[#d0a353] text-xs font-bold tracking-[0.15em] uppercase font-nav mb-6">OUR LOCATION</h4>
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




