"use strict";

window.onscroll = () => {
  Sticky();
};

const navbar = document.getElementById("navbar");

function Sticky() {
  if (window.pageYOffset >= 69) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
