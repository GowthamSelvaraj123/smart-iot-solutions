const fs = require('fs');

const categoryImages = {
  "Swing Gate Operators": [
    "https://images.unsplash.com/photo-1510255374465-38506509f6b9?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506501139174-099022df5260?q=80&w=600&auto=format&fit=crop"
  ],
  "Sliding Gate Operators": [
    "https://images.unsplash.com/photo-1510255374465-38506509f6b9?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506501139174-099022df5260?q=80&w=600&auto=format&fit=crop"
  ],
  "Boom Barriers": [
    "https://images.unsplash.com/photo-1565511398864-7bf5bd089a8f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582236780775-8eb64b07e5f3?q=80&w=600&auto=format&fit=crop"
  ],
  "Sliding Glass Door Operators": [
    "https://images.unsplash.com/photo-1534349762230-e0cb9ce7e5fd?q=80&w=600&auto=format&fit=crop"
  ],
  "Switches & Controls": [
    "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=600&auto=format&fit=crop"
  ],
  "Smart Curtains": [
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542617719-74d12c8ff469?q=80&w=600&auto=format&fit=crop"
  ],
  "Lighting": [
    "https://images.unsplash.com/photo-1550508493-2475e523315f?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563604118837-567a57c2a71d?q=80&w=600&auto=format&fit=crop"
  ],
  "Smart Locks & Security": [
    "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549442998-38fae1f2000c?q=80&w=600&auto=format&fit=crop"
  ],
  "Gateways & Controllers": [
    "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=600&auto=format&fit=crop"
  ],
  "Networking & Routers": [
    "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=600&auto=format&fit=crop"
  ],
  "Accessories": [
    "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1626229562768-45ee6cc3f374?q=80&w=600&auto=format&fit=crop"
  ]
};

const defaultImage = "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=600&auto=format&fit=crop";

const filePath = 'src/data/products.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Match each object block using a more robust regex or iterative approach
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
console.log('Updated images based on category!');
