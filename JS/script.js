const audio = document.getElementById('background-audio');

audio.muted = true;

audio.addEventListener('contextmenu', (e) => (
    e.preventDefault()
));

audio.controls = false;
audio.addEventListener('playing', () => {
    audio.controls = false
});

audio.addEventListener('ended', function() {
    audio.play();
})

setTimeout(function() {
    audio.play();
} , 5000);

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.lazy-img');

    images.forEach(image => {
        image.addEventListener('load', () => {
            image.classList.add('loaded');
        });
        image.setAttribute('src', image.getAttribute('data-src'));
    });
});