/* import $ from 'jquery';

$(document).ready(function () {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => link.addEventListener('click', linkHandler));
});

function linkHandler(e) {
  e.preventDefault();
  const target = this;
  const element = target.getAttribute('href');

  smoothScroll(element.substr(1));
}

export function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}
function elmYPosition(eID) {
  var elm = document.getElementById(eID);
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}
export function smoothScroll(eID) {
  // if header is sticky
  // const heightOfHeader = document.querySelector('header').offsetHeight;
  // var stopY = elmYPosition(eID) - heightOfHeader;

  var startY = currentYPosition();
  var stopY = elmYPosition(eID);

  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    scrollTo(0, stopY);
    return;
  }
  var speed = Math.round(distance / 100);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
    for (var i = startY; i < stopY; i += step) {
      setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    return;
  }
  for (var i = startY; i > stopY; i -= step) {
    setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
}
 */