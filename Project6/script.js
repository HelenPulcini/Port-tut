let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".lsc_navbar-links_container");

menu.addEventListener("click", function () {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
})

window.addEventListener("scroll", function () {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
})