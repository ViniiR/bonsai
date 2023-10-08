"use strict";
const monthYearSwitch = document.querySelector("input#month-year-switch");
const superChargeSubtitle = document.querySelector("article#sub-title > h2");
const addOnsContainer = document.querySelector("section#add-ons-article-container");
const bonsaiTaxPricingTag = document.querySelector("div#bonsai-tax-pricing-tag");
const partnersPricingTag = document.querySelector("div#partners-pricing-tag");
const bonsaiTaxAccounting = document.querySelector("h3#bonsai-tax-accounting");
const manageTrackExpenses = document.querySelector("p#manage-track-expenses");
const monthYearTrialPrice = document.querySelectorAll("div.month-year-trial-price");
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
