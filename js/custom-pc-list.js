var customPcBuild = document.querySelector(".custom-pc-build");
var budgetPcBuild = document.querySelector(".budget-pc-build");

var customPcBuildButton = document.querySelector(".custom-pc-build-button");
var budgetPcBuildButton = document.querySelector(".budget-pc-build-button");

customPcBuildButton.onclick = openCustomPcBuild;
budgetPcBuildButton.onclick = openBudgetPcBuild;

function openCustomPcBuild() {
    customPcBuild.style.display = "block";
    budgetPcBuild.style.display = "none";
}

function openBudgetPcBuild() {
    budgetPcBuild.style.display = "block";
    customPcBuild.style.display = "none";
}