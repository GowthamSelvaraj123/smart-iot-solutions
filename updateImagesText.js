const fs = require('fs');

let content = fs.readFileSync('src/data/products.ts', 'utf8');

// The file has a structure like:
// id: "sg-1", image: "https://...",
// name: "QUIK - Single Pedestrian Gate Operator",
// code: "AZSW600-1.2M",
// We can use regex or string manipulation. 
// It's safer to read the file, split by `id: "`, and parse each block.

const blocks = content.split('id: "');
let newContent = blocks[0];

for (let i = 1; i < blocks.length; i++) {
  let block = blocks[i];
  
  // Extract code
  let codeMatch = block.match(/code:\s*"([^"]+)"/);
  let nameMatch = block.match(/name:\s*"([^"]+)"/);
  
  if (codeMatch || nameMatch) {
    let title = codeMatch ? codeMatch[1] : nameMatch[1];
    
    // Clean up title for URL
    // Limit length to ~15 chars for clean display
    if (title.length > 25) {
      title = title.substring(0, 22) + '...';
    }
    
    let encodedTitle = encodeURIComponent(title);
    
    // Replace the image URL
    // Currently it could be unsplash or picsum
    block = block.replace(/image:\s*"https:\/\/[^"]+"/, `image: "https://placehold.co/600x400/fdfcf9/d0a353?text=${encodedTitle}"`);
  }
  
  newContent += 'id: "' + block;
}

// Special case for EAP510 and LR300G-P if they are defined differently
// But my previous scripts used the same JSON stringify format... wait
// If I used JSON stringify, it would be `"id": "lr300g-p"`. The regex above used `id: "` not `"id": "`.
// Let's also do a pass for JSON format
const jsonBlocks = newContent.split('"id": "');
if (jsonBlocks.length > 1) {
    let newJsonContent = jsonBlocks[0];
    for (let i = 1; i < jsonBlocks.length; i++) {
        let block = jsonBlocks[i];
        let codeMatch = block.match(/"code":\s*"([^"]+)"/);
        let nameMatch = block.match(/"name":\s*"([^"]+)"/);
        
        if (codeMatch || nameMatch) {
            let title = codeMatch ? codeMatch[1] : nameMatch[1];
            if (title.length > 25) {
                title = title.substring(0, 22) + '...';
            }
            let encodedTitle = encodeURIComponent(title);
            block = block.replace(/"image":\s*"https:\/\/[^"]+"/, `"image": "https://placehold.co/600x400/fdfcf9/d0a353?text=${encodedTitle}"`);
        }
        newJsonContent += '"id": "' + block;
    }
    newContent = newJsonContent;
}


fs.writeFileSync('src/data/products.ts', newContent);
console.log('Replaced all images with placehold.co dynamic text images based on product title.');
