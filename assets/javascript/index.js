// * Declaring the variable that hold the elements.
let resultDiv = document.querySelector(".result-screen");
let operationsScreen = document.querySelector(".operation-screen");
let cBtn = document.getElementsByClassName("c-btn")[0];
let ceBtn = document.querySelector(".ce-btn");
let modulus = document.getElementsByClassName("modulus")[0];
let divisionBtn = document.querySelector("[value='/']");
let multiplyBtn = document.querySelector("[value='*']");
let modulusBtn = document.querySelector("[value='%']");
let addBtn = document.querySelector("[value='+']");
let subtractBtn = document.querySelector("[value='-']");
let equalBtn = document.querySelector("[value='=']");
let oneBtn = document.querySelector("[value='1']");
let twoBtn = document.querySelector("[value='2']");
let threeBtn = document.querySelector("[value='3']");
let fourBtn = document.querySelector("[value='4']");
let fiveBtn = document.querySelector("[value='5']");
let sixBtn = document.querySelector("[value='6']");
let sevenBtn = document.querySelector("[value='7']");
let eightBtn = document.querySelector("[value='8']");
let nineBtn = document.querySelector("[value='9']");
let zeroBtn = document.querySelector("[value='0']");
let dotBtn = document.querySelector("[value='.']");

// * Getting the data from local storage.
if (localStorage.getItem("math-operation")) {
  operationsScreen.textContent = localStorage.getItem("math-operation");
}

if (localStorage.getItem("result")) {
  resultDiv.textContent = localStorage.getItem("result");
}

// * Creating the function that is responsible for printing to the result screen and add event listeners.
oneBtn.addEventListener("click", addToResultScreen);
twoBtn.addEventListener("click", addToResultScreen);
threeBtn.addEventListener("click", addToResultScreen);
fourBtn.addEventListener("click", addToResultScreen);
fiveBtn.addEventListener("click", addToResultScreen);
sixBtn.addEventListener("click", addToResultScreen);
sevenBtn.addEventListener("click", addToResultScreen);
eightBtn.addEventListener("click", addToResultScreen);
nineBtn.addEventListener("click", addToResultScreen);
zeroBtn.addEventListener("click", addToResultScreen);
dotBtn.addEventListener("click", addToResultScreen);
divisionBtn.addEventListener("click", addToResultScreen);
multiplyBtn.addEventListener("click", addToResultScreen);
subtractBtn.addEventListener("click", addToResultScreen);
addBtn.addEventListener("click", addToResultScreen);
modulusBtn.addEventListener("click", addToResultScreen);

function addToResultScreen(e) {
  operationsScreen.textContent += e.target.value;
}

// * Creating the function that is responsible for parsing the result screen when C button is clicked.

cBtn.addEventListener("click", parseResultScreen);

function parseResultScreen() {
  operationsScreen.innerHTML = "";
  resultDiv.innerHTML = "";
  removeOperationFromLS();
  removeResultFromLS();
}

// * Creating the function that is responsible for parsing the last entry of the result screen.

ceBtn.addEventListener("click", deleteLastEntry);

function deleteLastEntry() {
  let resultArr = operationsScreen.textContent.split("");
  let deleted = resultArr.pop();
  resultArr.splice(deleted);
  operationsScreen.textContent = resultArr.join("");
}

// * Creating the function which responsible for operations performing.

equalBtn.addEventListener("click", equation);
function equation() {
  let resultText = operationsScreen.textContent;
  let multiply = resultText.split("*");
  let division = resultText.split("/");
  let add = resultText.split("+");
  let subtract = resultText.split("-");
  let modulus = resultText.split("%");
  if (resultText.includes("*")) {
    let resultMul = 1;
    for (let i = 0; i < multiply.length; i++) {
      if (multiply !== [""]) {
        resultMul *= Number(multiply[i]);
      }
    }
    resultDiv.textContent = resultMul;
    addResultToLS(resultMul);
  }
  if (resultText.includes("/")) {
    let resultDivision = Number(division[0]);
    for (let i = 1; i < division.length; i++) {
      if (division !== [""]) {
        resultDivision /= Number(division[i]);
      }
    }
    resultDiv.textContent = resultDivision;
    addResultToLS(resultDivision);
  }
  if (resultText.includes("+")) {
    let resultAdd = 0;
    for (let i = 0; i < add.length; i++) {
      if (add !== [""]) {
        resultAdd += Number(add[i]);
      }
    }
    resultDiv.textContent = resultAdd;
    addResultToLS(resultAdd);
  }
  if (resultText.includes("-")) {
    let resultSub = Number(subtract[0]);
    for (let i = 1; i < subtract.length; i++) {
      if (subtract !== [""]) {
        resultSub -= Number(subtract[i]);
      }
    }
    resultDiv.textContent = resultSub;
    addResultToLS(resultSub);
  }
  if (resultText.includes("%")) {
    let resultMod = Number(modulus[0]);
    for (let i = 1; i < modulus.length; i++) {
      if (modulus !== [""]) {
        resultMod %= Number(modulus[i]);
      }
    }
    resultDiv.textContent = resultMod;
    addResultToLS(resultMod);
  }
  addOperationToLS(resultText);
}

// * Creating the function that responsible for adding the math operation to the local storage.

function addOperationToLS(mathOp) {
  window.localStorage.setItem("math-operation", mathOp);
}

// * Creating the function that responsible for removing the math operation from the local storage.

function removeOperationFromLS() {
  window.localStorage.removeItem("math-operation");
}

// * Creating the function that responsible for adding the result to the local storage.

function addResultToLS(result) {
  window.localStorage.setItem("result", result);
}

// * Creating the function that responsible for removing the result from the local storage.

function removeResultFromLS() {
  window.localStorage.removeItem("result");
}
