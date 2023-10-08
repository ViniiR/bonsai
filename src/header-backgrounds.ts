const updateHeaderBackgroundColor = (): void => {
    const headerStickyContainer: HTMLElement | null = document.querySelector("section.sticky-container");
    const scrollThreshold = 20;
    const scrollTop = window.scrollY;
    if (headerStickyContainer === null) return;
    if (scrollTop >= scrollThreshold) {
        headerStickyContainer.style.backgroundColor = "white";
    } else {
        headerStickyContainer.style.backgroundColor = "transparent";
    }
};

updateHeaderBackgroundColor();
window.addEventListener("scroll", updateHeaderBackgroundColor);

function setBackgroundShadow(): void {
    if (window.innerWidth <= 425) return;
    const backgroundShadow: HTMLDivElement | null = document.querySelector("div#background-shadow");
    const percentage: number = window.innerWidth / 22;
    const background: string = `linear-gradient(65deg, white ${100 - percentage}%, #f2faff ${percentage}%)`;
    if (backgroundShadow !== null) {
        backgroundShadow.style.backgroundImage = background;
    }
}

setBackgroundShadow();
window.addEventListener("resize", setBackgroundShadow);
