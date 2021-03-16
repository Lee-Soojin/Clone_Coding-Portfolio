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

const home_container = document.querySelector(".home__container"),
  home_height = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  const val_opacity = 1 - window.scrollY / home_height;
  if (val_opacity <= 0) {
    return;
  } else {
    home_container.style.opacity = val_opacity;
  }
});

// Button
const BtnGoUp = document.querySelector(".button__GotoTop");
document.addEventListener("scroll", () => {
  if (window.scrollY >= home_height / 2) {
    BtnGoUp.classList.remove("btn__hide");
  } else {
    BtnGoUp.classList.add("btn__hide");
  }
});
BtnGoUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// scrollIntoView Function
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
