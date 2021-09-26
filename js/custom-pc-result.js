var customPcBuildFilter = JSON.parse(localStorage.getItem('customPcBuildFilter'));
var budgetPcBuildFilter = JSON.parse(localStorage.getItem('budgetPcBuildFilter'));

var productCards = document.querySelectorAll('.product-card');
var productButtons = document.querySelectorAll('.product-button')

productCards.forEach((c) => c.style.display = "none");
productButtons.forEach((b) => b.onclick = openCard);

if(customPcBuildFilter) {
    let gpus = filterCustomPcBuild("gpu");
    let mobos = filterCustomPcBuild("motherboard");
    let cpus = filterCustomPcBuild("cpu");
    let rams = filterCustomPcBuild("ram");
    let psus = filterCustomPcBuild("psu");

    // TODO: display products into the card
    
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

function filterCustomPcBuild(product) {
    // get the card for given product
    let productCard = null;
    for(let card of productCards) {
        if(card.getAttribute("data-product") === product) {
            productCard = card;
            break;
        }
    }

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