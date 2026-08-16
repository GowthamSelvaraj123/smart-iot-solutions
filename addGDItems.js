const fs = require('fs');

const gdItems = [
  // Sliding Glass Door Operators
  { id: "gd-1", name: "FLOW-SLIDING GLASS DOOR OPERATOR 2M KIT", code: "AZSLD207/2M/KIT", particulars: "Operator, Controller, Belt, Pulley, Guide Rail 2M, Push Button", category: "Sliding Glass Door Operators" },
  { id: "gd-2", name: "GRO-SLIDING GLASS DOOR OPERATOR 2.5MTR KIT", code: "AZSLD200/2.5MTR/KIT", particulars: "Operator, Controller, Guide Rail 2.5M, Glass Clamp, Push Button", category: "Sliding Glass Door Operators" },
  { id: "gd-3", name: "ZOOM-SLIDING GLASS DOOR OPERATOR 4.2M KIT", code: "AZSLD201F/4.2 M/KIT", particulars: "Operator, Controller, Guide Rail 4.2M, Microwave Sensor, Photocell", category: "Sliding Glass Door Operators" },
  { id: "gd-4", name: "ZOOM-SLIDING GLASS DOOR OPERATOR 6M KIT", code: "AZSLD201F/6M/KIT", particulars: "Operator, Controller, Guide Rail 6M, Microwave Sensor, Photocell", category: "Sliding Glass Door Operators" },

  // Accessories
  { id: "gd-acc-1", name: "MICROWAVESENSOR", code: "AZMW98A", particulars: "1 no", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-2", name: "RADAR & INFRARED SENSOR", code: "AZRIS99A", particulars: "1no", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-3", name: "Wired Touchless Sensor", code: "AZSLDTLS73", particulars: "1 no", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-4", name: "WIRELESSS PUSH BUTTTON & RECEIVER", code: "AZSLDPBWL70A", particulars: "1 no", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-5", name: "KEYSWITCH", code: "AZSWDKS430", particulars: "1 no", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-6", name: "FOOT SENSOR", code: "AZFS92", particulars: "1 no", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-7", name: "Finger Print & Password IP68", code: "AZPFAC452", particulars: "1no", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-8", name: "SINGLE BEAMSENSOR", code: "AZSLDSBP71", particulars: "1 no", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-9", name: "DOUBLE Beam Photocell", code: "AZSLDDB75", particulars: "1 no", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-10", name: "Infrared Sensor 4 BEAM 20M", code: "AZIS4F20", particulars: "1 pair", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-11", name: "Infrared Sensor 6 BEAM 20M", code: "AZIS6F20", particulars: "1 pair", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-12", name: "LIGHT CURTAIN SENSOR", code: "AZLSEC46", particulars: "1no", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-13", name: "GLASS CLAMP 1M Top (Glass Size 12mm)", code: "AZCGT98", particulars: "1no", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-14", name: "Glass Clamp 1M Bottom (Glass Size 12mm)", code: "AZCGB99", particulars: "1no", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-15", name: "Aluminium Strip 2.5M", code: "AZGAS100", particulars: "1no", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-16", name: "Rubber Strip 2.5M", code: "AZGRS101", particulars: "1no", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-17", name: "1MTR GLASS HOLDER TRACK", code: "AZSLDGHTE411(1MTR)", particulars: "1 no", category: "Sliding Glass Door Operators" },
  { id: "gd-acc-18", name: "1.5MTR GLASS HOLDER TRACK", code: "AZSLDGHTE411(1.5MTR)", particulars: "1 no", category: "Sliding Glass Door Operators" }
];

let content = fs.readFileSync('src/data/products.ts', 'utf8');

// Update type definition
content = content.replace(/"Swing Gate Operators" \| "Boom Barriers" \| "Sliding Gate Operators";/, '"Swing Gate Operators" | "Boom Barriers" | "Sliding Gate Operators" | "Sliding Glass Door Operators";');

// Insert the new items right before the closing bracket of products array
const insertionPoint = content.lastIndexOf('];');

if (insertionPoint !== -1) {
  const itemsString = ',\n  // SLIDING GLASS DOOR OPERATORS\n' + gdItems.map(item => `  {
    id: "${item.id}",
    name: "${item.name}",
    code: "${item.code}",
    particulars: "${item.particulars}",
    category: "${item.category}",
    image: "https://picsum.photos/seed/${item.id}/400/300"
  }`).join(',\n') + '\n';

  content = content.slice(0, insertionPoint) + itemsString + content.slice(insertionPoint);
  fs.writeFileSync('src/data/products.ts', content);
  console.log('Added ' + gdItems.length + ' Sliding Glass Door items to products.ts');
} else {
  console.log('Could not find insertion point');
}
