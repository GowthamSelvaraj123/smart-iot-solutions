const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const lines = content.split('\\n');
// We want to delete lines from index 118 (which is line 119) up to index 183 (line 184)
// Wait, to be safe, we'll find the exact line indices based on content in case it shifted.

let startIndex = lines.findIndex(line => line.trim() === 'export default function IndexPage() {');
// There should be two of these now! We want to delete the SECOND one.
const firstIndex = lines.indexOf(lines.find(line => line.trim() === 'export default function IndexPage() {'));
startIndex = lines.findIndex((line, idx) => idx > firstIndex && line.trim() === 'export default function IndexPage() {');

if (startIndex !== -1) {
    // Find the end of this duplicated hero section, which is `    </section>` before `    <section className="py-[60px] relative overflow-hidden bg-[#fdfcf9]">`
    let endIndex = -1;
    for (let i = startIndex + 1; i < lines.length; i++) {
        if (lines[i].includes('<section className="py-[60px] relative overflow-hidden bg-[#fdfcf9]">')) {
            // The `</section>` should be just before this
            endIndex = i - 1;
            // Let's go back up to find the actual `</section>` in case of empty lines
            while (endIndex > startIndex && !lines[endIndex].includes('</section>')) {
                endIndex--;
            }
            break;
        }
    }
    
    if (endIndex !== -1) {
        lines.splice(startIndex, endIndex - startIndex + 1);
        fs.writeFileSync('src/app/page.tsx', lines.join('\\n'));
        console.log(`Deleted lines from ${startIndex} to ${endIndex}`);
    } else {
        console.log("Could not find endIndex");
    }
} else {
    console.log("Could not find startIndex");
}
