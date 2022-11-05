/*
allow for decimals and negatives in regex
    conditional that if a given number (from the array) has a decimal, parseFloat, if not, parseInteger


*/


let displayScreen = document.querySelector(".current-operation");

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
    solve()
    document.querySelector(".dot").disabled = false;
})};

function numberBtnActions() {
let btns = document.querySelectorAll(".num");
for (i of btns) {
    i.addEventListener("click", function(e) {
      console.log(e.target.innerText)
      if (displayScreen.innerText == "0") {
          displayScreen.innerText = e.target.innerText
      } else {
      displayScreen.innerText += e.target.innerText;
      }
    });
  }
}
function operatorBtnActions() {
    let btns = document.querySelectorAll(".op");
    for (i of btns) {
        i.addEventListener("click", function(e) {

         if ((/[\+\-\/\*]/g.test(displayScreen.innerText) == true) && (/[\+\-\/\*]/g.test(displayScreen.innerText.slice(-1)) == false)) {
            solve();
            displayScreen.innerText += e.target.innerText;
         } else if (/[\+\-\/\*\.]/g.test(displayScreen.innerText.slice(-1)) == true) {
            return;
         } else {
            document.querySelector(".dot").disabled = false;
          displayScreen.innerText += e.target.innerText;
        }
        console.log(/[\+\-\/\*]/g.test(displayScreen.innerText) == true);
      })

}};

function dotBtnActions () {
    let dot = document.querySelector(".dot")
    dot.addEventListener("click", function(e) {
    if (/[\+\-\/\*\.]/g.test(displayScreen.innerText.slice(-1)) == true) {return}
    else {
        document.querySelector(".dot").disabled = true;
        displayScreen.innerText += e.target.innerText
    }
})};

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
    document.querySelector(".dot").disabled = false;
})}

// /[-]?[0-9]+([\.][0-9]+)?+/g
///\d+/g
function solve() {
    let list = displayScreen.innerText.match(/[-]?[0-9]*\.?[0-9]+/g);
    console.log(list);
    let numArray = []
    if (list[0].includes(".") === true) {
        numArray.push(parseFloat(list[0]))
    } else {
    numArray.push(parseInt(list[0]))
    }
    if (list[1].includes(".") == true) {
        numArray.push(parseFloat(list[0]))
    } else {
    numArray.push(parseInt(list[1]))
    }
    
    if (/[\+\-\/\*\.]/g.test(displayScreen.innerText.slice(-1)) == true) {
        return;} else if (displayScreen.innerText.match(/\+/) == "+") {
        displayScreen.innerText = add(numArray[0], numArray[1]);
    } else if (displayScreen.innerText.match(/\-/) == "-") {
        console.log(displayScreen.innerText = subtract(numArray[0], numArray[1]));
    } else if (displayScreen.innerText.match(/\*/) == "*") {
        displayScreen.innerText = multiply(numArray[0], numArray[1]);
    } else if (displayScreen.innerText.match(/\//) == "/") {
        displayScreen.innerText = divide(numArray[0], numArray[1]);
    };
    }

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