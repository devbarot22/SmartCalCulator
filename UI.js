const root = document.querySelector("#root");
const body = document.querySelector('body')
import Calculator from "./script.js";

const h1 = document.createElement("h1");
h1.innerHTML = "Calculator";
h1.style.textAlign = "center";


const input = document.createElement("input");
input.placeholder = "Enter Calculation";
input.type = "text"
input.pattern = "\\d+\\s*[\\+\\-]\\s*\\d+";
input.id = "inputTag";
input.title = "Enter a valid calculation (e.g., 5 + 3 or 10 - 2)";


const calculation = () => {
  const value = input.value.trim();
  const match = value.match(/^(\d+)\s*([\+\-])\s*(\d+)$/)
  if (match) {
    const a = parseFloat(match[1])
    const operator = match[2]
    const b = parseFloat(match[3])

    let result;
    if (operator == "+") {
      return Calculator.add(a)(b);
    }

    else if (operator == "-") {
      return Calculator.subtraction(a, b);

    }
    const resultDIv = document.createElement("div");
    resultDIv.innerHTML = `Result: ${result}`
  }


}

const button = document.createElement("button");
button.innerHTML = "Calculate"
button.onclick = (() => {
  if (input.value && input.value.trim() != "") {
    const calc = calculation()

    const existingResultDiv = document.querySelector("#resultDiv");
    if (existingResultDiv) {
      existingResultDiv.remove();
    }

    const resulth1 = document.createElement('h1')
    resulth1.innerHTML = `${calc}`
    resulth1.id = "resultDiv"
    root.appendChild(resulth1)
  }
})


const history = document.createElement("img")
history.src = './assets/History_Icon.png'
history.id = "historyIcon"


const historyVIew = document.createElement("div")
historyVIew.id = "historyView"
console.log(Calculator.viewHistory())
historyVIew.innerHTML = Calculator.viewHistory();

root.appendChild(h1);
root.appendChild(input);
root.appendChild(button);
root.appendChild(history);
body.appendChild(historyVIew)