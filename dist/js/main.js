//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});