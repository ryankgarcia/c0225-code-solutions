const $countdownDisplay = document.querySelector('.countdown-display');
let count = 4;

function countdownTimer(): void {
  if (!$countdownDisplay) throw new Error('$countdownDisplay query failed');

  count--;
  if (count > 0) {
    $countdownDisplay.textContent = count.toString();
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countId);
  }
}
const countId = setInterval(countdownTimer, 1000);
