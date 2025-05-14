const $lightOn = document.getElementById('yellow-circle');
const $lightOff = document.querySelector('.black-circle');
const $onView = document.querySelector('.view[data-view="on"]');
const $offView = document.querySelector('.view[data-view="off"]');

if (!$lightOn) throw new Error('$lightOn query failed');
if (!$lightOff) throw new Error('$lightOff query failed');
if (!$onView) throw new Error('$onView query failed');
if (!$offView) throw new Error('$offView query failed');

$lightOn.addEventListener('click', () => {
  $onView.classList.add('hidden');
  $offView.classList.remove('hidden');
});

$lightOff.addEventListener('click', () => {
  $offView.classList.add('hidden');
  $onView.classList.remove('hidden');
});
