document.addEventListener('DOMContentLoaded', () => {
    // Set last modified date in the footer
    const lastModifiedSpan = document.getElementById('last-modified');
    lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

    // Highlight the active navigation link dynamically
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    // Create hover effect
    const navMenu = document.querySelector('.nav-menu');
    const hoverEffect = document.createElement('div');
    hoverEffect.classList.add('hover-effect');
    navMenu.appendChild(hoverEffect);

    links.forEach(link => {
        link.addEventListener('mouseenter', e => {
            const rect = e.target.getBoundingClientRect();
            hoverEffect.style.width = `${rect.width}px`;
            hoverEffect.style.height = `${rect.height}px`;
            hoverEffect.style.left = `${rect.left - navMenu.getBoundingClientRect().left}px`;
            hoverEffect.style.top = `${rect.top - navMenu.getBoundingClientRect().top}px`;
            hoverEffect.style.opacity = '1';
        });

        link.addEventListener('mouseleave', () => {
            hoverEffect.style.opacity = '0';
        });
    });
});
