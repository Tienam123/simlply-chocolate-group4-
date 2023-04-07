"use strict"

document.addEventListener('click', documentClick);

function documentClick(e) {
const targetItem = e.target;
  if (targetItem.closest('.modal-scroll')){
      
    document.documentElement.classList.toggle('is-active');
  }}