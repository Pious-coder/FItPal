function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i ++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function changeDivColor() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.style.backgroundColor = getRandomColor();
    });
};

setInterval(changeDivColor, 0095)