const navigationWrappers = document.querySelectorAll('.slider__navigation');
const slider = document.querySelectorAll('.slider');

Array.from(slider).forEach(item => item.addEventListener('click', changeImage));

createMarkupOfLinks();

function createMarkupOfLinks() {
  const navigationButtons = [...Array(6).keys()]
    .slice(1)
    .map(item =>
      item === 1
        ? `<button type="button" class="slider__button slider__button--active" data-number=${item}></button>`
        : `<button type="button" class="slider__button" data-number=${item}></button>`,
    )
    .join('');
    Array.from(navigationWrappers).forEach(item => item.innerHTML=navigationButtons)
}

function changeImage(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const number = event.target.dataset.number;

  const slides = event.currentTarget.querySelectorAll('.slider__slide');
  const slideActive = event.currentTarget.querySelector('.slider__slide--active');
  const buttonActive = event.currentTarget.querySelector('.slider__button--active');

  const newSlideActive = Array.from(slides).find(item => item.dataset.number === number);
  if (slideActive === newSlideActive) {
    return;
  }
  slideActive.classList.remove('slider__slide--active');
  newSlideActive.classList.add('slider__slide--active');
  buttonActive.classList.remove('slider__button--active');
  event.target.classList.add('slider__button--active');
}
