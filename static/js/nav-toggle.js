// MOBILE MENU TOGGLE NAV LINKS
function navToggle() {
    const toggleButton = document.querySelector(".toggle-button");
    const navLinks = document.querySelector(".nav-links");
    toggleButton.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
    });
}
navToggle();
// END OF MOBILE MENU TOGGLE