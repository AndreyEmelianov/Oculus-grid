'use strict';

// tabs
const tabItems = document.querySelectorAll('.tabs__btn-item');
const tabContents = document.querySelectorAll('.tabs__content-item');

const open = (e) => {
  const tabTarget = e.currentTarget;
  const button = tabTarget.dataset.button;

  tabItems.forEach((item) => item.classList.remove('tabs__btn-item--active'));
  tabContents.forEach((content) => content.classList.remove('tabs__content-item--active'));

  tabTarget.classList.add('tabs__btn-item--active');
  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
};

tabItems.forEach((tabItem) => tabItem.addEventListener('click', open));
