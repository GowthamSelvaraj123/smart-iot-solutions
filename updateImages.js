const fs = require('fs');

const categoryImages = {
  "Swing Gate Operators": "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
  "Boom Barriers": "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
  "Sliding Gate Operators": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  "Sliding Glass Door Operators": "https://images.unsplash.com/photo-1506729623306-b5a934d88b53?auto=format&fit=crop&w=800&q=80",
  "Switches & Controls": "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80",
  "Smart Curtains": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  "Lighting": "https://images.unsplash.com/photo-1565814329452-e1efa11c5e8d?auto=format&fit=crop&w=800&q=80",
  "Smart Locks & Security": "https://images.unsplash.com/photo-1585868297672-13233b8a3626?auto=format&fit=crop&w=800&q=80",
  "Gateways & Controllers": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  "Networking & Routers": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
  "Accessories": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"
};

let content = fs.readFileSync('src/data/products.ts', 'utf8');

// Use regex to replace the image property based on the category property
// Note: This is slightly tricky with regex because image and category are on different lines.
// Let's do it by evaluating the file or using a more robust replacement.
// Actually, since this is a valid TS file, we can just replace lines.

const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('image: "https://picsum.photos/seed/')) {
    // Look ahead to find the category
    let category = "";
    for (let j = i; j < i + 10 && j < lines.length; j++) {
      if (lines[j].includes('category: "')) {
        category = lines[j].split('category: "')[1].split('"')[0];
        break;
      }
    }
    
    // Look behind if not found ahead
    if (!category) {
      for (let j = i; j > i - 10 && j >= 0; j--) {
        if (lines[j].includes('category: "')) {
          category = lines[j].split('category: "')[1].split('"')[0];
          break;
        }
      }
    }

    if (category && categoryImages[category]) {
      lines[i] = lines[i].replace(/image: "https:\/\/picsum\.photos\/seed\/[^"]+"/, `image: "${categoryImages[category]}"`);
    } else {
      // Default fallback
      lines[i] = lines[i].replace(/image: "https:\/\/picsum\.photos\/seed\/[^"]+"/, `image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"`);
    }
  }
}

fs.writeFileSync('src/data/products.ts', lines.join('\n'));
console.log('Replaced all placeholder images with category-specific images.');
