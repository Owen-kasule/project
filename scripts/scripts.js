document.addEventListener('DOMContentLoaded', () => {
    // Display the last modified date
    const lastModifiedSpan = document.getElementById('last-modified');
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = `Last Modified: ${lastModified}`;
});
