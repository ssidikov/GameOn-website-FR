// DOM Elements
const topNav = document.getElementById("topnav")
const burgerIcon = document.querySelector(".icon")
const modalBackground = document.querySelector(".modal-background");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// Burger menu

function editNav() {
  if (topNav.classList.contains('responsive')) {
    topNav.classList.remove("responsive");
  } else
    topNav.classList.add("responsive");
}

burgerIcon.addEventListener("click", editNav);

// launch modal form
function launchModal() {
  modalBackground.style.display = "block";
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// Close modal form
function closeModal() {
  modalBackground.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);