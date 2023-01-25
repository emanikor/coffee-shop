// const menuBtn = document.querySelector('#menu-btn');
let navBar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    cartItem.classList.remove('active');
    searchBtn.classList.remove('active')
}
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navBar.classList.remove('active');
    searchBtn.classList.remove('active')
}
let searchBtn = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchBtn.classList.toggle('active');
    navBar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll =()=>{
    navBar.classList.remove('active');
    cartItem.classList.remove('active');
    searchBtn.classList.remove('active');
}
// Initialize Swiper 
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });


