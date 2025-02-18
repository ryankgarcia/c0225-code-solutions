"use strict";
let userClicks = 0;
const $button = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$button)
    throw new Error('The $button element failed');
function handleClick() {
    userClicks++;
    if (!$button || !$clickCount) {
        throw new Error('The $hotButton or $clickCount query failed');
    }
    $clickCount.textContent = 'Clicks:' + '' + userClicks;
    if (userClicks < 4) {
        $button.className = 'hot-button cold';
    }
    else if (userClicks < 7) {
        $button.className = 'hot-button cool';
    }
    else if (userClicks < 10) {
        $button.className = 'hot-button tepid';
    }
    else if (userClicks < 13) {
        $button.className = 'hot-button warm';
    }
    else if (userClicks < 16) {
        $button.className = 'hot-button hot';
    }
    else {
        $button.className = 'hot-button nuclear';
    }
}
$button.addEventListener('click', handleClick);
