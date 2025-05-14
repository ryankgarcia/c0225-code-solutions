const $lightOn = document.getElementById('yellow-circle');
const $lightOnRow = document.getElementById('row-on');
const $lightOnColumn = document.getElementById('column-full-on');
const $lightOff = document.querySelector('.black-circle');
const $lightOffRow = document.querySelector('.row-off');
const $lightOffColumn = document.querySelector('.column-full-off');

if (!$lightOn) throw new Error('$lightOn query failed');
if (!$lightOnRow) throw new Error('$lightOnRow query failed');
if (!$lightOnColumn) throw new Error('$lightOnColumn query failed');
if (!$lightOff) throw new Error('$lightOff query failed');
if (!$lightOffRow) throw new Error('$lightOffRow query failed');
if (!$lightOffColumn) throw new Error('$lightOffColumn query failed');

$lightOn.addEventListener('click', (event: Event): void => {
  const $eventTarget = event.target as HTMLDivElement;
  console.log('event target:', $eventTarget);
});
