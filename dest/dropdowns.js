"use strict";
const dropdownLinksArrows = document.querySelectorAll("div.dropdown-arrow");
const getMaxHeight = (element) => {
    element.style.height = "max-content";
    const maxHeight = element.offsetHeight;
    element.style.height = "0px";
    return maxHeight;
};
const startTransition = (link, element, maxHeight) => {
    link.style.pointerEvents = "none";
    if (element === null)
        return;
    const elementHeight = element.style.height;
    const numberHeight = Number(elementHeight.slice(0, elementHeight.indexOf("p")));
    if (numberHeight >= maxHeight) {
        link.style.pointerEvents = "all";
        return;
    }
    const slicedHeight = elementHeight.slice(0, elementHeight.indexOf("p"));
    element.style.height = Number(slicedHeight) + 10 + "px";
    requestAnimationFrame(() => {
        startTransition(link, element, maxHeight);
    });
};
const reverseTransition = (link, element) => {
    link.style.pointerEvents = "none";
    if (element === null)
        return;
    const height = element.style.height;
    const numberHeight = Number(height.slice(0, height.indexOf("p")));
    if (numberHeight <= 5) {
        link.style.pointerEvents = "all";
        return;
    }
    element.style.height = Number(numberHeight) - 10 + "px";
    requestAnimationFrame(() => {
        reverseTransition(link, element);
    });
};
dropdownLinksArrows.forEach((link) => {
    link.addEventListener("click", function () {
        const menu = link.parentNode?.parentNode?.querySelector("ul.dropdown-anchor-menus");
        menu.isActive = !menu.isActive;
        if (!menu.isActive) {
            reverseTransition(link, menu);
        }
        else {
            window.requestAnimationFrame(() => {
                startTransition(link, menu, getMaxHeight(menu));
            });
        }
    });
});
const dropdownButtons = document.querySelectorAll("button.dropdown");
dropdownButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const parentArticle = button.parentNode;
        if (parentArticle === null)
            return;
        const asideMenu = parentArticle.querySelector("aside");
        if (asideMenu === null)
            return;
        const isActive = asideMenu.style.display === "block" ? true : false;
        if (isActive) {
            asideMenu.style.display = "none";
        }
        else {
            asideMenu.style.display = "block";
        }
    });
});
