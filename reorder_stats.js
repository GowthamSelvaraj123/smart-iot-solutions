const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const targetContainerOpen = '<div className="mt-14 bg-white/80 backdrop-blur-md rounded-[1.25rem] p-4 lg:py-5 lg:px-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-[#d0a353]/20 flex flex-wrap lg:flex-nowrap items-center justify-between gap-6 relative z-30">';

// Block 1: the 4 stats
const block1Regex = /<div className="flex items-center gap-3">[\s\S]*?<div className="text-\[0\.65rem\] text-gray-500 font-medium whitespace-nowrap">South India<\/div>\s*<\/div>\s*<\/div>/;
// Block 2: separator
const block2Regex = /<div className="hidden lg:block w-\[1px\] h-12 bg-gray-200 mx-2"><\/div>/;
// Block 3: CTA section
const block3Regex = /<div className="flex-grow flex flex-col sm:flex-row items-center sm:items-start lg:items-center justify-between gap-4 pl-0 lg:pl-2">[\s\S]*?<\/div>\s*<\/a>\s*<\/div>/;

const b1Match = content.match(block1Regex);
const b2Match = content.match(block2Regex);
const b3Match = content.match(block3Regex);

if (b1Match && b2Match && b3Match) {
    const statsBlock = b1Match[0].trim();
    const separator = b2Match[0].trim();
    const ctaBlock = b3Match[0].trim().replace("pl-0 lg:pl-2", "pr-0 lg:pr-2"); // switch padding to right

    const fullOldRegex = new RegExp(
        targetContainerOpen.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + 
        "[\\s\\S]*?" + 
        b3Match[0].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    );
    
    const newContentStr = targetContainerOpen + '\\n                \\n                ' + ctaBlock + '\\n\\n                ' + separator + '\\n                \\n                ' + statsBlock;

    content = content.replace(fullOldRegex, newContentStr);
    
    fs.writeFileSync('src/app/page.tsx', content);
    console.log("Stats bar reordered successfully");
} else {
    console.log("Could not find blocks. b1:", !!b1Match, "b2:", !!b2Match, "b3:", !!b3Match);
}
