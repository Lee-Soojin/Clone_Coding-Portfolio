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
  const elem = document.querySelector(link);
  elem.scrollIntoView({ behavior: "smooth" });
});

BtnContact.addEventListener("click", (event) => {
  const btntarget = event.target;
  const contact_link = btntarget.dataset.link;
  const contact_elem = document.querySelector(contact_link);
  contact_elem.scrollIntoView({ behavior: "smooth" });
});
