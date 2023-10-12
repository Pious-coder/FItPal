document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.lazy-img');

    images.forEach(image => {
        image.addEventListener('load', () => {
            image.classList.add('loaded');
        });
        image.setAttribute('src', image.getAttribute('data-src'));
    });
});