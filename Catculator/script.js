"use strict";

// -- Selecting elements

const btnsShowModal = document.querySelectorAll(".show-modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelectorAll(".close-modal");
const modals = document.querySelectorAll(".modal");

// -- Functions
function addOverlay() {
  overlay.classList.remove("hidden");
}

function removeOverlay() {
  overlay.classList.add("hidden");
}

for (let i = 0; i < btnsShowModal.length; i++) {
  // toggleModal function
  const toggleModal = function () {
    if (modals[i].classList.contains("hidden")) {
      for (let y = 0; y < modals.length; y++) {
        modals[i].classList.remove("hidden");
        addOverlay();
      }
    } else {
      for (let y = 0; y < modals.length; y++) {
        modals[i].classList.add("hidden");
        removeOverlay();
      }
    }
  };

  // Close modal function
  const closeModal = function () {
    modals[i].classList.add("hidden");
    removeOverlay();
  };

  // Keyboard events
  document.addEventListener("keydown", function (e) {
    // 'Esc' works
    if (e.key === "Escape") {
      closeModal();
    }
  });

  // Close button 'x'
  for (let z = 0; z < btnCloseModal.length; z++) {
    btnCloseModal[z].addEventListener("click", closeModal);
  }

  // Closing overlay by clicking on it
  overlay.addEventListener("click", function () {
    closeModal();
  });

  btnsShowModal[i].addEventListener("click", toggleModal);
}

// -- TIME to DECIMALS converter
const hrsMinSec = document.querySelector("#hms-f1");
const btnSubmit1 = document.querySelector("#btn-submit-f1");
const result1 = document.querySelector("#result-f1");

const calcTimeToDec = function (e) {
  e.preventDefault();
  const hrsMinSec1Value = hrsMinSec.value;
  const splittedHrsMinSec1Value = String(hrsMinSec1Value).split(":"); // ['6', '34', '44']
  const result =
    Number(splittedHrsMinSec1Value[0]) +
    Number(splittedHrsMinSec1Value[1]) * (1 / 60) +
    Number(splittedHrsMinSec1Value[2]) * (1 / 3600);
  // console.log(result);
  result1.textContent = `Result: ${result.toFixed(2)}`;
  hrsMinSec.value = "";
};

btnSubmit1.addEventListener("click", calcTimeToDec);

// -- DECIMALS to TIME converter
const decimals2 = document.querySelector("#dec-f2");
const btnSubmit2 = document.querySelector("#btn-submit-f2");
const result2 = document.querySelector("#result-f2");

const calcDecToTime = function (e) {
  e.preventDefault();

  const decimals2Value = decimals2.value;
  const splittedDecimals2Value = decimals2Value.split(".");
  const hh = Number(splittedDecimals2Value[0]); // 8
  const mm = Math.trunc((Number(splittedDecimals2Value[1]) / 100) * 60);
  result2.textContent = `Result: ${hh}h${
    mm < 10 ? String(mm).padStart(2, 0) : mm
  }m`;
  decimals2.value = "";
};

btnSubmit2.addEventListener("click", calcDecToTime);

// TIME between HOURS calculator
const time1 = document.querySelector("#t1-f3");
const time2 = document.querySelector("#t2-f3");
const btnSubmit3 = document.querySelector("#btn-submit-f3");
const result3 = document.querySelector("#result-f3");

const timeBtwHours = function (e) {
  e.preventDefault();

  const time1Value = time1.value.split(":");
  const time2Value = time2.value.split(":");

  const hh = Math.abs(Number(time2Value[0]) - Number(time1Value[0]));
  const mm = Math.abs(Number(time2Value[1]) - Number(time1Value[1]));
  const ss = Math.abs(Number(time2Value[2]) - Number(time1Value[2]));

  result3.textContent = `Result: ${hh}h ${
    mm < 10 ? String(mm).padStart(2, 0) : mm
  }m ${ss < 10 ? String(ss).padStart(2, 0) : ss}s`;

  time1.value = "";
  time2.value = "";
};

btnSubmit3.addEventListener("click", timeBtwHours);

// TIME between DAYS calculator
const date1 = document.querySelector("#d1-f4");
const date2 = document.querySelector("#d2-f4");
const btnSubmit4 = document.querySelector("#btn-submit-f4");
const result4 = document.querySelector("#result-f4");

const timeBtwDates = function (e) {
  e.preventDefault();

  const date1Value = date1.value;
  const date2Value = date2.value;

  const newDate1 = new Date(date1Value);
  const newDate2 = new Date(date2Value);

  const result = Math.abs(Number(newDate2) - Number(newDate1));

  const days = Math.trunc(result / (1000 * 60 * 60 * 24));
  const hours = Math.trunc(result / (1000 * 60 * 60));
  const minutes = Math.trunc(result / (1000 * 60));

  const formattedDays = new Intl.NumberFormat(navigator.language).format(days);
  const formattedHours = new Intl.NumberFormat(navigator.language).format(
    hours
  );
  const formattedMinutes = new Intl.NumberFormat(navigator.language).format(
    minutes
  );

  result4.textContent = `Result: ${formattedDays} days or ${formattedHours} hours or ${formattedMinutes} minutes`;

  date1.value = "";
  date2.value = "";
};

btnSubmit4.addEventListener("click", timeBtwDates);
