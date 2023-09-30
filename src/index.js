"use strict";

//TODO: bold and dim fonts in month year switch, change prices basedd on the switch state, do the hamburguer menu menu and animate it;

const dropdownButtons = document.querySelectorAll("button.dropdown");

dropdownButtons.forEach(button => {
    button.addEventListener("click", function () {
    const parentArticle = this.parentNode;
    const asideMenu = parentArticle.querySelector("aside");
    console.log(asideMenu.style.display);
    const isActive = asideMenu.style.display !== "block" ? false : true;
    if (isActive) {
        asideMenu.style.display = "none";
    } else {
        asideMenu.style.display = "block";
    }
})});
