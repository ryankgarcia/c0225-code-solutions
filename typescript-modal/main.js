"use strict";
const $openModal = document.querySelector('.open-modal');
const $dismiss = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');
if (!$openModal)
    throw new Error('$openModal query failed');
if (!$dismiss)
    throw new Error('$dismiss query failed');
if (!$dialog)
    throw new Error('$dialog query failed');
$openModal.addEventListener('click', () => {
    $dialog.showModal();
});
$dismiss.addEventListener('click', () => {
    $dialog.close();
});
