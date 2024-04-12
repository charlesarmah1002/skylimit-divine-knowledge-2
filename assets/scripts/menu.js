const navigation = document.getElementById('primary-navigation'),
    menuToggle = navigation.querySelector('#menu-toggle'),
    menu = navigation.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});