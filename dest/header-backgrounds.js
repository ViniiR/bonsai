"use strict";
const updateHeaderBackgroundColor = () => {
    const headerStickyContainer = document.querySelector("section.sticky-container");
    const scrollThreshold = 20;
    const scrollTop = window.scrollY;
    if (headerStickyContainer === null)
        return;
    if (scrollTop >= scrollThreshold) {
        headerStickyContainer.style.backgroundColor = "white";
    }
    else {
        headerStickyContainer.style.backgroundColor = "transparent";
    }
};
updateHeaderBackgroundColor();
window.addEventListener("scroll", updateHeaderBackgroundColor);
function setBackgroundShadow() {
    if (window.innerWidth <= 425)
        return;
    const backgroundShadow = document.querySelector("div#background-shadow");
    const percentage = window.innerWidth / 22;
    const background = `linear-gradient(65deg, white ${100 - percentage}%, #f2faff ${percentage}%)`;
    if (backgroundShadow !== null) {
        backgroundShadow.style.backgroundImage = background;
    }
}
setBackgroundShadow();
window.addEventListener("resize", setBackgroundShadow);
