'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalbtn = document.querySelector('.close-modal');
const btnShowModal  = document.querySelectorAll('.show-modal');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal =  function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0; i< btnShowModal.length ; i++){
    btnShowModal[i].addEventListener('click',openModal)
}

closeModalbtn.addEventListener('click', closeModal);
overlay.addEventListener('click',closeModal);

document.addEventListener ('keydown', function(event){
    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})