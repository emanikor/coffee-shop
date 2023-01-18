const menuBtn = document.querySelector('#menu-btn');
const navBar = document.querySelector('.navbar');
 
menuBtn.addEventListener('click', () =>{
    navBar.classList.toggle('active')
})