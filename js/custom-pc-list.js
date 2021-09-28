var customPcBuild = document.querySelector(".custom-pc-build");
var budgetPcBuild = document.querySelector(".budget-pc-build");

var customPcBuildButton = document.querySelector(".custom-pc-build-button");
var budgetPcBuildButton = document.querySelector(".budget-pc-build-button");

var generatePCBuildButton = document.querySelector(".result-button");
generatePCBuildButton.onclick = saveCustomPcBuildFormData;

function saveCustomPcBuildFormData() {
    let gpuInput = document.querySelector("input[name=gpu]:checked");
    let motherboardInput = document.querySelector("select[name=motherboard-socket-choice]");
    let cpuInput = document.querySelector("select[name=cpu-cores-choice]");
    let ramSizeInput = document.querySelector("select[name=ram-size-choice]");
    let ramSpeedInput = document.querySelector("select[name=ram-speed-choice]");
    let psuWattageInput = document.querySelector("select[name=psu-wattage-choice]");

    const filterObj = {
        gpu: getGpu(gpuInput),
        motherboard: getMotherboard(motherboardInput),
        cpu: getCpu(cpuInput, motherboardInput),
        ram: getRam(ramSizeInput, ramSpeedInput),
        psu: getPsu(psuWattageInput)
    };

    console.log("Saving custom pc: ", filterObj);
    localStorage.setItem('customPcBuildFilter', JSON.stringify(filterObj));
    window.location.href = 'custom-pc-list-result.html';
}

function getGpu(gpuInput) {
    if(!gpuInput) {
        return {};
    }

    return {
        brand: gpuInput.value
    }
}

function getMotherboard(motherboardInput) {
    if(!motherboardInput.value) {
        return {};
    }

    return {
        socket: motherboardInput.value
    }
}

function getCpu(cpuInput, motherboardInput) {
    const result = {};

    if(motherboardInput.value) {
        result["socket"] = motherboardInput.value;
    }

    if(cpuInput.value) {
        result["cores"] = cpuInput.value.split("-")[0],
        result["threads"] = cpuInput.value.split("-")[1]
    }

    return result;
}

function getRam(ramSizeInput, ramSpeedInput) {
    const result = {};

    if(ramSizeInput.value) {
        result["size"] = ramSizeInput.value;
    }

    if(ramSpeedInput.value) {
        result["speed"] = ramSpeedInput.value;
    }

    return result;
}

function getPsu(psuInput) {
    if(!psuInput.value) {
        return {};
    }

    return {
        wattage: psuInput.value
    }
}

function saveBudgetPcBuildFormData() {
    console.log("Saving budget pc");
}

localStorage.clear();