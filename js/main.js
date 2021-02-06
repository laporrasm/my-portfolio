/*
  ------------------------------------------------------------
  ------------------------------------------------------------
  Selectors
  ------------------------------------------------------------
  ------------------------------------------------------------
*/

const navToggler = document.querySelector(".nav-toggler");
const nav = document.querySelector(".nav");
const internalLinks = document.querySelectorAll(".nav__link");
const faders = document.querySelectorAll(".fade-in");
const slidersBottom = document.querySelectorAll(".slide-in-bottom");
const slidersLeft = document.querySelectorAll(".slide-in-left");
const backToTopBtn = document.querySelector(".back-to-top");
const projectsSection = document.getElementById("portafolio");
const form = document.querySelector("contact__form");

/*
  ------------------------------------------------------------
  ------------------------------------------------------------
  Events
  ------------------------------------------------------------
  ------------------------------------------------------------
*/

backToTopBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", function () {
  let y = window.scrollY;

  if (y > projectsSection.getBoundingClientRect().y + window.scrollY) {
    backToTopBtn.classList.add("appear");
  } else backToTopBtn.classList.remove("appear");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let formData = new FormData(form);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
});

/*
  ------------------------------------------------------------
  ------------------------------------------------------------
  Scroll to Section
  ------------------------------------------------------------
  ------------------------------------------------------------
*/

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  window.scrollTo(
    section.getBoundingClientRect().x + window.scrollX,
    section.getBoundingClientRect().y + window.scrollY
  );
}

navToggler.addEventListener("click", function (event) {
  nav.classList.toggle("nav--active");
});

internalLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var sectionId = event.target.getAttribute("href").substring(1);
    scrollToSection(sectionId);
    nav.classList.remove("nav--active");
  });
});

/*
  ------------------------------------------------------------
  ------------------------------------------------------------
  Appear on Scroll
  ------------------------------------------------------------
  ------------------------------------------------------------
*/

const options = {
  threshold: 1,
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
options);

faders.forEach(function (fader) {
  appearOnScroll.observe(fader);
});

slidersBottom.forEach(function (slider) {
  appearOnScroll.observe(slider);
});

slidersLeft.forEach(function (slider) {
  appearOnScroll.observe(slider);
});
