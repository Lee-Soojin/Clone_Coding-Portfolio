"use strict";

// Make navbar transparent when it is on the top
const navbar = document.getElementById("navbar"),
  navbarHeight = navbar.getBoundingClientRect().height,
  BtnContact = document.querySelector(".home__contact"),
  sect_Contact = document.getElementById("#contact");

document.addEventListener("scroll", () => {
  if (window.scrollY >= navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// when button clicked, scroll to each section

navbar.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  scrollIntoView(link);
});

BtnContact.addEventListener("click", (event) => {
  const btntarget = event.target;
  const contact_link = btntarget.dataset.link;
  scrollIntoView(contact_link);
});

// When scroll down Home section need to be transparent

const home = document.querySelector("#home"),
  home_height = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY >= home_height / 2) {
    home.style.opacity = 0.5;
  } else if (window.scrollY >= home_height) {
    home.style.opacity = 0.3;
  } else {
    home.style.opacity = 1;
  }
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
