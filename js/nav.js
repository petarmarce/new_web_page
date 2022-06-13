const primaryNav = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")
const body = document.querySelector("body");

console.log(navToggle);
console.log(primaryNav);

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    console.log(visibility);

    if (visibility === "false") {
        body.style.overflow = "hidden";
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        body.style.overflow = "auto";
    }
});