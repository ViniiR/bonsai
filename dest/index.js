"use strict";
const hamburguerMenuButton = document.querySelector("button.hamburguer-menu-button");
const monthYearSwitch = document.querySelector("input#month-year-switch");
const superChargeSubtitle = document.querySelector("article#sub-title > h2");
const addOnsContainer = document.querySelector("section#add-ons-article-container");
const bonsaiTaxPricingTag = document.querySelector("div#bonsai-tax-pricing-tag");
const partnersPricingTag = document.querySelector("div#partners-pricing-tag");
const bonsaiTaxAccounting = document.querySelector("h3#bonsai-tax-accounting");
const manageTrackExpenses = document.querySelector("p#manage-track-expenses");
const productButton = document.querySelector("#product-button");
const bonsaiWorkflowButton = document.querySelector("#bonsai-workflow-button");
const templatesButton = document.querySelector("#templates-button");
const dropdownLinksArrows = document.querySelectorAll("div.dropdown-arrow");
const monthYearTrialPrice = document.querySelectorAll("div.month-year-trial-price");
const dropdownButtons = document.querySelectorAll("button.dropdown");
function setBackgroundShadow() {
    if (window.innerWidth <= 425)
        return;
    const backgroundShadow = document.querySelector('div#background-shadow');
    const percentage = window.innerWidth / 22;
    const background = `linear-gradient(65deg, white ${100 - percentage}%, #f2faff ${percentage}%)`;
    if (backgroundShadow !== null) {
        backgroundShadow.style.backgroundImage = background;
    }
}
setBackgroundShadow();
window.addEventListener("resize", setBackgroundShadow);
const updateHeaderBackgroundColor = () => {
    const headerStickyContainer = document.querySelector('section.sticky-container');
    const scrollThreshold = 20;
    const scrollTop = window.scrollY;
    if (headerStickyContainer === null)
        return;
    if (scrollTop >= scrollThreshold) {
        headerStickyContainer.style.backgroundColor = 'white';
    }
    else {
        headerStickyContainer.style.backgroundColor = 'transparent';
    }
};
updateHeaderBackgroundColor();
window.addEventListener('scroll', updateHeaderBackgroundColor);
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
const buttonAsides = [
    {
        productButton,
        aside: document.querySelector("#product-aside"),
    },
    {
        templatesButton,
        aside: document.querySelector("aside#templates-aside"),
    },
    {
        bonsaiWorkflowButton,
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
buttonAsides.forEach(object => {
    setEventListener(Object.values(object)[0], Object.values(object)[1]);
});
const setYearly = (spans, billedYearly, trialPriceSection, moneySpans) => {
    if (superChargeSubtitle === null || addOnsContainer === null || bonsaiTaxPricingTag === null || partnersPricingTag === null || bonsaiTaxAccounting === null || manageTrackExpenses === null)
        return;
    const yearlyValues = [17, 32, 52];
    spans.monthly.style.fontWeight = "normal";
    spans.monthly.style.color = "#8e8f98";
    spans.yearly.style.fontWeight = "bold";
    spans.yearly.style.color = "#4c4d5f";
    superChargeSubtitle.innerText = "Customize your workflow with add-ons";
    addOnsContainer.style.flexDirection = "column-reverse";
    bonsaiTaxPricingTag.innerText = "$100";
    partnersPricingTag.innerText = "$90";
    bonsaiTaxAccounting.innerText = "Accounting & Tax Assistant";
    manageTrackExpenses.innerText = "Manage your freelance finances and always be ready for tax season with easy-to-use accounting and tax tools.";
    monthYearTrialPrice.forEach((div) => {
        div.innerText = "/YEAR";
    });
    billedYearly.forEach((section) => {
        section.style.display = "flex";
    });
    trialPriceSection.forEach((section) => {
        section.style.height = "110px";
    });
    for (const i in yearlyValues) {
        moneySpans[i].innerText = yearlyValues[i].toString();
    }
};
const setMonthly = (spans, billedYearly, trialPriceSection, moneySpans) => {
    if (superChargeSubtitle === null || addOnsContainer === null || bonsaiTaxPricingTag === null || partnersPricingTag === null || bonsaiTaxAccounting === null || manageTrackExpenses === null)
        return;
    const monthlyValues = [24, 39, 79];
    spans.monthly.style.fontWeight = "bold";
    spans.monthly.style.color = "#4c4d5f";
    spans.yearly.style.fontWeight = "normal";
    spans.yearly.style.color = "#8e8f98";
    superChargeSubtitle.innerText = "Super charge your work with add-ons";
    addOnsContainer.style.flexDirection = "column";
    bonsaiTaxPricingTag.innerText = "$10";
    partnersPricingTag.innerText = "$9";
    bonsaiTaxAccounting.innerText = "Bonsai Tax";
    manageTrackExpenses.innerText = "Track expenses, identify write-offs, and estimate quarterly taxes easily.";
    monthYearTrialPrice.forEach((div) => {
        div.innerText = "/MONTH";
    });
    billedYearly.forEach((section) => {
        section.style.display = "none";
    });
    trialPriceSection.forEach((section) => {
        section.style.height = "90px";
    });
    for (const i in monthlyValues) {
        moneySpans[i].innerText = monthlyValues[i].toString();
    }
};
function checkForChange(event) {
    const billedYearly = document.querySelectorAll("section.billed-yearly");
    const trialPriceSection = document.querySelectorAll("section.trial-price");
    const moneySpans = document.querySelectorAll("span.money-span");
    const spans = {
        monthly: document.querySelector("span#monthly"),
        yearly: document.querySelector("span#yearly"),
    };
    const target = event.target;
    if (target instanceof HTMLInputElement && target.checked) {
        setYearly(spans, billedYearly, trialPriceSection, moneySpans);
    }
    else {
        setMonthly(spans, billedYearly, trialPriceSection, moneySpans);
    }
}
if (monthYearSwitch !== null) {
    monthYearSwitch.addEventListener("change", checkForChange);
}
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
;
if (hamburguerMenuButton !== null) {
    hamburguerMenuButton.addEventListener("click", toggleHamburguerMenu);
}
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
