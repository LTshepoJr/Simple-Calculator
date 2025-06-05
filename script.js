const dataOperator = document.querySelectorAll("[data-operator]");
const dataNumber = document.querySelectorAll("[data-number]");
const display = document.getElementById("display");

let currentInput = 0;
let operation = null;
let previousInput = "";
let resetInput = false;

function updateDisplay() {
  display.textContent = currentInput;
}

function inputNumber(number) {
  if (currentInput === 0 || resetInput) {
    currentInput = number;
    resetInput = false;
  } else {
    currentInput += number;
  }
}

function clearAll() {
  currentInput = 0;
  operation = null;
  previousInput = "";
}

function chooseOperation(operator) {
  if (currentInput === 0) {
    return;
  }

  if (previousInput != "") {
    compute();
  }

  operation = operator;
  previousInput = currentInput;
  resetInput = true;
}

function roundToFour(number) {
  if (Number.isInteger(number)) {
    return number;
  } else {
    return parseFloat(number.toFixed(4));
  }
}

function compute() {
  let computation;
  const prevInput = parseFloat(previousInput);
  const currInput = parseFloat(currentInput);

  if (isNaN(prevInput)) {
    return;
  }

  switch (operation) {
    case "add":
      computation = prevInput + currInput;
      break;
    case "multiply":
      computation = prevInput * currInput;
      break;
    case "subtract":
      computation = prevInput - currInput;
      break;
    case "divide":
      computation = prevInput / currInput;
      break;
    default:
      return;
  }

  currentInput = roundToFour(computation);
  operation = null;
  previousInput = "";
  resetInput = true;
}

dataNumber.forEach((num) => {
  num.addEventListener("click", () => {
    inputNumber(num.dataset.number);
    updateDisplay();
  });
});

dataOperator.forEach((op) => {
  op.addEventListener("click", () => {
    const action = op.dataset.operator;
    console.log(action);
    switch (action) {
      case "clear":
        clearAll();
        break;
      case "add":
      case "subtract":
      case "multiply":
      case "divide":
        chooseOperation(action);
        break;
      case "equals":
        compute();
        break;
    }
    updateDisplay();
  });
});
