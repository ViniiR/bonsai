"use strict";
const buttonAsides = [
    {
        button: document.querySelector("#product-button"),
        aside: document.querySelector("#product-aside"),
    },
    {
        button: document.querySelector("#templates-button"),
        aside: document.querySelector("aside#templates-aside"),
    },
    {
        button: document.querySelector("#bonsai-workflow-button"),
        aside: document.querySelector("#bonsai-workflow-aside"),
    },
];
const setEventListener = (button, aside) => {
    if (button === null || aside === null)
        return;
    button.addEventListener("click", function (event) {
        event.stopPropagation();
        const isActive = aside.style.display === "flex";
        aside.style.display = isActive ? "none" : "flex";
    });
};
buttonAsides.forEach((object) => {
    setEventListener(Object.values(object)[0], Object.values(object)[1]);
});
const toggleMenuVisibility = (menu, state) => {
    const visibilityState = state ? "translateX(100%)" : "translateX(0%)";
    menu.style.transform = visibilityState;
};
const hideInnerMenus = () => {
    const productsAside = document.querySelector("aside#product-aside");
    const workflowAside = document.querySelector("aside#bonsai-workflow-aside");
    const templatesAside = document.querySelector("aside#templates-aside");
    for (const aside of [productsAside, workflowAside, templatesAside]) {
        if (aside === null)
            break;
        aside.style.display = "none";
    }
};
const hamburguerMenuButton = document.querySelector("button.hamburguer-menu-button");
const setButtonDisabledState = (state) => {
    if (hamburguerMenuButton === null)
        return;
    hamburguerMenuButton.disabled = state;
};
const setXButton = (spans) => {
    setButtonDisabledState(true);
    const delay = 200;
    spans.first.style.top = "10.5px";
    spans.second.style.backgroundColor = "transparent";
    spans.third.style.bottom = "10.5px";
    setTimeout(() => {
        spans.first.style.transform = "rotate(45deg)";
    }, delay);
    setTimeout(() => {
        spans.third.style.transform = "rotate(-45deg)";
    }, delay);
    setTimeout(() => {
        setButtonDisabledState(false);
    }, 500);
};
const setHamburguerButton = (spans) => {
    hideInnerMenus();
    setButtonDisabledState(true);
    const delay = 200;
    spans.first.style.transform = "rotate(0deg)";
    spans.third.style.transform = "rotate(0deg)";
    setTimeout(() => {
        spans.first.style.top = "0px";
        spans.second.style.backgroundColor = "#4c4d5f";
        spans.third.style.bottom = "0px";
    }, delay);
    setTimeout(() => {
        setButtonDisabledState(false);
    }, 500);
};
function toggleHamburguerMenu() {
    const asideMenu = document.querySelector("aside#hamburguer-menu");
    if (asideMenu === null || hamburguerMenuButton == null)
        return;
    const isActive = asideMenu.style.transform === "translateX(0%)";
    const spans = {
        first: hamburguerMenuButton.querySelector("span#first-span"),
        second: hamburguerMenuButton.querySelector("span#second-span"),
        third: hamburguerMenuButton.querySelector("span#third-span"),
    };
    if (isActive) {
        toggleMenuVisibility(asideMenu, true);
        setHamburguerButton(spans);
    }
    else {
        toggleMenuVisibility(asideMenu, false);
        setXButton(spans);
    }
}
if (hamburguerMenuButton !== null) {
    hamburguerMenuButton.addEventListener("click", toggleHamburguerMenu);
}
