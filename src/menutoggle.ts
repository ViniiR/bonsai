interface buttonAside {
    button: HTMLElement | null;
    aside: HTMLElement | null;
}

const buttonAsides: buttonAside[] = [
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

const setEventListener = (button: HTMLElement | null, aside: HTMLElement | null) => {
    if (button === null || aside === null) return;
    button.addEventListener("click", function (event) {
        event.stopPropagation();
        const isActive: boolean = aside.style.display === "flex";
        aside.style.display = isActive ? "none" : "flex";
    });
};

buttonAsides.forEach((object) => {
    setEventListener(Object.values(object)[0], Object.values(object)[1]);
});

const toggleMenuVisibility = (menu: HTMLElement, state: boolean) => {
    const visibilityState = state ? "translateX(100%)" : "translateX(0%)";
    menu.style.transform = visibilityState;
};

const hideInnerMenus = () => {
    const productsAside: HTMLElement | null = document.querySelector("aside#product-aside");
    const workflowAside: HTMLElement | null = document.querySelector("aside#bonsai-workflow-aside");
    const templatesAside: HTMLElement | null = document.querySelector("aside#templates-aside");

    for (const aside of [productsAside, workflowAside, templatesAside]) {
        if (aside === null) break;
        aside.style.display = "none";
    }
};

const hamburguerMenuButton: HTMLButtonElement | null = document.querySelector("button.hamburguer-menu-button");

const setButtonDisabledState = (state: boolean) => {
    if (hamburguerMenuButton === null) return;
    hamburguerMenuButton.disabled = state;
};

interface buttonSpans {
    first: HTMLElement;
    second: HTMLElement;
    third: HTMLElement;
}

const setXButton = (spans: buttonSpans) => {
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

const setHamburguerButton = (spans: buttonSpans) => {
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
    const asideMenu: HTMLElement | null = document.querySelector("aside#hamburguer-menu");
    if (asideMenu === null || hamburguerMenuButton == null) return;
    const isActive = asideMenu.style.transform === "translateX(0%)";
    const spans: buttonSpans = {
        first: hamburguerMenuButton.querySelector("span#first-span") as HTMLElement,
        second: hamburguerMenuButton.querySelector("span#second-span") as HTMLElement,
        third: hamburguerMenuButton.querySelector("span#third-span") as HTMLElement,
    };

    if (isActive) {
        toggleMenuVisibility(asideMenu, true);
        setHamburguerButton(spans);
    } else {
        toggleMenuVisibility(asideMenu, false);
        setXButton(spans);
    }
}

if (hamburguerMenuButton !== null) {
    hamburguerMenuButton.addEventListener("click", toggleHamburguerMenu);
}