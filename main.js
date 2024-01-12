// start header function
// select elements
let header = document.querySelector(".header");
// // add event to header
window.addEventListener("scroll", function () { slideHeader() });
function slideHeader() {
    if (document.documentElement.scrollTop > 200) {
        header.style.cssText = `position: fixed; width: 100%; transition:0.3s; background-color:white;box-shadow:0px 2px 10px rgba(0,0,0,20%)`;
    } else {
         header.style.cssText = `position: normal; width: 100%;`;
    }
};
// creat an function can open the side bar
// select elements 
let menu = document.querySelector(".menu");
let nav = document.querySelector(".nav");
// add event to menu 
menu.addEventListener("click", openNav);
// creat  function
function openNav() {
    if (100 === 100) {
        nav.classList.toggle("open");
    };
};












































































    





















   


























