let displayScreen = document.querySelector(".current-operation");

/*
create operator functions
addeventlisteners to buttons, output button events to screen

if more than one operator pressed, run solve()

add eventlisteners to clear screen / delete character

attach solve() to equal sign event listener, display result in current display, and move the equation to the last display
    attach if statement that if there is no operator, display error

no eval()! instead, function that parses numbers and declare variables for each,

for solve():
parse operator from display, switch statement for each type of operator, run a given function if contains a given operator and run operation
with parsed numbers

if . in string, parse float
else parse int


add numArray to operators function, conditional that if numArray > 1, evoke the solve function

*/

btnActions();
solve();

function solve() {

let equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click", () => {

let list = displayScreen.innerText.match(/\d+/g);
let stringArray = list.sort()
let numArray = []
numArray.push(parseInt(stringArray[0]));
numArray.push(parseInt(stringArray[1]));

if (displayScreen.innerText.match(/\+/) == "+") {
    displayScreen.innerText = add(numArray[0], numArray[1]);
} else if (displayScreen.innerText.match(/\-/) == "-") {
    displayScreen.innerText = subtract(numArray[0], numArray[1]);
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