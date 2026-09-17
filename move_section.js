const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');
const lines = content.split('\\n');

const sliderLineIndex = lines.findIndex(line => line.includes('<SolutionsSlider solutions={solutions} />'));
if (sliderLineIndex !== -1) {
    const sliderLine = lines.splice(sliderLineIndex, 1)[0];
    
    // Find where the hero section ends
    const heroEndIndex = lines.findIndex(line => line.includes('</section>') && lines.slice(0, lines.indexOf(line)).some(l => l.includes('<section className="hero-wrapper">')));
    
    // Actually, hero wrapper is first section. Let's just find `</section>` of hero.
    let heroEnd = -1;
    let inHero = false;
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('<section className="hero-wrapper">')) {
            inHero = true;
        }
        if (inHero && lines[i].includes('</section>')) {
            heroEnd = i;
            break;
        }
    }
    
    if (heroEnd !== -1) {
        // Insert SolutionsSlider after hero section
        lines.splice(heroEnd + 1, 0, '', '    ' + sliderLine.trim(), '');
        fs.writeFileSync('src/app/page.tsx', lines.join('\\n'));
        console.log("Moved SolutionsSlider successfully");
    } else {
        console.log("Could not find end of hero section");
    }
} else {
    console.log("Could not find SolutionsSlider");
}
