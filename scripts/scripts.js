document.addEventListener('DOMContentLoaded', () => {
    // Display the last modified date in the footer
    const lastModifiedSpan = document.getElementById('last-modified');
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = `Last Modified: ${lastModified}`;
});

document.addEventListener("DOMContentLoaded", () => {
    // Select the navigation menu
    const navMenu = document.querySelector(".nav-menu");
    // Create a hover effect element
    const hoverEffect = document.createElement("div");
    
    hoverEffect.classList.add("hover-effect");
    navMenu.appendChild(hoverEffect);

    // Select all navigation links
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("mouseenter", (e) => {
            const rect = e.target.getBoundingClientRect();
            hoverEffect.style.width = `${rect.width}px`;
            hoverEffect.style.height = `${rect.height}px`;
            hoverEffect.style.left = `${e.target.offsetLeft}px`;
            hoverEffect.style.top = `${e.target.offsetTop}px`;
            hoverEffect.style.opacity = "1";
        });

        link.addEventListener("mouseleave", () => {
            hoverEffect.style.opacity = "0";
        });
    });
});
