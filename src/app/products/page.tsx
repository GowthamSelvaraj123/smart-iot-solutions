"use client";

import { useState } from "react";
import { products } from "@/data/products";
import Link from "next/link";

export default function ProductsPage() {
  const categories = [
    "All Products",
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

  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");

  const filteredProducts = selectedCategory === "All Products" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
      {/* Premium Hero Section similar to Home Page */}
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
            <span className="text-[#d0a353]">/</span> PRODUCTS
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d0a353] via-[#fdf0a6] to-[#ca9740]">Collection.</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-sm leading-relaxed">
            Browse our comprehensive range of high-quality automation hardware, carefully selected for maximum security, reliability, and elegant design.
          </p>
        </div>
      </section>

      {/* Main E-commerce Layout */}
      <section className="py-12 bg-[#fdfcf9]">
        <div className="container max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar / Filters */}
            <aside className="w-full lg:w-[320px] shrink-0">
              <div className="bg-white rounded-xl shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-gray-100 p-6 sticky top-24">
                <h3 className="font-heading font-bold text-lg text-gray-900 mb-6 pb-4 border-b border-gray-100">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map(category => (
                    <li key={category}>
                      <button 
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200 font-medium ${
                          selectedCategory === category 
                            ? "bg-[#d0a353]/10 text-[#d0a353] border border-[#d0a353]/20 font-bold" 
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-transparent"
                        }`}
                      >
                        {category}
                        {category !== "All Products" && (
                          <span className="float-right text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                            {products.filter(p => p.category === category).length}
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-10 p-5 bg-gradient-to-br from-[#0c121e] to-[#1a202c] rounded-xl text-center border border-[#d0a353]/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#d0a353]/10 rounded-full blur-xl pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
                  <h4 className="text-white font-heading font-bold text-base mb-2 relative z-10">Need Expert Advice?</h4>
                  <p className="text-gray-400 text-xs mb-4 relative z-10">Let us help you choose the right automation products.</p>
                  <a href="tel:+919626904991" className="inline-block w-full bg-gradient-to-r from-[#ca9740] to-[#dfb45e] text-[#0c121e] py-2 rounded text-xs font-bold shadow-md hover:shadow-lg transition relative z-10">
                    <i className="fas fa-phone-alt mr-2"></i> CONTACT SALES
                  </a>
                </div>
              </div>
            </aside>
            
            {/* Product Grid */}
            <main className="w-full lg:flex-1 min-w-0">
              
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 font-heading">
                  {selectedCategory}
                </h2>
                <div className="text-sm text-gray-500 font-medium">
                  Showing <span className="text-gray-900 font-bold">{filteredProducts.length}</span> products
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-gradient-to-r from-[#ca9740] via-[#fdf0a6] to-[#ca9740] p-[1.5px] rounded-[1.1rem] hover:shadow-[0_20px_50px_rgba(208,163,83,0.3)] transition-all duration-500 transform hover:-translate-y-1 h-full group/wrapper">
                    <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full relative group">
                      
                      {/* Image Area */}
                      <div className="w-full aspect-[4/3] bg-[#f9f8f4] relative flex items-center justify-center border-b border-gray-100 overflow-hidden">
                        {product.isFeatured && (
                          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-[0.6rem] font-bold px-3 py-1 rounded-full shadow-lg z-10 uppercase tracking-widest">
                            Featured
                          </div>
                        )}
                        
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#0c121e] text-[0.6rem] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-sm border border-gray-200/50 z-20">
                          {product.code}
                        </div>

                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                          />
                        ) : (
                          <i className="fas fa-box text-gray-300 text-5xl group-hover:scale-105 transition-transform duration-500"></i>
                        )}
                      </div>
                      
                      {/* Content Area */}
                      <div className="p-5 flex flex-col flex-grow relative bg-white">
                        
                        <div className="flex justify-between items-start gap-3 mb-4 flex-grow">
                          <h3 className="text-[0.95rem] font-bold text-[#0c121e] leading-snug group-hover:text-[#d0a353] transition-colors truncate pt-1" style={{ fontFamily: "var(--font-heading)" }}>
                            {product.name}
                          </h3>
                          
                          <div className="relative group/tooltip shrink-0 z-20">
                              <div className="cursor-help bg-[#fdfcf9] w-7 h-7 rounded-full flex items-center justify-center border border-[#d0a353]/30 shadow-sm group-hover/tooltip:bg-[#d0a353] group-hover/tooltip:text-white transition-colors text-[#d0a353]">
                                <i className="fas fa-info text-[10px] transition-colors"></i>
                              </div>
                              
                              <div className="absolute bottom-full right-0 mb-2 w-56 p-3 bg-[#0c121e] text-white text-[0.7rem] leading-relaxed rounded-lg shadow-xl opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10">
                                <div className="font-bold text-[#d0a353] mb-1 uppercase tracking-widest text-[0.6rem]">Specifications</div>
                                {product.particulars || "Standard configuration. Contact us for detailed specifications."}
                                <div className="absolute top-full right-2 border-4 border-transparent border-t-[#0c121e]"></div>
                              </div>
                          </div>
                        </div>
                        
                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                          <div className="flex flex-col min-w-0">
                            <span className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Price</span>
                            <span className="text-[#0c121e] font-bold text-[0.8rem] truncate">Quote Req.</span>
                          </div>
                          <Link
                            href={`/contact?product=${product.code}`}
                            className="shrink-0 bg-gradient-to-r from-[#ca9740] to-[#dfb45e] hover:from-[#b58635] hover:to-[#ca9740] text-[#0c121e] text-[0.65rem] font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all shadow-[0_4px_10px_rgba(208,163,83,0.3)] hover:shadow-[0_6px_15px_rgba(208,163,83,0.4)] hover:-translate-y-0.5 flex items-center gap-1.5"
                          >
                            Request <i className="fas fa-arrow-right text-[0.5rem]"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
                  <i className="fas fa-box-open text-gray-300 text-6xl mb-4"></i>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-500">We don't have any products in this category yet.</p>
                </div>
              )}
            </main>
            
          </div>
        </div>
      </section>
    </>
  );
}
