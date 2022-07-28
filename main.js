// Button Scroll To Top
let button = document.querySelector(".button-scroll-top");

window.onscroll = () => {
  if (this.scrollY >= 300) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
};

button.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Nav bar

let navBarLinks = document.querySelectorAll(".header .links li a");
putActiveClass(navBarLinks);

// Toggel Menu
const toggelMenu = document.querySelector(".header .toggle-menu");
const toggelIcon = document.querySelector(".header .toggle-icon");

toggelIcon.onclick = function () {
  toggelMenu.classList.toggle("open");
  toggelIcon.classList.toggle("active");
};

// Stop Propagation
toggelMenu.onclick = function (e) {
  e.stopPropagation();
};

// Close Toggle Bav If Clicking Outside it

document.addEventListener("click", (e) => {
  if (e.target !== toggelMenu && e.target !== toggelIcon) {
    toggelMenu.classList.remove("open");
  }
});

// Put Active Class Function

function putActiveClass(array) {
  array.forEach((element) => {
    element.addEventListener("click", () => {
      array.forEach((element) => {
        element.classList.remove("active");
      });
      element.classList.add("active");
    });
  });
}

// Skills Progress

let skills = document.querySelectorAll(".about-me .skills span");

setTimeout(() => {
  skills.forEach((span) => {
    span.style.width = span.dataset.width;
  });
}, 5000);
