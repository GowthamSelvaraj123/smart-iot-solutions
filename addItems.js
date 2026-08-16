const fs = require('fs');

const extraItems = [
  // Two Operator Kits
  { id: "sg-9", name: "ICON - Swing Gate Two Operator DC 3 mtr 600 kgs Kit", code: "AZSW1063/300KG/2", particulars: "Operator - 2 No, Control Panel - 1No, TRANSMITTER - 2 Nos, Photocell - 1 pair", category: "Swing Gate Operators" },
  { id: "sg-10", name: "LINK - Swing Gate operator DC 3 mtr 600 kgs Kit", code: "AZSW110A/3MTR/300KG 2", particulars: "Operator - 2 No, Control Panel - 1No, TRANSMITTER - 2 Nos, Photocell - 1 pair", category: "Swing Gate Operators" },
  { id: "sg-11", name: "LITE - Swing Gate articulator operator DC", code: "AZSW107B/2", particulars: "Operator - 2 No, Control Panel - 1No, TRANSMITTER - 2 Nos, Photocell - 1 pair", category: "Swing Gate Operators" },

  // Roller Operator Kits
  { id: "sg-12", name: "ECO - SWING GATE ROLLER OPERATOR 800Kgs - KIT", code: "AZSW108A/400KG/2", particulars: "Operator - 2 No, Control Panel - 1No, TRANSMITTER - 2 Nos, Photocell - 1 pair", category: "Swing Gate Operators" },
  { id: "sg-13", name: "ECO - Swing gate roller operator 1600Kgs - Kit", code: "AZSW108B/800KG/2", particulars: "Operator - 2 No, Control Panel - 1No, TRANSMITTER - 2 Nos, Photocell - 1 pair", category: "Swing Gate Operators" },
  { id: "sg-14", name: "ROBO - Swing gate roller operator 2000Kgs - Kit", code: "AZSW109A/1000KG/2", particulars: "Operator - 2 No, Control Panel - 1No, TRANSMITTER - 2 Nos, Photocell - 1 pair", category: "Swing Gate Operators" },

  // Pedestrian Wicket
  { id: "sg-15", name: "GRID - Pedestrian Gate Operator 75KG", code: "AZSW111PGO", particulars: "Operator kit with Control board & Accessories", category: "Swing Gate Operators" },

  // Accessories
  { id: "acc-1", name: "IND TRANSMITTER", code: "AZT30A", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-2", name: "IND TRANSMITTER", code: "AZT23B", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-3", name: "IND TRANSMITTER", code: "AZT23G", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-4", name: "Multi Brand Transmitter", code: "AZTMB701A", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-5", name: "TRANSMITTER PG", code: "AZPGOT757", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-6", name: "TRANSMITTER SUITABLE FOR (AZSW600)", code: "AZT600", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-7", name: "TRANSMITTER SUITABLE FOR (AZSW107B)", code: "AZT31", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-8", name: "BOLT-Photocell", code: "AZPC10A", particulars: "1 Pair", category: "Swing Gate Operators" },
  { id: "acc-9", name: "BOLT-Photocell Wireless", code: "AZPCWL11A", particulars: "1 Pair", category: "Swing Gate Operators" },
  { id: "acc-10", name: "Laser Photocell", code: "AZLPC12", particulars: "1 NO", category: "Swing Gate Operators" },
  { id: "acc-11", name: "Infrared Photocell", code: "AZIR20", particulars: "1 NO", category: "Swing Gate Operators" },
  { id: "acc-12", name: "Infrared Sensor 4 BEAM 20M", code: "AZIS4F20", particulars: "1 pair", category: "Swing Gate Operators" },
  { id: "acc-13", name: "Infrared Sensor 6 BEAM 20M", code: "AZIS6F20", particulars: "1 pair", category: "Swing Gate Operators" },
  { id: "acc-14", name: "REFLECTIVE PHOTOCELL", code: "AZRFPC41A8M", particulars: "1 Pair", category: "Swing Gate Operators" },
  { id: "acc-15", name: "Smart Receiver", code: "AZSR519", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-16", name: "Samart Tag", code: "AZST518", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-17", name: "External Receiver (4 CHANNEL)", code: "AZER141", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-18", name: "RF WIFI MODULE", code: "AZRFWIFI31A", particulars: "1 no", category: "Swing Gate Operators" },
  { id: "acc-19", name: "Long Range External Reciver", code: "AZRER140", particulars: "1 Pair", category: "Swing Gate Operators" },
  { id: "acc-20", name: "GSM MODULE 2G", code: "AZGSM30", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-21", name: "KEYSWITCH", code: "AZKS15", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-22", name: "WIRELESS KEY PAD", code: "AZWLKP17", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-23", name: "PUSHBUTTON", code: "AZPB16A", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-24", name: "PUSHBUTTON WATERPROOF", code: "AZPBIP65", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-25", name: "PUSHBUTTON WITH KEY", code: "AZPBK16B", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-26", name: "PUSHBUTTON", code: "AZPB16C", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-27", name: "PCB PUSHBUTTON", code: "AZPB16E", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-28", name: "TWO BUTTON PUSHBUTTON", code: "AZPB16F", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-29", name: "Finger Print & Password/card", code: "AZPFAC452", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-30", name: "FLASH LAMP", code: "AZFL19", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-31", name: "FLASH LAMP", code: "AZFL20", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-32", name: "ALARM FLASH LAMP", code: "AZAFLAC19A", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-33", name: "ALARM FLASH LAMP", code: "AZAFLDC19B", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-34", name: "FLASH LAMP", code: "AZFLAC21", particulars: "1 no", category: "Swing Gate Operators" },
  { id: "acc-35", name: "SIGNAL LIGHT 24V", code: "AZSL12AADC", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-36", name: "SIGNAL LIGHT 230V", code: "AZSL12AAC", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-37", name: "ELECTRONIC BOTTOM LOCK", code: "AZSWELBL32", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-38", name: "ELECTRONIC CENTER LOCK", code: "AZSWELCL33", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-39", name: "CONTROLLER FOR AC", code: "AZSW231A", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-40", name: "CONTROLLER", code: "AZSW229A", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-41", name: "CONTROLLER", code: "AZSWDC227A", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-42", name: "PCB ONLY FOR AZSW600", code: "AZSWPCB600", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-43", name: "SMPS FOR AZSW600", code: "AZSWSMPS600", particulars: "1 NO", category: "Swing Gate Operators" },
  { id: "acc-44", name: "PCB ONLY DIGITAL BOARD - ID200", code: "AZSWDPCB200A", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-45", name: "PCB ONLY", code: "AZSWPCB580C", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-46", name: "PCB ONLY DC ANALOG BOARD - T90", code: "AZSWDPCB228", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-47", name: "PCB ONLY AC", code: "AZSWACPCB231A", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-48", name: "PCB ONLY - K280", code: "AZSWPCB107B", particulars: "1no", category: "Swing Gate Operators" },
  { id: "acc-49", name: "PEDESTRIAN CONTROL BOARD (PCB)", code: "AZPGOCB751", particulars: "1 no", category: "Swing Gate Operators" },
  { id: "acc-50", name: "Gate Rubber stopper", code: "AZSWRS234", particulars: "1NOS", category: "Swing Gate Operators" },

  // Gate Safety Edge Kits
  { id: "safe-1", name: "RUBBER PROFILE (60*40)", code: "AZSEGR206", particulars: "1 Meter", category: "Swing Gate Operators" },
  { id: "safe-2", name: "ALUMINIUM TRACK (60*40)", code: "AZSEGAT106", particulars: "1 - No (2m)", category: "Swing Gate Operators" },
  { id: "safe-3", name: "Sensor Tape", code: "AZSEST3", particulars: "1 Meter", category: "Swing Gate Operators" },
  { id: "safe-4", name: "End Plug", code: "AZSEP206", particulars: "1 PAIR", category: "Swing Gate Operators" },
  { id: "safe-5", name: "End Cap", code: "AZSEEP05", particulars: "1 PAIR", category: "Swing Gate Operators" },
  { id: "safe-6", name: "SAFETY EDGE SENSOR STRIP", code: "AZHSDBES64B", particulars: "1 Nos", category: "Swing Gate Operators" },
  { id: "safe-7", name: "RUBBER PROFILE (40*30)", code: "AZSEGR304", particulars: "1 Meter", category: "Swing Gate Operators" },
  { id: "safe-8", name: "ALUMINIUM TRACK (40*30)", code: "AZSEGAT113", particulars: "1 - No (2m/pc)", category: "Swing Gate Operators" }
];

let content = fs.readFileSync('src/data/products.ts', 'utf8');

// Insert the new items right before the BOOM BARRIERS section
const insertionPoint = content.indexOf('// BOOM BARRIERS');

if (insertionPoint !== -1) {
  const itemsString = extraItems.map(item => `  {
    id: "${item.id}",
    name: "${item.name}",
    code: "${item.code}",
    particulars: "${item.particulars}",
    category: "${item.category}"
  }`).join(',\n') + ',\n\n  ';

  content = content.slice(0, insertionPoint) + itemsString + content.slice(insertionPoint);
  fs.writeFileSync('src/data/products.ts', content);
  console.log('Added ' + extraItems.length + ' items to products.ts');
} else {
  console.log('Could not find BOOM BARRIERS insertion point');
}
