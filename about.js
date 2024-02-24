// DOM button event click
const btnHamburger = document.getElementById("btn-hamburger-menu");
btnHamburger.addEventListener("click", function () {
  // DOM HAMBURGER MENU
  const hamburger1 = document.querySelector(".hamburger-1");
  const hamburger2 = document.querySelector(".hamburger-2");
  const hamburger3 = document.querySelector(".hamburger-3");

  hamburger1.classList.toggle("hamburgerA");
  hamburger2.classList.toggle("hamburgerB");
  hamburger3.classList.toggle("hamburgerC");

  // DOM NAVBAR MOBILE PHONE
  const navbarPhone = document.querySelector(".navbar-phone");
  navbarPhone.classList.toggle("screen-navbar");
  
});
