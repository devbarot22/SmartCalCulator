const root = document.querySelector("#root");
import Calculator from "./script.js";

const h1 = document.createElement("h1");
h1.innerHTML = "Smart Calculator";
h1.style.textAlign = "center";

const input = document.createElement("input");
input.placeholder = "Enter Calculation";
input.id = "inputTag";

const calculation = () => {
  const value = input.value.trim();
  const match = value.match(/^(\d+)\s*([\+\-])\s*(\d+)$/)
  if (match) {
    const a = parseFloat(match[1])
    const operator = match[2]
    const b = parseFloat(match[3])

    let result;
    if (operator == "+") {
      result = Calculator.add(a)(b);
    }

    else if (operator == "-") {
      result = Calculator.subtraction(a, b);

    }
  }

  

}

const button = document.createElement("button");
button.innerHTML = "Calculate"
button.onclick = () => { calculation }

const resultDiv = document.createElement("div");
// console.log(result)
// result.innerHTML = result

root.appendChild(h1);
root.appendChild(input);
root.appendChild(button);
root.appendChild(resultDiv);