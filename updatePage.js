const fs = require('fs');

let content = fs.readFileSync('src/app/products/page.tsx', 'utf8');

// Add category
content = content.replace(/"Accessories"/, '"Accessories",\n    "Networking & Routers"');

// Insert featured product
const featuredSection = `
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container">
          <div className="flex flex-col md:flex-row bg-[#fdfcf9] rounded-2xl overflow-hidden border border-[#d0a353]/20 shadow-lg">
            <div className="md:w-1/2 relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
              <div className="absolute top-4 left-4 bg-red-600 text-white text-[0.65rem] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
                Featured Product
              </div>
              <img src="images/LR300G-P.png" alt="LR300G-P Cloud Managed Router" className="w-full max-w-md object-contain drop-shadow-xl" />
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
`;

content = content.replace(/<\/section>\s*<section className="py-24 bg-\[#f9f8f4\] relative">/, '</section>\n' + featuredSection + '\n      <section className="py-24 bg-[#f9f8f4] relative">');

fs.writeFileSync('src/app/products/page.tsx', content);
console.log('Updated page.tsx with featured section');
