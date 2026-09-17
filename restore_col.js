const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const targetStr = '<div className="flex flex-col gap-4 overflow-hidden pb-4" style={{ WebkitMaskImage:';
const missingSection = `                </div>
                
                
                <div className="lg:col-span-7 pt-0">
                    <div className="flex items-center gap-4 mb-10">
                        <span className="flex-grow h-[1px] bg-[#d0a353]/30 relative">
                            <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#d0a353] rotate-45"></span>
                        </span>
                        <span className="text-[0.65rem] font-bold text-[#d0a353] tracking-[0.15em] uppercase font-nav">OUR VALUED PARTNERS & CLIENTS</span>
                        <span className="w-12 lg:w-24 h-[1px] bg-[#d0a353]/30 relative">
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#d0a353] rotate-45"></span>
                        </span>
                    </div>
                    
                    
                    `;

const idx = content.indexOf(targetStr);
if (idx !== -1) {
    content = content.slice(0, idx) + missingSection + content.slice(idx);
    fs.writeFileSync('src/app/page.tsx', content);
    console.log("Restored missing right column");
} else {
    console.log("Could not find targetStr");
}
