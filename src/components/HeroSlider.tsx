"use client";

import { useState, useEffect } from "react";

const cardsData = [
  { img: "images/hero_gate_1786093948118.png", title1: "Gate", title2: "Automation" },
  { img: "images/auto_office_1786094016416.png", title1: "Digital", title2: "Door Lock" },
  { img: "images/auto_apartment_1786094001400.png", title1: "Video Phone", title2: "Door Bell" },
  { img: "images/auto_villa_1786093987554.png", title1: "Motorised", title2: "Curtain / Blinds" },
  { img: "images/hero_lighting_1786093923075.png", title1: "Light / Fan", title2: "Automation" },
  { img: "images/auto_apartment_1786094001400.png", title1: "AC / TV", title2: "Automation" },
  { img: "images/auto_office_1786094016416.png", title1: "Temperature", title2: "Controller" },
  { img: "images/hero_gate_1786093948118.png", title1: "Glass Door", title2: "Automation" },
  { img: "images/hero_lighting_1786093923075.png", title1: "Step Light", title2: "Automation" },
  { img: "images/auto_villa_1786093987554.png", title1: "Mini", title2: "Theater" },
  { img: "images/hero_pool_1786093934613.png", title1: "Water Level", title2: "Indication" },
  { img: "images/auto_office_1786094016416.png", title1: "Gas Leak", title2: "System" },
  { img: "images/hero_gate_1786093948118.png", title1: "Digital Attendance", title2: "Device / Access lock" },
  { img: "images/hero_gate_1786093948118.png", title1: "Boom", title2: "Barrier" },
  { img: "images/auto_office_1786094016416.png", title1: "Burglar", title2: "Alarm System" },
  { img: "images/hero_gate_1786093948118.png", title1: "Bio Metric / Face Recognition", title2: "Access Controller" },
  { img: "images/hero_gate_1786093948118.png", title1: "Motorised", title2: "Shutter" },
  { img: "images/hero_lighting_1786093923075.png", title1: "Sky", title2: "Lighting" },
  { img: "images/auto_apartment_1786094001400.png", title1: "Timer", title2: "Function" },
  { img: "images/auto_office_1786094016416.png", title1: "Smoke / Fire", title2: "Alarm" },
  { img: "images/auto_apartment_1786094001400.png", title1: "Conference Hall", title2: "Setup" },
  { img: "images/auto_office_1786094016416.png", title1: "Theft", title2: "Control" },
  { img: "images/hero_lighting_1786093923075.png", title1: "Announcement", title2: "Setup" },
  { img: "images/auto_office_1786094016416.png", title1: "Visitor / Maintenance", title2: "Record Application" },
  { img: "images/auto_villa_1786093987554.png", title1: "Community", title2: "Hall" },
  { img: "images/hero_gate_1786093948118.png", title1: "UHF", title2: "READER" },
  { img: "images/hero_gate_1786093948118.png", title1: "UHF", title2: "TAG" },
  { img: "images/hero_gate_1786093948118.png", title1: "FLAP", title2: "BARRIERS" },
  { img: "images/hero_gate_1786093948118.png", title1: "TURNSTILE", title2: "SYSTEM" },
  { img: "images/hero_gate_1786093948118.png", title1: "SWING", title2: "BARRIER" },
  { img: "images/auto_office_1786094016416.png", title1: "TICKET VENDING", title2: "MACHINE" }
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % cardsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const getCardClass = (index: number) => {
    const total = cardsData.length;
    const leftIndex = (activeIndex - 1 + total) % total;
    const rightIndex = (activeIndex + 1) % total;

    if (index === activeIndex) return "carousel-card-center";
    if (index === leftIndex) return "carousel-card-left";
    if (index === rightIndex) return "carousel-card-right";
    return "carousel-card-hidden";
  };

  const nextSlide = () => setActiveIndex((current) => (current + 1) % cardsData.length);
  const prevSlide = () => setActiveIndex((current) => (current - 1 + cardsData.length) % cardsData.length);

  const getVisibleDots = () => {
    const total = cardsData.length;
    const maxDots = 7;
    if (total <= maxDots) return Array.from({ length: total }, (_, i) => i);
    
    let start = activeIndex - Math.floor(maxDots / 2);
    let end = activeIndex + Math.floor(maxDots / 2);
    
    if (start < 0) {
      end += Math.abs(start);
      start = 0;
    }
    
    if (end >= total) {
      start -= (end - total + 1);
      end = total - 1;
    }
    
    return Array.from({ length: maxDots }, (_, i) => start + i);
  };

  return (
    <>
      <div className="relative w-full max-w-3xl mt-8 mb-4 flex items-center justify-center h-[350px]">
        <button 
          onClick={prevSlide}
          className="absolute -left-6 z-30 text-gold text-2xl hover:scale-110 transition cursor-pointer"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        <div 
          id="heroCardsContainer" 
          className="relative w-full h-full flex items-center" 
          onMouseEnter={() => setIsPaused(true)} 
          onMouseLeave={() => setIsPaused(false)}
        >
          {cardsData.map((card, index) => (
            <div key={index} className={`carousel-card ${getCardClass(index)}`}>
              <img src={card.img} alt={`${card.title1} ${card.title2}`} className="w-full h-48 object-cover rounded-lg mb-4" />
              <div className="text-center">
                <div className="text-lg font-bold text-gray-900 leading-tight mb-1">{card.title1}</div>
                <div className="text-gold font-bold text-sm tracking-wide">{card.title2}</div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="absolute -right-6 z-30 text-gold text-2xl hover:scale-110 transition cursor-pointer"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        {getVisibleDots().map((i) => (
          <button 
            key={i} 
            onClick={() => setActiveIndex(i)}
            className={`cursor-pointer rounded-full transition-all ${
              i === activeIndex ? 'w-3 h-3 bg-gold' : 'w-2.5 h-2.5 bg-[#e3d1a8]'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          ></button>
        ))}
        
        <button 
          onClick={() => setIsPaused(!isPaused)} 
          className="flex items-center justify-center gap-1 text-gold text-[10px] ml-2 w-6 h-6 rounded-full hover:bg-gold/10 transition-colors"
          aria-label={isPaused ? "Play" : "Pause"}
        >
          <i className={`fas ${isPaused ? 'fa-play pl-0.5' : 'fa-pause'}`}></i>
        </button>
      </div>
    </>
  );
}
