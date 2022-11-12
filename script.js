let displayScreen = document.querySelector(".current-operation");
let operatorInMemory = null
let operandOne = ""
let operandTwo = ""
let shouldResetScreen = false


btnActions();

function btnActions() {
    displayBtnActions();
    numberBtnActions();
    operatorBtnActions();
    equalBtnActions();
    dotBtnActions();
};

function equalBtnActions() {
    let equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", () => {
    if (operatorInMemory === null) return
    else {
    solve()
    shouldResetScreen = true
    document.querySelector(".dot").disabled = false;
}})};

function numberBtnActions() {
let btns = document.querySelectorAll(".num");
for (i of btns) {
    i.addEventListener("click", function(e) {
      console.log(e.target.innerText)

      if (operatorInMemory === null) {
        if (displayScreen.innerText == "0" || shouldResetScreen == true) {
          displayScreen.innerText = e.target.innerText
          shouldResetScreen = false
        } else {
        displayScreen.innerText += e.target.innerText;

    }} else {
        if (operatorInMemory !== null && shouldResetScreen == true) {
            displayScreen.innerText = e.target.innerText
            shouldResetScreen = false
        } else {
            displayScreen.innerText += e.target.innerText
        }

    }
    });
  }
}

function operatorBtnActions() {
    let btns = document.querySelectorAll(".op");
    for (i of btns) {
        i.addEventListener("click", function(e) {
        if (operatorInMemory !== null) {
            solve()
            operatorInMemory = e.target.innerText
            shouldResetScreen = true
        } else {
            operatorInMemory = e.target.innerText
            operandOne = displayScreen.innerText
            shouldResetScreen = true
            console.log(e.target.innerText)
        }
        document.querySelector(".dot").disabled = false
})}};

function dotBtnActions () {
    let dot = document.querySelector(".dot")
    dot.addEventListener("click", function(e) {
        document.querySelector(".dot").disabled = true;
        if (shouldResetScreen == true) {
            displayScreen.innerText = e.target.innerText
            shouldResetScreen = false
        }
        else {displayScreen.innerText += e.target.innerText}
    }
)};

function displayBtnActions() {
    clearDisplay();
    deleteLastChar();
    };

function deleteLastChar () {
let deleteBtn = document.querySelector(".delete")
deleteBtn.addEventListener("click", () =>{
    
if (displayScreen.innerText.length == 1) {
    displayScreen.innerText="0"
} 
    else if (displayScreen.innerText.length > 1) {
        displayScreen.innerText = displayScreen.innerText.substring(0, displayScreen.innerText.length - 1)
    }
})
}

function clearDisplay() {
let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    displayScreen.innerText = "0"
    operatorInMemory = null
    operandOne = ""
    operandTwo = ""
    shouldResetScreen = false
    document.querySelector(".dot").disabled = false
})}

function operationType(operator, x, y) {
    x = parseFloat(x)
    y = parseFloat(y)

    if (operator == "+") {return add(x, y)} 
    if (operator == "-") {return subtract(x, y)} 
    if (operator == "*") {return multiply(x, y)} 
    if (operator == "/") {return divide(x, y)} 
};

function roundResult(number) {
    return Math.round(number*1000) / 1000
}

function solve() {
    if (operatorInMemory === null || shouldResetScreen) return
    if (operatorInMemory === "/" && displayScreen === "0") {
        displayScreen.textContent = "ERROR"
    } else {
    operandTwo = displayScreen.textContent
    displayScreen.textContent = roundResult(operationType(operatorInMemory, operandOne, operandTwo))
    operatorInMemory = null
    operandOne = displayScreen.innerText
    operandTwo = ""
    }}

function add(x, y) {
	return x + y
};
function subtract(x, y) {
	return x - y
};
function multiply(x, y) {
  return x * y
};
function divide(x, y) {
    return x / y
}