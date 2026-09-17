import Link from "next/link";

export default function Footer() {
  return (
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
        <div className="container flex flex-wrap justify-between items-center text-[0.65rem] text-gray-400" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
        <div>&copy; 2024 Smart Solution IoT. All Rights Reserved.</div>
        <div className="flex items-center justify-center gap-6 my-3 lg:my-0">
          <Link href="#" className="hover:text-white">
            Privacy Policy
          </Link>
          <span className="text-gray-700">|</span>
          <Link href="#" className="hover:text-white">
            Terms & Conditions
          </Link>
          <span className="text-gray-700">|</span>
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
  );
}
