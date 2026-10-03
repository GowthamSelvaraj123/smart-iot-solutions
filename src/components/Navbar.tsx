"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar py-2 relative">
      <div className="w-full px-4 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/smart-iot-solutions.png"
            alt="Smart IoT Solution"
            className="w-[150px] md:w-[180px] h-[55px] md:h-[65px] object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`nav-link ${pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`nav-link ${pathname === "/products" ? "active" : ""}`}
          >
            Products
          </Link>
          <Link
            href="/services"
            className={`nav-link ${pathname === "/services" ? "active" : ""}`}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className={`nav-link ${pathname === "/projects" ? "active" : ""}`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`nav-link ${pathname === "/about" ? "active" : ""}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Action */}
        <div className="hidden md:flex items-center gap-3">
          {/* Phone Call Button */}
          <a
            href="tel:+919626904991"
            className="flex items-center gap-2 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white px-5 py-2.5 rounded font-medium hover:shadow-[0_0_20px_rgba(207,168,94,0.4)] hover:-translate-y-0.5 transition-all duration-200 group"
            title="Call Us Now"
          >
            <i className="fas fa-phone-alt fa-flip-horizontal text-sm group-hover:animate-bounce"></i>
            <span className="text-sm font-semibold">Call Now</span>
          </a>
          {/* WhatsApp / Schedule Consultation Button */}
          <a
            href="https://wa.me/919626904991"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold px-6 py-2.5 flex items-center gap-2 font-medium"
          >
            <i className="fab fa-whatsapp text-xl"></i> Schedule Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="cursor-pointer mobile-menu-btn text-gray-800 text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col py-2 px-6 z-50">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-3 border-b border-gray-50 ${pathname === "/" ? "text-[#cfa85e] font-bold" : "text-gray-800 font-medium"}`}
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-3 border-b border-gray-50 ${pathname === "/products" ? "text-[#cfa85e] font-bold" : "text-gray-800 font-medium"}`}
          >
            Products
          </Link>
          <Link
            href="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-3 border-b border-gray-50 ${pathname === "/services" ? "text-[#cfa85e] font-bold" : "text-gray-800 font-medium"}`}
          >
            Services
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-3 border-b border-gray-50 ${pathname === "/projects" ? "text-[#cfa85e] font-bold" : "text-gray-800 font-medium"}`}
          >
            Projects
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-3 border-b border-gray-50 ${pathname === "/about" ? "text-[#cfa85e] font-bold" : "text-gray-800 font-medium"}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-3 ${pathname === "/contact" ? "text-[#cfa85e] font-bold" : "text-gray-800 font-medium"}`}
          >
            Contact
          </Link>
          <div className="mt-4 mb-4 flex flex-col gap-3">
            {/* Phone Call Button - Mobile */}
            <a
              href="tel:+919626904991"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-white px-6 py-2.5 rounded font-medium w-full"
            >
              <i className="fas fa-phone-alt fa-flip-horizontal text-sm"></i>
              <span className="font-semibold">Call Now</span>
            </a>
            <a
              href="https://wa.me/919626904991"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-outline-gold px-6 py-2.5 flex items-center justify-center gap-2 font-medium w-full"
            >
              <i className="fab fa-whatsapp text-xl"></i> Schedule Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
