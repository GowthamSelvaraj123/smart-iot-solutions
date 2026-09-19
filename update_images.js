const fs = require('fs');

const images = [
  "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585060544812-6b45742d762f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550508493-2475e523315f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1558389186-438424b00b44?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1626229562768-45ee6cc3f374?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549442998-38fae1f2000c?q=80&w=600&auto=format&fit=crop"
];

const filePath = 'src/data/products.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Replace ANY image: "..." with a random unsplash image
content = content.replace(/image:\s*"[^"]+"/g, () => {
    const randomImg = images[Math.floor(Math.random() * images.length)];
    return `image: "${randomImg}"`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated all images in products.ts!');
