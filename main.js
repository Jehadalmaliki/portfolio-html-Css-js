let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
// dark mode
menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
const toggle = document.querySelector(".toggle")
