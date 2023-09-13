const $modalHidden = document.querySelector('.modal-hidden');
const $openModalButton = document.querySelector('#open-modal');
const $noButton = document.querySelector('#no');
const $background = document.querySelector('.background');

function openModal(event) {
  $background.className = 'overlay';
  $modalHidden.className = 'modal-shown';
}

function closeModal(event) {
  $background.className = '';
  $modalHidden.className = 'modal-hidden';
}

$openModalButton.addEventListener('click', openModal);
$noButton.addEventListener('click', closeModal);
