window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "#000";
  } else {
    navbar.style.background = "#111";
  }
});
