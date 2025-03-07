"use strict";
const $h1 = document.querySelector('.message');
function showDisplay() {
    if (!$h1)
        throw new Error('$h1 query failed');
    $h1.textContent = 'Hello There :)';
}
setTimeout(showDisplay, 2000);
