// script for my "need a website question"
function closeNotification() {
    document.getElementById('contactNotification').style.display = 'none';
}



// Script for navigation bar

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

 // JavaScript code to toggle the black color on the icon

