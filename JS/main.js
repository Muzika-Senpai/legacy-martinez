"use strict";

const menu = document.querySelector(".burger-menu-container");
const lines = document.querySelectorAll(".line");
const hiddenMenu = document.querySelector(".hidden-menu");
const overlay = document.querySelector(".overlay")
const toTop = document.querySelector(".to-top")
const [topLine,middleLine,bottomLine] = lines;
const contactButton = document.querySelector(".contact-button");
const serviceButton = document.querySelector(".service-button");
var menuStatus = false;

// serviceButton.addEventListener('click', function(){

//     toTop.classList.toggle("opacity");
//     toTop.classList.toggle("hidden-menu");

// });

// contactButton.addEventListener('click', function(){

//     toTop.classList.toggle("opacity");
//     toTop.classList.toggle("hidden-menu");

// });

menu.addEventListener('click', function(){

   
    topLine.classList.toggle("top-line-rotation");
    middleLine.classList.toggle("opacity");
    bottomLine.classList.toggle("bottom-line-rotation");
    
    hiddenMenu.classList.toggle('expanding-box');
    



});

hiddenMenu.addEventListener('click',function(){

    
    hiddenMenu.classList.toggle('expanding-box');
    topLine.classList.toggle("top-line-rotation");
    middleLine.classList.toggle("opacity");
    toTop.classList.toggle("opacity");
    toTop.classList.toggle("hidden-menu");
    bottomLine.classList.toggle("bottom-line-rotation");

})

toTop.addEventListener('click', function(){
    toTop.classList.toggle("opacity");
    toTop.classList.toggle("hidden-menu");
})


function toggleClassOnScroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      toTop.classList.remove('opacity');
      toTop.classList.remove("hidden-menu");
    } else {
        toTop.classList.add('opacity');
        toTop.classList.add("hidden-menu");
    }
  }
  
  // Add an event listener to the window for the scroll event
  window.addEventListener('scroll', toggleClassOnScroll);

