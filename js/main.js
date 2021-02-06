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
const skillsSection = document.getElementById("habilidades");

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

/*
  ------------------------------------------------------------
  ------------------------------------------------------------
  Back To Top Button
  ------------------------------------------------------------
  ------------------------------------------------------------
*/

const btnOptions = {
  threshold: 1,
};

const toggleButtonVisibility = new IntersectionObserver(function (entries) {
  entries.forEach(function(entry) {
    if (!entry.isIntersecting) {
      return;
    } else {
      backToTopBtn.classList.toggle("appear");
    }
  })
},
btnOptions);

toggleButtonVisibility.observe(skillsSection);
