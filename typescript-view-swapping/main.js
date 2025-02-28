"use strict";
const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelector('.tab');
const $view = document.querySelector('.view');
if (!$tabContainer)
    throw new Error('$tabContainer query failed');
if (!$tabElements)
    throw new Error('$tabElements query failed');
if (!$view)
    throw new Error('$view query failed');
$tabContainer.addEventListener('click', (event) => {
    const $eventTarget = event.target;
    console.log('before loop', $eventTarget);
    // debugger;
    if ($eventTarget.matches('.tab.active')) {
        console.log('this <div> has "tab"');
        $tabElements.getAttribute('.tab.active');
    }
    else {
        console.log('this <div> does not have "tab"');
        $tabElements.getAttribute('.view.hidden');
    }
});
