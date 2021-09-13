/* decision tree */

const conclusionNode = {
    type: "conclusion",
    conclusion: {
        cpu: "ryzen 3690",
        gpu: "nvidia rona 1560",
        ram: "co 156GB 800Mhz",
        mobo: "board 7zx",
        psu: "760W gig"
    }
}

const subDecisionTree1 = {
    type: "question",
    question: "Example question 3",
    answers: [
        {buttonLabel: "option 1", node: conclusionNode},
        {buttonLabel: "option 2", node: conclusionNode},
    ]
}

const subDecisionTree = {
    type: "question",
    question: "Example question 2",
    answers: [
        {buttonLabel: "option 1", node: conclusionNode},
        {buttonLabel: "option 2", node: subDecisionTree1},
    ]
}

function buildDecisionTree() {
    return {
        type: "question",
        question: "Example question 1",
        answers: [
            {buttonLabel: "option 1", node: subDecisionTree},
            {buttonLabel: "option 2", node: {type: "conclusion", conclusion: conclusionNode}},
            {buttonLabel: "option 3", node: {type: "conclusion", conclusion: conclusionNode}},
            {buttonLabel: "option 4", node: {type: "conclusion", conclusion: conclusionNode}}
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
