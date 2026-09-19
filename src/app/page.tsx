import Link from 'next/link';
import { Metadata } from "next";
import HeroSlider from '@/components/HeroSlider';
import TrustBadgeSlider from '@/components/TrustBadgeSlider';

export const metadata: Metadata = {
  title: "Smart IoT Solutions | Automation Experts",
  description: "Delivering smarter, safer and more connected spaces through innovative IoT and automation solutions.",
};


import SolutionsSlider from '@/components/SolutionsSlider';
import ProjectsBento from '@/components/ProjectsBento';
import GetStartedButton from '@/components/GetStartedButton';

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
            
            <div className="w-full lg:w-[55%] hero-content-left pt-10">
                
                <TrustBadgeSlider />

                
                <h1 className="font-heading text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] mb-4 tracking-wide">
                    An <span className="text-gold">Automation</span><br />Company
                </h1>

                
                <p className="text-gray-300 text-lg lg:text-xl mb-10 lg:mb-12 tracking-wide font-light">Smart Solutions for a Smarter Tomorrow
                </p>

                
                <a href="#"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white px-8 lg:px-10 py-3.5 lg:py-4 rounded text-sm font-medium hover:shadow-[0_0_30px_rgba(207,168,94,0.5)] transition">
                    Explore Solutions <i className="fas fa-chevron-right text-xs"></i>
                </a>
            </div>

            
            <div className="w-full lg:w-[45%] hero-content-right pl-0 lg:pl-10 relative pt-10">
                
                <HeroSlider />

                
                <div
                    className="hero-features-box w-full max-w-lg rounded-xl p-6 grid grid-cols-2 gap-y-6 md:flex md:justify-between items-start mx-auto shadow-sm mt-4 lg:mt-0">
                    <div className="flex flex-col items-center text-center w-full md:w-1/4 px-1">
                        <i className="fas fa-home text-gold text-[1.7rem] mb-3"></i>
                        <span className="text-[0.65rem] font-bold text-gray-600 leading-snug">Smart
                            Living<br />Solutions</span>
                    </div>
                    <div className="flex flex-col items-center text-center w-full md:w-1/4 px-1">
                        <i className="fas fa-leaf text-gold text-[1.7rem] mb-3"></i>
                        <span
                            className="text-[0.65rem] font-bold text-gray-600 leading-snug">Energy<br />Efficient<br />Systems</span>
                    </div>
                    <div className="flex flex-col items-center text-center w-full md:w-1/4 px-1">
                        <i className="fas fa-shield-alt text-gold text-[1.7rem] mb-3"></i>
                        <span className="text-[0.65rem] font-bold text-gray-600 leading-snug">Secure
                            &<br />Reliable<br />Technology</span>
                    </div>
                    <div className="flex flex-col items-center text-center w-full md:w-1/4 px-1">
                        <i className="fas fa-mobile-alt text-gold text-[1.7rem] mb-3"></i>
                        <span className="text-[0.65rem] font-bold text-gray-600 leading-snug">Easy
                            to<br />Control<br />Anywhere</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <SolutionsSlider solutions={solutions} />

    
    <section className="py-12 lg:py-[60px] relative overflow-hidden bg-[#fdfcf9]">
        
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
                    <h2 className="font-heading text-3xl lg:text-[2.2rem] mb-3 font-bold text-[#1a202c] leading-[1.1] tracking-tight">
                        RAISES YOUR VOICE<br />
                        <span className="text-[#d0a353] font-heading font-medium tracking-wide">RULE YOUR TERRITORY</span>
                    </h2>
                    <p className="text-[0.75rem] text-gray-600 mb-8 max-w-[300px] leading-relaxed font-medium">
                        Proudly empowering businesses and homes across South India with smart & secure solutions.
                    </p>
                    
                    <div className="relative w-full max-w-[320px] lg:max-w-[420px] mx-auto lg:ml-0 mt-8 pl-4 lg:pl-4">
                        <img src="images/map.png" alt="South India Map" className="w-full drop-shadow-[0_10px_25px_rgba(208,163,83,0.2)] relative z-10 scale-100 lg:scale-105 transform origin-left" />
                        
                        <div className="absolute top-[55%] -right-4 lg:-right-8 z-20 bg-white/95 backdrop-blur-sm rounded-[1rem] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#d0a353]/20 py-3 px-4 lg:py-4 lg:px-5 text-center flex flex-col items-center justify-center transform hover:-translate-y-1 transition duration-300">
                            <i className="far fa-handshake text-[#d0a353] text-xl lg:text-2xl mb-1 lg:mb-1.5"></i>
                            <div className="text-[7px] lg:text-[8px] text-gray-500 font-medium mb-1 tracking-wide uppercase">Trusted by</div>
                            <div className="text-[#ca9740] font-bold text-2xl lg:text-3xl leading-none mb-1 lg:mb-1.5 font-heading">50+</div>
                            <div className="text-[7px] lg:text-[8px] text-gray-600 font-bold leading-tight">Brands Across<br />South India</div>
                        </div>
                    </div>
                </div>
                
                
                <div className="lg:col-span-7 pt-0 mt-8 lg:mt-0">
                    <div className="flex items-center gap-4 mb-8 lg:mb-10">
                        <span className="flex-grow h-[1px] bg-[#d0a353]/30 relative hidden sm:block">
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#d0a353] rotate-45"></span>
                        </span>
                        <span className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.15em] uppercase font-nav whitespace-nowrap">OUR VALUED PARTNERS & CLIENTS</span>
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
                                <div className={`flex gap-3 lg:gap-4 w-max ${rowIdx % 2 !== 0 ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
                                    {[...rowClients, ...rowClients].map((client, idx) => (
                                        <div key={idx} className="w-[150px] lg:w-[180px] h-[60px] lg:h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition group shrink-0">
                                            <span className="font-badge text-[9px] sm:text-[11px] font-bold text-gray-800 text-center uppercase leading-tight tracking-wider group-hover:text-[#d0a353] transition-colors">{client}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            
            <div className="mt-14 bg-white/80 backdrop-blur-md rounded-[1.25rem] p-5 lg:py-5 lg:px-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-[#d0a353]/20 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6 relative z-30">
                
                <div className="w-full lg:w-auto flex flex-col sm:flex-row items-center sm:items-start lg:items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                        <div className="text-[0.65rem] font-bold text-gray-900 uppercase tracking-[0.1em] font-nav mb-1">LET&apos;S BUILD SMARTER TOGETHER</div>
                        <div className="text-[0.65rem] text-gray-500 font-medium">Your vision, our technology - a smarter tomorrow.</div>
                    </div>
                    <a href="#" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white px-6 py-2.5 rounded text-[0.65rem] font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition uppercase tracking-wider whitespace-nowrap shrink-0 font-nav mt-3 sm:mt-0">
                        GET IN TOUCH <i className="fas fa-chevron-right text-[8px]"></i>
                    </a>
                </div>
                
                <div className="hidden lg:block w-[1px] h-12 bg-gray-200 mx-2"></div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-4 w-full lg:w-auto lg:flex">
                    <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-2 lg:gap-3">
                        <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] text-base lg:text-lg bg-[#d0a353]/5 shrink-0">
                            <i className="fas fa-users"></i>
                        </div>
                        <div>
                            <div className="font-bold text-lg lg:text-xl text-gray-900 leading-none mb-1">50+</div>
                            <div className="text-[0.6rem] lg:text-[0.65rem] text-gray-500 font-medium whitespace-nowrap">Happy Clients</div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-2 lg:gap-3">
                        <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] text-base lg:text-lg bg-[#d0a353]/5 shrink-0">
                            <i className="fas fa-briefcase"></i>
                        </div>
                        <div>
                            <div className="font-bold text-lg lg:text-xl text-gray-900 leading-none mb-1">100+</div>
                            <div className="text-[0.6rem] lg:text-[0.65rem] text-gray-500 font-medium whitespace-nowrap">Projects Delivered</div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-2 lg:gap-3">
                        <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] text-base lg:text-lg bg-[#d0a353]/5 shrink-0">
                            <i className="fas fa-shield-alt"></i>
                        </div>
                        <div>
                            <div className="font-bold text-lg lg:text-xl text-gray-900 leading-none mb-1">5+</div>
                            <div className="text-[0.6rem] lg:text-[0.65rem] text-gray-500 font-medium whitespace-nowrap">Years of Trust</div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-2 lg:gap-3">
                        <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] text-base lg:text-lg bg-[#d0a353]/5 shrink-0">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <div className="font-bold text-[0.75rem] lg:text-[0.8rem] text-gray-900 leading-tight mb-0.5">Across</div>
                            <div className="text-[0.6rem] lg:text-[0.65rem] text-gray-500 font-medium whitespace-nowrap">South India</div>
                        </div>
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

                        {/* Creative Bento Box Grid – cycling images handled by ProjectsBento */}
            <ProjectsBento />

            
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
                                <p className="text-[0.65rem] lg:text-[0.7rem] text-gray-500 font-medium leading-tight">Smart &amp; Secure Living</p>
                            </div>
                        </div>
                        <div className="mb-2"><span className="text-2xl lg:text-[1.75rem] font-black text-gray-900 tracking-tight">₹ 99,000</span></div>
                        <p className="text-[0.65rem] text-gray-400 font-bold mb-6">* Starting Price</p>
                        <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
                        <ul className="text-[0.8rem] text-gray-600 space-y-4 font-medium">
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> Smart Lighting</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> Smart Door Lock</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> CCTV (4 Cameras)</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> Mobile App Control</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> Basic Automation</li>
                        </ul>
                    </div>
                    <div className="px-8 pb-8 mt-auto"><GetStartedButton planName="Essential" variant="outline" /></div>
                </div>
                <div className="bg-white rounded-xl shadow-[0_15px_40px_rgba(208,163,83,0.15)] border border-[#d0a353]/30 flex flex-col h-full relative">
                    <div className="absolute w-[80%] -top-[14px] left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white text-center py-1.5 px-4 text-[0.65rem] font-bold tracking-[0.15em] uppercase rounded-[6px] shadow-md z-10">MOST POPULAR</div>
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
                        <div className="mb-2"><span className="text-2xl lg:text-[1.75rem] font-black text-gray-900 tracking-tight">₹ 2,99,000</span></div>
                        <p className="text-[0.65rem] text-gray-400 font-bold mb-6">* Starting Price</p>
                        <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
                        <ul className="text-[0.8rem] text-gray-600 space-y-4 font-medium">
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> Everything in Essential</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> Curtain Automation</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> AC / TV Control</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> Voice Control (Alexa/Google)</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> Advanced App Control</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> Scene Automation</li>
                        </ul>
                    </div>
                    <div className="px-8 pb-8 mt-auto"><GetStartedButton planName="Premium" variant="filled" /></div>
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
                        <div className="mb-2"><span className="text-2xl lg:text-[1.75rem] font-black text-gray-900 tracking-tight">₹ 6,99,000</span></div>
                        <p className="text-[0.65rem] text-gray-400 font-bold mb-6">* Starting Price and above</p>
                        <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
                        <ul className="text-[0.8rem] text-gray-600 space-y-4 font-medium">
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> Everything in Premium</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> Multi-Room Audio</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> Video Door Phone</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> Energy Management</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> Motion &amp; Safety Sensors</li>
                            <li className="flex items-start gap-3"><i className="fas fa-check-circle text-[#d0a353] mt-0.5 text-base"></i> Priority Support &amp; AMC</li>
                        </ul>
                    </div>
                    <div className="px-8 pb-8 mt-auto"><GetStartedButton planName="Luxury Villa" variant="outline" /></div>
                </div>
                <div className="bg-[#fcfbf9] rounded-xl border border-gray-100 p-6 flex flex-col h-full shadow-[0_5px_20px_rgba(0,0,0,0.02)] relative">
                    <div className="absolute inset-0 border border-[#d0a353]/10 rounded-xl m-2 pointer-events-none"></div>
                    <div className="grid grid-cols-2 gap-0 h-full relative z-10">
                        <div className="flex flex-col items-center justify-center p-4 text-center border-b border-r border-gray-200"><i className="fas fa-couch text-[#d0a353] text-2xl mb-3"></i><p className="text-[0.7rem] font-bold text-gray-800 leading-tight">Premium<br />Global Brands</p></div>
                        <div className="flex flex-col items-center justify-center p-4 text-center border-b border-gray-200"><i className="fas fa-tools text-[#d0a353] text-2xl mb-3"></i><p className="text-[0.7rem] font-bold text-gray-800 leading-tight">Expert<br />Installation</p></div>
                        <div className="flex flex-col items-center justify-center p-4 text-center border-b border-r border-gray-200"><i className="fas fa-project-diagram text-[#d0a353] text-2xl mb-3"></i><p className="text-[0.7rem] font-bold text-gray-800 leading-tight">Customized<br />Solutions</p></div>
                        <div className="flex flex-col items-center justify-center p-4 text-center border-b border-gray-200"><i className="fas fa-microchip text-[#d0a353] text-2xl mb-3"></i><p className="text-[0.7rem] font-bold text-gray-800 leading-tight">Neat &amp; Clean<br />Wiring</p></div>
                        <div className="flex flex-col items-center justify-center p-4 text-center border-r border-gray-200"><i className="fas fa-shield-alt text-[#d0a353] text-2xl mb-3"></i><p className="text-[0.7rem] font-bold text-gray-800 leading-tight">5 Year<br />Warranty</p></div>
                        <div className="flex flex-col items-center justify-center p-4 text-center"><i className="fas fa-headset text-[#d0a353] text-2xl mb-3"></i><p className="text-[0.7rem] font-bold text-gray-800 leading-tight">AMC &amp; 24/7<br />Support</p></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
    <section className="relative py-16 lg:py-24 bg-[#fdfcf9] overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#d0a353]/10 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#d0a353]/10 to-transparent rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        </div>

        <div className="container relative z-10 max-w-[1200px]">
            <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#d0a353]/10 border border-[#d0a353]/20 mb-4">
                    <i className="fas fa-magic text-[#d0a353] text-[10px]"></i>
                    <span className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.15em] uppercase font-nav">EXPERIENCE INTELLIGENT LIVING</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-[#1a202c] mb-6 font-bold tracking-tight">
                    Everything Under <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ca9740] to-[#dfb45e]">Your Control</span>
                </h2>
                <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto font-medium leading-relaxed">
                    Seamlessly connect and manage every aspect of your home or business with our intuitive and powerful automation ecosystems.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(208,163,83,0.12)] hover:-translate-y-1.5 hover:border-[#d0a353]/30 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#d0a353]/5 to-transparent rounded-bl-full pointer-events-none"></div>
                    <div className="w-14 h-14 rounded-xl bg-[#d0a353]/10 flex items-center justify-center text-[#d0a353] text-2xl mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#ca9740] group-hover:to-[#dfb45e] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                        <i className="far fa-lightbulb"></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading tracking-wide">Lighting</h3>
                    <p className="text-[0.8rem] text-gray-500 font-medium leading-relaxed">
                        Set the perfect mood instantly. Control brightness, colors, and schedules with smart automated lights.
                    </p>
                </div>
                
                {/* 2 Security */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(208,163,83,0.12)] hover:-translate-y-1.5 hover:border-[#d0a353]/30 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#d0a353]/5 to-transparent rounded-bl-full pointer-events-none"></div>
                    <div className="w-14 h-14 rounded-xl bg-[#d0a353]/10 flex items-center justify-center text-[#d0a353] text-2xl mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#ca9740] group-hover:to-[#dfb45e] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                        <i className="fas fa-shield-alt"></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading tracking-wide">Security</h3>
                    <p className="text-[0.8rem] text-gray-500 font-medium leading-relaxed">
                        Complete peace of mind with 24/7 smart surveillance, motion detection, and instant intrusion alerts.
                    </p>
                </div>

                {/* 3 Curtains */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(208,163,83,0.12)] hover:-translate-y-1.5 hover:border-[#d0a353]/30 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#d0a353]/5 to-transparent rounded-bl-full pointer-events-none"></div>
                    <div className="w-14 h-14 rounded-xl bg-[#d0a353]/10 flex items-center justify-center text-[#d0a353] text-2xl mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#ca9740] group-hover:to-[#dfb45e] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                        <i className="fas fa-person-booth"></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading tracking-wide">Curtains & Blinds</h3>
                    <p className="text-[0.8rem] text-gray-500 font-medium leading-relaxed">
                        Wake up to natural light. Open or close your curtains with a single touch or automated schedules.
                    </p>
                </div>

                {/* 4 Climate */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(208,163,83,0.12)] hover:-translate-y-1.5 hover:border-[#d0a353]/30 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#d0a353]/5 to-transparent rounded-bl-full pointer-events-none"></div>
                    <div className="w-14 h-14 rounded-xl bg-[#d0a353]/10 flex items-center justify-center text-[#d0a353] text-2xl mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#ca9740] group-hover:to-[#dfb45e] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                        <i className="fas fa-thermometer-half"></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading tracking-wide">Climate Control</h3>
                    <p className="text-[0.8rem] text-gray-500 font-medium leading-relaxed">
                        Maintain the perfect temperature always. Smart AC control for maximum comfort and energy efficiency.
                    </p>
                </div>

                {/* 5 Entertainment */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(208,163,83,0.12)] hover:-translate-y-1.5 hover:border-[#d0a353]/30 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#d0a353]/5 to-transparent rounded-bl-full pointer-events-none"></div>
                    <div className="w-14 h-14 rounded-xl bg-[#d0a353]/10 flex items-center justify-center text-[#d0a353] text-2xl mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#ca9740] group-hover:to-[#dfb45e] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                        <i className="fas fa-music"></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading tracking-wide">Entertainment</h3>
                    <p className="text-[0.8rem] text-gray-500 font-medium leading-relaxed">
                        Multi-room audio and complete home theater setups, all commanded intuitively from your smartphone.
                    </p>
                </div>

                {/* 6 Access */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(208,163,83,0.12)] hover:-translate-y-1.5 hover:border-[#d0a353]/30 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#d0a353]/5 to-transparent rounded-bl-full pointer-events-none"></div>
                    <div className="w-14 h-14 rounded-xl bg-[#d0a353]/10 flex items-center justify-center text-[#d0a353] text-2xl mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#ca9740] group-hover:to-[#dfb45e] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                        <i className="fas fa-unlock-alt"></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading tracking-wide">Smart Access</h3>
                    <p className="text-[0.8rem] text-gray-500 font-medium leading-relaxed">
                        Keyless entry with advanced digital door locks and video door phones for secure visitor management.
                    </p>
                </div>

                {/* 7 Monitoring */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(208,163,83,0.12)] hover:-translate-y-1.5 hover:border-[#d0a353]/30 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#d0a353]/5 to-transparent rounded-bl-full pointer-events-none"></div>
                    <div className="w-14 h-14 rounded-xl bg-[#d0a353]/10 flex items-center justify-center text-[#d0a353] text-2xl mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#ca9740] group-hover:to-[#dfb45e] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                        <i className="fas fa-eye"></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading tracking-wide">Monitoring</h3>
                    <p className="text-[0.8rem] text-gray-500 font-medium leading-relaxed">
                        Watch live high-definition feeds from anywhere in the world. Stay connected to what matters most.
                    </p>
                </div>

                {/* 8 Sensors */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(208,163,83,0.12)] hover:-translate-y-1.5 hover:border-[#d0a353]/30 transition-all duration-300 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#d0a353]/5 to-transparent rounded-bl-full pointer-events-none"></div>
                    <div className="w-14 h-14 rounded-xl bg-[#d0a353]/10 flex items-center justify-center text-[#d0a353] text-2xl mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#ca9740] group-hover:to-[#dfb45e] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                        <i className="fas fa-broadcast-tower"></i>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-heading tracking-wide">Smart Sensors</h3>
                    <p className="text-[0.8rem] text-gray-500 font-medium leading-relaxed">
                        Gas leak, smoke, and motion sensors that act automatically to protect your space from hazards.
                    </p>
                </div>
            </div>
        </div>
    </section>

    
    </>
  );
}
