"use strict";
const billEl = document.querySelector(".bill");
const peopleEl = document.querySelector(".people");
const btnTip = document.querySelectorAll(".tip");
const btnCustom = document.querySelector(".custom");
const btnReset = document.querySelector(".reset");
const errorBill = document.querySelector(".error-bill");
const errorPeople = document.querySelector(".error-people");
const tipEl = document.querySelector(".tip-amount");
const totalEl = document.querySelector(".total-amount");
const btnSubmit = document.querySelector(".submit");
const percentageEl = document.querySelector(".percentage");

let active = true;

for (let i = 0; i < btnTip.length; i++) {
  btnTip[i].addEventListener("click", function () {
    const billInput = Number(billEl.value);
    const peopleInput = Number(peopleEl.value);
    if (active) {
      if (!billInput && !peopleInput) {
        errorBill.classList.remove("hidden");
        errorPeople.classList.remove("hidden");
      } else if (!peopleInput) {
        errorBill.classList.add("hidden");
        errorPeople.classList.remove("hidden");
      } else if (!billInput) {
        errorBill.classList.remove("hidden");
        errorPeople.classList.add("hidden");
      } else {
        active = false;
        errorBill.classList.add("hidden");
        errorPeople.classList.add("hidden");
        const tipAmount = billInput * btnTip[i].value;
        const total = billInput + tipAmount;
        const totalTip = (tipAmount / peopleInput).toFixed(2);
        const totalBill = (total / peopleInput).toFixed(2);
        tipEl.textContent = totalTip;
        totalEl.textContent = totalBill;
        btnTip[i].classList.add("active");
        billEl.disabled = true;
        peopleEl.disabled = true;
        btnCustom.disabled = true;
      }
    }
  });
}

document.addEventListener("keydown", function (e) {
  const billInput = Number(billEl.value);
  const peopleInput = Number(peopleEl.value);
  const custom = Number(btnCustom.value);
  if (active) {
    if (e.key === "Enter" && custom) {
      if (!billInput && !peopleInput) {
        errorBill.classList.remove("hidden");
        errorPeople.classList.remove("hidden");
      } else if (!billInput) {
        errorBill.classList.remove("hidden");
        errorPeople.classList.add("hidden");
      } else if (!peopleInput) {
        errorBill.classList.add("hidden");
        errorPeople.classList.remove("hidden");
      } else {
        active = false;
        errorBill.classList.add("hidden");
        errorPeople.classList.add("hidden");
        const customPercentage = custom / 100;
        const tipAmount = billInput * customPercentage;
        const total = billInput + tipAmount;
        const totalTip = (tipAmount / peopleInput).toFixed(2);
        const totalBill = (total / peopleInput).toFixed(2);
        tipEl.textContent = totalTip;
        totalEl.textContent = totalBill;
        btnCustom.disabled = true;
        billEl.disabled = true;
        peopleEl.disabled = true;
      }
    }
  }
});

btnCustom.addEventListener("keydown", function (e) {
  if (e.key) {
    percentageEl.classList.remove("hidden");
  }
});

btnSubmit.addEventListener("click", function () {
  const billInput = Number(billEl.value);
  const peopleInput = Number(peopleEl.value);
  const custom = Number(btnCustom.value);
  if (active) {
    if (!billInput && !peopleInput) {
      errorBill.classList.remove("hidden");
      errorPeople.classList.remove("hidden");
    } else if (!billInput) {
      errorBill.classList.remove("hidden");
      errorPeople.classList.add("hidden");
    } else if (!peopleInput) {
      errorBill.classList.add("hidden");
      errorPeople.classList.remove("hidden");
    } else {
      active = false;
      errorBill.classList.add("hidden");
      errorPeople.classList.add("hidden");
      const customPercentage = custom / 100;
      const tipAmount = billInput * customPercentage;
      const total = billInput + tipAmount;
      const totalTip = (tipAmount / peopleInput).toFixed(2);
      const totalBill = (total / peopleInput).toFixed(2);
      tipEl.textContent = totalTip;
      totalEl.textContent = totalBill;
      btnCustom.disabled = true;
      billEl.disabled = true;
      peopleEl.disabled = true;
    }
  }
});

btnReset.addEventListener("click", function () {
  billEl.value = "";
  peopleEl.value = "";
  btnCustom.value = "";
  active = true;
  btnCustom.disabled = false;
  billEl.disabled = false;
  peopleEl.disabled = false;
  for (let i = 0; i < btnTip.length; i++) {
    btnTip[i].classList.remove("active");
  }
  tipEl.textContent = "0.00";
  totalEl.textContent = "0.00";
  errorBill.classList.add("hidden");
  errorPeople.classList.add("hidden");
  percentageEl.classList.add("hidden");
});
