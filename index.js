const navMenu = document.getElementById("nav_menu");
const hamburger = document.getElementById("hamburger");

console.log(navMenu);
console.log(hamburger);

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});