"use strict";
const $form = document.querySelector('#contact-form');
$form.addEventListener('submit', (event) => {
    event.preventDefault();
    const $formElements = $form.elements;
    if (!$formElements)
        throw new Error('$formElements query failed');
    const $formElementsData = {
        name: $formElements.name.value,
        email: $formElements.email.value,
        message: $formElements.message.value,
    };
    console.log($formElementsData);
    $form.reset();
});
