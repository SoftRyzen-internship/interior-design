const mobileMenuBtn = document.querySelector('.burger-menu');
const headerMobileMenu = document.querySelector('.header__mobile');
const headerMobileMenuLinks = document.querySelectorAll('.header__mobile-item');

function showMobileMenu() {
  mobileMenuBtn.classList.toggle('burger-menu--opened');
  headerMobileMenu.classList.toggle('header__menu-show');
}

headerMobileMenuLinks.forEach(link => link.addEventListener('click', showMobileMenu));
mobileMenuBtn.addEventListener('click', showMobileMenu);
