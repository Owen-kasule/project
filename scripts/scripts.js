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

    // Create hover effect for navigation links
    const navMenu = document.querySelector('.nav-menu');
    const hoverEffect = document.createElement('div');
    hoverEffect.classList.add('hover-effect');
    navMenu.appendChild(hoverEffect);

    links.forEach(link => {
        link.addEventListener('mouseenter', e => {
            const activeLink = document.querySelector('.nav-link.active');
            // Temporarily remove the active class from the active link
            if (activeLink) {
                activeLink.classList.remove('active');
            }

            const rect = e.target.getBoundingClientRect();
            hoverEffect.style.width = `${rect.width}px`;
            hoverEffect.style.height = `${rect.height}px`;
            hoverEffect.style.left = `${rect.left - navMenu.getBoundingClientRect().left}px`;
            hoverEffect.style.top = `${rect.top - navMenu.getBoundingClientRect().top}px`;
            hoverEffect.style.opacity = '1';
        });

        link.addEventListener('mouseleave', () => {
            hoverEffect.style.opacity = '0';

            // Restore the active class to the active link after hover
            const activeLink = document.querySelector('.nav-link.active');
            if (!activeLink) {
                const originalActiveLink = [...links].find(link =>
                    link.href === window.location.href
                );
                if (originalActiveLink) {
                    originalActiveLink.classList.add('active');
                }
            }
        });
    });

    // Hamburger menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navMenu.classList.toggle('show'); // Ensure the slide-in effect applies
    });

    // Close the pop-up menu when clicking outside
    document.addEventListener('click', e => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active', 'show');
        }
    });

    // Prevent menu from closing when clicking inside
    navMenu.addEventListener('click', e => {
        e.stopPropagation();
    });
});
