const navbarButton = document.querySelector('.navbar__button');
const navbar = document.querySelector('.navbar__list_container');

function showNavbar(){
    navbar.classList.toggle('navbar__list_container--inactive')
}

navbarButton.addEventListener('click', showNavbar)