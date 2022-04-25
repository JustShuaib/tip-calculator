const billInput = document.getElementById("bill");
const resetBtn = document.getElementById("reset-btn");
const customBtn = document.getElementById("custom");
const peopleInput = document.getElementById("number");
const tipOutput = document.getElementById("tip-amount");
const totalOutput = document.getElementById("total-amount");
const tipBtn = document.querySelectorAll(".btn");
const errMsgs = document.querySelectorAll(".err--msg");
const form = document.querySelector("form");

// ***** GLOBAL VARS *******
let bill, tip, customTip, people;

//  ******** EVENT LISTENERS *********

billInput.addEventListener("keyup", handleBill);
peopleInput.addEventListener("keyup", handlePeople);
tipBtn.forEach((btn) => btn.addEventListener("click", handleTip));
customBtn.addEventListener("keyup", handleCustomTip);
form.addEventListener("reset", resetState);

//  ******** FUNCTIONS *********

function handleBill(e) {
  bill = Number(e.target.value);
  showErrorMessage(e, bill, 0);
  calcPerPerson();
}
function handlePeople(e) {
  people = Number(e.target.value);
  showErrorMessage(e, people, 1);
  calcPerPerson();
}
function showErrorMessage(event, prop, index) {
  if (prop <= 0) {
    errMsgs[index].textContent = `Can't be ${prop === 0 ? "zero" : "negative"}`;
    event.target.style.outline = "2px solid red";
    return;
  }
  errMsgs[index].textContent = "";
  event.target.style.outlineColor = "hsl(172, 67%, 45%)";
  resetBtn.disabled = false;
}
function handleTip(e) {
  tipBtn.forEach((btn) => btn.classList.remove("btn--active"));
  e.target.classList.add("btn--active");
  tip = Number(e.target.value);
  customBtn.value = "";
  resetBtn.disabled = false;
  calcPerPerson();
  e.preventDefault();
}
function handleCustomTip(e) {
  customTip = Number(e.target.value) / 100;
  if (customTip <= 0) return;
  tipBtn.forEach((btn) => btn.classList.remove("btn--active"));
  resetBtn.disabled = false;
  tip = customTip;
  calcPerPerson();
}

function calcPerPerson() {
  const totalPerPerson = (bill * (1 + tip)) / people;
  const tipPerPerson = (bill * tip) / people;
  if (
    totalPerPerson > 0 &&
    tipPerPerson > 0 &&
    isFinite(totalPerPerson) &&
    isFinite(tipPerPerson)
  ) {
    tipOutput.textContent = `$${tipPerPerson.toFixed(2)}`;
    totalOutput.textContent = `$${totalPerPerson.toFixed(2)}`;
  }
}

function resetState() {
  resetBtn.disabled = true;
  tipBtn.forEach((btn) => btn.classList.remove("btn--active"));
  errMsgs.forEach((msg) => (msg.textContent = ""));
  peopleInput.classList.remove("input--err");
  billInput.classList.remove("input--err");
  (bill = 0), (tip = 0), (customTip = 0), (people = 0);
  tipOutput.textContent = "$0.00";
  totalOutput.textContent = "$0.00";
}
