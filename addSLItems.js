const fs = require('fs');

const slItems = [
  // Sliding Gate Operators
  { id: "sl-1", name: "UNIQ 800KG", code: "AZSL97", particulars: "Operator only 24V DC, TRANSMITTER - 2 Nos", category: "Sliding Gate Operators" },
  { id: "sl-2", name: "DC 800KG", code: "AZSL99B", particulars: "Operator only 24V DC, TRANSMITTER - 2 Nos", category: "Sliding Gate Operators" },
  { id: "sl-3", name: "PRO 600KG", code: "AZSL100B", particulars: "Operator only 220V AC, TRANSMITTER - 2 Nos", category: "Sliding Gate Operators" },
  { id: "sl-4", name: "PRO 1000KG", code: "AZSL101B", particulars: "Operator only 220V AC, TRANSMITTER - 2 Nos", category: "Sliding Gate Operators" },
  { id: "sl-5", name: "PRO 1500KG", code: "AZSL102B", particulars: "Operator only 220V AC, TRANSMITTER - 2 Nos", category: "Sliding Gate Operators" },
  { id: "sl-6", name: "PRO 2000KG", code: "AZSL1021B", particulars: "Operator only 220V AC, TRANSMITTER - 2 Nos", category: "Sliding Gate Operators" },
  { id: "sl-7", name: "POWER 2000KG", code: "AZSL103I", particulars: "Operator Only 220V AC, TRANSMITTER - 2 Nos", category: "Sliding Gate Operators" },
  { id: "sl-8", name: "POWER 3000KG", code: "AZSL104I", particulars: "Operator Only 220V AC, TRANSMITTER - 2 Nos", category: "Sliding Gate Operators" },
  { id: "sl-9", name: "POWER 4000KG", code: "AZSL105I", particulars: "Operator Only 220V AC, TRANSMITTER - 2 Nos", category: "Sliding Gate Operators" },
  { id: "sl-10", name: "HULK 5000KG", code: "AZSL605I", particulars: "Operator Only 220V AC, TRANSMITTER - 2 Nos", category: "Sliding Gate Operators" },
  { id: "sl-11", name: "HULK 6000KG", code: "AZSL606I", particulars: "Operator Only 220V AC, TRANSMITTER - 2 Nos", category: "Sliding Gate Operators" },

  // Kits
  { id: "sl-12", name: "DC 800KG KIT", code: "AZSL99B/KIT", particulars: "Operator 24V DC, TRANSMITTER - 2 Nos, BOLT-Photocells, GI Rack - 4 Nos", category: "Sliding Gate Operators" },
  { id: "sl-13", name: "PRO 600KG KIT", code: "AZSL100B/KIT", particulars: "Operator 220V AC, TRANSMITTER - 2 Nos, BOLT-Photocells, GI Rack - 4 Nos", category: "Sliding Gate Operators" },
  { id: "sl-14", name: "PRO 1000KG KIT", code: "AZSL101B/KIT", particulars: "Operator 220V AC, TRANSMITTER - 2 Nos, BOLT-Photocells, GI Rack - 4 Nos", category: "Sliding Gate Operators" },
  { id: "sl-15", name: "PRO 1500KG KIT", code: "AZSL102B/KIT", particulars: "Operator 220V AC, TRANSMITTER - 2 Nos, BOLT-Photocells, GI Rack - 4 Nos", category: "Sliding Gate Operators" },
  { id: "sl-16", name: "PRO 2000KG KIT", code: "AZSL1021B/KIT", particulars: "Operator 220V AC, TRANSMITTER - 2 Nos, BOLT-Photocells, GI Rack - 4 Nos", category: "Sliding Gate Operators" },

  // Accessories
  { id: "sl-acc-1", name: "TRANSMITTER", code: "AZT30A", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-2", name: "IND TRANSMITTER", code: "AZT23B", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-3", name: "IND TRANSMITTER", code: "AZT23G", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-4", name: "Multi Brand Transmitter", code: "AZTMB701A", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-5", name: "BOLT-Photocell", code: "AZPC10A", particulars: "1 Pair", category: "Sliding Gate Operators" },
  { id: "sl-acc-6", name: "BOLT-Photocell Wireless", code: "AZPCWL11A", particulars: "1 Pair", category: "Sliding Gate Operators" },
  { id: "sl-acc-7", name: "Laser Photocell", code: "AZLPC12", particulars: "1 NO", category: "Sliding Gate Operators" },
  { id: "sl-acc-8", name: "Infrared Photocell", code: "AZIR20", particulars: "1 NO", category: "Sliding Gate Operators" },
  { id: "sl-acc-9", name: "Infrared Sensor 4 BEAM 20M", code: "AZIS4F20", particulars: "1 pair", category: "Sliding Gate Operators" },
  { id: "sl-acc-10", name: "Infrared Sensor 6 BEAM 20M", code: "AZIS6F20", particulars: "1 pair", category: "Sliding Gate Operators" },
  { id: "sl-acc-11", name: "REFLECTIVE PHOTOCELL", code: "AZRFPC41A8M", particulars: "1 Pair", category: "Sliding Gate Operators" },
  { id: "sl-acc-12", name: "Smart Receiver", code: "AZSR519", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-13", name: "Samart Tag", code: "AZST518", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-14", name: "External Receiver (4 CHANNEL)", code: "AZER141", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-15", name: "RF WIFI MODULE", code: "AZRFWIFI31A", particulars: "1 no", category: "Sliding Gate Operators" },
  { id: "sl-acc-16", name: "Long Range External Reciver", code: "AZRER140", particulars: "1 Pair", category: "Sliding Gate Operators" },
  { id: "sl-acc-17", name: "Transmitter", code: "AZT142", particulars: "1 NO", category: "Sliding Gate Operators" },
  { id: "sl-acc-18", name: "GSM MODULE 2G", code: "AZGSM30", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-19", name: "KEYSWITCH", code: "AZKS15", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-20", name: "WIRELESS KEY PAD", code: "AZWLKP17", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-21", name: "PUSHBUTTON", code: "AZPB16A", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-22", name: "PUSHBUTTON WATERPROOF", code: "AZPBIP65", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-23", name: "PUSHBUTTON WITH KEY", code: "AZPBK16B", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-24", name: "PUSHBUTTON", code: "AZPB16C", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-25", name: "PCB PUSHBUTTON", code: "AZPB16E", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-26", name: "TWO BUTTON PUSHBUTTON", code: "AZPB16F", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-27", name: "Finger Print & Password/card", code: "AZPFAC452", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-28", name: "FLASH LAMP", code: "AZFL19", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-29", name: "FLASH LAMP", code: "AZFL20", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-30", name: "ALARM FLASH LAMP", code: "AZAFLAC19A", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-31", name: "ALARM FLASH LAMP", code: "AZAFLDC19B", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-32", name: "FLASH LAMP", code: "AZFLAC21", particulars: "1 no", category: "Sliding Gate Operators" },
  { id: "sl-acc-33", name: "SIGNAL LIGHT 24V", code: "AZSL12ADC", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-34", name: "SIGNAL LIGHT 230V", code: "AZSL12AAC", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-35", name: "Battery Backup", code: "AZSLBB99B", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-36", name: "SOLAR PANEL KIT", code: "AZSLSP319", particulars: "1 no", category: "Sliding Gate Operators" },
  { id: "sl-acc-37", name: "9MM RACK", code: "AZ9MM", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-38", name: "12MM RACK", code: "AZ12MM", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-39", name: "22MM RACK", code: "AZ22MM", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-40", name: "8MMSS RACK", code: "AZ8MMSS", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-41", name: "30MMM6 RACK", code: "AZ30MMM6", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-42", name: "NYLON RACK", code: "AZNR25MM", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-43", name: "Programming Control PCB(K100Q)", code: "AZSLPCB97", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-44", name: "Control Board AC (Only PCB)", code: "AZSLAPCB300A", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-45", name: "Control Board DC (Only PCB)", code: "AZSLDPCB317A", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-46", name: "Control Board AC Fast (Only PCB)", code: "AZSLAFPCB330", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-47", name: "Control Board(Only PCB)", code: "AZSLPCB500", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-48", name: "Control Board AC (Only PCB)", code: "AZSLPCB300B", particulars: "1no", category: "Sliding Gate Operators" },
  { id: "sl-acc-49", name: "Control Board DC (Only PCB)", code: "AZSLPCB317B", particulars: "1no", category: "Sliding Gate Operators" },
  
  // Safety Edge Kits
  { id: "sl-safe-1", name: "RUBBER PROFILE (60*40)", code: "AZSEGR206", particulars: "1 Meter", category: "Sliding Gate Operators" },
  { id: "sl-safe-2", name: "ALUMINIUM TRACK (60*40)", code: "AZSEGAT106", particulars: "1 - No (2m/pc)", category: "Sliding Gate Operators" },
  { id: "sl-safe-3", name: "Sensor Tape", code: "AZSEST3", particulars: "1 Meter", category: "Sliding Gate Operators" },
  { id: "sl-safe-4", name: "End Plug", code: "AZSEP206", particulars: "1 PAIR", category: "Sliding Gate Operators" },
  { id: "sl-safe-5", name: "End Cap", code: "AZSEEP05", particulars: "1 PAIR", category: "Sliding Gate Operators" },
  { id: "sl-safe-6", name: "SAFETY EDGE SENSOR STRIP", code: "AZHSDBES64B", particulars: "1 Nos", category: "Sliding Gate Operators" },
  { id: "sl-safe-7", name: "RUBBER PROFILE (40*30)", code: "AZSEGR304", particulars: "1 Meter", category: "Sliding Gate Operators" },
  { id: "sl-safe-8", name: "ALUMINIUM TRACK (40*30)", code: "AZSEGAT113", particulars: "1 - No (2m/pc)", category: "Sliding Gate Operators" }
];

let content = fs.readFileSync('src/data/products.ts', 'utf8');

// Update type definition
content = content.replace(/"Swing Gate Operators" \| "Boom Barriers";/, '"Swing Gate Operators" | "Boom Barriers" | "Sliding Gate Operators";');

// Insert the new items right before the closing bracket of products array
const insertionPoint = content.lastIndexOf('];');

if (insertionPoint !== -1) {
  const itemsString = ',\n  // SLIDING GATE OPERATORS\n' + slItems.map(item => `  {
    id: "${item.id}",
    name: "${item.name}",
    code: "${item.code}",
    particulars: "${item.particulars}",
    category: "${item.category}",
    image: "https://picsum.photos/seed/${item.id}/400/300"
  }`).join(',\n') + '\n';

  content = content.slice(0, insertionPoint) + itemsString + content.slice(insertionPoint);
  fs.writeFileSync('src/data/products.ts', content);
  console.log('Added ' + slItems.length + ' Sliding Gate items to products.ts');
} else {
  console.log('Could not find insertion point');
}
