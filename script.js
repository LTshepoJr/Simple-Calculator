const dataOperator = document.querySelectorAll("[data-operator]");
const dataNumber = document.querySelectorAll("[data-number]");

const display = document.getElementById("display");

dataNumber.forEach((num) => {
  num.addEventListener("click", () => {
    display.textContent = num.dataset.number;
  });
});

dataOperator.forEach((op) => {
  op.addEventListener("click", () => {
    display.textContent = op.dataset.operator;
  });
});
