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
const NavbarMenu = document.querySelector(".navbar__menu");
NavbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  NavbarMenu.classList.remove("open");
  scrollIntoView(link);
});

// Navbar menu button
const BtnMenu = document.querySelector(".navbar__toggle-btn");
BtnMenu.addEventListener("click", () => {
  NavbarMenu.classList.toggle("open");
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

// Work section Filtering button event

const projectsContainer = document.querySelector(".work__projects"),
  category = document.querySelector(".work__categories"),
  project = document.querySelectorAll(".project");

category.addEventListener("click", (event) => {
  const work__target = event.target;
  const filter =
    work__target.dataset.filter || work__target.parentNode.dataset.filter;
  if (filter === null) {
    return;
  }

  // Remove selecton from the previous item and select the new one
  const active = document.querySelector(".category__btn.selected");
  active.classList.remove("selected");
  const target =
    work__target.nodeName === "BUTTON" ? work__target : work__target.parentNode;
  target.classList.add("selected");

  projectsContainer.classList.add("animation-out");
  setTimeout(() => {
    project.forEach((work) => {
      if (filter === "*" || filter === work.dataset.id) {
        work.classList.remove("hide");
      } else {
        work.classList.add("hide");
      }
    });
    projectsContainer.classList.remove("animation-out");
  }, 300);
});
