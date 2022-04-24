const billInput = document.getElementById("bill");
const resetBtn = document.getElementById("reset-btn");
const customBtn = document.getElementById("custom");
const peopleInput = document.getElementById("number");
const tipOutput = document.getElementById("tip-amount");
const totalOutput = document.getElementById("total-amount");
const tipBtn = document.querySelectorAll(".btn");
billInput.addEventListener("keyup", (e) => {
  const bill = Number(e.target.value);
  console.log(bill);
});
peopleInput.addEventListener("keyup", (e) => {
  const people = Number(e.target.value);
  console.log(people);
});
tipBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.value);
  });
});
customBtn.addEventListener("keyup", (e) => {
  const bill = Number(e.target.value);
  console.log(bill);
});
