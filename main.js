// Nav bar

let navBarLinks = document.querySelectorAll(".header .links li a");
putActiveClass(navBarLinks);

// Toggel Menu
const toggelMenu = document.querySelector(".header .toggle-menu");
const toggelIcon = document.querySelector(".header .toggle-icon");

toggelIcon.onclick = function () {
  toggelMenu.classList.toggle("show");
};

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
