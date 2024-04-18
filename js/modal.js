// DOM Elements
const modalBackground = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const topNav = document.getElementById("topnav")
const burgerIcon = document.querySelector(".icon")

// launch modal form
function launchModal() {
  modalBackground.style.display = "block";
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// close modal form
function closeModal() {
  modalBackground.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

// Burger menu

function editNav() {
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
}

burgerIcon.addEventListener("click", editNav);