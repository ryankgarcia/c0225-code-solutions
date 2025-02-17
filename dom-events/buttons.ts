function handleClick(event: Event): void {
  console.log('button clicked');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

const $clickButton = document.querySelector('.click-button');

if (!$clickButton) throw new Error('The $clickButton query failed');

$clickButton.addEventListener('click', handleClick);
