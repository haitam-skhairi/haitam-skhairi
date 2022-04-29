// Scrolling Top
let btn = document.querySelector(".scrolling-button");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
btn.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

// Animation Skills
let skkilsSection = document.querySelector(".skills");
let spansProgress = document.querySelectorAll(".skills .prog span");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skkilsSection.offsetTop - 400) {
    spansProgress.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});
