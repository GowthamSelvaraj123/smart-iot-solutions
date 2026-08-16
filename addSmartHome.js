const fs = require('fs');

const rawItems = JSON.parse(fs.readFileSync('smart-home-items.json', 'utf8'));

let content = fs.readFileSync('src/data/products.ts', 'utf8');

// Update type definition
const newTypes = '"Switches & Controls" | "Smart Curtains" | "Lighting" | "Smart Locks & Security" | "Gateways & Controllers" | "Accessories"';
content = content.replace(/"Sliding Gate Operators" \| "Sliding Glass Door Operators";/, `"Sliding Gate Operators" | "Sliding Glass Door Operators" | ${newTypes};`);

// Insert the new items right before the closing bracket of products array
const insertionPoint = content.lastIndexOf('];');

if (insertionPoint !== -1) {
  const itemsString = ',\n  // SMART HOME PRODUCTS\n' + rawItems.map(item => `  {
    id: "${item.id}",
    name: "${item.name}",
    code: "${item.code}",
    particulars: "${item.particulars}",
    category: "${item.category}",
    image: "https://picsum.photos/seed/${item.id}/400/300"
  }`).join(',\n') + '\n';

  content = content.slice(0, insertionPoint) + itemsString + content.slice(insertionPoint);
  fs.writeFileSync('src/data/products.ts', content);
  console.log('Added ' + rawItems.length + ' Smart Home items to products.ts');
} else {
  console.log('Could not find insertion point');
}
