var customPcBuildFilter = JSON.parse(localStorage.getItem('customPcBuildFilter'));
var budgetPcBuildFilter = JSON.parse(localStorage.getItem('budgetPcBuildFilter'));

var productCards = document.querySelectorAll('.product-card');
var productButtons = document.querySelectorAll('.product-button')

productCards.forEach((c) => c.style.display = "none");
productButtons.forEach((b) => b.onclick = openCard);

function displayGpus(gpus) {
    function outputGpu(gpu) {
        let div = document.createElement("div");
        div.className = "product-entry";

        let productInfo = document.createElement("div");
        productInfo.className = "product-info";
        let price = document.createElement("div");
        price.className = "product-price";

        let gpuStr = gpu.brand + " " + gpu.model + " " + gpu.vram + "GB ";
        productInfo.innerText = gpuStr;
        price.innerText = gpu.price + " eur";

        let addButton = document.createElement("div");
        addButton.className = "add-product";
        addButton.onclick = selectProduct;
        addButton.innerText = "+";

        div.appendChild(productInfo);
        div.appendChild(price);
        div.appendChild(addButton);

        return div;
    }

    let gpuCard = getCardForGivenProduct("gpu");
    for(let gpu of gpus) {
        gpuCard.appendChild(outputGpu(gpu));
    }
}

function displayMobos(mobos) {
    function outputMobo(mobo) {
        let div = document.createElement("div");
        div.className = "product-entry";

        let productInfo = document.createElement("div");
        productInfo.className = "product-info";
        let price = document.createElement("div");
        price.className = "product-price";

        let moboStr = mobo.brand + " " + mobo.model + " " + mobo.socket;
        productInfo.innerText = moboStr;
        price.innerText = mobo.price + " eur";

        let addButton = document.createElement("div");
        addButton.className = "add-product";
        addButton.onclick = selectProduct;
        addButton.innerText = "+";

        div.appendChild(productInfo);
        div.appendChild(price);
        div.appendChild(addButton);
        return div;
    }

    let moboCard = getCardForGivenProduct("motherboard");
    for(let mobo of mobos) {
        moboCard.appendChild(outputMobo(mobo));
    }
}

function displayCpus(cpus) {
    function outputCpu(cpu) {
        let div = document.createElement("div");
        div.className = "product-entry";

        let productInfo = document.createElement("div");
        productInfo.className = "product-info";
        let price = document.createElement("div");
        price.className = "product-price";

        let cpuStr = cpu.brand + " " + cpu.model + " " + cpu.socket;
        productInfo.innerText = cpuStr;

        price.innerText = cpu.price + " eur";

        let addButton = document.createElement("div");
        addButton.className = "add-product";
        addButton.onclick = selectProduct;
        addButton.innerText = "+";

        div.appendChild(productInfo);
        div.appendChild(price);
        div.appendChild(addButton);
        return div;
    }

    let cpuCard = getCardForGivenProduct("cpu");
    for(let cpu of cpus) {
        cpuCard.appendChild(outputCpu(cpu));
    }
}

function displayRams(rams) {
    function outputRam(ram) {
        let div = document.createElement("div");
        div.className = "product-entry";

        let productInfo = document.createElement("div");
        productInfo.className = "product-info";
        let price = document.createElement("div");
        price.className = "product-price";

        let ramStr = ram.brand + " " + ram.model + " " + ram.size + "GB " + ram.speed + "MHz";
        productInfo.innerText = ramStr;
        
        price.innerText = ram.price + " eur";

        let addButton = document.createElement("div");
        addButton.className = "add-product";
        addButton.onclick = selectProduct;
        addButton.innerText = "+";

        div.appendChild(productInfo);
        div.appendChild(price);
        div.appendChild(addButton);
        return div;
    }

    let ramCard = getCardForGivenProduct("ram");
    for(let ram of rams) {
        ramCard.appendChild(outputRam(ram));
    }
}

function displayPsus(psus) {
    function outputPsu(psu) {
        let div = document.createElement("div");
        div.className = "product-entry";

        let productInfo = document.createElement("div");
        productInfo.className = "product-info";
        let price = document.createElement("div");
        price.className = "product-price";

        let psuStr = psu.brand + " " + psu.wattage + "W " + psu.certification;
        productInfo.innerText = psuStr;

        price.innerText = psu.price + " eur";
        
        let addButton = document.createElement("div");
        addButton.className = "add-product";
        addButton.onclick = selectProduct;
        addButton.innerText = "+";

        div.appendChild(productInfo);
        div.appendChild(price);
        div.appendChild(addButton);
        return div;
    }

    let psuCard = getCardForGivenProduct("psu");
    for(let psu of psus) {
        psuCard.appendChild(outputPsu(psu));
    }
}

if(customPcBuildFilter) {
    let gpus = filterCustomPcBuild("gpu");
    let mobos = filterCustomPcBuild("motherboard");
    let cpus = filterCustomPcBuild("cpu");
    let rams = filterCustomPcBuild("ram");
    let psus = filterCustomPcBuild("psu");

    // TODO: display products into the card
    displayGpus(gpus);
    displayMobos(mobos);
    displayCpus(cpus);
    displayRams(rams);
    displayPsus(psus);
    
} else if(budgetPcBuildFilter) {

}

var selectedProductsPrices = {};

function selectProduct(e) {
    let parent = e.target.parentElement.parentElement;
    let selectedProduct = parent.getAttribute("data-product");
    let selectedProductEntryDiv = document.querySelector(`.selected-products > [data-product=${selectedProduct}] > .product-entry`);
    let selectedProductInfoDiv = selectedProductEntryDiv.querySelector(".product-info");
    let selectedProductPriceDiv = selectedProductEntryDiv.querySelector(".product-price");

    let productInfoDiv = e.target.parentElement.querySelector(".product-info");
    let productPriceDiv = e.target.parentElement.querySelector(".product-price");
    
    selectedProductsPrices[selectedProduct] = parseInt(productPriceDiv.innerText.split(" ")[0]);

    selectedProductInfoDiv.innerText = productInfoDiv.innerText;
    selectedProductPriceDiv.innerText = productPriceDiv.innerText;

    let totalPriceDiv = document.querySelector(".selected-products > .total-price > .product-entry > .product-price");
    totalPriceDiv.innerText = calculateTotalPrice() + " eur";
}

function calculateTotalPrice() {
    let result = 0;
    for(let key of Object.keys(selectedProductsPrices)) {
        result += selectedProductsPrices[key];
    }

    return result;
}

function openCard(e) {
    let productToOpen = e.target.getAttribute("data-product");
    for(let productCard of productCards) {
        let product = productCard.getAttribute("data-product");
        if(productToOpen === product) {
            productCard.style.display = "block";
        } else {
            productCard.style.display = "none";
        }
    }

    for(let productButton of productButtons) {
        let product = productButton.getAttribute("data-product");
        if(productToOpen == product) {
            productButton.className += " menuActive";
        } else {
            productButton.className = productButton.className.replace(" menuActive", "");
        }
    }
}

function getCardForGivenProduct(product) {
    let productCard = null;
    for(let card of productCards) {
        if(card.getAttribute("data-product") === product) {
            productCard = card;
            break;
        }
    }

    return productCard;
}

function filterCustomPcBuild(product) {
    let productCard = getCardForGivenProduct(product);

    let products = pcParts[product];
    let productFilter = customPcBuildFilter[product];
    let filteredProducts = [];
    for(let p of products) {
        let ok = true;
        
        for(let key of Object.keys(productFilter)) {
            if(productFilter[key] !== p[key]) {
                ok = false;
                break;
            }
        }

       
        if(ok) {
            filteredProducts.push(p);
        }
    }

    return filteredProducts;
}