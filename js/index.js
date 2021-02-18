document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const menuCloseBtn = menu.querySelector('.menu__icon');

  burger.addEventListener('click', () => {
    menu.style.left = '0';
  });

  menuCloseBtn.addEventListener('click', () => {
    menu.style.left = '-100%';
  });
});