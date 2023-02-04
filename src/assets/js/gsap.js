import { CountUp } from 'countup.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// АНИМАЦИЯ ДЛЯ ПОЯВЛЕНИЯ ЭЛЕМЕНТОВ ПРИ СКРОЛЕ ПО ОЧЕРЕДНОСТИ

gsap.from('.js_appearance_second', {
  scrollTrigger: '.js_appearance_second',
  duration: 0.8,
  opacity: 0,
  y: 100,
  stagger: 0.25,
});

// gsap.from('.js_appearance_promote', {
//   scrollTrigger: '.js_appearance_promote',
//   duration: 0.8,
//   opacity: 0,
//   y: 100,
//   stagger: 0.25,
// });

// gsap.from('.js_appearance_curses', {
//   scrollTrigger: '.js_appearance_curses',
//   duration: 0.8,
//   opacity: 0,
//   y: 100,
//   stagger: 0.25,
// });

// gsap.from('.js_appearance_features', {
//   scrollTrigger: '.js_appearance_features',
//   duration: 0.8,
//   opacity: 0,
//   y: 100,
//   stagger: 0.25,
// });

// gsap.from('.js_appearance_qualities', {
//   scrollTrigger: '.js_appearance_qualities',
//   duration: 0.8,
//   opacity: 0,
//   y: 100,
//   stagger: 0.25,
// });

// gsap.from('.js_appearance_study', {
//   scrollTrigger: '.js_appearance_study',
//   duration: 0.8,
//   opacity: 0,
//   y: 100,
//   stagger: 0.25,
// });

// gsap.from('.js_appearance_approaches', {
//   scrollTrigger: '.js_appearance_approaches',
//   duration: 0.8,
//   opacity: 0,
//   y: 100,
//   stagger: 0.25,
// });

//АНИМАЦИЯ COUNTUP ДЛЯ ЧИСЕЛ
const firstNumber = document.querySelector('.js_first_number');
const secondNumber = document.querySelector('.js_second_number');
const thirdNumber = document.querySelector('.js_third_number');

let countFirst = new CountUp(firstNumber, 3817);
let countSecond = new CountUp(secondNumber, 2079);
let countThird = new CountUp(thirdNumber, 50);

let targetEl = document.querySelector('.bottom-box');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1.0,
};

const observer = new IntersectionObserver(intersectionHandler, options);

// observer.observe(targetEl);

function intersectionHandler(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (!countFirst.error) {
        countFirst.start();
      } else {
        console.error(countFirst.error);
      }

      if (!countSecond.error) {
        countSecond.start();
      } else {
        console.error(countSecond.error);
      }

      if (!countThird.error) {
        countThird.start();
      } else {
        console.error(countThird.error);
      }
    }
  });

  return null;
}

//АНИМАЦИЯ ДЛЯ ПОЯВЛЕНИЯ ЭЛЕМЕНТОВ СЛЕВА И СПРАВА

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains('gs_reveal_fromLeft')) {
    x = -200;
    y = 0;
  } else if (elem.classList.contains('gs_reveal_fromRight')) {
    x = 200;
    y = 0;
  }
  elem.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  elem.style.opacity = '0';
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.5,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
    },
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

gsap.utils.toArray('.gs_reveal').forEach(function (elem) {
  hide(elem);

  ScrollTrigger.create({
    trigger: elem,
    once: true,
    onEnter: function (e) {
      animateFrom(elem);
    },
  });
});
