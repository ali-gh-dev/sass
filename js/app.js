const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");


// show menu - hide menu
navToggle.addEventListener("click", function (){
    navMenu.classList.toggle("show-menu");
});