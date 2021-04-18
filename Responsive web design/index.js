let alertBoxEl = document.getElementById("alertBox");
let closeIconEl = document.getElementById("closeIcon");
closeIcon.onclick = function () {
  alertBoxEl.classList.add("d-none");
};
let chevronIconEl = document.getElementById("chevronIcon");
let popupCardEl = document.getElementById("popupCard");

chevronIconEl.addEventListener("click", function () {
  chevronIconEl.classList.toggle("fa-chevron-down");
  chevronIconEl.classList.toggle("fa-chevron-up");
});
chevronIconEl.addEventListener("click", function () {
  let popupCardEl = document.getElementById("popupCard");
  popupCardEl.classList.toggle("show");
});
let coinBoxEl = document.getElementById("coinBox");
let coinNumEl = document.getElementById("coinNum");
coinBoxEl.addEventListener("click", function () {
  let text = coinNumEl.textContent;
  if (text === "0") {
    text = "100000";
  } else {
    text = "0";
  }
  coinNumEl.textContent = text;
});
let coinBox2El = document.getElementById("coinBox2");
let coinNum2El = document.getElementById("coinNum2");
coinBox2El.addEventListener("click", function () {
  let text2 = coinNum2El.textContent;
  if (text2 === "0") {
    text2 = "100000";
  } else {
    text2 = "0";
  }
  coinNum2El.textContent = text2;
});
let imgPopupEl = document.getElementById("imgPopup");
imgPopupEl.addEventListener("click", function () {
  let qrcodeCardEl = document.getElementById("qrcodeCard");
  qrcodeCardEl.classList.toggle("show");
});

// mobile layout //

let imgPopUpEl = document.getElementById("imgPopUp");
imgPopUpEl.addEventListener("click", function () {
  let qrCodeCardEl = document.getElementById("qrCodeCard");
  qrCodeCardEl.classList.toggle("show");
});
let coinBox3El = document.getElementById("coinBox3");
let coinNum3El = document.getElementById("coinNum3");
coinBox3El.addEventListener("click", function () {
  let text3 = coinNum3El.textContent;
  if (text3 === "0") {
    text3 = "100000";
  } else {
    text3 = "0";
  }
  coinNum3El.textContent = text3;
});
let coinBox4El = document.getElementById("coinBox4");
let coinNum4El = document.getElementById("coinNum4");
coinBox4El.addEventListener("click", function () {
  let text4 = coinNum4El.textContent;
  if (text4 === "0") {
    text4 = "100000";
  } else {
    text4 = "0";
  }
  coinNum4El.textContent = text4;
});
// left side nav//
function openNav() {
  document.getElementById("leftSideNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("leftSideNav").style.width = "0";
}

function openNavRight() {
  document.getElementById("rightSideNav").style.width = "100%";
}

function closeNavRight() {
  document.getElementById("rightSideNav").style.width = "0";
}
