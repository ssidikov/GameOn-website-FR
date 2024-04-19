// Burger menu
function toggleNav() {
  const topNav = document.getElementById("topnav");
  topNav.classList.toggle("responsive");
}

document.querySelector(".icon").addEventListener("click", toggleNav);

// launch modal form
function launchModal() {
  document.querySelector(".modal-background").style.display = "block";
}

document.querySelectorAll(".modal-btn").forEach((btn) => btn.addEventListener("click", launchModal));


// Close modal form
function closeModal() {
  document.querySelector(".modal-background").style.display = "none";
}

document.querySelector(".close").addEventListener("click", closeModal);