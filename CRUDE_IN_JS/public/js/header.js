
document.addEventListener("DOMContentLoaded", () => {
  const url = document.URL;
  const navbar = document.querySelector(".navbar");

  // Change the active state of navigation link
  if (url.match("signup")) {
    navbar.children[1].setAttribute("class", "active");
  }

  if (url.match("signin")) {
    navbar.children[2].setAttribute("class", "active");
  }

});