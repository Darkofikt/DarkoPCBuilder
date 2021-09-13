/* decision tree */
const conclusionNodeServer = {
    type: "conclusion",
    conclusion: {
        cpu: "AMD EPYC 7702",
        gpu: "NVIDIA RTX A4000",
        ram: "128GB 3000MHz",
        mobo: "MZ71",
        psu: "800W Gold+"
    }
}

const conclusionNodeModelRendering = {
    type: "conclusion",
    conclusion: {
        cpu: "AMD Threadripper 3960X",
        gpu: "NVIDIA RTX 3080",
        ram: "64GB",
        mobo: "GIGABYTE TRX40 AORUS XTREME",
        psu: "1200W Gold+"
    }
}


const conclusionNodeCryptoMining = {
    type: "conclusion",
    conclusion: {
        cpu: "AMD Ryzen 5 1600",
        gpu: "2x NVIDIA GTX 1660 Ti",
        ram: "16GB 3200MHz",
        mobo: "GIGABYTE B450 Aorus Elite v2",
        psu: "600W Gold+"
    }
}

const conclusionNodeGaming = {
    type: "conclusion",
    conclusion: {
        cpu: "AMD RYZEN 7 3700X",
        gpu: "NVIDIA RTX 3080",
        ram: "32GB 3200MHz",
        mobo: "ASRock B550M STEEL LEGEND",
        psu: "800W Gold+"
    }
}
const conclusionNodeContentCreation = {
    type: "conclusion",
    conclusion: {
        cpu: "AMD Ryzen 7 5700G w/ Vega Graphics",
        gpu: "Built in CPU",
        ram: "16GB 3200MHz",
        mobo: "MSI B550 Gaming Edge WiFi",
        psu: "550W Gold+"
    }
}
const conclusionNodeCasualWork = {
    type: "conclusion",
    conclusion: {
        cpu: "RYZEN 5 3600",
        gpu: "NVIDIA GTX 1660 TI",
        ram: "16GB 3200Mhz",
        mobo: "ASRock B550M STEEL LEGEND",
        psu: "600W Gold+"
    }
}
const conclusionNodeCADSoftware = {
    type: "conclusion",
    conclusion: {
        cpu: "11th Gen Intel® Core™ i9-11900K  ",
        gpu: "NVIDIA RTX 3070",
        ram: "64GB 3000MHz",
        mobo: "Gigabyte Z590 AORUS ELITE AX",
        psu: "800W Gold+"
    }
}
const conclusionNodeAdministration = {
    type: "conclusion",
    conclusion: {
        cpu: "Intel I3-9100F",
        gpu: "ASUS GT710-SL-1GD5",
        ram: "8GB 2666MHz",
        mobo: "ASUS PRIME H310M-R 2.0",
        psu: "500W Bronze+"
    }
}
const conclusionNodeProgramming = {
    type: "conclusion",
    conclusion: {
        cpu: "AMD Ryzen 5 3600",
        gpu: "NVIDIA GTX 1660",
        ram: "16GB 3200MHz",
        mobo: "B450 Tomahawk Max",
        psu: "550W Gold+"
    }
}

const subDecisionTreeHomePC = {
    type: "question",
    question: "What will the PC be used for?",
    answers: [
        {buttonLabel: "Crypto Mining", node: conclusionNodeCryptoMining},
        {buttonLabel: "Gaming", node: conclusionNodeGaming},
        {buttonLabel: "Content Creation", node: conclusionNodeContentCreation},
        {buttonLabel: "Casual Work", node: conclusionNodeCasualWork}
    ]
}


const subDecisionTreeBusinessPC = {
    type: "question",
    question: "What kind of work do you do?",
    answers: [
        {buttonLabel: "CAD Software", node: conclusionNodeCADSoftware},
        {buttonLabel: "Administration", node: conclusionNodeAdministration},
        {buttonLabel: "Programming", node: conclusionNodeProgramming},
    ]
}


function buildDecisionTree() {
    return {
        type: "question",
        question: "What will the PC be used as",
        answers: [
            {buttonLabel: "3D Model & Rendering", node: conclusionNodeModelRendering},
            {buttonLabel: "Home PC", node: subDecisionTreeHomePC},
            {buttonLabel: "Business PC", node: subDecisionTreeBusinessPC},
            {buttonLabel: "Server", node: conclusionNodeServer}
        ]
    }
}

/* logic */

// utility functions
function removeInnerHtml(element){
    while (element.hasChildNodes()) {  
        element.removeChild(element.firstChild);
    }
}

function displayConclusion(conclusion) {
    console.log(conclusion);
    conclusionContainer.innerText = JSON.stringify(conclusion);
}

function runExpert(currentNode) {
    const questionLabel = document.querySelector(".question-label");
    const answersContainer = document.querySelector(".answers");

    if(currentNode.type === "conclusion") {

        questionContainer.style.display = "none";
        conclusionContainer.style.display = "block";
        refreshButton.style.display = "block";

        displayConclusion(currentNode.conclusion);
        
        return;
    }

    removeInnerHtml(answersContainer);
    
    questionLabel.innerText = currentNode.question;

    currentNode.answers.forEach((answer, index) => {
        const button = document.createElement("li");
        
        const link = document.createElement("a");
        link.className = "answer";
        link.innerText = answer.buttonLabel;

        button.appendChild(link);

        button.addEventListener("click", () =>  runExpert(answer.node));

        answersContainer.appendChild(button);
    });
}

const decisionTree = buildDecisionTree();
const questionContainer = document.querySelector(".question");
const conclusionContainer = document.querySelector(".conclusion");
const refreshButton = document.querySelector(".refresh-button-container");

function startExpert() {
    const currentNode = decisionTree;
    runExpert(currentNode);
}

startExpert();
