const fs = require('fs');

const bbItems = [
  // Missing Boom Barriers
  { id: "bb-9", name: "ROD - FOLDING HYBRID BLDC BOOM BARRIER 180 DEGREE", code: "AZBB115A/AZBF10A180D", particulars: "FOLDING BOOM 4 MTR, TRANSMITTER (2 Nos)", category: "Boom Barriers" },
  { id: "bb-10", name: "RUSH-ARM OUT BLDC BOOM BARRIER (NON SPRING)", code: "AZBBL18/AZBA06A", particulars: "ARM OUT SQURE BOOM 6 MTR, TRANSMITTER (2 Nos)", category: "Boom Barriers" },
  { id: "bb-11", name: "RUSH-LED BLDC BOOM BARRIER (NON SPRING)", code: "AZBBL18/AZBLO7A6M", particulars: "LED BOOM 6 MTR, TRANSMITTER (2 Nos)", category: "Boom Barriers" },
  { id: "bb-12", name: "RUSH-FOLDING BLDC BOOM BARRIER 90 DEGREE (NON SPRING)", code: "AZBBL18/AZBF05A90D", particulars: "FOLDING BOOM 4 MTR, TRANSMITTER (2 Nos)", category: "Boom Barriers" },
  { id: "bb-13", name: "RUSH-FOLDING BLDC BOOM BARRIER 180 DEGREE (NON SPRING)", code: "AZBBL18/AZBF10A180D", particulars: "FOLDING BOOM 4 MTR, TRANSMITTER (2 Nos)", category: "Boom Barriers" },
  { id: "bb-14", name: "RUSH- FENCE BLDC BOOM BARRIER (NON SPRING)", code: "AZBBL18/AZBFO3A4.5M", particulars: "FENCH BOOM 4.5 MTR, TRANSMITTER (2 Nos)", category: "Boom Barriers" },
  { id: "bb-15", name: "STAR-FENCE BLDC BOOM BARRIER", code: "AZBB115/AZBF036M", particulars: "FENCH BOOM 6MTR, TRANSMITTER - 2 NOS", category: "Boom Barriers" },
  { id: "bb-16", name: "ADD - ADVERTISING BLDC BOOM BARRIER", code: "AZBBA117B/AZBA09A", particulars: "BOOM - 4 MTR 6SEC, TRANSMITTER (2 Nos)", category: "Boom Barriers" },

  // Boom Barrier Accessories
  { id: "bb-acc-1", name: "BLDC TRANSMITTER", code: "AZBLDCTX22", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-2", name: "BLDC TRANSMITTER", code: "AZBLDCTX23", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-15", name: "Transmitter", code: "AZT142", particulars: "1 NO", category: "Boom Barriers" },
  { id: "bb-acc-24", name: "LOOP DETECTOR SINGLE CHANNEL", code: "AZLB33", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-25", name: "LOOP DETECTOR DOUBLE CHANNEL", code: "AZLB34", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-33", name: "VHOLDER", code: "AZBBVH01", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-34", name: "VHOLDER", code: "AZBBVH01A", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-35", name: "BOOM BARRIER MOBILE STAND", code: "AZBBMVH02", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-36", name: "TELESCOPIC BOOM 6 MTR", code: "AZBT016M", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-37", name: "TELESCOPIC BOOM 4 MTR", code: "AZBT014M", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-38", name: "FOLDING BOOM 90 DEGREE 6MTR", code: "AZBF0590D", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-39", name: "LED BOOM 6MTR", code: "AZBL076M", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-40", name: "ARM OUT ROUND BOOM 4MTR", code: "AZBA04", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-41", name: "FENCE BOOM 4.5MTR", code: "AZBF034.5M", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-42", name: "FENCE BOOM 6MTR", code: "AZBF036M", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-43", name: "BLDC CONTROL BOARD", code: "AZBBLDCCB730", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-44", name: "BLDC CONTROL BOARD", code: "AZBBLDCCB704", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-45", name: "ARROW INDICATION LED LIGHT", code: "AZBBAI606", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-46", name: "TELESCOPIC BOOM 6 MTR", code: "AZBT01A6M", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-47", name: "LED BOOM 6MTR", code: "AZBL07A6M", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-48", name: "TWO FENCE BOOM 4.5 MTR", code: "AZBF03A4.5M", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-49", name: "FOLDING BOOM 90 DEGREE 4MTR", code: "AZBF05A90D", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-50", name: "FOLDING BOOM 180 DEGREE 4MTR", code: "AZBF10A180D", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-51", name: "TELESCOPIC BOOM 8M", code: "AZBT088M", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-52", name: "ADVERTISEMENT BOOM 2.8 MTR", code: "AZBA09A", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-53", name: "ARM OUT SQUARE BOOM 6MTR", code: "AZBA06A", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-54", name: "CONTROLLER", code: "AZBBCBNS03", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-55", name: "CONTROLLER", code: "AZBBCBNS04", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-56", name: "CONTROLLER", code: "AZBBCBNS05", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-57", name: "Power Failure Auto Opening Module", code: "AZBBAOM01", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-58", name: "Battery Backup Module", code: "AZBBBM19", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-59", name: "POWER SUPPLY 24V 8A", code: "AZBBPS708", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-60", name: "POWER SUPPLY 24V 20.8A", code: "AZBBPS720", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-61", name: "POWER SUPPLY FOR LED 12V 15A", code: "AZBBPS709", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-62", name: "POWER SUPPLY 24V 10A", code: "AZBBPS710", particulars: "1 no", category: "Boom Barriers" },
  { id: "bb-acc-63", name: "LED STRIP 6 Meter", code: "AZBBLEDS20", particulars: "6 MTR", category: "Boom Barriers" },
  { id: "bb-acc-64", name: "EDGE Rubber", code: "AZBTED21", particulars: "3 MTR", category: "Boom Barriers" },
  { id: "bb-acc-65", name: "STOP SIGN BOARD", code: "AZBBSSB01", particulars: "1 No", category: "Boom Barriers" }
];

let content = fs.readFileSync('src/data/products.ts', 'utf8');

// Insert the new items right before the closing bracket of products array
const insertionPoint = content.lastIndexOf('];');

if (insertionPoint !== -1) {
  const itemsString = ',\n' + bbItems.map(item => `  {
    id: "${item.id}",
    name: "${item.name}",
    code: "${item.code}",
    particulars: "${item.particulars}",
    category: "${item.category}",
    image: "https://picsum.photos/seed/${item.id}/400/300"
  }`).join(',\n') + '\n';

  content = content.slice(0, insertionPoint) + itemsString + content.slice(insertionPoint);
  fs.writeFileSync('src/data/products.ts', content);
  console.log('Added ' + bbItems.length + ' Boom Barrier items to products.ts');
} else {
  console.log('Could not find insertion point');
}
