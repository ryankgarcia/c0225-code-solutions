const $nameInput = document.querySelector('input');

if (!$nameInput) throw new Error('$input does not exist');

// write the below as function with word function so it can be reusable //

$nameInput.addEventListener('focus', (event: Event): void => {
  console.log('focus event was fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('event.target.name', eventTarget.name);
});

$input.addEventListener('blur', (event: Event): void => {});
