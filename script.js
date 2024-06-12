// // script for my "need a website question"
// function closeNotification() {
//     document.getElementById('contactNotification').style.display = 'none';
// }
function closeNotification() {
    document.getElementById('contactNotification').style.display = 'none';
}



// Script for navigation bar

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}
//close button
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}


