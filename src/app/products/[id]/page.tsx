import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.id === params.id);
  if (!product) return { title: "Product Not Found" };
  
  return {
    title: `${product.name} | Smart IoT Solutions`,
    description: product.particulars || "View detailed specifications for this product.",
  };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <div className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
            <Link href="/" className="text-gray-400 hover:text-gray-600 transition">
              HOME
            </Link>
            <span className="text-gray-400">/</span> 
            <Link href="/products" className="text-gray-400 hover:text-gray-600 transition">
              PRODUCTS
            </Link>
            <span className="text-gray-400">/</span> 
            <span className="text-gray-800">{product.code}</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <div className="md:w-5/12 flex items-center justify-center bg-gray-50 rounded-xl p-8 border border-gray-100">
              <img 
                src={product.image?.startsWith('images/') ? `/${product.image}` : product.image} 
                alt={product.name} 
                className="w-full h-auto object-contain max-h-[400px] drop-shadow-xl" 
              />
            </div>
            <div className="md:w-7/12 flex flex-col justify-center">
              <div className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 w-fit">
                {product.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.code}</h1>
              <h2 className="text-xl md:text-2xl text-[#d0a353] font-heading mb-6">{product.name}</h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">{product.particulars}</p>
              
              <div className="flex gap-4 mt-auto">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-[#d0a353] text-white font-bold rounded shadow-md shadow-[#d0a353]/30 hover:bg-[#b88c42] hover:-translate-y-0.5 transition duration-300">
                  Request a Quote
                </Link>
                <Link href="/products" className="inline-flex items-center justify-center px-8 py-3 bg-gray-100 text-gray-800 font-bold rounded hover:bg-gray-200 hover:-translate-y-0.5 transition duration-300">
                  Back to Catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.specs && (
        <section className="py-20 bg-white">
          <div className="container max-w-5xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 border-b border-gray-200 pb-4">Detailed Specifications</h3>
            
            <div className="space-y-10">
              {Object.entries(product.specs).map(([categoryName, specsObj]) => (
                <div key={categoryName} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
                    <h4 className="font-bold text-lg text-gray-800">{categoryName}</h4>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {Object.entries(specsObj).map(([key, value]) => (
                      <div key={key} className="flex flex-col sm:flex-row px-6 py-4 hover:bg-gray-50 transition">
                        <div className="sm:w-1/3 text-sm font-semibold text-gray-700 mb-1 sm:mb-0 pr-4">{key}</div>
                        <div className="sm:w-2/3 text-sm text-gray-600">{value as string}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
