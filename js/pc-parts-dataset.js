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
            socket: "LGA 1200",
            price: 230,
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



    ],

    ram: [
        {
            brand: "Corsair",
            model: "Vengeance LPX",
            size: "16",
            speed: "3200",
            price: 65,
        },
        {
            brand: "Gskill",
            model: "ripjaws V",
            size: "32",
            speed: "3200",
            price: 110,
        },
        {
            brand: "Gskill",
            model: "Trident Z",
            size: "16",
            speed: "3600",
            price: 90,
        },
        {
            brand: "GeIL",
            model: "EVO SPEAR",
            size: "16",
            speed: "3000",
            price: 55,
        }
    ],

    psu: [
        {
            brand: "Gigabyte",
            wattage: "750",
            certification: "Gold",
            price: 100
        },
        {
            brand: "Corsair",
            wattage: "750",
            certification: "Gold",
            price: 110
        },
        {
            brand: "EVGA",
            wattage: "650",
            certification: "Gold",
            price: 70
        },
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
            brand: "EVGA",
            wattage: "500",
            certification: "Gold",
            price: 50
        },
    ]
}