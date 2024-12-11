document.addEventListener('DOMContentLoaded', () => {
    // Display the last modified date
    const lastModifiedSpan = document.getElementById('last-modified');
    lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

    const navMenu = document.querySelector('.nav-menu');
    const hoverEffect = document.createElement('div');
    hoverEffect.classList.add('hover-effect');
    navMenu.appendChild(hoverEffect);

    const links = document.querySelectorAll('.nav-link');

    // Highlight the active link
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });

    links.forEach(link => {
        // On hover, move the hover effect to the hovered link
        link.addEventListener('mouseenter', (e) => {
            const rect = e.target.getBoundingClientRect();
            hoverEffect.style.width = `${rect.width}px`;
            hoverEffect.style.height = `${rect.height}px`;
            hoverEffect.style.left = `${rect.left - navMenu.getBoundingClientRect().left}px`;
            hoverEffect.style.top = `${rect.top - navMenu.getBoundingClientRect().top}px`;
            hoverEffect.style.opacity = '1';

            // Temporarily remove the active class during hover
            document.querySelector('.nav-link.active')?.classList.remove('active-temp');
        });

        // Restore the active class when hover ends
        link.addEventListener('mouseleave', () => {
            hoverEffect.style.opacity = '0';

            const activeLink = document.querySelector('.nav-link.active');
            if (activeLink) {
                const rect = activeLink.getBoundingClientRect();
                hoverEffect.style.width = `${rect.width}px`;
                hoverEffect.style.height = `${rect.height}px`;
                hoverEffect.style.left = `${rect.left - navMenu.getBoundingClientRect().left}px`;
                hoverEffect.style.top = `${rect.top - navMenu.getBoundingClientRect().top}px`;
                hoverEffect.style.opacity = '1';
            }
        });
    });
});
