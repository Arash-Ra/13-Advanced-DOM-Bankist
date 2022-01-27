'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Select Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const allSections = document.querySelectorAll('.section');
document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');
console.log(document.getElementsByClassName('btn'));

// Creating and inserting Elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cokies for improved functionality and analytics.';
message.innerHTML =
  'We use cokies for improved functionality and analytics.<button class="btnbtn--close-cookie">Got it</button>';
const header = document.querySelector('.header');
// header.prepend(message);
header.append(message);
// header.append(message, cloneNode(true));

// header.before(message);
// header.after(message);

// Delete Elements:
document
  .querySelector('.btnbtn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);
  });

////  Video 187
message.style.backgroundColor = '#37383d';
message.style.width = '%120';
console.log(getComputedStyle(message).color);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');
//document.documentElement.style.setProperty('--color-primary', 'orangered');
//document.documentElement.style.setProperty('--color-primary', 'orangered');
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Atributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non standard attributes
console.log(logo.designer);
// this will provide the result of undefine, because this attribute is not standard
// we can get that attribute from DOM
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');
