document.addEventListener('DOMContentLoaded', () =>{
    const usernameElement = document.getElementById('username');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const storedUsername = localStorage.getItem('username');
    const userGreet = document.getElementById('usernameGreet');
    const container = document.getElementById('container');

    if (storedUsername) {
        usernameElement.textContent = storedUsername;
        welcomeMessage.style.display = 'block';
        container.style.display = 'none';
        userGreet.textContent = storedUsername;


        setTimeout(() => {
            welcomeMessage.style.display = 'none';
            container.style.display = 'block';
        }, 3000);
    };
});