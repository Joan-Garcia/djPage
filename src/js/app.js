document.addEventListener("DOMContentLoaded", () => {
    eventListeners();
    scrollNav();
    scrollUp();
});

function eventListeners() {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.addEventListener("click", responsiveNavigation);
}

function scrollNav() {
    const links = document.querySelectorAll(".main-nav");

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();

            const section = document.querySelector(
                e.target.attributes.href.value
            );

            responsiveNavigation();

            section.scrollIntoView({
                behavior: "smooth",
            });
        });
    });
}

function scrollUp() {
    const icon = document.querySelector(".scroll-up");

    icon.addEventListener("click", e => {
        e.preventDefault();

        const header = document.querySelector(".header");

        header.scrollIntoView({
            behavior: "smooth",
        });
    });
}

function responsiveNavigation() {
    const nav = document.querySelector(".main-nav");
    nav.classList.toggle("show-nav");
}
