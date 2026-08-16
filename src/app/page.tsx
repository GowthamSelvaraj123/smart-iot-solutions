import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart IoT Solutions | Automation Experts",
  description: "Delivering smarter, safer and more connected spaces through innovative IoT and automation solutions.",
};

export default function IndexPage() {
  return (
    <>


    
    <section className="hero-wrapper">
        
        <div className="hero-diagonal"></div>
        <div className="hero-left-img"></div>

        <div className="container relative z-20 flex flex-wrap items-center h-full pt-16 pb-12">
            
            <div className="w-full lg:w-[50%] hero-content-left pt-10">
                
                <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-lg mb-8 shadow-xl">
                    <div className="flex text-gold text-lg">
                        <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                            className="fas fa-star"></i><i className="fas fa-star"></i>
                    </div>
                    <span className="text-sm font-bold text-gray-800 tracking-wide">Trusted by 1000+ Happy Customers</span>
                </div>

                
                <h1 className="text-[4rem] font-bold text-white leading-[1.1] mb-4 tracking-wide"
                    style={{ fontFamily: "var(--font-heading)" }}>
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
                
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-[2px] h-20 bg-gray-300"></div>
                    <div
                        className="w-20 h-12 bg-white rounded-t-full shadow-lg relative overflow-hidden flex justify-center border-b-4 border-gold z-10">
                    </div>
                    <div className="w-64 h-64 bg-gold/20 rounded-full blur-[50px] absolute top-24 pointer-events-none">
                    </div>
                </div>

                
                <div className="relative w-full max-w-3xl mt-16 mb-8 flex items-center justify-center h-[350px]">
                    
                    <button className="absolute -left-6 z-30 text-gold text-2xl hover:scale-110 transition cursor-pointer"
                        ><i className="fas fa-chevron-left"></i></button>

                    
                    <div id="heroCardsContainer" className="relative w-full h-full flex items-center">

                        
                        <div className="carousel-card carousel-card-center" data-index="0">
                            <img src="images/hero_pool_1786093934613.png" alt="Swimming Pool Automation"
                                className="w-full h-48 object-cover rounded-lg mb-4" />
                            <div className="text-center">
                                <div className="text-lg font-bold text-gray-900 leading-tight mb-1">Swimming Pool</div>
                                <div className="text-gold font-bold text-sm tracking-wide">Automation</div>
                            </div>
                        </div>

                        
                        <div className="carousel-card carousel-card-right" data-index="1">
                            <img src="images/hero_gate_1786093948118.png" alt="Gate Automation"
                                className="w-full h-48 object-cover rounded-lg mb-4" />
                            <div className="text-center">
                                <div className="text-lg font-bold text-gray-900 leading-tight mb-1">Gate</div>
                                <div className="text-gold font-bold text-sm tracking-wide">Automation</div>
                            </div>
                        </div>

                        
                        <div className="carousel-card carousel-card-hidden" data-index="2">
                            <img src="images/auto_apartment_1786094001400.png" alt="Climate Control"
                                className="w-full h-48 object-cover rounded-lg mb-4" />
                            <div className="text-center">
                                <div className="text-lg font-bold text-gray-900 leading-tight mb-1">Climate</div>
                                <div className="text-gold font-bold text-sm tracking-wide">Control</div>
                            </div>
                        </div>

                        
                        <div className="carousel-card carousel-card-hidden" data-index="3">
                            <img src="images/auto_office_1786094016416.png" alt="Security System"
                                className="w-full h-48 object-cover rounded-lg mb-4" />
                            <div className="text-center">
                                <div className="text-lg font-bold text-gray-900 leading-tight mb-1">Security</div>
                                <div className="text-gold font-bold text-sm tracking-wide">System</div>
                            </div>
                        </div>

                        
                        <div className="carousel-card carousel-card-hidden" data-index="4">
                            <img src="images/auto_villa_1786093987554.png" alt="Home Entertainment"
                                className="w-full h-48 object-cover rounded-lg mb-4" />
                            <div className="text-center">
                                <div className="text-lg font-bold text-gray-900 leading-tight mb-1">Home</div>
                                <div className="text-gold font-bold text-sm tracking-wide">Entertainment</div>
                            </div>
                        </div>

                        
                        <div className="carousel-card carousel-card-left" data-index="5">
                            <img src="images/hero_lighting_1786093923075.png" alt="Lighting Control"
                                className="w-full h-48 object-cover rounded-lg mb-4" />
                            <div className="text-center">
                                <div className="text-lg font-bold text-gray-900 leading-tight mb-1">Lighting</div>
                                <div className="text-gold font-bold text-sm tracking-wide">Control</div>
                            </div>
                        </div>

                    </div>

                    
                    <button className="absolute -right-6 z-30 text-gold text-2xl hover:scale-110 transition cursor-pointer"
                        ><i className="fas fa-chevron-right"></i></button>
                </div>

                
                <div className="flex items-center gap-4 mb-12">
                    <span className="w-3 h-3 rounded-full bg-gold"></span>
                    <span className="flex gap-1 text-gold text-[10px]"><i className="fas fa-pause"></i></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e3d1a8]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#e3d1a8]"></span>
                </div>

                
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

    
    <div className="bg-[#fdfcf9] border-t-2 border-[#d0a353] top-[80px] z-40 hidden lg:block shadow-sm">
        <div className="container flex justify-between items-center py-4 px-2">

            <a href="#" className="flex items-center gap-3 group">
                <i className="fas fa-home text-2xl text-[#d0a353] group-hover:scale-110 transition"></i>
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Home Automation</span>
            </a>

            <div className="h-8 w-[1px] bg-[#d0a353] opacity-40"></div>

            <a href="#" className="flex items-center gap-3 group">
                <i className="far fa-lightbulb text-2xl text-[#d0a353] group-hover:scale-110 transition"></i>
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Lighting Control</span>
            </a>

            <div className="h-8 w-[1px] bg-[#d0a353] opacity-40"></div>

            <a href="#" className="flex items-center gap-3 group">
                <i className="fas fa-thermometer-half text-2xl text-[#d0a353] group-hover:scale-110 transition"></i>
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Climate Control</span>
            </a>

            <div className="h-8 w-[1px] bg-[#d0a353] opacity-40"></div>

            <a href="#" className="flex items-center gap-3 group">
                <i className="fas fa-video text-2xl text-[#d0a353] group-hover:scale-110 transition"></i>
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Security & CCTV</span>
            </a>

            <div className="h-8 w-[1px] bg-[#d0a353] opacity-40"></div>

            <a href="#" className="flex items-center gap-3 group">
                <i className="fas fa-torii-gate text-2xl text-[#d0a353] group-hover:scale-110 transition"></i>
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Gate Automation</span>
            </a>

            <div className="h-8 w-[1px] bg-[#d0a353] opacity-40"></div>

            <a href="#" className="flex items-center gap-3 group">
                <i className="fas fa-project-diagram text-2xl text-[#d0a353] group-hover:scale-110 transition"></i>
                <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Smart Devices</span>
            </a>

        </div>
    </div>



    
    <section className="py-16 relative overflow-hidden bg-[#fdfcf9]">
        
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                
                
                <div className="lg:col-span-5 relative pt-4">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.15em] uppercase whitespace-nowrap">OUR REACH, THEIR TRUST</span>
                        <span className="flex-grow h-[1px] bg-[#d0a353]/40 relative">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#d0a353] rotate-45"></span>
                        </span>
                    </div>
                    <h2 className="text-[2rem] lg:text-[2.2rem] mb-3 font-bold text-[#1a202c] leading-[1.1] tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                        RAISES YOUR VOICE<br />
                        <span className="text-[#d0a353] font-serif font-medium tracking-wide">RULE YOUR TERRITORY</span>
                    </h2>
                    <p className="text-[0.75rem] text-gray-600 mb-8 max-w-[300px] leading-relaxed font-medium">
                        Proudly empowering businesses and homes across South India with smart & secure solutions.
                    </p>
                    
                    <div className="relative w-full max-w-[420px] mx-auto lg:ml-0 mt-8 pl-4">
                        <img src="images/map.png" alt="South India Map" className="w-full drop-shadow-[0_10px_25px_rgba(208,163,83,0.2)] relative z-10 scale-105 transform origin-left" />
                        
                        
                        <div className="absolute -top-12 -left-4 z-20 flex items-center">
                            <img src="https://placehold.co/200x80/transparent/d0a353?text=Make+In+India" alt="Make in India" className="h-10 mb-8 object-contain"  />
                        </div>
                        
                        
                        <div className="absolute top-[35%] right-[25%] z-20 flex flex-col items-center group cursor-default">
                            <i className="fas fa-map-marker-alt text-[#d0a353] text-xl drop-shadow-md group-hover:scale-125 group-hover:text-[#ca9740] transition duration-300"></i>
                            <span className="text-[9px] font-bold text-gray-800 mt-1.5 opacity-90">Andhra Pradesh</span>
                        </div>
                        <div className="absolute top-[48%] left-[20%] z-20 flex flex-col items-center group cursor-default">
                            <i className="fas fa-map-marker-alt text-[#d0a353] text-xl drop-shadow-md group-hover:scale-125 group-hover:text-[#ca9740] transition duration-300"></i>
                            <span className="text-[9px] font-bold text-gray-800 mt-1.5 opacity-90">Karnataka</span>
                        </div>
                        <div className="absolute top-[68%] right-[32%] z-20 flex flex-col items-center group cursor-default">
                            <i className="fas fa-map-marker-alt text-[#d0a353] text-xl drop-shadow-md group-hover:scale-125 group-hover:text-[#ca9740] transition duration-300"></i>
                            <span className="text-[9px] font-bold text-gray-800 mt-1.5 opacity-90">Tamil Nadu</span>
                        </div>
                        <div className="absolute top-[80%] left-[25%] z-20 flex flex-col items-center group cursor-default">
                            <i className="fas fa-map-marker-alt text-[#d0a353] text-xl drop-shadow-md group-hover:scale-125 group-hover:text-[#ca9740] transition duration-300"></i>
                            <span className="text-[9px] font-bold text-gray-800 mt-1.5 opacity-90">Kerala</span>
                        </div>

                        
                        
                        <div className="absolute top-[55%] -right-8 z-20 bg-white/95 backdrop-blur-sm rounded-[1rem] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#d0a353]/20 py-4 px-5 text-center flex flex-col items-center justify-center transform hover:-translate-y-1 transition duration-300">
                            <i className="far fa-handshake text-[#d0a353] text-2xl mb-1.5"></i>
                            <div className="text-[8px] text-gray-500 font-medium mb-1 tracking-wide uppercase">Trusted by</div>
                            <div className="text-[#ca9740] font-bold text-3xl leading-none mb-1.5 font-serif">50+</div>
                            <div className="text-[8px] text-gray-600 font-bold leading-tight">Brands Across<br />South India</div>
                        </div>
                    </div>
                </div>
                
                
                <div className="lg:col-span-7 pt-2">
                    <div className="flex items-center gap-4 mb-10">
                        <span className="flex-grow h-[1px] bg-[#d0a353]/30 relative">
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#d0a353] rotate-45"></span>
                        </span>
                        <span className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.15em] uppercase">OUR VALUED PARTNERS & CLIENTS</span>
                        <span className="w-12 lg:w-24 h-[1px] bg-[#d0a353]/30 relative">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#d0a353] rotate-45"></span>
                        </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 pr-0 lg:pr-4">
                        
                        <div className="col-span-1 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition group"><div className="w-12 h-12 rounded-full border-[3px] border-green-600 flex items-center justify-center text-green-600 group-hover:bg-green-50 transition"><i className="fas fa-tree text-lg"></i></div></div>
                        <div className="col-span-1 h-[70px] bg-[#1a365d] rounded-lg shadow-sm flex items-center justify-center p-2 hover:-translate-y-1 transition"><div className="flex flex-col items-center"><span className="text-white font-bold text-xl leading-none">BC</span><span className="text-white/80 text-[6px] tracking-widest mt-1 uppercase">estudiogroup</span></div></div>
                        <div className="col-span-1 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition"><div className="flex flex-col items-center text-[#e53e3e]"><div className="flex items-center gap-1"><i className="fas fa-hard-hat text-blue-800 text-xl"></i><span className="font-black text-xl leading-none">DR</span></div><span className="text-[6px] font-bold text-blue-900 mt-0.5">DR PROBUILDERS</span></div></div>
                        <div className="col-span-1 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition"><div className="flex flex-col items-center"><div className="bg-black w-8 h-8 mb-1 text-white flex justify-center items-center font-bold text-sm">C</div><span className="text-[6px] text-gray-500 font-bold uppercase">CB Emporio</span></div></div>
                        
                        <div className="col-span-2 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 relative hover:shadow-md hover:border-[#d0a353]/30 transition"><div className="flex items-center pb-2"><span className="text-green-500 font-bold text-[1.35rem] tracking-tight">green</span><span className="text-pink-600 font-bold text-[1.35rem] tracking-tight">trends</span></div><div className="text-[5px] absolute bottom-2 font-bold text-gray-500 tracking-wider">UNISEX HAIR & STYLE SALON</div></div>
                        <div className="col-span-2 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition"><div className="flex items-center gap-3"><i className="fas fa-home text-gray-800 text-3xl"></i><div className="flex flex-col text-left"><span className="text-amber-800 font-bold text-xl leading-none">House</span><span className="text-[6px] text-gray-500 font-bold tracking-wide mt-1">DESIGN & ENGINEERING</span></div></div></div>
                        
                        <div className="col-span-1 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition"><div className="flex flex-col items-center"><span className="text-green-700 font-bold text-xl leading-none">minn</span><div className="bg-amber-900 text-white text-[5px] px-2 py-0.5 rounded-full mt-1 uppercase">Inspiring Designers</div></div></div>
                        <div className="col-span-1 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition"><div className="flex flex-col items-center"><i className="fas fa-broadcast-tower text-gray-800 text-2xl mb-1"></i><span className="text-[6px] font-bold uppercase tracking-widest text-black">BRAND NAME</span></div></div>
                        <div className="col-span-1 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition"><div className="flex flex-col items-center"><div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-xs relative"><span className="absolute -right-3 -top-1 text-[#2196f3] text-2xl font-black">H</span></div></div></div>
                        <div className="col-span-1 h-[70px] bg-[#311b92] rounded-lg shadow-sm flex items-center justify-center p-2 hover:-translate-y-1 transition"><div className="flex flex-col items-center"><span className="text-white font-bold text-xl leading-none tracking-tight">naturals</span><span className="text-white/80 text-[5px] mt-1 font-medium tracking-wide">India's No.1 salon</span></div></div>
                        
                        <div className="col-span-1 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition"><div className="flex flex-col items-center"><div className="flex items-end gap-[2px] mb-1.5"><div className="w-2.5 h-4 bg-gray-800 rounded-sm"></div><div className="w-2.5 h-6 bg-gray-800 rounded-sm"></div><div className="w-2.5 h-4 bg-orange-500 rounded-sm"></div></div><span className="text-[7px] font-black tracking-widest text-gray-800">SHREE</span></div></div>
                        <div className="col-span-1 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition"><div className="flex flex-col items-center"><i className="fas fa-user-circle text-red-600 text-[1.75rem] mb-1"></i><span className="text-[11px] font-black text-red-600 uppercase leading-none tracking-tighter">KFC</span></div></div>
                        <div className="col-span-1 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition"><div className="w-12 h-12 rounded-full border-2 border-yellow-400 flex flex-col items-center justify-center text-center leading-none"><img src="https://ui-avatars.com/api/?name=S+F&background=fff&color=d0a353&font-size=0.4&rounded=true" className="w-8 h-8 rounded-full" /></div></div>
                        <div className="col-span-1 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition"><span className="text-pink-500 font-bold text-xl tracking-tight">babyhug</span></div>
                        
                        <div className="col-span-1 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition"><div className="flex flex-col items-center text-gray-800"><i className="fas fa-city text-2xl mb-1"></i><span className="text-[6px] font-bold tracking-widest uppercase">Architecture</span></div></div>
                        <div className="col-span-1 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition"><div className="flex flex-col items-center text-teal-500"><i className="fas fa-tree text-2xl mb-1 text-green-500"></i><span className="text-[7px] font-bold text-gray-500">cebaca</span></div></div>
                        <div className="col-span-1 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition"><div className="flex flex-col items-center text-[#2196f3]"><i className="fas fa-seedling text-pink-400 text-2xl mb-1"></i><span className="text-[8px] font-medium text-[#00bcd4] font-serif">Just Born</span></div></div>
                        <div className="col-span-1 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition"><div className="flex flex-col items-center text-gray-800"><i className="fas fa-lightbulb text-yellow-500 text-xl mb-1"></i><span className="text-[6px] font-black uppercase tracking-widest text-black">SPOT INTERIORS</span></div></div>
                        
                        <div className="col-span-1 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition"><span className="font-black text-[1.1rem] tracking-tighter">TONI&GUY</span></div>
                        <div className="col-span-2 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 gap-4 hover:shadow-md hover:border-[#d0a353]/30 transition"><div className="w-2 h-2 rounded-full bg-pink-500"></div><span className="text-gray-800 font-light text-2xl tracking-[0.3em]">w a r p</span></div>
                        <div className="col-span-1 h-[70px] bg-white rounded-lg border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-center p-2 hover:shadow-md hover:border-[#d0a353]/30 transition"><div className="flex flex-col items-center text-blue-700 text-center"><i className="fas fa-building text-green-500 text-lg mb-1"></i><span className="text-[6px] font-bold text-blue-900 leading-tight">SHREE CONSTRUCTION<br /><span className="font-normal text-blue-700 text-[4px]">BUILDERS & CONTRACTORS</span></span></div></div>
                    </div>
                </div>
            </div>
            
            
            <div className="mt-14 bg-white/80 backdrop-blur-md rounded-[1.25rem] p-4 lg:py-5 lg:px-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-[#d0a353]/20 flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 relative z-30">
                
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
                
                <div className="hidden lg:block w-[1px] h-12 bg-gray-200 mx-2"></div>
                
                
                <div className="flex-grow flex flex-col sm:flex-row items-center sm:items-start lg:items-center justify-between gap-4 pl-0 lg:pl-2">
                    <div className="text-center sm:text-left">
                        <div className="text-[0.65rem] font-bold text-gray-900 uppercase tracking-[0.1em] mb-1">LET'S BUILD SMARTER TOGETHER</div>
                        <div className="text-[0.65rem] text-gray-500 font-medium">Your vision, our technology - a smarter tomorrow.</div>
                    </div>
                    <a href="#" className="inline-flex items-center gap-3 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white px-6 py-2.5 rounded text-[0.65rem] font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition uppercase tracking-wider whitespace-nowrap shrink-0">
                        GET IN TOUCH <i className="fas fa-chevron-right text-[8px]"></i>
                    </a>
                </div>
            </div>
        </div>
    </section>

    
    <section className="py-24 bg-white relative">
        <div className="container relative z-10">
            <div className="text-center mb-16">
                <div
                    className="inline-flex items-center justify-center gap-3 text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4">
                    <span className="w-10 h-[1px] bg-[#d0a353] relative"><span
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-[#d0a353]"></span></span>
                    SOLUTIONS FOR EVERY SPACE
                    <span className="w-10 h-[1px] bg-[#d0a353] relative"><span
                            className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-[#d0a353]"></span></span>
                </div>
                <h2 className="text-3xl lg:text-4xl mb-4 font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                    <span className="text-gray-800">Smart Automation</span> <span
                        className="text-[#d0a353] font-serif tracking-wide">For Every Need</span>
                </h2>
                <p className="text-gray-500 text-sm max-w-md mx-auto">Explore our smart automation solutions designed
                    for<br />different spaces and industries.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <a href="#" className="relative w-full h-[140px] rounded-[1.25rem] border-[1.5px] border-[#d0a353]/30 shadow-[0_4px_20px_rgba(208,163,83,0.05)] bg-white overflow-hidden flex items-center hover:-translate-y-1 hover:shadow-md transition group">
                    <div className="w-[55%] pl-5 pr-2 py-4 flex flex-col justify-center z-10 bg-white h-full relative">
                        <div className="mb-1">
                            <div className="w-8 h-8 rounded-lg border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] mb-2 group-hover:bg-[#d0a353] group-hover:text-white transition">
                                <i className="fas fa-home text-sm"></i>
                            </div>
                            <h3 className="text-[0.95rem] font-bold text-gray-900 mb-1 leading-tight">Luxury Villa</h3>
                            <p className="text-[0.65rem] text-gray-500 leading-snug pr-2">Smart living with advanced automation and control.</p>
                        </div>
                        <div className="absolute bottom-4 -right-3 z-20 w-6 h-6 rounded-full bg-[#d0a353] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                            <i className="fas fa-arrow-right text-[10px]"></i>
                        </div>
                    </div>
                    <div className="w-[45%] h-full relative z-0 flex-shrink-0">
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <img src="images/auto_villa_1786093987554.png" className="w-full h-full object-cover" alt="Luxury Villa" />
                    </div>
                </a>

                
                <a href="#" className="relative w-full h-[140px] rounded-[1.25rem] border-[1.5px] border-[#d0a353]/30 shadow-[0_4px_20px_rgba(208,163,83,0.05)] bg-white overflow-hidden flex items-center hover:-translate-y-1 hover:shadow-md transition group">
                    <div className="w-[55%] pl-5 pr-2 py-4 flex flex-col justify-center z-10 bg-white h-full relative">
                        <div className="mb-1">
                            <div className="w-8 h-8 rounded-lg border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] mb-2 group-hover:bg-[#d0a353] group-hover:text-white transition">
                                <i className="far fa-building text-sm"></i>
                            </div>
                            <h3 className="text-[0.95rem] font-bold text-gray-900 mb-1 leading-tight">Apartment</h3>
                            <p className="text-[0.65rem] text-gray-500 leading-snug pr-2">Smart solutions for comfortable and convenient living.</p>
                        </div>
                        <div className="absolute bottom-4 -right-3 z-20 w-6 h-6 rounded-full bg-[#d0a353] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                            <i className="fas fa-arrow-right text-[10px]"></i>
                        </div>
                    </div>
                    <div className="w-[45%] h-full relative z-0 flex-shrink-0">
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <img src="images/auto_apartment_1786094001400.png" className="w-full h-full object-cover" alt="Apartment" />
                    </div>
                </a>

                
                <a href="#" className="relative w-full h-[140px] rounded-[1.25rem] border-[1.5px] border-[#d0a353]/30 shadow-[0_4px_20px_rgba(208,163,83,0.05)] bg-white overflow-hidden flex items-center hover:-translate-y-1 hover:shadow-md transition group">
                    <div className="w-[55%] pl-5 pr-2 py-4 flex flex-col justify-center z-10 bg-white h-full relative">
                        <div className="mb-1">
                            <div className="w-8 h-8 rounded-lg border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] mb-2 group-hover:bg-[#d0a353] group-hover:text-white transition">
                                <i className="fas fa-briefcase text-sm"></i>
                            </div>
                            <h3 className="text-[0.95rem] font-bold text-gray-900 mb-1 leading-tight">Office</h3>
                            <p className="text-[0.65rem] text-gray-500 leading-snug pr-2">Boost productivity with smart office automation.</p>
                        </div>
                        <div className="absolute bottom-4 -right-3 z-20 w-6 h-6 rounded-full bg-[#d0a353] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                            <i className="fas fa-arrow-right text-[10px]"></i>
                        </div>
                    </div>
                    <div className="w-[45%] h-full relative z-0 flex-shrink-0">
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <img src="images/auto_office_1786094016416.png" className="w-full h-full object-cover" alt="Office" />
                    </div>
                </a>

                
                <a href="#" className="relative w-full h-[140px] rounded-[1.25rem] border-[1.5px] border-[#d0a353]/30 shadow-[0_4px_20px_rgba(208,163,83,0.05)] bg-white overflow-hidden flex items-center hover:-translate-y-1 hover:shadow-md transition group">
                    <div className="w-[55%] pl-5 pr-2 py-4 flex flex-col justify-center z-10 bg-white h-full relative">
                        <div className="mb-1">
                            <div className="w-8 h-8 rounded-lg border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] mb-2 group-hover:bg-[#d0a353] group-hover:text-white transition">
                                <i className="far fa-hospital text-sm"></i>
                            </div>
                            <h3 className="text-[0.95rem] font-bold text-gray-900 mb-1 leading-tight">Hospital</h3>
                            <p className="text-[0.65rem] text-gray-500 leading-snug pr-2">Intelligent systems for better patient care and management.</p>
                        </div>
                        <div className="absolute bottom-4 -right-3 z-20 w-6 h-6 rounded-full bg-[#d0a353] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                            <i className="fas fa-arrow-right text-[10px]"></i>
                        </div>
                    </div>
                    <div className="w-[45%] h-full relative z-0 flex-shrink-0">
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <img src="images/auto_hospital_1786094034170.png" className="w-full h-full object-cover" alt="Hospital" />
                    </div>
                </a>

                
                <a href="#" className="relative w-full h-[140px] rounded-[1.25rem] border-[1.5px] border-[#d0a353]/30 shadow-[0_4px_20px_rgba(208,163,83,0.05)] bg-white overflow-hidden flex items-center hover:-translate-y-1 hover:shadow-md transition group">
                    <div className="w-[55%] pl-5 pr-2 py-4 flex flex-col justify-center z-10 bg-white h-full relative">
                        <div className="mb-1">
                            <div className="w-8 h-8 rounded-lg border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] mb-2 group-hover:bg-[#d0a353] group-hover:text-white transition">
                                <i className="fas fa-bed text-sm"></i>
                            </div>
                            <h3 className="text-[0.95rem] font-bold text-gray-900 mb-1 leading-tight">Hostel / PG</h3>
                            <p className="text-[0.65rem] text-gray-500 leading-snug pr-2">Smart & secure living for hostels and PG accommodations.</p>
                        </div>
                        <div className="absolute bottom-4 -right-3 z-20 w-6 h-6 rounded-full bg-[#d0a353] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                            <i className="fas fa-arrow-right text-[10px]"></i>
                        </div>
                    </div>
                    <div className="w-[45%] h-full relative z-0 flex-shrink-0">
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <img src="images/auto_hostel_1786094051526.png" className="w-full h-full object-cover" alt="Hostel / PG" />
                    </div>
                </a>

                
                <a href="#" className="relative w-full h-[140px] rounded-[1.25rem] border-[1.5px] border-[#d0a353]/30 shadow-[0_4px_20px_rgba(208,163,83,0.05)] bg-white overflow-hidden flex items-center hover:-translate-y-1 hover:shadow-md transition group">
                    <div className="w-[55%] pl-5 pr-2 py-4 flex flex-col justify-center z-10 bg-white h-full relative">
                        <div className="mb-1">
                            <div className="w-8 h-8 rounded-lg border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] mb-2 group-hover:bg-[#d0a353] group-hover:text-white transition">
                                <i className="fas fa-shopping-bag text-sm"></i>
                            </div>
                            <h3 className="text-[0.95rem] font-bold text-gray-900 mb-1 leading-tight">Shopping Mall</h3>
                            <p className="text-[0.65rem] text-gray-500 leading-snug pr-2">Enhance customer experience with smart technology.</p>
                        </div>
                        <div className="absolute bottom-4 -right-3 z-20 w-6 h-6 rounded-full bg-[#d0a353] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                            <i className="fas fa-arrow-right text-[10px]"></i>
                        </div>
                    </div>
                    <div className="w-[45%] h-full relative z-0 flex-shrink-0">
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <img src="images/hero.png" className="w-full h-full object-cover" alt="Shopping Mall" />
                    </div>
                </a>

                
                <a href="#" className="relative w-full h-[140px] rounded-[1.25rem] border-[1.5px] border-[#d0a353]/30 shadow-[0_4px_20px_rgba(208,163,83,0.05)] bg-white overflow-hidden flex items-center hover:-translate-y-1 hover:shadow-md transition group">
                    <div className="w-[55%] pl-5 pr-2 py-4 flex flex-col justify-center z-10 bg-white h-full relative">
                        <div className="mb-1">
                            <div className="w-8 h-8 rounded-lg border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] mb-2 group-hover:bg-[#d0a353] group-hover:text-white transition">
                                <i className="fas fa-warehouse text-sm"></i>
                            </div>
                            <h3 className="text-[0.95rem] font-bold text-gray-900 mb-1 leading-tight">Warehouse</h3>
                            <p className="text-[0.65rem] text-gray-500 leading-snug pr-2">Automate operations and improve overall efficiency.</p>
                        </div>
                        <div className="absolute bottom-4 -right-3 z-20 w-6 h-6 rounded-full bg-[#d0a353] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                            <i className="fas fa-arrow-right text-[10px]"></i>
                        </div>
                    </div>
                    <div className="w-[45%] h-full relative z-0 flex-shrink-0">
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <img src="images/auto_office_1786094016416.png" className="w-full h-full object-cover" alt="Warehouse" />
                    </div>
                </a>

                
                <a href="#" className="relative w-full h-[140px] rounded-[1.25rem] border-[1.5px] border-[#d0a353]/30 shadow-[0_4px_20px_rgba(208,163,83,0.05)] bg-white overflow-hidden flex items-center hover:-translate-y-1 hover:shadow-md transition group">
                    <div className="w-[55%] pl-5 pr-2 py-4 flex flex-col justify-center z-10 bg-white h-full relative">
                        <div className="mb-1">
                            <div className="w-8 h-8 rounded-lg border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] mb-2 group-hover:bg-[#d0a353] group-hover:text-white transition">
                                <i className="fas fa-seedling text-sm"></i>
                            </div>
                            <h3 className="text-[0.95rem] font-bold text-gray-900 mb-1 leading-tight">Farmhouse</h3>
                            <p className="text-[0.65rem] text-gray-500 leading-snug pr-2">Smart automation for a greener and safer lifestyle.</p>
                        </div>
                        <div className="absolute bottom-4 -right-3 z-20 w-6 h-6 rounded-full bg-[#d0a353] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                            <i className="fas fa-arrow-right text-[10px]"></i>
                        </div>
                    </div>
                    <div className="w-[45%] h-full relative z-0 flex-shrink-0">
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <img src="images/hero_pool_1786093934613.png" className="w-full h-full object-cover" alt="Farmhouse" />
                    </div>
                </a>

                
                <a href="#" className="relative w-full h-[140px] rounded-[1.25rem] border-[1.5px] border-[#d0a353]/30 shadow-[0_4px_20px_rgba(208,163,83,0.05)] bg-white overflow-hidden flex items-center hover:-translate-y-1 hover:shadow-md transition group">
                    <div className="w-[55%] pl-5 pr-2 py-4 flex flex-col justify-center z-10 bg-white h-full relative">
                        <div className="mb-1">
                            <div className="w-8 h-8 rounded-lg border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] mb-2 group-hover:bg-[#d0a353] group-hover:text-white transition">
                                <i className="fas fa-concierge-bell text-sm"></i>
                            </div>
                            <h3 className="text-[0.95rem] font-bold text-gray-900 mb-1 leading-tight">Hotel / Resort</h3>
                            <p className="text-[0.65rem] text-gray-500 leading-snug pr-2">Deliver luxury and comfort with smart automation.</p>
                        </div>
                        <div className="absolute bottom-4 -right-3 z-20 w-6 h-6 rounded-full bg-[#d0a353] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                            <i className="fas fa-arrow-right text-[10px]"></i>
                        </div>
                    </div>
                    <div className="w-[45%] h-full relative z-0 flex-shrink-0">
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <img src="images/smart_home_villa_1786093285055.png" className="w-full h-full object-cover" alt="Hotel / Resort" />
                    </div>
                </a>

                {/* Software / Web / App Dev */}
                <a href="#" className="relative w-full h-[140px] rounded-[1.25rem] border-[1.5px] border-[#d0a353]/30 shadow-[0_4px_20px_rgba(208,163,83,0.05)] bg-white overflow-hidden flex items-center hover:-translate-y-1 hover:shadow-md transition group">
                    <div className="w-[55%] pl-5 pr-2 py-4 flex flex-col justify-center z-10 bg-white h-full relative">
                        <div className="mb-1">
                            <div className="w-8 h-8 rounded-lg border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] mb-2 group-hover:bg-[#d0a353] group-hover:text-white transition">
                                <i className="fas fa-laptop-code text-sm"></i>
                            </div>
                            <h3 className="text-[0.95rem] font-bold text-gray-900 mb-1 leading-tight">Software / App Dev</h3>
                            <p className="text-[0.65rem] text-gray-500 leading-snug pr-2">Custom software, websites, and application development.</p>
                        </div>
                        <div className="absolute bottom-4 -right-3 z-20 w-6 h-6 rounded-full bg-[#d0a353] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                            <i className="fas fa-arrow-right text-[10px]"></i>
                        </div>
                    </div>
                    <div className="w-[45%] h-full relative z-0 flex-shrink-0">
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <img src="https://picsum.photos/seed/software/400/300" className="w-full h-full object-cover" alt="Software / App Dev" />
                    </div>
                </a>

                {/* Jewellery Shop */}
                <a href="#" className="relative w-full h-[140px] rounded-[1.25rem] border-[1.5px] border-[#d0a353]/30 shadow-[0_4px_20px_rgba(208,163,83,0.05)] bg-white overflow-hidden flex items-center hover:-translate-y-1 hover:shadow-md transition group">
                    <div className="w-[55%] pl-5 pr-2 py-4 flex flex-col justify-center z-10 bg-white h-full relative">
                        <div className="mb-1">
                            <div className="w-8 h-8 rounded-lg border border-[#d0a353]/40 flex items-center justify-center text-[#d0a353] mb-2 group-hover:bg-[#d0a353] group-hover:text-white transition">
                                <i className="fas fa-gem text-sm"></i>
                            </div>
                            <h3 className="text-[0.95rem] font-bold text-gray-900 mb-1 leading-tight">Jewellery Shop</h3>
                            <p className="text-[0.65rem] text-gray-500 leading-snug pr-2">Advanced security and smart automation for premium retail.</p>
                        </div>
                        <div className="absolute bottom-4 -right-3 z-20 w-6 h-6 rounded-full bg-[#d0a353] text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition">
                            <i className="fas fa-arrow-right text-[10px]"></i>
                        </div>
                    </div>
                    <div className="w-[45%] h-full relative z-0 flex-shrink-0">
                        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <img src="https://picsum.photos/seed/jewellery/400/300" className="w-full h-full object-cover" alt="Jewellery Shop" />
                    </div>
                </a>
            </div>
        </div>
    </section>

    
    <section className="py-10 bg-[#fdfcf9]">
        <div className="container max-w-[1400px] text-center">
            <div className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.15em] uppercase mb-2">OUR COMPLETED PROJECTS</div>
            <h2 className="text-3xl lg:text-[2.5rem] mb-2 font-bold text-[#1a202c]" style={{ fontFamily: "var(--font-heading)" }}>
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
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Luxury Villa</h3>
                        
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
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Hill View Villa</h3>
                        
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
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Premium Residence</h3>
                        
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
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Beachside Villa</h3>
                        
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
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Luxury Villa</h3>
                        
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
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Hill View Villa</h3>
                        
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
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Premium Residence</h3>
                        
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
                        <h3 className="font-bold text-lg text-gray-900 mb-4">Beachside Villa</h3>
                        
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

    
    <section className="py-20 bg-[#fdfcf9]">
        <div className="container max-w-[1400px]">
            <div className="text-center mb-12">
                <div className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.15em] uppercase mb-4">CHOOSE YOUR PERFECT SOLUTION</div>
                <h2 className="text-3xl lg:text-[2.5rem] mb-4 font-bold text-[#1a202c]" style={{ fontFamily: "var(--font-heading)" }}>
                    Smart Home <span className="text-[#1a202c] font-serif">Automation Packages</span>
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
                                <h3 className="font-black text-xl text-gray-900 tracking-wide">ESSENTIAL</h3>
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
                    <div className="bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white text-center py-2 text-[0.65rem] font-bold tracking-[0.15em] uppercase">
                        MOST POPULAR
                    </div>
                    <div className="p-8 pb-6 flex-grow">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-16 rounded-full bg-[#1a202c] text-white flex items-center justify-center text-3xl shadow-lg">
                                <i className="far fa-gem"></i>
                            </div>
                            <div>
                                <h3 className="font-black text-xl text-gray-900 tracking-wide">PREMIUM</h3>
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
                                <h3 className="font-black text-xl text-gray-900 tracking-wide">LUXURY VILLA</h3>
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

    
    <section className="relative py-16 bg-[#0a0f18] overflow-hidden">
        
        <div className="absolute inset-0 z-0">
            <img src="images/hero_pool_1786093934613.png" alt="Living Room Background" className="w-full h-full object-cover opacity-20 filter grayscale blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f18]/90 via-[#0a0f18]/80 to-[#0a0f18]"></div>
        </div>

        <div className="container relative z-10 max-w-[1400px]">
            <div className="text-center mb-12">
                <div className="text-[0.6rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-3">EXPERIENCE INTELLIGENT LIVING</div>
                <h2 className="text-3xl lg:text-4xl text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
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

