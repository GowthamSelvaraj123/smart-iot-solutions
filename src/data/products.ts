export interface Product {
  id: string;
  name: string;
  code: string;
  particulars: string;
  category: "Swing Gate Operators" | "Boom Barriers" | "Sliding Gate Operators" | "Sliding Glass Door Operators" | "Switches & Controls" | "Smart Curtains" | "Lighting" | "Smart Locks & Security" | "Gateways & Controllers" | "Accessories" | "Networking & Routers";
  isFeatured?: boolean;
  specs?: Record<string, Record<string, string>>;

  image?: string;
}

export const products: Product[] = [
  // SWING GATE OPERATORS
  {
    id: "sg-1", image: "/images/products/exterior.jpg",
    name: "QUIK - Single Pedestrian Gate Operator",
    code: "AZSW600-1.2M",
    particulars: "OPERATOR - 1 NO, SMPS - 1 No, TRANSMITTER - 2 NOS",
    category: "Swing Gate Operators",
  },
  {
    id: "sg-2", image: "/images/products/exterior.jpg",
    name: "ICON - Swing Gate Single operator Left DC 2.5 Mtr 250 kg",
    code: "AZSW1062.5/250KG-L",
    particulars: "Operator - 1 No, Control Panel - 1No, TRANSMITTER - 2 Nos",
    category: "Swing Gate Operators",
  },
  {
    id: "sg-3", image: "/images/products/exterior.jpg",
    name: "ICON - Swing Gate Single Operator Right DC 2.5 Mtr 250 kg",
    code: "AZSW1062.5/250KG-R",
    particulars: "Operator - 1 No, Control Panel - 1No, TRANSMITTER - 2 Nos",
    category: "Swing Gate Operators",
  },
  {
    id: "sg-4", image: "/images/products/exterior.jpg",
    name: "LINK - Swing Gate Single Operator DC 3 Mtr 300 kg",
    code: "AZSW110A/300KG/3MTR/1",
    particulars: "Operator - 1 No, Control Panel - 1 No, TRANSMITTER - 2 Nos",
    category: "Swing Gate Operators",
  },
  {
    id: "sg-5", image: "/images/products/exterior.jpg",
    name: "LITE - Swing Gate articulator Single operator LEFT DC 4 mtr 400 Kg",
    code: "AZSW107B/4MTR 400KG-L",
    particulars: "Operator - 1 No, Control Panel - 1 No, TRANSMITTER - 2 Nos",
    category: "Swing Gate Operators",
  },
  {
    id: "sg-6", image: "/images/products/exterior.jpg",
    name: "ECO - Swing gate Single Roller operator 400 Kg",
    code: "AZSW108A/400KG 1",
    particulars: "Operator - 1 No, Control Panel - 1 No, TRANSMITTER - 2 Nos",
    category: "Swing Gate Operators",
  },
  {
    id: "sg-7", image: "/images/products/exterior.jpg",
    name: "ROBO - Swing Gate Single Roller Operator 1000 kg",
    code: "AZSW109A/1000KG 1",
    particulars: "Operator - 1 No, Control Panel - 1 No, TRANSMITTER - 2 Nos",
    category: "Swing Gate Operators",
  },
  {
    id: "sg-8", image: "/images/products/exterior.jpg",
    name: "ICON - Swing Gate Two Operator DC 2.5mtr 500 kg Kit",
    code: "AZSW1062.5/250KG/2",
    particulars: "Operator - 2 No, Control Panel - 1No, TRANSMITTER - 2 Nos, Photocell - 1 pair",
    category: "Swing Gate Operators",
  },

    {
    id: "sg-9", image: "/images/products/exterior.jpg",
    name: "ICON - Swing Gate Two Operator DC 3 mtr 600 kgs Kit",
    code: "AZSW1063/300KG/2",
    particulars: "Operator - 2 No, Control Panel - 1No, TRANSMITTER - 2 Nos, Photocell - 1 pair",
    category: "Swing Gate Operators"
  },
  {
    id: "sg-10", image: "/images/products/exterior.jpg",
    name: "LINK - Swing Gate operator DC 3 mtr 600 kgs Kit",
    code: "AZSW110A/3MTR/300KG 2",
    particulars: "Operator - 2 No, Control Panel - 1No, TRANSMITTER - 2 Nos, Photocell - 1 pair",
    category: "Swing Gate Operators"
  },
  {
    id: "sg-11", image: "/images/products/exterior.jpg",
    name: "LITE - Swing Gate articulator operator DC",
    code: "AZSW107B/2",
    particulars: "Operator - 2 No, Control Panel - 1No, TRANSMITTER - 2 Nos, Photocell - 1 pair",
    category: "Swing Gate Operators"
  },
  {
    id: "sg-12", image: "/images/products/exterior.jpg",
    name: "ECO - SWING GATE ROLLER OPERATOR 800Kgs - KIT",
    code: "AZSW108A/400KG/2",
    particulars: "Operator - 2 No, Control Panel - 1No, TRANSMITTER - 2 Nos, Photocell - 1 pair",
    category: "Swing Gate Operators"
  },
  {
    id: "sg-13", image: "/images/products/exterior.jpg",
    name: "ECO - Swing gate roller operator 1600Kgs - Kit",
    code: "AZSW108B/800KG/2",
    particulars: "Operator - 2 No, Control Panel - 1No, TRANSMITTER - 2 Nos, Photocell - 1 pair",
    category: "Swing Gate Operators"
  },
  {
    id: "sg-14", image: "/images/products/exterior.jpg",
    name: "ROBO - Swing gate roller operator 2000Kgs - Kit",
    code: "AZSW109A/1000KG/2",
    particulars: "Operator - 2 No, Control Panel - 1No, TRANSMITTER - 2 Nos, Photocell - 1 pair",
    category: "Swing Gate Operators"
  },
  {
    id: "sg-15", image: "/images/products/exterior.jpg",
    name: "GRID - Pedestrian Gate Operator 75KG",
    code: "AZSW111PGO",
    particulars: "Operator kit with Control board & Accessories",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-1", image: "/images/products/exterior.jpg",
    name: "IND TRANSMITTER",
    code: "AZT30A",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-2", image: "/images/products/exterior.jpg",
    name: "IND TRANSMITTER",
    code: "AZT23B",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-3", image: "/images/products/exterior.jpg",
    name: "IND TRANSMITTER",
    code: "AZT23G",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-4", image: "/images/products/exterior.jpg",
    name: "Multi Brand Transmitter",
    code: "AZTMB701A",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-5", image: "/images/products/exterior.jpg",
    name: "TRANSMITTER PG",
    code: "AZPGOT757",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-6", image: "/images/products/exterior.jpg",
    name: "TRANSMITTER SUITABLE FOR (AZSW600)",
    code: "AZT600",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-7", image: "/images/products/exterior.jpg",
    name: "TRANSMITTER SUITABLE FOR (AZSW107B)",
    code: "AZT31",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-8", image: "/images/products/exterior.jpg",
    name: "BOLT-Photocell",
    code: "AZPC10A",
    particulars: "1 Pair",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-9", image: "/images/products/exterior.jpg",
    name: "BOLT-Photocell Wireless",
    code: "AZPCWL11A",
    particulars: "1 Pair",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-10", image: "/images/products/exterior.jpg",
    name: "Laser Photocell",
    code: "AZLPC12",
    particulars: "1 NO",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-11", image: "/images/products/exterior.jpg",
    name: "Infrared Photocell",
    code: "AZIR20",
    particulars: "1 NO",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-12", image: "/images/products/exterior.jpg",
    name: "Infrared Sensor 4 BEAM 20M",
    code: "AZIS4F20",
    particulars: "1 pair",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-13", image: "/images/products/exterior.jpg",
    name: "Infrared Sensor 6 BEAM 20M",
    code: "AZIS6F20",
    particulars: "1 pair",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-14", image: "/images/products/exterior.jpg",
    name: "REFLECTIVE PHOTOCELL",
    code: "AZRFPC41A8M",
    particulars: "1 Pair",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-15", image: "/images/products/exterior.jpg",
    name: "Smart Receiver",
    code: "AZSR519",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-16", image: "/images/products/exterior.jpg",
    name: "Samart Tag",
    code: "AZST518",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-17", image: "/images/products/exterior.jpg",
    name: "External Receiver (4 CHANNEL)",
    code: "AZER141",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-18", image: "/images/products/exterior.jpg",
    name: "RF WIFI MODULE",
    code: "AZRFWIFI31A",
    particulars: "1 no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-19", image: "/images/products/exterior.jpg",
    name: "Long Range External Reciver",
    code: "AZRER140",
    particulars: "1 Pair",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-20", image: "/images/products/exterior.jpg",
    name: "GSM MODULE 2G",
    code: "AZGSM30",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-21", image: "/images/products/exterior.jpg",
    name: "KEYSWITCH",
    code: "AZKS15",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-22", image: "/images/products/exterior.jpg",
    name: "WIRELESS KEY PAD",
    code: "AZWLKP17",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-23", image: "/images/products/exterior.jpg",
    name: "PUSHBUTTON",
    code: "AZPB16A",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-24", image: "/images/products/exterior.jpg",
    name: "PUSHBUTTON WATERPROOF",
    code: "AZPBIP65",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-25", image: "/images/products/exterior.jpg",
    name: "PUSHBUTTON WITH KEY",
    code: "AZPBK16B",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-26", image: "/images/products/exterior.jpg",
    name: "PUSHBUTTON",
    code: "AZPB16C",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-27", image: "/images/products/exterior.jpg",
    name: "PCB PUSHBUTTON",
    code: "AZPB16E",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-28", image: "/images/products/exterior.jpg",
    name: "TWO BUTTON PUSHBUTTON",
    code: "AZPB16F",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-29", image: "/images/products/exterior.jpg",
    name: "Finger Print & Password/card",
    code: "AZPFAC452",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-30", image: "/images/products/exterior.jpg",
    name: "FLASH LAMP",
    code: "AZFL19",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-31", image: "/images/products/exterior.jpg",
    name: "FLASH LAMP",
    code: "AZFL20",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-32", image: "/images/products/exterior.jpg",
    name: "ALARM FLASH LAMP",
    code: "AZAFLAC19A",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-33", image: "/images/products/exterior.jpg",
    name: "ALARM FLASH LAMP",
    code: "AZAFLDC19B",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-34", image: "/images/products/exterior.jpg",
    name: "FLASH LAMP",
    code: "AZFLAC21",
    particulars: "1 no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-35", image: "/images/products/exterior.jpg",
    name: "SIGNAL LIGHT 24V",
    code: "AZSL12AADC",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-36", image: "/images/products/exterior.jpg",
    name: "SIGNAL LIGHT 230V",
    code: "AZSL12AAC",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-37", image: "/images/products/exterior.jpg",
    name: "ELECTRONIC BOTTOM LOCK",
    code: "AZSWELBL32",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-38", image: "/images/products/exterior.jpg",
    name: "ELECTRONIC CENTER LOCK",
    code: "AZSWELCL33",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-39", image: "/images/products/exterior.jpg",
    name: "CONTROLLER FOR AC",
    code: "AZSW231A",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-40", image: "/images/products/exterior.jpg",
    name: "CONTROLLER",
    code: "AZSW229A",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-41", image: "/images/products/exterior.jpg",
    name: "CONTROLLER",
    code: "AZSWDC227A",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-42", image: "/images/products/exterior.jpg",
    name: "PCB ONLY FOR AZSW600",
    code: "AZSWPCB600",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-43", image: "/images/products/exterior.jpg",
    name: "SMPS FOR AZSW600",
    code: "AZSWSMPS600",
    particulars: "1 NO",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-44", image: "/images/products/exterior.jpg",
    name: "PCB ONLY DIGITAL BOARD - ID200",
    code: "AZSWDPCB200A",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-45", image: "/images/products/exterior.jpg",
    name: "PCB ONLY",
    code: "AZSWPCB580C",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-46", image: "/images/products/exterior.jpg",
    name: "PCB ONLY DC ANALOG BOARD - T90",
    code: "AZSWDPCB228",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-47", image: "/images/products/exterior.jpg",
    name: "PCB ONLY AC",
    code: "AZSWACPCB231A",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-48", image: "/images/products/exterior.jpg",
    name: "PCB ONLY - K280",
    code: "AZSWPCB107B",
    particulars: "1no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-49", image: "/images/products/exterior.jpg",
    name: "PEDESTRIAN CONTROL BOARD (PCB)",
    code: "AZPGOCB751",
    particulars: "1 no",
    category: "Swing Gate Operators"
  },
  {
    id: "acc-50", image: "/images/products/exterior.jpg",
    name: "Gate Rubber stopper",
    code: "AZSWRS234",
    particulars: "1NOS",
    category: "Swing Gate Operators"
  },
  {
    id: "safe-1", image: "/images/products/exterior.jpg",
    name: "RUBBER PROFILE (60*40)",
    code: "AZSEGR206",
    particulars: "1 Meter",
    category: "Swing Gate Operators"
  },
  {
    id: "safe-2", image: "/images/products/exterior.jpg",
    name: "ALUMINIUM TRACK (60*40)",
    code: "AZSEGAT106",
    particulars: "1 - No (2m)",
    category: "Swing Gate Operators"
  },
  {
    id: "safe-3", image: "/images/products/exterior.jpg",
    name: "Sensor Tape",
    code: "AZSEST3",
    particulars: "1 Meter",
    category: "Swing Gate Operators"
  },
  {
    id: "safe-4", image: "/images/products/exterior.jpg",
    name: "End Plug",
    code: "AZSEP206",
    particulars: "1 PAIR",
    category: "Swing Gate Operators"
  },
  {
    id: "safe-5", image: "/images/products/exterior.jpg",
    name: "End Cap",
    code: "AZSEEP05",
    particulars: "1 PAIR",
    category: "Swing Gate Operators"
  },
  {
    id: "safe-6", image: "/images/products/exterior.jpg",
    name: "SAFETY EDGE SENSOR STRIP",
    code: "AZHSDBES64B",
    particulars: "1 Nos",
    category: "Swing Gate Operators"
  },
  {
    id: "safe-7", image: "/images/products/exterior.jpg",
    name: "RUBBER PROFILE (40*30)",
    code: "AZSEGR304",
    particulars: "1 Meter",
    category: "Swing Gate Operators"
  },
  {
    id: "safe-8", image: "/images/products/exterior.jpg",
    name: "ALUMINIUM TRACK (40*30)",
    code: "AZSEGAT113",
    particulars: "1 - No (2m/pc)",
    category: "Swing Gate Operators"
  },

  // BOOM BARRIERS
  {
    id: "bb-1", image: "/images/products/exterior.jpg",
    name: "ZEN-BLDC BOOM BARRIER",
    code: "AZBB113/AZBTO12M",
    particulars: "BOOM 2M ROUND LED, TRANSMITTER (2 NOS)",
    category: "Boom Barriers",
  },
  {
    id: "bb-2", image: "/images/products/exterior.jpg",
    name: "ROD - TELESCOPIC HYBRID BLDC BOOM BARRIER",
    code: "AZBB115A/AZBT01A6M",
    particulars: "TELESCOPIC BOOM 6 MTR, TRANSMITTER (2 Nos), V HOLDER",
    category: "Boom Barriers",
  },
  {
    id: "bb-3", image: "/images/products/exterior.jpg",
    name: "ROD-ARM OUT HYBRID BLDC BOOM BARRIER",
    code: "AZBB115A/AZBA06A",
    particulars: "ARM OUT SQURE BOOM 6 MTR, TRANSMITTER (2 Nos)",
    category: "Boom Barriers",
  },
  {
    id: "bb-4", image: "/images/products/exterior.jpg",
    name: "ROD - LED BLDC HYBRID BOOM BARRIER",
    code: "AZBB115A/AZBLO7A6M",
    particulars: "LED BOOM 6 MTR, TRANSMITTER (2 Nos)",
    category: "Boom Barriers",
  },
  {
    id: "bb-5", image: "/images/products/exterior.jpg",
    name: "ROD - FOLDING HYBRID BLDC BOOM BARRIER 90 DEGREE",
    code: "AZBB115A/AZBF05A90D",
    particulars: "FOLDING BOOM 4 MTR, TRANSMITTER (2 Nos)",
    category: "Boom Barriers",
  },
  {
    id: "bb-6", image: "/images/products/exterior.jpg",
    name: "ROD - FENCE HYBRID BLDC BOOM BARRIER",
    code: "AZBB115A/AZBFO3A4.5M",
    particulars: "FENCH BOOM 4.5 MTR, TRANSMITTER (2 Nos)",
    category: "Boom Barriers",
  },
  {
    id: "bb-7", image: "/images/products/exterior.jpg",
    name: "RUSH- TELESCOPIC BLDC BOOM BARRIER",
    code: "AZBBL18/AZBT01A6M",
    particulars: "TELESCOPIC BOOM 6 MTR, TRANSMITTER (2 Nos)",
    category: "Boom Barriers",
  },
  {
    id: "bb-8", image: "/images/products/exterior.jpg",
    name: "TITAN- 8M TELESCOPIC BLDC BOOM BARRIER",
    code: "AZBB119/AZBT088M",
    particulars: "TELESCOPIC BOOM 8 MTR, TRANSMITTER (2 Nos)",
    category: "Boom Barriers",
  }
,
  {
    id: "bb-9",
    name: "ROD - FOLDING HYBRID BLDC BOOM BARRIER 180 DEGREE",
    code: "AZBB115A/AZBF10A180D",
    particulars: "FOLDING BOOM 4 MTR, TRANSMITTER (2 Nos)",
    category: "Boom Barriers",
    image: "https://images.unsplash.com/photo-1626229562768-45ee6cc3f374?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "bb-10",
    name: "RUSH-ARM OUT BLDC BOOM BARRIER (NON SPRING)",
    code: "AZBBL18/AZBA06A",
    particulars: "ARM OUT SQURE BOOM 6 MTR, TRANSMITTER (2 Nos)",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-11",
    name: "RUSH-LED BLDC BOOM BARRIER (NON SPRING)",
    code: "AZBBL18/AZBLO7A6M",
    particulars: "LED BOOM 6 MTR, TRANSMITTER (2 Nos)",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-12",
    name: "RUSH-FOLDING BLDC BOOM BARRIER 90 DEGREE (NON SPRING)",
    code: "AZBBL18/AZBF05A90D",
    particulars: "FOLDING BOOM 4 MTR, TRANSMITTER (2 Nos)",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-13",
    name: "RUSH-FOLDING BLDC BOOM BARRIER 180 DEGREE (NON SPRING)",
    code: "AZBBL18/AZBF10A180D",
    particulars: "FOLDING BOOM 4 MTR, TRANSMITTER (2 Nos)",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-14",
    name: "RUSH- FENCE BLDC BOOM BARRIER (NON SPRING)",
    code: "AZBBL18/AZBFO3A4.5M",
    particulars: "FENCH BOOM 4.5 MTR, TRANSMITTER (2 Nos)",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-15",
    name: "STAR-FENCE BLDC BOOM BARRIER",
    code: "AZBB115/AZBF036M",
    particulars: "FENCH BOOM 6MTR, TRANSMITTER - 2 NOS",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-16",
    name: "ADD - ADVERTISING BLDC BOOM BARRIER",
    code: "AZBBA117B/AZBA09A",
    particulars: "BOOM - 4 MTR 6SEC, TRANSMITTER (2 Nos)",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-1",
    name: "BLDC TRANSMITTER",
    code: "AZBLDCTX22",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-2",
    name: "BLDC TRANSMITTER",
    code: "AZBLDCTX23",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-15",
    name: "Transmitter",
    code: "AZT142",
    particulars: "1 NO",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-24",
    name: "LOOP DETECTOR SINGLE CHANNEL",
    code: "AZLB33",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-25",
    name: "LOOP DETECTOR DOUBLE CHANNEL",
    code: "AZLB34",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-33",
    name: "VHOLDER",
    code: "AZBBVH01",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-34",
    name: "VHOLDER",
    code: "AZBBVH01A",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-35",
    name: "BOOM BARRIER MOBILE STAND",
    code: "AZBBMVH02",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-36",
    name: "TELESCOPIC BOOM 6 MTR",
    code: "AZBT016M",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-37",
    name: "TELESCOPIC BOOM 4 MTR",
    code: "AZBT014M",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-38",
    name: "FOLDING BOOM 90 DEGREE 6MTR",
    code: "AZBF0590D",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-39",
    name: "LED BOOM 6MTR",
    code: "AZBL076M",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-40",
    name: "ARM OUT ROUND BOOM 4MTR",
    code: "AZBA04",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-41",
    name: "FENCE BOOM 4.5MTR",
    code: "AZBF034.5M",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-42",
    name: "FENCE BOOM 6MTR",
    code: "AZBF036M",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-43",
    name: "BLDC CONTROL BOARD",
    code: "AZBBLDCCB730",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-44",
    name: "BLDC CONTROL BOARD",
    code: "AZBBLDCCB704",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-45",
    name: "ARROW INDICATION LED LIGHT",
    code: "AZBBAI606",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-46",
    name: "TELESCOPIC BOOM 6 MTR",
    code: "AZBT01A6M",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-47",
    name: "LED BOOM 6MTR",
    code: "AZBL07A6M",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-48",
    name: "TWO FENCE BOOM 4.5 MTR",
    code: "AZBF03A4.5M",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-49",
    name: "FOLDING BOOM 90 DEGREE 4MTR",
    code: "AZBF05A90D",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-50",
    name: "FOLDING BOOM 180 DEGREE 4MTR",
    code: "AZBF10A180D",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-51",
    name: "TELESCOPIC BOOM 8M",
    code: "AZBT088M",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-52",
    name: "ADVERTISEMENT BOOM 2.8 MTR",
    code: "AZBA09A",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-53",
    name: "ARM OUT SQUARE BOOM 6MTR",
    code: "AZBA06A",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-54",
    name: "CONTROLLER",
    code: "AZBBCBNS03",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-55",
    name: "CONTROLLER",
    code: "AZBBCBNS04",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-56",
    name: "CONTROLLER",
    code: "AZBBCBNS05",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-57",
    name: "Power Failure Auto Opening Module",
    code: "AZBBAOM01",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-58",
    name: "Battery Backup Module",
    code: "AZBBBM19",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-59",
    name: "POWER SUPPLY 24V 8A",
    code: "AZBBPS708",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-60",
    name: "POWER SUPPLY 24V 20.8A",
    code: "AZBBPS720",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-61",
    name: "POWER SUPPLY FOR LED 12V 15A",
    code: "AZBBPS709",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-62",
    name: "POWER SUPPLY 24V 10A",
    code: "AZBBPS710",
    particulars: "1 no",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-63",
    name: "LED STRIP 6 Meter",
    code: "AZBBLEDS20",
    particulars: "6 MTR",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-64",
    name: "EDGE Rubber",
    code: "AZBTED21",
    particulars: "3 MTR",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "bb-acc-65",
    name: "STOP SIGN BOARD",
    code: "AZBBSSB01",
    particulars: "1 No",
    category: "Boom Barriers",
    image: "/images/products/exterior.jpg"
  }
,
  // SLIDING GATE OPERATORS
  {
    id: "sl-1",
    name: "UNIQ 800KG",
    code: "AZSL97",
    particulars: "Operator only 24V DC, TRANSMITTER - 2 Nos",
    category: "Sliding Gate Operators",
    image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "sl-2",
    name: "DC 800KG",
    code: "AZSL99B",
    particulars: "Operator only 24V DC, TRANSMITTER - 2 Nos",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-3",
    name: "PRO 600KG",
    code: "AZSL100B",
    particulars: "Operator only 220V AC, TRANSMITTER - 2 Nos",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-4",
    name: "PRO 1000KG",
    code: "AZSL101B",
    particulars: "Operator only 220V AC, TRANSMITTER - 2 Nos",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-5",
    name: "PRO 1500KG",
    code: "AZSL102B",
    particulars: "Operator only 220V AC, TRANSMITTER - 2 Nos",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-6",
    name: "PRO 2000KG",
    code: "AZSL1021B",
    particulars: "Operator only 220V AC, TRANSMITTER - 2 Nos",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-7",
    name: "POWER 2000KG",
    code: "AZSL103I",
    particulars: "Operator Only 220V AC, TRANSMITTER - 2 Nos",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-8",
    name: "POWER 3000KG",
    code: "AZSL104I",
    particulars: "Operator Only 220V AC, TRANSMITTER - 2 Nos",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-9",
    name: "POWER 4000KG",
    code: "AZSL105I",
    particulars: "Operator Only 220V AC, TRANSMITTER - 2 Nos",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-10",
    name: "HULK 5000KG",
    code: "AZSL605I",
    particulars: "Operator Only 220V AC, TRANSMITTER - 2 Nos",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-11",
    name: "HULK 6000KG",
    code: "AZSL606I",
    particulars: "Operator Only 220V AC, TRANSMITTER - 2 Nos",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-12",
    name: "DC 800KG KIT",
    code: "AZSL99B/KIT",
    particulars: "Operator 24V DC, TRANSMITTER - 2 Nos, BOLT-Photocells, GI Rack - 4 Nos",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-13",
    name: "PRO 600KG KIT",
    code: "AZSL100B/KIT",
    particulars: "Operator 220V AC, TRANSMITTER - 2 Nos, BOLT-Photocells, GI Rack - 4 Nos",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-14",
    name: "PRO 1000KG KIT",
    code: "AZSL101B/KIT",
    particulars: "Operator 220V AC, TRANSMITTER - 2 Nos, BOLT-Photocells, GI Rack - 4 Nos",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-15",
    name: "PRO 1500KG KIT",
    code: "AZSL102B/KIT",
    particulars: "Operator 220V AC, TRANSMITTER - 2 Nos, BOLT-Photocells, GI Rack - 4 Nos",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-16",
    name: "PRO 2000KG KIT",
    code: "AZSL1021B/KIT",
    particulars: "Operator 220V AC, TRANSMITTER - 2 Nos, BOLT-Photocells, GI Rack - 4 Nos",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-1",
    name: "TRANSMITTER",
    code: "AZT30A",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-2",
    name: "IND TRANSMITTER",
    code: "AZT23B",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-3",
    name: "IND TRANSMITTER",
    code: "AZT23G",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-4",
    name: "Multi Brand Transmitter",
    code: "AZTMB701A",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-5",
    name: "BOLT-Photocell",
    code: "AZPC10A",
    particulars: "1 Pair",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-6",
    name: "BOLT-Photocell Wireless",
    code: "AZPCWL11A",
    particulars: "1 Pair",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-7",
    name: "Laser Photocell",
    code: "AZLPC12",
    particulars: "1 NO",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-8",
    name: "Infrared Photocell",
    code: "AZIR20",
    particulars: "1 NO",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-9",
    name: "Infrared Sensor 4 BEAM 20M",
    code: "AZIS4F20",
    particulars: "1 pair",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-10",
    name: "Infrared Sensor 6 BEAM 20M",
    code: "AZIS6F20",
    particulars: "1 pair",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-11",
    name: "REFLECTIVE PHOTOCELL",
    code: "AZRFPC41A8M",
    particulars: "1 Pair",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-12",
    name: "Smart Receiver",
    code: "AZSR519",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-13",
    name: "Samart Tag",
    code: "AZST518",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-14",
    name: "External Receiver (4 CHANNEL)",
    code: "AZER141",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-15",
    name: "RF WIFI MODULE",
    code: "AZRFWIFI31A",
    particulars: "1 no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-16",
    name: "Long Range External Reciver",
    code: "AZRER140",
    particulars: "1 Pair",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-17",
    name: "Transmitter",
    code: "AZT142",
    particulars: "1 NO",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-18",
    name: "GSM MODULE 2G",
    code: "AZGSM30",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-19",
    name: "KEYSWITCH",
    code: "AZKS15",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-20",
    name: "WIRELESS KEY PAD",
    code: "AZWLKP17",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-21",
    name: "PUSHBUTTON",
    code: "AZPB16A",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-22",
    name: "PUSHBUTTON WATERPROOF",
    code: "AZPBIP65",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-23",
    name: "PUSHBUTTON WITH KEY",
    code: "AZPBK16B",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-24",
    name: "PUSHBUTTON",
    code: "AZPB16C",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-25",
    name: "PCB PUSHBUTTON",
    code: "AZPB16E",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-26",
    name: "TWO BUTTON PUSHBUTTON",
    code: "AZPB16F",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-27",
    name: "Finger Print & Password/card",
    code: "AZPFAC452",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-28",
    name: "FLASH LAMP",
    code: "AZFL19",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-29",
    name: "FLASH LAMP",
    code: "AZFL20",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-30",
    name: "ALARM FLASH LAMP",
    code: "AZAFLAC19A",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-31",
    name: "ALARM FLASH LAMP",
    code: "AZAFLDC19B",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-32",
    name: "FLASH LAMP",
    code: "AZFLAC21",
    particulars: "1 no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-33",
    name: "SIGNAL LIGHT 24V",
    code: "AZSL12ADC",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-34",
    name: "SIGNAL LIGHT 230V",
    code: "AZSL12AAC",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-35",
    name: "Battery Backup",
    code: "AZSLBB99B",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-36",
    name: "SOLAR PANEL KIT",
    code: "AZSLSP319",
    particulars: "1 no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-37",
    name: "9MM RACK",
    code: "AZ9MM",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-38",
    name: "12MM RACK",
    code: "AZ12MM",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-39",
    name: "22MM RACK",
    code: "AZ22MM",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-40",
    name: "8MMSS RACK",
    code: "AZ8MMSS",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-41",
    name: "30MMM6 RACK",
    code: "AZ30MMM6",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-42",
    name: "NYLON RACK",
    code: "AZNR25MM",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-43",
    name: "Programming Control PCB(K100Q)",
    code: "AZSLPCB97",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-44",
    name: "Control Board AC (Only PCB)",
    code: "AZSLAPCB300A",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-45",
    name: "Control Board DC (Only PCB)",
    code: "AZSLDPCB317A",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-46",
    name: "Control Board AC Fast (Only PCB)",
    code: "AZSLAFPCB330",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-47",
    name: "Control Board(Only PCB)",
    code: "AZSLPCB500",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-48",
    name: "Control Board AC (Only PCB)",
    code: "AZSLPCB300B",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-acc-49",
    name: "Control Board DC (Only PCB)",
    code: "AZSLPCB317B",
    particulars: "1no",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-safe-1",
    name: "RUBBER PROFILE (60*40)",
    code: "AZSEGR206",
    particulars: "1 Meter",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-safe-2",
    name: "ALUMINIUM TRACK (60*40)",
    code: "AZSEGAT106",
    particulars: "1 - No (2m/pc)",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-safe-3",
    name: "Sensor Tape",
    code: "AZSEST3",
    particulars: "1 Meter",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-safe-4",
    name: "End Plug",
    code: "AZSEP206",
    particulars: "1 PAIR",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-safe-5",
    name: "End Cap",
    code: "AZSEEP05",
    particulars: "1 PAIR",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-safe-6",
    name: "SAFETY EDGE SENSOR STRIP",
    code: "AZHSDBES64B",
    particulars: "1 Nos",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-safe-7",
    name: "RUBBER PROFILE (40*30)",
    code: "AZSEGR304",
    particulars: "1 Meter",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  },
  {
    id: "sl-safe-8",
    name: "ALUMINIUM TRACK (40*30)",
    code: "AZSEGAT113",
    particulars: "1 - No (2m/pc)",
    category: "Sliding Gate Operators",
    image: "/images/products/exterior.jpg"
  }
,
  // SLIDING GLASS DOOR OPERATORS
  {
    id: "gd-1",
    name: "FLOW-SLIDING GLASS DOOR OPERATOR 2M KIT",
    code: "AZSLD207/2M/KIT",
    particulars: "Operator, Controller, Belt, Pulley, Guide Rail 2M, Push Button",
    category: "Sliding Glass Door Operators",
    image: "https://images.unsplash.com/photo-1626229562768-45ee6cc3f374?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "gd-2",
    name: "GRO-SLIDING GLASS DOOR OPERATOR 2.5MTR KIT",
    code: "AZSLD200/2.5MTR/KIT",
    particulars: "Operator, Controller, Guide Rail 2.5M, Glass Clamp, Push Button",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-3",
    name: "ZOOM-SLIDING GLASS DOOR OPERATOR 4.2M KIT",
    code: "AZSLD201F/4.2 M/KIT",
    particulars: "Operator, Controller, Guide Rail 4.2M, Microwave Sensor, Photocell",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-4",
    name: "ZOOM-SLIDING GLASS DOOR OPERATOR 6M KIT",
    code: "AZSLD201F/6M/KIT",
    particulars: "Operator, Controller, Guide Rail 6M, Microwave Sensor, Photocell",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-1",
    name: "MICROWAVESENSOR",
    code: "AZMW98A",
    particulars: "1 no",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-2",
    name: "RADAR & INFRARED SENSOR",
    code: "AZRIS99A",
    particulars: "1no",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-3",
    name: "Wired Touchless Sensor",
    code: "AZSLDTLS73",
    particulars: "1 no",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-4",
    name: "WIRELESSS PUSH BUTTTON & RECEIVER",
    code: "AZSLDPBWL70A",
    particulars: "1 no",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-5",
    name: "KEYSWITCH",
    code: "AZSWDKS430",
    particulars: "1 no",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-6",
    name: "FOOT SENSOR",
    code: "AZFS92",
    particulars: "1 no",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-7",
    name: "Finger Print & Password IP68",
    code: "AZPFAC452",
    particulars: "1no",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-8",
    name: "SINGLE BEAMSENSOR",
    code: "AZSLDSBP71",
    particulars: "1 no",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-9",
    name: "DOUBLE Beam Photocell",
    code: "AZSLDDB75",
    particulars: "1 no",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-10",
    name: "Infrared Sensor 4 BEAM 20M",
    code: "AZIS4F20",
    particulars: "1 pair",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-11",
    name: "Infrared Sensor 6 BEAM 20M",
    code: "AZIS6F20",
    particulars: "1 pair",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-12",
    name: "LIGHT CURTAIN SENSOR",
    code: "AZLSEC46",
    particulars: "1no",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-13",
    name: "GLASS CLAMP 1M Top (Glass Size 12mm)",
    code: "AZCGT98",
    particulars: "1no",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-14",
    name: "Glass Clamp 1M Bottom (Glass Size 12mm)",
    code: "AZCGB99",
    particulars: "1no",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-15",
    name: "Aluminium Strip 2.5M",
    code: "AZGAS100",
    particulars: "1no",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-16",
    name: "Rubber Strip 2.5M",
    code: "AZGRS101",
    particulars: "1no",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-17",
    name: "1MTR GLASS HOLDER TRACK",
    code: "AZSLDGHTE411(1MTR)",
    particulars: "1 no",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  },
  {
    id: "gd-acc-18",
    name: "1.5MTR GLASS HOLDER TRACK",
    code: "AZSLDGHTE411(1.5MTR)",
    particulars: "1 no",
    category: "Sliding Glass Door Operators",
    image: "/images/products/interior.jpg"
  }
,
  // SMART HOME PRODUCTS
  {
    id: "sh-64b583b0",
    name: "ZigBee 1 Node Heavy Duty Retrofit switch module 5000W",
    code: "DS-RFT-1N",
    particulars: "",
    category: "Switches & Controls",
    image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "sh-b447d2c9",
    name: "ZigBee 2 Node Heavy Duty Retrofit switch module 1500W",
    code: "DS-RFT-2N",
    particulars: "",
    category: "Switches & Controls",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-f798c1fe",
    name: "ZigBee 3 Node Heavy Duty Retrofit switch module 800W",
    code: "DS-RFT-3N",
    particulars: "",
    category: "Switches & Controls",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-c75001bb",
    name: "ZigBee 4 Node Heavy Duty Retrofit switch module 800W",
    code: "DS-RFT-4N",
    particulars: "",
    category: "Switches & Controls",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-2a6303c4",
    name: "ZigBee Retrofit In-Wall 1 Node Curtain module 3A",
    code: "DS-RFT-CRT",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-d84280d4",
    name: "ZigBee Retrofit In-Wall 2 Node Curtain module 3A",
    code: "DS-RFT-2CRT",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-50c4d04d",
    name: "ZigBee Retrofit In-Wall 3 Node 800W Relay + 1 FAN 150W AC",
    code: "DS-RFT-3N+1F",
    particulars: "",
    category: "Accessories",
    image: "/images/products/security.jpg"
  },
  {
    id: "sh-31543173",
    name: "Dsmartz Socket Fits Wireless Compact ZigBee Gateway",
    code: "DS-GAT-1MM",
    particulars: "",
    category: "Switches & Controls",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-9771b0c5",
    name: "Wired Apple Homekit & Matter Supported Zigbee Gateway",
    code: "DS-GAT-1MWG",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-ff2c4b24",
    name: "250m Outdoor Pro Wired Dual Zigbee Gateway",
    code: "DS-GAT-1WMMG",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-895b76c8",
    name: "ZigBee Signal Repeater",
    code: "DS-GAT-1R",
    particulars: "",
    category: "Gateways & Controllers",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-e01786dc",
    name: "Dsmartz Touch Screen Panel In build Gateway 3.5 Inch",
    code: "DS-CPS-3.5INCH",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-5f55262d",
    name: "Dsmartz Touch Screen Panel In build Gateway 4 Inch",
    code: "DS-CPS-4INCH",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-cdca19e7",
    name: "Dsmartz Touch Screen Panel In build Gateway 8 Inch",
    code: "DS-CPS-8INCH",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-202ad76e",
    name: "Dsmartz Touch Screen Panel In build Gateway 10 Inch",
    code: "DS-CPS-10INCH",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-140cbdb1",
    name: "ZigBee Universal IR Smart Remote Control",
    code: "DS-UIR-01",
    particulars: "",
    category: "Gateways & Controllers",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-f7334ea3",
    name: "WiFi Universal IR Smart Remote Control",
    code: "DS-UIR-02",
    particulars: "",
    category: "Gateways & Controllers",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-b954e283",
    name: "Wireless ZigBee 4 Button",
    code: "DS-WMS-12SW",
    particulars: "",
    category: "Accessories",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-fc5e1543",
    name: "Wireless ZigBee 6 Button",
    code: "DS-WMS-18SW",
    particulars: "",
    category: "Accessories",
    image: "/images/products/security.jpg"
  },
  {
    id: "sh-3197720d",
    name: "Dsmartz ZigBee Wireless Rotary Knob",
    code: "DS-ROT-02",
    particulars: "",
    category: "Accessories",
    image: "/images/products/security.jpg"
  },
  {
    id: "sh-7a4d50f3",
    name: "8W-12W ZigBee dimmable Led Downlight Driver",
    code: "DS-ZLD-812",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-33226d33",
    name: "12W-18W ZigBee dimmable Led Downlight Driver",
    code: "DS-ZLD-1218",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-e076750d",
    name: "7W-15W Zigbee dimmable Led Downlight Driver",
    code: "DS-ZLD-715",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-a71bbba2",
    name: "16W-24W Zigbee dimmable Led Downlight Driver",
    code: "DS-ZLD-1624",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-0cad3668",
    name: "Constant Voltage ZigBee Smart dimmable Strip Driver",
    code: "DS-ZSD-2CH16A",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-3cae9c02",
    name: "Constant Voltage ZigBee RGB+CCT Strip Driver",
    code: "DS-ZSD-5CH16A",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-2971d3e6",
    name: "Deep Square panel 12W",
    code: "DS-PL-CCTDS12",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-0736a080",
    name: "Deep Square panel 18W",
    code: "DS-PL-CCTDS18",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-2051f5be",
    name: "Deep Round panel 12W",
    code: "DS-PL-CCTDR12",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-b7089838",
    name: "Deep Round panel 18W",
    code: "DS-PL-CCTDR18",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-c0707919",
    name: "Glowria 12W",
    code: "DS-CCTDIM-COB1",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-667441dc",
    name: "Glowria 18W",
    code: "DS-CCTDIM-COB2",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-6b12df27",
    name: "Spectra Down 12W",
    code: "DS-CCTDIM-COB3",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-5d71726d",
    name: "Spectra Down 18W",
    code: "DS-CCTDIM-COB4",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-ce7a91a9",
    name: "ZigBee 16W Glow Fall Surface Down Light",
    code: "DS-CCTDIM-COB5",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-c3f97630",
    name: "ZigBee 12w Luma Drop Surface Down Light",
    code: "DS-CCTDIM-COB6",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-0c9b0f32",
    name: "ZigBee 18w Luma Drop Surface Down Light",
    code: "DS-CCTDIM-COB7",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-6f8dd468",
    name: "SURFACE CYLINDER 12W",
    code: "DS-CCTDIM-COB8",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-833cfda8",
    name: "SURFACE CYLINDER 18W",
    code: "DS-CCTDIM-COB9",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-c2da44c5",
    name: "SURFACE ANGLE MOVABLE CYLINDER 12W",
    code: "DS-CCTDIM-COB10",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-3e41a124",
    name: "Lux Ease 12W",
    code: "DS-CCTDIM-COB11",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-94aab2ec",
    name: "Lux Ease 24W",
    code: "DS-CCTDIM-COB12",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-a1e95ec7",
    name: "Eye Zen 12W",
    code: "DS-CCTDIM-COB13",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-b1382307",
    name: "Eye Zen 24W",
    code: "DS-CCTDIM-COB14",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-5f9825c2",
    name: "Vision Safe 12W",
    code: "DS-CCTDIM-COB15",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-c6ef22d9",
    name: "Nimbus 12W",
    code: "DS-CCTDIM-COB16",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-580f875e",
    name: "Glare Guard 12W",
    code: "DS-CCTDIM-COB17",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-05c8d253",
    name: "Glare Guard 24W",
    code: "DS-CCTDIM-COB18",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-13363a08",
    name: "Prism 12W",
    code: "DS-CCTDIM-COB19",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-7e2f59d0",
    name: "Prism 18W",
    code: "DS-CCTDIM-COB20",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-c8bbf247",
    name: "Glintless 12W",
    code: "DS-CCTDIM-COB21",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-e60377ce",
    name: "ORA 12W",
    code: "DS-CCTDIM-COB22",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-d36d89e5",
    name: "ORA 18W",
    code: "DS-CCTDIM-COB23",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-b366f27f",
    name: "RAY 12W",
    code: "DS-CCTDIM-COB24",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-8035717d",
    name: "Glow Lust 12W",
    code: "DS-CCTDIM-COB25",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-a3a6d12f",
    name: "Glow Lust 18W",
    code: "DS-CCTDIM-COB26",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-448b9c40",
    name: "GLEAM 12W",
    code: "DS-CCTDIM-COB27",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-6941dd44",
    name: "GLEAM 18W",
    code: "DS-CCTDIM-COB28",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-cb9b27b2",
    name: "GLEAM 12W Gun Metal",
    code: "DS-CCTDIM-COB29",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-81544dd0",
    name: "GLEAM 18W Gun Metal",
    code: "DS-CCTDIM-COB30",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-571edd8e",
    name: "Deepcone pro 7W",
    code: "DS-CCTDIM-COB31",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-a59b3466",
    name: "Deepcone pro 12W",
    code: "DS-CCTDIM-COB32",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-d52ac22e",
    name: "Deepcone pro 18W",
    code: "DS-CCTDIM-COB33",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-c803b5f5",
    name: "DAZZEL 12W",
    code: "DS-CCTDIM-COB34",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-798afc2c",
    name: "DAZZEL 18W",
    code: "DS-CCTDIM-COB35",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-a6c5a2c9",
    name: "SPARKLE 12W",
    code: "DS-CCTDIM-COB36",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-a67e6ccd",
    name: "SPARKLE 18W",
    code: "DS-CCTDIM-COB37",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-8f2df5c2",
    name: "Dimora 12W",
    code: "DS-CCTDIM-COB38",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-1dc6bf65",
    name: "Softspill 7W",
    code: "DS-CCTDIM-COB39",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-405884b0",
    name: "Softspill 12W",
    code: "DS-CCTDIM-COB40",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-dc1226f8",
    name: "Glow Max 12W",
    code: "DS-CCTDIM-COB41",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-eee9d177",
    name: "Trim Glow Trimless 7W",
    code: "DS-CCTDIM-COB42",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-dacbd36a",
    name: "Trim Glow Trimless 12W",
    code: "DS-CCTDIM-COB43",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-5a2d89c5",
    name: "ULTRA LOW 12W",
    code: "DS-CCTDIM-COB44",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-6500ee6b",
    name: "Glanza Curve 7W",
    code: "DS-CCTDIM-COB45",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-0dba0413",
    name: "Glanza Curve 12W",
    code: "DS-CCTDIM-COB46",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-a316c3fd",
    name: "Glanza Curve 18W",
    code: "DS-CCTDIM-COB47",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-eba9edae",
    name: "Jett Square 12W",
    code: "DS-CCTDIM-COB48",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-ca3d556b",
    name: "Low Dapper 12W",
    code: "DS-CCTDIM-COB49",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-bcefe75e",
    name: "Extra Cone 12W",
    code: "DS-CCTDIM-COB50",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-2fdf7630",
    name: "Dapper 7W",
    code: "DS-CCTDIM-COB51",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-ad37da06",
    name: "Dapper 12W",
    code: "DS-CCTDIM-COB52",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-83454f36",
    name: "Dapper 18W",
    code: "DS-CCTDIM-COB53",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-9e5f9bee",
    name: "Dapper Plus 12W",
    code: "DS-CCTDIM-COB54",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-95ab143d",
    name: "Jett Spot 7W",
    code: "DS-CCTDIM-COB55",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-ecda82b9",
    name: "Jett Spot 12W",
    code: "DS-CCTDIM-COB56",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-9c78f230",
    name: "Deep Cone 7W",
    code: "DS-CCTDIM-COB57",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-295ce972",
    name: "Deep Cone 12W",
    code: "DS-CCTDIM-COB58",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-675fe769",
    name: "Sigma Spot 12W",
    code: "DS-CCTDIM-COB59",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-54804d67",
    name: "Flex Beam 12W",
    code: "DS-CCTDIM-COB60",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-534140a9",
    name: "Insta Glow 7W",
    code: "DS-CCTDIM-COB61",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-3b443742",
    name: "Insta Glow 12W",
    code: "DS-CCTDIM-COB62",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-7925e21a",
    name: "Insta Glow 18W",
    code: "DS-CCTDIM-COB63",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-5f0e91ff",
    name: "Sharp Beam 7W",
    code: "DS-CCTDIM-COB64",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-47c93f72",
    name: "Sharp Beam 12W",
    code: "DS-CCTDIM-COB65",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-34d0cde8",
    name: "Sharp Beam 18W",
    code: "DS-CCTDIM-COB66",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-40f6f2cd",
    name: "Prism Pro 12W With Honeycomb Filter",
    code: "DS-CCTDIM-COB67",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-92858b07",
    name: "Prism Pro 18W With Honeycomb Filter",
    code: "DS-CCTDIM-COB68",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-ea99c09e",
    name: "Value COB 7W",
    code: "DS-CCTDIM-COB69",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-01cba25e",
    name: "Value COB 12W",
    code: "DS-CCTDIM-COB70",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-df5e95b4",
    name: "Value COB 18W",
    code: "DS-CCTDIM-COB71",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-2ca517a6",
    name: "LUMINEX 12W",
    code: "DS-CCTDIM-COB72",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-0fae65d3",
    name: "AuraGlow 12W",
    code: "DS-CCTDIM-COB73",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-3f6ace2f",
    name: "AuraGlow 12W",
    code: "DS-CCTDIM-COB74",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-8e23abdb",
    name: "AURA Pullout 12W",
    code: "DS-CCTDIM-COB75",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-79a07921",
    name: "AURA Pullout 2 * 12W",
    code: "DS-CCTDIM-COB76",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-d9a3e541",
    name: "Spot Lux 12W",
    code: "DS-CCTDIM-COB77",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-30aa5ecd",
    name: "Bright Pin 12W",
    code: "DS-CCTDIM-COB78",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-f5b3e7c9",
    name: "Vision pro 12W",
    code: "DS-CCTDIM-COB79",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-11b5a9cc",
    name: "Spot Flair 12W",
    code: "DS-CCTDIM-COB80",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-b59f3e3e",
    name: "Vision Curve 12W",
    code: "DS-CCTDIM-COB81",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-eaebf593",
    name: "Glide Trimless 7W",
    code: "DS-CCTDIM-COB82",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-b83a3a23",
    name: "Glide Trimless 12W",
    code: "DS-CCTDIM-COB83",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-1811c371",
    name: "Glide Trimless 18W",
    code: "DS-CCTDIM-COB84",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-d6017fbb",
    name: "Dot Curve 12W",
    code: "DS-CCTDIM-COB85",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-1e97e97c",
    name: "Spot Dot 12W",
    code: "DS-CCTDIM-COB86",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-c44fad0f",
    name: "Pin Point 7W",
    code: "DS-CCTDIM-COB87",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-b5dc091c",
    name: "Flex Pin 7W",
    code: "DS-CCTDIM-COB88",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-069bd1bf",
    name: "Glint Dot 12W",
    code: "DS-CCTDIM-COB89",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-e457bdf2",
    name: "Pixel 7W",
    code: "DS-CCTDIM-COB90",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-43f39e24",
    name: "Linea Glow 10W",
    code: "DS-CCTDIM-COB91",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-198683fe",
    name: "Luma Line 15W",
    code: "DS-CCTDIM-COB92",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-060b5188",
    name: "Glimmer 10W",
    code: "DS-CCTDIM-COB93",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-2d8017c8",
    name: "Seam Line Trimeless 10W",
    code: "DS-CCTDIM-COB94",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-5623af23",
    name: "Mini Laser Blade 10W",
    code: "DS-CCTDIM-COB95",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-13c5fdaa",
    name: "Mini Laser Blade 15W",
    code: "DS-CCTDIM-COB96",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-4afeb3a2",
    name: "ZigBee 1.2N.M Slidder Curtain Motor",
    code: "DS-CURM-1.2Z",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-ffc12e3b",
    name: "10 feet Expandable Curtain Center Opening Track Set",
    code: "DS-ECMT-10F",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-b7e78ce9",
    name: "15 feet Expandable Curtain Center Opening Track Set",
    code: "DS-ECMT-15F",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-ffdb8137",
    name: "Customized Size Curtain Track Set",
    code: "DS-CMT-1F01",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-806d32f1",
    name: "Curtain Motor Remote 2 Channel",
    code: "DS-CMR-2CH",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-919bf376",
    name: "Edition B1 Smart Biometric Door Lock",
    code: "DS-DL-B1",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-3899fa9b",
    name: "Edition B2 Smart Biometric Door Lock",
    code: "DS-DL-B2",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-6d34b7e6",
    name: "Edition 1 Pro Basic Smart Biometric Door Lock",
    code: "DS-DL-S1ProBasic",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-0e414455",
    name: "Edition 1 Pro WiFi Smart Biometric Door Lock",
    code: "DS-DL-S1ProWIFI",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-f9c8ab84",
    name: "Edition 1 Pro ZigBee Smart Biometric Door Lock",
    code: "DS-DL-S1ProZigBee",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-6b8aa979",
    name: "Edition 1 Pro With RX-TX Combo Smart Biometric Door Lock",
    code: "DS-DL-S1ProRXTX",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-2ae94f34",
    name: "Edition 1 Pro-G Basic Smart Biometric Door Lock",
    code: "DS-DL-S1Pro-G-Basic",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-797b228d",
    name: "Edition 1 Pro-G WiFi Smart Biometric Door Lock",
    code: "DS-DL-S1Pro-G-WIFI",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-ab84194a",
    name: "Edition 1 Pro-G ZigBee Smart Biometric Door Lock",
    code: "DS-DL-S1Pro-G-ZigBee",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-d8e16236",
    name: "Edition 1 Pro-G With RX-TX Combo Smart Biometric Door Lock",
    code: "DS-DL-S1Pro-G-RXTX",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-1453902f",
    name: "Edition 3 WiFi Smart Biometric Door Lock",
    code: "DS-WDL-S3",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-705bb829",
    name: "Edition 3Z ZigBee Smart Biometric Door Lock",
    code: "DS-ZDL-S3Z",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-d550b0f6",
    name: "Edition 3 pro WiFi-LE Smart Face Recognition Door Lock",
    code: "DS-ZDL-S3Pro",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-3b7fddc4",
    name: "Edition 4 Lite WiFi-LE Smart Face Recognition Door Lock",
    code: "DS-ZDL-S4Lite",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-b28e1185",
    name: "Edition 4 WiFi-LE Smart Face Recognition Door Lock",
    code: "DS-ZDL-S4",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-e7faa7bc",
    name: "Edition 4 Curv WiFi-LE Smart Face Recognition Door Lock",
    code: "DS-ZDL-S4Curv",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-015c1464",
    name: "Edition 5 WiFi-LE Smart Face Recognition Door Lock",
    code: "DS-WDL-S5",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-6d7edc2b",
    name: "Edition 5 Pro WiFi-LE Smart Face Recognition Door Lock",
    code: "DS-WDL-S5Pro",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-36a0bc1f",
    name: "Edition 6 WiFi-LE Smart Face Recognition Door Lock",
    code: "DS-WDL-S6",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-1763dce8",
    name: "Edition 7 WiFi-LE Smart Face Recognition Door Lock",
    code: "DS-WDL-S7",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-40dda2d2",
    name: "WiFi Edition G1 Smart Biometric Glass Door Lock",
    code: "DS-GDL-GS1",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-2c154587",
    name: "WD1 Premium Pull Ring Design Fingerprint Smart Lock",
    code: "DS-WD1",
    particulars: "",
    category: "Smart Locks & Security",
    image: "/images/products/security.jpg"
  },
  {
    id: "sh-3780a2ff",
    name: "WD2 Premium Rf ID & NFC Enabled Hidden Smart Lock",
    code: "DS-WD2",
    particulars: "",
    category: "Smart Locks & Security",
    image: "/images/products/security.jpg"
  },
  {
    id: "sh-4d5ea084",
    name: "Smart Battery Powered WiFi Video Doorbell",
    code: "DS-DB-DC02",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-45b74188",
    name: "Dsmartz Touch Screen Panel 5 Inch",
    code: "DS-CPS-5INCH",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-2325a5cc",
    name: "Dsmartz Touch Screen Panel 6 Inch",
    code: "DS-CPS-6INCH",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-604869e6",
    name: "Rotating Doorlock Stand for Demo-?6,499",
    code: "DS-STAND",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-a984131d",
    name: "4200mah Lithium ion Battery Replacement",
    code: "DS-BATT",
    particulars: "",
    category: "Accessories",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-8238bc96",
    name: "Rx-Tx Chip Solution",
    code: "DS-RXTX",
    particulars: "",
    category: "Accessories",
    image: "/images/products/security.jpg"
  },
  {
    id: "sh-accf2504",
    name: "Smart IC Based RFID Card",
    code: "DS-RFID",
    particulars: "",
    category: "Smart Locks & Security",
    image: "/images/products/security.jpg"
  },
  {
    id: "sh-9638b001",
    name: "Smart Lock Stainless Mortise Door Lock",
    code: "DS-MORTISE",
    particulars: "",
    category: "Smart Curtains",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-c3412583",
    name: "Front Face Plate Metal Bezel",
    code: "DS-BEZEL",
    particulars: "",
    category: "Accessories",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-ba4f15e7",
    name: "Touch panel Extra Glass",
    code: "DS-GLASS",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  },
  {
    id: "sh-4044341c",
    name: "Touch panel Extra Bezel",
    code: "DS-EXTBEZEL",
    particulars: "",
    category: "Lighting",
    image: "/images/products/interior.jpg"
  }
,
  // FEATURED ROUTER
  {
  "id": "lr300g-p",
  "name": "10-Port Cloud Managed Router with 110 W PoE Budget",
  "code": "LR300G-P",
  "particulars": "10 Ports, 110W PoE, Cloud Managed",
  "category": "Networking & Routers",
  "isFeatured": true,
  "image": "https://placehold.co/600x400/fdfcf9/d0a353?text=LR300G-P",
  "specs": {
    "Overview": {
      "Dimensions": "202 mm x 108 mm x 28 mm (7.95 in. x 4.25 in. x 1.10 in.)",
      "Weight": "1.62 kg (with packaging) / 0.55 kg (without packaging)"
    },
    "Port Specifications": {
      "Total number of RJ45 ports": "10",
      "Number of 10/100/1000BASE-T ports": "10",
      "Maximum number of LAN port": "9",
      "Maximum number of WAN ports": "4",
      "Number of fixed LAN ports": "6",
      "Number of fixed WAN ports": "1",
      "Number of LAN/WAN ports": "3",
      "Number of PoE/PoE+ Out ports": "8"
    },
    "PoE Specifications": {
      "PoE budget": "110 w",
      "PoE power pins": "1�2 (+), 3�6 (-)"
    },
    "Hardware": {
      "Enclosure Material": "Metal",
      "Mounting Type": "Desktop Mounting",
      "Warranty": "3 years"
    },
    "System Specifications": {
      "CPU": "Dual-core processor, 1.35 GHz clock frequency per core",
      "Flash memory": "256 MB",
      "RAM": "512 MB",
      "LEDs": "1 x system status LED, 10 x Ethernet port LEDs",
      "Buttons": "1 x reset button"
    },
    "System Performance": {
      "Maximum number of concurrent sessions": "100000",
      "Recommended number of concurrent clients": "350",
      "Throughput": "1.5 Gbps"
    },
    "Power Supply": {
      "Power method": "DC adapter",
      "Rated input voltage": "100 V AC to 240 V AC, 50 Hz to 60Hz",
      "Output": "54 V DC, 2.4 A",
      "Max. Power Consumption": "9 W (no PoE load), 119 W (with full PoE load)"
    },
    "Environment and Reliability": {
      "Operating temperature": "�10�C to +50�C",
      "Operating humidity": "0% RH to 100% RH (non-condensing)",
      "Cooling": "Fanless, Natural cooling"
    },
    "Software - IP Routing": {
      "Working mode": "AC mode, Routing mode",
      "Maximum number of VLANs": "500",
      "Maximum number of IPv4 static routes": "100",
      "OSPF": "Yes (Number of OSPFv2 instances: 16)"
    },
    "Security & Authentication": {
      "Security": "ACL, IP-MAC binding, MAC address filtering, Security zone, Local attack defense",
      "Authentication": "Local portal, Cloud portal, 802.1X, PPPoE, SMS, Voucher"
    },
    "VPN Performance": {
      "Site-to-Site VPN": "IPsec VPN, WireGuard, L2TP, OpenVPN",
      "Client-to-Site VPN": "OpenVPN, PPTP, WireGuard",
      "IPsec VPN bandwidth": "170 Mbps",
      "WireGuard performance": "300 Mbps",
      "SD-WAN performance": "300 Mbps"
    },
    "Management": {
      "Cloud management": "Yes",
      "Web management": "Yes",
      "App management": "Yes"
    }
  }
}
,
  // EAP510 ACCESS POINT
  {
  "id": "eap510",
  "name": "EAP510 11AC 1200Mbps Dual Band Gigabit Ceiling Wireless AP",
  "code": "EAP510",
  "particulars": "Dual Band (2.4GHz + 5GHz), MU-MIMO, Wave 2.0, up to 120 Users, PoE Supported",
  "category": "Networking & Routers",
  "isFeatured": false,
  "image": "https://placehold.co/600x400/fdfcf9/d0a353?text=EAP510",
  "specs": {
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
}
];

