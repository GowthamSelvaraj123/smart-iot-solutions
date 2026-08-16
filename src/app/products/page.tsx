import { products } from "@/data/products";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Catalog | Smart IoT Solutions",
  description: "Browse our extensive catalog of Swing Gate Operators and Boom Barriers.",
};

export default function ProductsPage() {
  const categories = [
    "Swing Gate Operators", 
    "Boom Barriers", 
    "Sliding Gate Operators", 
    "Sliding Glass Door Operators",
    "Switches & Controls",
    "Smart Curtains",
    "Lighting",
    "Smart Locks & Security",
    "Gateways & Controllers",
    "Accessories",
    "Networking & Routers"
  ] as const;

  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#121417] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80"
            alt="Products Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#121417] via-[#121417]/90 to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <div className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <Link href="/" className="text-gray-400 hover:text-white transition">
              HOME
            </Link>
            <span className="text-gray-600">/</span> PRODUCTS
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Product <span className="text-[#d0a353] font-serif">Catalog.</span>
          </h1>
          <p className="text-gray-300 max-w-xl text-sm leading-relaxed">
            Browse our comprehensive range of high-quality Swing Gate Operators and Boom Barriers, designed for security and ease of access.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container">
          <div className="flex flex-col md:flex-row bg-[#fdfcf9] rounded-2xl overflow-hidden border border-[#d0a353]/20 shadow-lg">
            <div className="md:w-1/2 relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
              <div className="absolute top-4 left-4 bg-red-600 text-white text-[0.65rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
                Featured Product
              </div>
              <img src="https://placehold.co/600x400/fdfcf9/d0a353?text=LR300G-P" alt="LR300G-P Cloud Managed Router" className="w-full max-w-md object-contain drop-shadow-xl rounded-lg" />
            </div>
            <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">LR300G-P</h2>
              <h3 className="text-xl text-[#d0a353] font-serif mb-6">10-Port Cloud Managed Router with 110W PoE Budget</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-gray-600">
                  <i className="fas fa-check text-[#d0a353] mt-1 mr-3"></i>
                  <span>10 Gigabit Ports (6 LAN, 1 WAN, 3 LAN/WAN)</span>
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <i className="fas fa-check text-[#d0a353] mt-1 mr-3"></i>
                  <span>110W PoE Budget for driving access points and cameras</span>
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <i className="fas fa-check text-[#d0a353] mt-1 mr-3"></i>
                  <span>Supports up to 350 concurrent clients with 1.5 Gbps throughput</span>
                </li>
                <li className="flex items-start text-sm text-gray-600">
                  <i className="fas fa-check text-[#d0a353] mt-1 mr-3"></i>
                  <span>Full Cloud Management with App & Web support</span>
                </li>
              </ul>
              
              <div className="mt-auto">
                <Link href="/products/lr300g-p" className="inline-flex items-center justify-center px-6 py-3 bg-[#121417] text-white text-sm font-semibold rounded hover:bg-[#d0a353] transition duration-300">
                  View Full Specifications <i className="fas fa-arrow-right ml-2 text-xs"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f9f8f4] relative">
        <div className="container">
          {categories.map((category) => {
            const categoryProducts = products.filter(
              (p) => p.category === category
            );

            return (
              <div key={category} className="mb-20">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 border-l-4 border-[#d0a353] pl-4">
                  {category}
                </h2>
                <p className="text-sm text-gray-500 mb-8 pl-5 max-w-2xl">
                  Explore our premium {category.toLowerCase()} with advanced features and top-tier reliability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pl-5">
                  {categoryProducts.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-xl hover:border-[#d0a353]/30 transition group flex flex-col h-full"
                    >
                      <div className="w-full h-40 bg-gray-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                          />
                        ) : (
                          <i className="fas fa-box text-gray-300 text-5xl group-hover:scale-110 transition duration-500"></i>
                        )}
                      </div>
                      <div className="text-[10px] font-bold text-[#d0a353] tracking-widest uppercase mb-2">
                        {product.code}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex-grow">
                        {product.name}
                      </h3>
                      <div className="text-xs text-gray-500 mb-6 bg-gray-50 p-3 rounded border border-gray-100">
                        <strong>Includes:</strong> {product.particulars}
                      </div>
                      <Link
                        href="/contact"
                        className="block text-center border border-[#d0a353] text-[#d0a353] rounded py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#d0a353] hover:text-white transition mt-auto"
                      >
                        Inquire Now
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

