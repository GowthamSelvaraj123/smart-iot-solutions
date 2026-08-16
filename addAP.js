const fs = require('fs');

const apItem = {
    id: "eap510",
    name: "EAP510 11AC 1200Mbps Dual Band Gigabit Ceiling Wireless AP",
    code: "EAP510",
    particulars: "Dual Band (2.4GHz + 5GHz), MU-MIMO, Wave 2.0, up to 120 Users, PoE Supported",
    category: "Networking & Routers",
    isFeatured: false,
    image: "https://picsum.photos/seed/eap510/400/300",
    specs: {
        "Hardware Specifications": {
            "Standard": "802.11ac/b/g/n, MIMO technology",
            "Flash Memory": "16MB",
            "DDR3L RAM": "128MB",
            "Interfaces": "1 x 10/100/1000 RJ45 LAN/WAN Port, 1 x 10/100/1000 RJ45 LAN Port, 1 x Reset button",
            "Antenna": "Built-in 5dBi (2.4GHz) / 4dBi (5.8GHz) MIMO Antenna",
            "Max Data Rate": "1200Mbps",
            "Maximum End Users": "120",
            "Power Consumption": "= 12W",
            "Power Supply (DC)": "12V 1A",
            "Power Supply (PoE)": "48V (IEEE 802.3af) 0.5A",
            "Dimensions": "168mm x 168mm x 32mm"
        },
        "RF Specifications": {
            "2.4G Frequency Range": "2.4GHz - 2.484GHz",
            "5.8G Frequency Range": "5150~5850MHz",
            "2.4G RF Power": "= 20dBm",
            "5.8G RF Power": "= 23dBm"
        },
        "Software & Wireless Features": {
            "Working Mode": "Gateway, AP, Repeater, WISP",
            "Multiple SSIDs": "Supported (4 on 2.4GHz, 4 on 5.8GHz)",
            "Seamless Roaming": "Supported (802.11kvr standard)",
            "Advanced Wireless": "5G Prior, MAC filter, Wi-Fi time on/off, Client isolation, RF power adjustable",
            "Wireless Security": "Open, WPA, WPA2PSK_TKIPAES, WAP2_EAP, 802.1x",
            "Device Management": "Web GUI, AC controller, Remote management, Cloud management"
        },
        "Environment": {
            "Operating Temperature": "-20~55 ?",
            "Storage Temperature": "-40~70 ?",
            "Operating Humidity": "5%~95% non-condensing"
        }
    }
};

let content = fs.readFileSync('src/data/products.ts', 'utf8');

const insertionPoint = content.lastIndexOf('];');

if (insertionPoint !== -1) {
  const itemString = ',\n  // EAP510 ACCESS POINT\n  ' + JSON.stringify(apItem, null, 2) + '\n';
  content = content.slice(0, insertionPoint) + itemString + content.slice(insertionPoint);
  fs.writeFileSync('src/data/products.ts', content);
  console.log('Added EAP510 to products.ts');
} else {
  console.log('Could not find insertion point');
}
