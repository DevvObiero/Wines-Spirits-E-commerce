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




//js  practice

// var mainImg  = document.getElementById("mainImg");
// var smallImg = document.getElementsByClassName("small-img");

// smallImg[0].onclick = function(){
//     mainImg.src = smallImg[0].src;
// }

// smallImg[1].onclick = function(){
//     mainImg.src = smallImg[1].src;
// }
// smallImg[2].onclick = function(){
//     mainImg.src = smallImg[2].src;
// }
