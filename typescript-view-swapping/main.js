"use strict";
const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');
if (!$tabContainer)
    throw new Error('$tabContainer query failed');
if (!$tabs)
    throw new Error('$tabElements query failed');
if (!$view)
    throw new Error('$view query failed');
$tabContainer.addEventListener('click', (event) => {
    const $eventTarget = event.target;
    for (let tabIndex = 0; tabIndex < $tabs.length; tabIndex++) {
        if ($tabs[tabIndex] === $eventTarget) {
            $tabs[tabIndex].className = 'tab active';
        }
        else {
            $tabs[tabIndex].className = 'tab';
        }
    }
    const targetTab = $eventTarget.dataset.view;
    for (let index = 0; index < $view.length; index++) {
        if ($view[index].getAttribute('data-view') !== targetTab) {
            $view[index].className = 'view hidden';
        }
        else {
            $view[index].className = 'view';
        }
    }
});
