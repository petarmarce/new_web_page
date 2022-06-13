const reserveForm = document.getElementById("reserve-form-wrapper");
const reserveToggle = document.getElementById("reserve-button")
const reserveClose = document.getElementById("reserve-form-close")

const contactForm = document.getElementById("contact-form-wrapper");
const contactToggle = document.getElementById("quote-button")
const contactClose = document.getElementById("contact-form-close")

/* when reserve button is clicked open reserve form */
reserveToggle.addEventListener('click', () => {
    reserveForm.setAttribute("data-visible", true);
    reserveToggle.setAttribute("aria-expanded", true);
    body.style.overflow = "hidden";
});
/* close reserve form */
reserveClose.addEventListener('click', () => {
    reserveForm.setAttribute("data-visible", false);
    reserveToggle.setAttribute("aria-expanded", false);
    body.style.overflow = "auto";
});
/* when contact button is clicked open contact form*/
contactToggle.addEventListener('click', () => {
    contactForm.setAttribute("data-visible", true);
    contactToggle.setAttribute("aria-expanded", true);
    body.style.overflow = "hidden";
});
/* close contact form */
contactClose.addEventListener('click', () => {
    contactForm.setAttribute("data-visible", false);
    contactToggle.setAttribute("aria-expanded", false);
    body.style.overflow = "auto";
});

/* esc closing forms */
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        contactForm.setAttribute("data-visible", false);
        contactToggle.setAttribute("aria-expanded", false);
        reserveForm.setAttribute("data-visible", false);
        reserveToggle.setAttribute("aria-expanded", false);
        body.style.overflow = "auto";
    }
});