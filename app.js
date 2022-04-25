const billInput = document.getElementById("bill");
const resetBtn = document.getElementById("reset-btn");
const customBtn = document.getElementById("custom");
const peopleInput = document.getElementById("number");
const tipOutput = document.getElementById("tip-amount");
const totalOutput = document.getElementById("total-amount");
const tipBtn = document.querySelectorAll(".btn");
const inputs = document.querySelectorAll("input");
const peopleErr = document.getElementById("people-error");
const errMsgs = document.querySelectorAll(".err--msg");
const form = document.querySelector("form");
let bill, tip, customTip, people;
inputs.forEach((inputElement) => {
  inputElement.addEventListener("change", () => {
    resetBtn.disabled = false;
  });
});

billInput.addEventListener("keyup", (e) => {
  bill = Number(e.target.value);
  if (bill === 0) {
    errMsgs[0].textContent = "Can't be zero";
    billInput.classList.add("input--err");
  } else {
    errMsgs[0].textContent = "";
    billInput.classList.remove("input--err");
  }
  calcPerPerson();
  e.preventDefault();
});
peopleInput.addEventListener("keyup", (e) => {
  people = Number(e.target.value);
  if (people === 0) {
    errMsgs[1].textContent = "Can't be zero";
    peopleInput.classList.add("input--err");
  } else {
    errMsgs[1].textContent = "";
    peopleInput.classList.remove("input--err");
  }
  calcPerPerson();
  e.preventDefault();
});
tipBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    tipBtn.forEach((btn) => btn.classList.remove("btn--active"));
    btn.classList.add("btn--active");
    tip = Number(btn.value);
    calcPerPerson();
    e.preventDefault();
  });
});
customBtn.addEventListener("keyup", (e) => {
  customTip = Number(e.target.value) / 100;
  if (customTip > 0) tip = customTip;
  console.log(customTip);
});
function calcPerPerson() {
  const totalPerPerson = (bill * (1 + tip)) / people;
  const tipPerPerson = (bill * tip) / people;
  if (isFinite(totalPerPerson) && isFinite(tipPerPerson)) {
    tipOutput.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalOutput.textContent = `$${totalPerPerson.toFixed(2)}`;
  }
}
form.addEventListener("reset", (e) => {
  resetBtn.disabled = true;
  tipBtn.forEach((btn) => btn.classList.remove("btn--active"));
  (bill = 0), (tip = 0), (customTip = 0), (people = 0);
  tipOutput.textContent = "$0.00";
  totalOutput.textContent = "$0.00";
});
