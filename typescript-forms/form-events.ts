const $nameInput = document.querySelector('input');

if (!$nameInput) throw new Error('$input does not exist');

// write the below arrow function as function with word function so it can be reusable //
// we typically only want to write arrow functions as call back functions for readability purposes //

$nameInput.addEventListener('focus', (event: Event): void => {
  console.log('focus event was fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('event.target.name', eventTarget.name);
});

$nameInput.addEventListener('blur');
$emailInput.addEventListener('blur');
