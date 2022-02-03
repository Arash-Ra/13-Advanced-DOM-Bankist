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

//// Atributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

//// Non standard attributes, reading the value
console.log(logo.designer);
// this will provide the result of undefine, because this attribute is not standard
// we can get that attribute from DOM
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

const link = document.querySelector('.twitter-link');
console.log(link.href);

// NOTE: if the link is relevant we have to use getAttribute
console.log(link.getAttribute('logo.href'));

//// Date Atrributes
// we can use "dataset" in javascipt if the attribute in the html starts with "data"
// in html here we have "data-version-number" so in javascript we use Camel case "versionNumber"
console.log(logo.dataset.versionNumber);

//// Classes
// It is possible to pass multiple classess and valuses
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // note that contains is used, not includes like we use for Arrays

// //// DO NOT USE BELOW, instead use add, remove,toggle, contains methods
// logo.className = 'Jonas';
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  // getBoundingClientRect it gets the relative location of the element, x,y andthe distance from that element to the top,buttom,left,right
  const s1coords = section1.getBoundingClientRect();

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y', window.pageXOffset, window.pageYOffset);

  console.log(
    'Height/Width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // console.log(
  //   'Height/Width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  //// scrolling
  // It jumps to the top left of section 1
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, //current position + current scroll

  //   s1coords.top + //s1coords.top > is the relative top of the view port, not the top of the document
  //     window.pageYOffset
  // );
  window.scrollTo({
    left: s1coords.left + window.pageXOffset, //current position + current scroll

    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth', // It jumps to the specific location smoothly

    // top: s1coords.top + window.pageYOffset,
    // behavior: 'smooth', // It jumps to the specific location smoothly
  });
});
