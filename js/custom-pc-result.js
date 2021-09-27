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
        let gpuStr = gpu.brand + " " + gpu.model + " " + gpu.vram + "GB ";
        div.innerText = gpuStr;
        return div;
    }

    let gpuCard = getCardForGivenProduct("gpu");
    for(let gpu of gpus) {
        gpuCard.appendChild(outputGpu(gpu));
    }1
}

function displayMobos(mobos) {
    function outputMobo(mobo) {
        let div = document.createElement("div");
        div.className = "product-entry";
        let moboStr = mobo.brand + " " + mobo.model + " " + mobo.socket;
        div.innerText = moboStr;
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
        let cpuStr = cpu.brand + " " + cpu.model + " " + cpu.socket;
        div.innerText = cpuStr;
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
        let ramStr = ram.brand + " " + ram.model + " " + ram.size + "GB " + ram.speed + "MHz";
        div.innerText = ramStr;
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
        let psuStr = psu.brand + " " + psu.wattage + "W " + psu.certification;
        div.innerText = psuStr;
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