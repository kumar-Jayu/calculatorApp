let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");
let number1 = 0;
let number2 = 0;
let operator = null;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", clickedButton);
}

function clickedButton() {
  let btnvalue = this.getAttribute("data-value");

  switch (btnvalue) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      display.innerText += btnvalue;
      break;
    case ".":
      display.innerText += btnvalue;
      break;
    case "+":
    case "-":
    case "*":
    case "/":
    case "%":
      operator = btnvalue;
      number1 = parseFloat(display.textContent);
      display.innerText = "";
      break;
    case "=":
      number2 = parseFloat(display.textContent);
      const res = eval(number1 + " " + operator + " " + number2);
      if (isNaN(res)) {
        display.innerText = "0";
      } else if (!isFinite(res)) {
        display.innerText = "∞";
      } else display.innerText = res;

      number1 = 0;
      number2 = 0;
      operator = null;
      break;
    case "AC":
      number1 = 0;
      number2 = 0;
      operator = null;
      display.innerText = "";
      break;
    case "DEL":
      let truncNum = parseFloat(display.textContent);
      truncNum = Math.floor(truncNum / 10);
      btnvalue = truncNum;
      display.innerText = btnvalue;
      if (isNaN(btnvalue)) {
        display.innerText = "0";
      } else if (!isFinite(res)) {
        display.innerText = "∞";
      } else display.innerText = btnvalue;

      break;
  }
}

// Mapping between keyboard keys and calculator button data-values
const keyMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  ".": ".",
  "+": "+",
  "-": "-",
  "*": "*",
  "/": "/",
  "%": "%",
  "=": "=",
  Enter: "=",
  Backspace: "DEL",
  Delete: "AC",
  Escape: "AC",
};

// Add event listener to the document to capture keyboard input
document.addEventListener("keydown", keyboardfun);
function keyboardfun(event) {
  // Get the key that was pressed
  const key = event.key;

  // Check if the pressed key is mapped to a calculator button
  if (keyMap.hasOwnProperty(key)) {
    // Get the data-value corresponding to the pressed key
    const dataValue = keyMap[key];

    // Find the calculator button with the corresponding data-value
    const button = document.querySelector(`.btn[data-value="${dataValue}"]`);
    // const button = document.querySelector('.btn[data-value="' + dataValue + '"]');

    // If the button is found, trigger a click event on it
    if (button) {
      button.click();
    }
  }
}
