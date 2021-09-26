var customPcBuild = document.querySelector(".custom-pc-build");
var budgetPcBuild = document.querySelector(".budget-pc-build");

var customPcBuildButton = document.querySelector(".custom-pc-build-button");
var budgetPcBuildButton = document.querySelector(".budget-pc-build-button");

var generatePCBuildButton;

customPcBuildButton.onclick = openCustomPcBuild;
budgetPcBuildButton.onclick = openBudgetPcBuild;

function openCustomPcBuild() {
    customPcBuild.style.display = "block";
    budgetPcBuild.style.display = "none";
    generatePCBuildButton = document.querySelector(".result-button");
    generatePCBuildButton.onclick = saveCustomPcBuildFormData;
}

function openBudgetPcBuild() {
    budgetPcBuild.style.display = "block";
    customPcBuild.style.display = "none";
    generatePCBuildButton = document.querySelector(".result-button");
    generatePCBuildButton.onclick = saveBudgetPcBuildFormData;
}

function saveCustomPcBuildFormData() {
    let gpuInput = document.querySelector("input[name=gpu]:checked");
    let motherboardInput = document.querySelector("select[name=motherboard-socket-choice]");
    let cpuInput = document.querySelector("select[name=cpu-cores-choice]");
    let ramSizeInput = document.querySelector("select[name=ram-size-choice]");
    let ramSpeedInput = document.querySelector("select[name=ram-speed-choice]");
    let psuWattageInput = document.querySelector("select[name=psu-wattage-choice]");

    const filterObj = {
        gpu: gpuInput ? gpuInput.value : undefined,
        motherboard: motherboardInput.value || undefined,
        cpu: cpuInput.value || undefined,
        ramSize: ramSizeInput.value || undefined,
        ramSpeed: ramSpeedInput.value || undefined,
        psuWattage: psuWattageInput.value || undefined
    };

    console.log("Saving custom pc: ", filterObj);
    localStorage.setItem('customPcBuildFilter', JSON.stringify(filterObj));
    window.location.href = 'custom-pc-list-result.html';
}

function saveBudgetPcBuildFormData() {
    console.log("Saving budget pc");
}

localStorage.clear();