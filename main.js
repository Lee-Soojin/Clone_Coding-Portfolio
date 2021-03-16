"use strict";

window.addEventListener("scroll", Sticky);

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function Sticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
