// * Declaring the variable that hold the elements.
let resultDiv = document.querySelector(".result-screen");
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
  resultDiv.textContent += e.target.value;
}

// * Creating the function that is responsible for parsing the result screen when C button is clicked.

cBtn.addEventListener("click", parseResultScreen);

function parseResultScreen() {
  resultDiv.innerHTML = "";
}

// * Creating the function that is responsible for parsing the last entry of the result screen.

ceBtn.addEventListener("click", deleteLastEntry);

function deleteLastEntry() {
  let resultArr = resultDiv.textContent.split("");
  let deleted = resultArr.pop();
  resultArr.splice(deleted);
  resultDiv.textContent = resultArr.join("");
}