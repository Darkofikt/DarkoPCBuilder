// TODO: fill dataset and correct price
const pcParts = {
    cpu: [
        {
            brand: "Intel",
            model: "i7-11700F",
            cores: "8",
            threads: "16",
            socket: "LGA1200",
            price: 280,
        },
        {   brand: "Intel",
            model: "i7-10700KF",
            cores: "8",
            threads: "16",
            socket: "LGA1200",
            price: 320
        },  
        {   brand: "AMD",
            model: "Ryzen 7 4750GE",
            cores: "8",
            threads: "16",
            socket: "AM4",
            price: 280
        },
        {
       	    brand: "AMD",
            model: "Ryzen 7 3700X",
            cores: "8",
            threads: "16",
            socket: "AM4",
            price: 270,
        },
        {
            brand: "AMD",
            model: "Ryzen 5 3600",
            cores: "6",
            threads: "12",
            socket: "AM4",
            price: 180,
        },
        {
            brand: "Intel",
            model: "i5-11600K",
            cores: "6",
            threads: "12",
            socket: "LGA1200",
            price: 230,
        },
        {
            brand: "Intel",
            model: "Pentium Gold G5420",
            cores: "2",
            threads: "4",
            socket: "LGA1151",
            price: 110,
        },
        {
            brand: "AMD",
            model: "Athlon 3000G",
            cores: "2",
            threads: "4",
            socket: "AM4",
            price: 80,
        },
        {
            brand: "Intel",
            model: "i3-9100F",
            cores: "4",
            threads: "4",
            socket: "LGA1151",
            price: 135,
        },
        {
            brand: "AMD",
            model: "Ryzen 3 1300X",
            cores: "4",
            threads: "4",
            socket: "AM4",
            price: 150,
        },
        {
            brand: "AMD",
            model: "Ryzen 5 3400G",
            cores: "4",
            threads: "8",
            socket: "AM4",
            price: 250,
        },
        {
            brand: "Intel",
            model: "Intel Core i7-7700K",
            cores: "4",
            threads: "8",
            socket: "LGA1151",
            price: 250,
        },
        {
            brand: "Intel",
            model: "i7-8700K",
            cores: "6",
            threads: "6",
            socket: "LGA1151",
            price: 350,
        },
        {
            brand: "AMD",
            model: "RYZEN 5 3500X",
            cores: "6",
            threads: "6",
            socket: "AM4",
            price: 200,
        },
    ],

    gpu: [
        {
            brand: "NVIDIA",
            model: "GTX 1660 Ti",
            vram: "6",
            price: 250,
        },
        {
            brand: "NVIDIA",
            model: "GTX 1650 Super",
            vram: "4",
            price: 140,
        },
        {
            brand: "NVIDIA",
            model: "GTX 3070 Ti",
            vram: "8",
            price: 520,
        },
        {
            brand: "AMD",
            model: "Radeon RX 5700 XT",
            vram: "8",
            price: 350,
        },
        {
            brand: "AMD",
            model: "Radeon RX 6700 XT",
            vram: "12",
            price: 400,
        },
        {
            brand: "AMD",
            model: "Radeon RX 5600 XT",
            vram: "6",
            price: 230,
        },

    ],

    motherboard: [
        {
            brand: "MSI",
            model: "B450 Tomahawk Max",
            socket: "AM4",
            supportedRam: "128",
            price: 80,
        },
        {
            brand: "ASUS",
            model: "ROG Strix B550-F Gaming",
            socket: "AM4",
            supportedRam: "128",
            price: 200,
        },
        {
            brand: "Gigabyte",
            model: "X570 Aorus Ultra",
            socket: "AM4",
            supportedRam: "64",
            price: 200,
        },
        {
            brand: "ASUS",
            model: "ROG Strix Z590-E",
            socket: "LGA1200",
            supportedRam: "128",
            price: 350,
        },
        {
            brand: "ASUS",
            model: "TUF Gaming Z490",
            socket: "LGA1200",
            supportedRam: "128",
            price: 160,
        },
        {
            brand: "MSI",
            model: "Z490-A PRO",
            socket: "LGA1200",
            supportedRam: "128",
            price: 160,
        },
        {
            brand: "MSI",
            model: "Z390-A PRO",
            socket: "LGA1151",
            supportedRam: "128",
            price: 115,
        },
        {
            brand: "Gigabyte",
            model: "Z390 AORUS PRO WIFI",
            socket: "LGA1151",
            supportedRam: "128",
            price: 210,
        },
        {
            brand: "ASRock",
            model: "B365M Pro4",
            socket: "LGA1151",
            supportedRam: "64",
            price: 120,
        },
    ],

    ram: [
        {
            brand: "G.Skill",
            model: "Aegis",
            size: "8",
            speed: "3000",
            price: 25,
        },
        {
            brand: "Corsair",
            model: "Vengeance LPX",
            size: "8",
            speed: "3000",
            price: 35,
        },
        {
            brand: "Patriot",
            model: "Viper Steel",
            size: "8",
            speed: "3200",
            price: 35,
        },
        {
            brand: "Kingston",
            model: "HyperX Fury",
            size: "8",
            speed: "3200",
            price: 50,
        },
        {
            brand: "G.Skill",
            model: "Ripjaws V",
            size: "8",
            speed: "3600",
            price: 45,
        },
        {
            brand: "Crucial",
            model: "Ballistix",
            size: "8",
            speed: "3600",
            price: 45,
        },
        {
            brand: "Adata",
            model: "XPG Z1",
            size: "16",
            speed: "3000",
            price: 45,
        },
        {
            brand: "Patriot",
            model: "Viper 4 Blackout",
            size: "16",
            speed: "3000",
            price: 55,
        },
        {
            brand: "G.Skill",
            model: "Ripjaws V Series",
            size: "16",
            speed: "3200",
            price: 60,
        },
        {
            brand: "Silicon Power",
            model: "XPOWER Turbine",
            size: "16",
            speed: "3200",
            price: 50,
        },
        {
            brand: "G.Skill",
            model: "Trident Z",
            size: "16",
            speed: "3600",
            price: 85,
        },
        {   
            brand: "Team",
            model: "T-Force Delta",
            size: "16",
            speed: "3600",
            price: 80,
        },
        {   
            brand: "Corsair",
            model: "Veangeance LPX",
            size: "32",
            speed: "3000",
            price: 125,
        },
        {   
            brand: "Team",
            model: "T-Force Delta RGB",
            size: "32",
            speed: "3000",
            price: 115,
        },
        {   
            brand: "G.Skill",
            model: "Trident Z RGB",
            size: "32",
            speed: "3000",
            price: 130,
        },
        {   
            brand: "G.Skill",
            model: "Ripjaws V",
            size: "32",
            speed: "3200",
            price: 115,
        },
        {   
            brand: "Cruical",
            model: "Ballistix",
            size: "32",
            speed: "3200",
            price: 140,
        },
        {   
            brand: "Team",
            model: "T-Force Vulcan Z",
            size: "32",
            speed: "3200",
            price: 110,
        },
        {   
            brand: "G.Skill",
            model: "Tident Z Neo",
            size: "32",
            speed: "3600",
            price: 180,
        },
        {   
            brand: "Team",
            model: "T-Force Delta",
            size: "32",
            speed: "3600",
            price: 125,
        },
        {   
            brand: "Corsair",
            model: "Dominator Platinum",
            size: "32",
            speed: "3600",
            price: 225,
        },
    ],

    psu: [
        {
            brand: "Njoy",
            wattage: "600",
            certification: "silver",
            price: 100
        },
        {
            brand: "EVGA",
            wattage: "600",
            certification: "bronze",
            price: 60
        },
        {
            brand: "be quiet! Pure Power 11 CM",
            wattage: "600",
            certification: "Gold",
            price: 80
        },
        {
            brand: "SeaSonic PRIME Titanium",
            wattage: "600",
            certification: "Titanium",
            price: 120
        },
        {
            brand: "EVGA",
            wattage: "500",
            certification: "Gold",
            price: 50
        },
        {
            brand: "EVGA 100-W1-0500-KR",
            wattage: "500",
            certification: "80+",
            price: 28
        },
        {
            brand: "Aerocool Integrator",
            wattage: "500",
            certification: "Bronze",
            price: 74
        },
        {
            brand: "SeaSonic PRIME Fanless",
            wattage: "500",
            certification: "Platinum",
            price: 168
        },
        {
            brand: "SeaSonic PRIME Ultra Titanium",
            wattage: "750",
            certification: "Titanium",
            price: 180
        },
        {
            brand: "Corsair HX Platinum",
            wattage: "750",
            certification: "Platinum",
            price: 140
        },
        {
            brand: "Corsair RM (2019)",
            wattage: "750",
            certification: "Gold",
            price: 115
        },
        {
            brand: "Cooler Master MasterWatt",
            wattage: "750",
            certification: "Bronze",
            price: 65
        },
        {
            brand: "Super Flower Leadex Titanium",
            wattage: "1000",
            certification: "Titanium",
            price: 300
        },
        {
            brand: "EVGA P2",
            wattage: "1000",
            certification: "Platinum",
            price: 319
        },
        {
            brand: "Corsair RMx (2021)",
            wattage: "1000",
            certification: "Gold",
            price: 180
        },
        {
            brand: "LEPA MaxBron",
            wattage: "1000",
            certification: "Bronze",
            price: 100
        },
    ]
}