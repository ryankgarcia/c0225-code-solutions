const $letters = document.querySelectorAll<HTMLSpanElement>('h1 span');
if (!$letters.length) throw new Error('$letters query failed');

let currentIndex = 0;

function resetTutor(): void {
  $letters.forEach((span) => {
    span.classList.remove('correct', 'incorrect', 'current');
    location.reload();
  });
}

let correctKeystrokes = 0;
let totalKeystrokes = 0;

function totalAccuracy(): number {
  if (totalKeystrokes === 0) {
    return 0;
  }
  return (correctKeystrokes / totalKeystrokes) * 100;
}

document.addEventListener('keydown', (event: KeyboardEvent): void => {
  const currentSpan = $letters[currentIndex];
  if (!currentSpan) return;

  const expectedChar = currentSpan.textContent;
  totalKeystrokes++;

  if (event.key === expectedChar) {
    currentSpan.classList.remove('current');
    currentSpan.classList.add('correct');
    currentIndex++;
    correctKeystrokes++;
  } else {
    currentSpan.classList.add('incorrect');
  }

  const nextSpan = $letters[currentIndex];
  if (nextSpan) {
    nextSpan.classList.add('current');
  } else {
    setTimeout(() => {
      const accuracy = totalAccuracy();
      const playAgain = confirm(
        `Typing Accuracy: ${accuracy.toFixed(2)}%\n\nDo you want to play again?`
      );
      if (playAgain) {
        resetTutor();
      }
    }, 900);
  }
});
