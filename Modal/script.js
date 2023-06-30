'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.open-modal');
console.log(btnsOpenModal);

// closeModal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// OpenModal function
const openModal = function () {
  console.log('Buttons Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// modal pop-up
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//   closebtn
btnCloseModal.addEventListener('click', closeModal);
// overlay close btn
overlay.addEventListener('click', closeModal);

// ESC Keypress event
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
