let tab = function() {
  let tabBox = document.querySelectorAll('.tabs__item');
  let tabBtn = document.querySelectorAll('.tabs__btn');

  tabBtn.forEach(item => {
    item.addEventListener('click', selectBox);
  });

  function selectBox() {
    tabBtn.forEach(item => {
      item.classList.toggle('checked');
      item.disabled = !item.disabled;
    });
    tabBox.forEach(item => {
      item.classList.toggle('is-hidden');
    });
  }
};
export default tab;
