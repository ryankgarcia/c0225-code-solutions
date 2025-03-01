const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

if (!$tabContainer) throw new Error('$tabContainer query failed');
if (!$tabs) throw new Error('$tabElements query failed');
if (!$view) throw new Error('$view query failed');

$tabContainer.addEventListener('click', (event: Event): void => {
  const $eventTarget = event.target as HTMLDivElement;

  for (let tabIndex = 0; tabIndex < $tabs.length; tabIndex++) {
    if ($tabs[tabIndex] === $eventTarget) {
      // console.log($eventTarget); // was my event clicked? if it is, show it as tab active
      $tabs[tabIndex].className = 'tab active';
    } else {
      $tabs[tabIndex].className = 'tab';
    }
  }

  const targetTab = $eventTarget.dataset.view;
  console.log(targetTab);

  // first : .getAttribute('data-view')
  // second: $targetView

  // data-view can be iterated data-view++

  for (let index = 0; index < $view.length; index++) {
    if ($view === targetTab) {
      $view.getAttribute('data-view');
    } else {
      hidden;
    }
  }
});
