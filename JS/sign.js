document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.lazy-img');

    images.forEach(image => {
        image.addEventListener('load', () => {
            image.classList.add('loaded');
        });
        image.setAttribute('src', image.getAttribute('data-src'));
    });
});

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        window.location.href ='home.html';
    } else {
        alert('Invalid credentials, Please enter a valid one')
    }
}