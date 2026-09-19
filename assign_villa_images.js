const fs = require('fs');

const luxuryVillaExterior = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1613490908571-9ce224ce0258?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600573472591-ee6981cf35b6?auto=format&fit=crop&w=600&q=80"
];

const luxuryVillaInterior = [
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600607687644-b7171b6ba110?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80"
];

const categoryImages = {
  "Swing Gate Operators": luxuryVillaExterior,
  "Sliding Gate Operators": luxuryVillaExterior,
  "Boom Barriers": luxuryVillaExterior,
  "Sliding Glass Door Operators": luxuryVillaInterior,
  "Switches & Controls": luxuryVillaInterior,
  "Smart Curtains": luxuryVillaInterior,
  "Lighting": luxuryVillaInterior,
  "Smart Locks & Security": luxuryVillaInterior,
  "Gateways & Controllers": luxuryVillaInterior,
  "Networking & Routers": luxuryVillaInterior,
  "Accessories": luxuryVillaInterior
};

const defaultImage = luxuryVillaInterior[0];

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
console.log('Updated images to luxury villa oriented!');
