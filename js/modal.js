// DOM Elements
const modalBackground = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

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
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
