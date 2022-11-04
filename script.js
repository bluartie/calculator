/*
when 2 operators or 2 decimals are pressed in a row, display shows NOPE for 1 second
add an effect to button press
only one operation at a time allowed
if NaN, return NOPE
decimal needs to be allowed
*/


let displayScreen = document.querySelector(".current-operation");

btnActions();
solve();



function solve() {

let equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", () => {
let list = displayScreen.innerText.match(/\d+/g);
let numArray = []
numArray.push(parseInt(list[0]));
numArray.push(parseInt(list[1]));

if (displayScreen.innerText.match(/\+/) == "+") {
    displayScreen.innerText = add(numArray[0], numArray[1]);
} else if (displayScreen.innerText.match(/\-/) == "-") {
    console.log(displayScreen.innerText = subtract(numArray[0], numArray[1]));
} else if (displayScreen.innerText.match(/\*/) == "*") {
    displayScreen.innerText = multiply(numArray[0], numArray[1]);
} else if (displayScreen.innerText.match(/\//) == "/") {
    displayScreen.innerText = divide(numArray[0], numArray[1]);
}});


}
function btnActions() {
    displayBtnActions();
    numberBtnActions();
    operatorBtnActions();
};
function displayBtnActions() {
clearDisplay();
deleteLastChar();
};

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
          console.log(e.target.innerText)
         
          displayScreen.innerText += e.target.innerText;
        });
      }
}
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
clearBtn.addEventListener("click", () => 
    displayScreen.innerText = "0"
)
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