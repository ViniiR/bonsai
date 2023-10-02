"use strict";

//TODO: bold and dim fonts in month year switch, change prices based on the switch state, do the hamburguer menu menu and animate it;

const dropdownButtons = document.querySelectorAll("button.dropdown");
const hamburguerMenuButton = document.querySelector('button.hamburguer-menu-button');

//TODO: clean this sht
hamburguerMenuButton.addEventListener("click", function () {
    const asideMenu = this.parentNode.querySelector('aside#hamburguer-menu');
    asideMenu.isActive = asideMenu.style.display === 'flex';
    const spans = {
        first: hamburguerMenuButton.querySelector('span#first-span'),
        second: hamburguerMenuButton.querySelector('span#second-span'),
        third: hamburguerMenuButton.querySelector('span#third-span'),
    };

    const rotate45deg = (span) => {
        span.style.transform = 'rotate(45deg)';
    }

    const rotateneg45deg = (span) => {
        span.style.transform = 'rotate(-45deg)';
    }

    const setXButton = () => {
        const delay = 500;
        spans.first.style.top = '10.5px'
        spans.second.style.backgroundColor = 'transparent'
        spans.third.style.bottom = '10.5px'
        setTimeout(() => {
            rotate45deg(spans.first)
        }, delay);
        setTimeout(() => {
            rotateneg45deg(spans.third)
        }, delay);
    }

    const setHamburguerButton = () => {
        const delay = 500;
        spans.first.style.transform = 'rotate(0deg)'
        spans.third.style.transform = 'rotate(0deg)'
        setTimeout(() => {
            spans.first.style.top = '0px'
            spans.second.style.backgroundColor = '#4c4d5f'
            spans.third.style.bottom = '0px'
        }, delay)
    }

    //TODO: it should be transform and not display, do the x animation for the button
    if (asideMenu.isActive) {
        asideMenu.style.display = 'none'
        setHamburguerButton()
    } else {
        asideMenu.style.display = 'flex';
        setXButton()
    }
});

dropdownButtons.forEach(button => {
    button.addEventListener("click", function () {
    const parentArticle = this.parentNode;
    const asideMenu = parentArticle.querySelector("aside");
    console.log(asideMenu.style.display);
    const isActive = asideMenu.style.display === "block" ? true : false;
    if (isActive) {
        asideMenu.style.display = "none";
    } else {
        asideMenu.style.display = "block";
    }
})});
