const getElement = (selector) => {
  const el = document.querySelector(selector);
  if (el) return el;
  throw new Error(`Please check your classes : ${selector} does not exist`);
};

const navToggle = getElement(".nav-toggle");
const links = getElement(".links");
const navBar = document.querySelector("#nav");

//add fixed class to navbar when scrolling down
window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 80) {
    navBar.classList.add("navbar-fixed");
  } else {
    navBar.classList.remove("navbar-fixed");
  }
});

// open sidebar when clicking on hamburger menu
navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

// close sidebar when clicking on a link
links.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
// update the current year in the copyright footer
const currentYear = new Date().getFullYear();

const updateDate = document.querySelector(".date");

updateDate.innerHTML = currentYear;
