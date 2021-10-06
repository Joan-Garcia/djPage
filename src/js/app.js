document.addEventListener("DOMContentLoaded", () => {
    scrollNav();
    scrollUp();
});

function scrollNav() {
    const links = document.querySelectorAll(".main-nav");

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();

            const section = document.querySelector(
                e.target.attributes.href.value
            );

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
