//toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//menu di click
document.querySelector("#film-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar agar sidebar hilang
const film = document.querySelector("#film-menu");

document.addEventListener("click", function (e) {
  if (!film.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
