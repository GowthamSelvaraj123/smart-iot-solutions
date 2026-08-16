const fs = require('fs');

const routerItem = {
    id: "lr300g-p",
    name: "10-Port Cloud Managed Router with 110 W PoE Budget",
    code: "LR300G-P",
    particulars: "10 Ports, 110W PoE, Cloud Managed",
    category: "Networking & Routers",
    isFeatured: true,
    image: "images/LR300G-P.png",
    specs: {
        "Overview": {
            "Dimensions": "202 mm x 108 mm x 28 mm (7.95 in. x 4.25 in. x 1.10 in.)",
            "Weight": "1.62 kg (with packaging) / 0.55 kg (without packaging)",
        },
        "Port Specifications": {
            "Total number of RJ45 ports": "10",
            "Number of 10/100/1000BASE-T ports": "10",
            "Maximum number of LAN port": "9",
            "Maximum number of WAN ports": "4",
            "Number of fixed LAN ports": "6",
            "Number of fixed WAN ports": "1",
            "Number of LAN/WAN ports": "3",
            "Number of PoE/PoE+ Out ports": "8",
        },
        "PoE Specifications": {
            "PoE budget": "110 w",
            "PoE power pins": "1–2 (+), 3–6 (-)",
        },
        "Hardware": {
            "Enclosure Material": "Metal",
            "Mounting Type": "Desktop Mounting",
            "Warranty": "3 years",
        },
        "System Specifications": {
            "CPU": "Dual-core processor, 1.35 GHz clock frequency per core",
            "Flash memory": "256 MB",
            "RAM": "512 MB",
            "LEDs": "1 x system status LED, 10 x Ethernet port LEDs",
            "Buttons": "1 x reset button",
        },
        "System Performance": {
            "Maximum number of concurrent sessions": "100000",
            "Recommended number of concurrent clients": "350",
            "Throughput": "1.5 Gbps",
        },
        "Power Supply": {
            "Power method": "DC adapter",
            "Rated input voltage": "100 V AC to 240 V AC, 50 Hz to 60Hz",
            "Output": "54 V DC, 2.4 A",
            "Max. Power Consumption": "9 W (no PoE load), 119 W (with full PoE load)",
        },
        "Environment and Reliability": {
            "Operating temperature": "–10°C to +50°C",
            "Operating humidity": "0% RH to 100% RH (non-condensing)",
            "Cooling": "Fanless, Natural cooling",
        },
        "Software - IP Routing": {
            "Working mode": "AC mode, Routing mode",
            "Maximum number of VLANs": "500",
            "Maximum number of IPv4 static routes": "100",
            "OSPF": "Yes (Number of OSPFv2 instances: 16)",
        },
        "Security & Authentication": {
            "Security": "ACL, IP-MAC binding, MAC address filtering, Security zone, Local attack defense",
            "Authentication": "Local portal, Cloud portal, 802.1X, PPPoE, SMS, Voucher",
        },
        "VPN Performance": {
            "Site-to-Site VPN": "IPsec VPN, WireGuard, L2TP, OpenVPN",
            "Client-to-Site VPN": "OpenVPN, PPTP, WireGuard",
            "IPsec VPN bandwidth": "170 Mbps",
            "WireGuard performance": "300 Mbps",
            "SD-WAN performance": "300 Mbps",
        },
        "Management": {
            "Cloud management": "Yes",
            "Web management": "Yes",
            "App management": "Yes",
        }
    }
};

let content = fs.readFileSync('src/data/products.ts', 'utf8');

// Update type definition
content = content.replace(/"Accessories";/, '"Accessories" | "Networking & Routers";\n  isFeatured?: boolean;\n  specs?: Record<string, Record<string, string>>;\n');

// Insert the new items right before the closing bracket of products array
const insertionPoint = content.lastIndexOf('];');

if (insertionPoint !== -1) {
  const itemString = ',\n  // FEATURED ROUTER\n  ' + JSON.stringify(routerItem, null, 2) + '\n';
  content = content.slice(0, insertionPoint) + itemString + content.slice(insertionPoint);
  fs.writeFileSync('src/data/products.ts', content);
  console.log('Added LR300G-P to products.ts');
} else {
  console.log('Could not find insertion point');
}
