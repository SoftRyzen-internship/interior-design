const header = document.querySelector('.header');
const html = document.querySelector('html');
const mobileMenuBtn = document.querySelector('.burger-menu');
const headerMobileMenu = document.querySelector('.header__mobile');
const headerMobileMenuLinks = document.querySelectorAll('.header__mobile-item');

function showMobileMenu() {
  mobileMenuBtn.classList.toggle('burger-menu--opened');
  headerMobileMenu.classList.toggle('header__menu-show');

  if (!mobileMenuBtn.classList.contains('burger-menu--opened')) {
    changeHeaderBackground()
    html.style.overflow = 'visible';
  } else {
    changeHeaderBackground()
    html.style.overflow = 'hidden';
  }
}

function changeHeaderBackground() {
  if (window.innerWidth >= 768) {
    header.classList.remove('add-background-mob')
    header.classList.add('add-background-desk')
    return;
  }
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 75 && mobileMenuBtn.classList.contains('burger-menu--opened')) {
    header.classList.remove('add-background-desk')
    header.classList.add('add-background-mob')
  } else {
    if (scrollTop > 75) {
      header.classList.remove('add-background-mob')
    header.classList.add('add-background-desk')
    return;
      
    }
  }

  header.classList.remove('add-background-desk')
  header.classList.add('add-background-mob')
}


headerMobileMenuLinks.forEach(link => link.addEventListener('click', showMobileMenu));
mobileMenuBtn.addEventListener('click', showMobileMenu);

window.addEventListener('scroll', changeHeaderBackground);
window.addEventListener('resize', () => {
  changeHeaderBackground()
  if (window.innerWidth >= 768 && mobileMenuBtn.classList.contains('burger-menu--opened')) {
    showMobileMenu()
    return;
  }
});
