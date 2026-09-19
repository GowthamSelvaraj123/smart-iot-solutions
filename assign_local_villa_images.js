const fs = require('fs');

const categoryImages = {
  "Swing Gate Operators": ["/images/products/exterior.jpg"],
  "Sliding Gate Operators": ["/images/products/exterior.jpg"],
  "Boom Barriers": ["/images/products/exterior.jpg"],
  "Sliding Glass Door Operators": ["/images/products/interior.jpg"],
  "Switches & Controls": ["/images/products/interior.jpg"],
  "Smart Curtains": ["/images/products/interior.jpg"],
  "Lighting": ["/images/products/interior.jpg"],
  "Smart Locks & Security": ["/images/products/security.jpg"],
  "Gateways & Controllers": ["/images/products/interior.jpg"],
  "Networking & Routers": ["/images/products/interior.jpg"],
  "Accessories": ["/images/products/interior.jpg", "/images/products/security.jpg"]
};

const defaultImage = "/images/products/interior.jpg";

const filePath = 'src/data/products.ts';
let content = fs.readFileSync(filePath, 'utf8');

const blocks = content.split('},');
for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    const categoryMatch = block.match(/category:\s*"([^"]+)"/);
    if (categoryMatch) {
        const category = categoryMatch[1];
        const images = categoryImages[category] || [defaultImage];
        const randomImg = images[Math.floor(Math.random() * images.length)];
        
        blocks[i] = block.replace(/image:\s*"[^"]+"/, `image: "${randomImg}"`);
    }
}
content = blocks.join('},');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated images to local luxury villa images!');
