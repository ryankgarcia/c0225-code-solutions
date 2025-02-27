// this queries the dom for the class selector 'task-list' and assigns it to $taskList //
const $taskList = document.querySelector('.task-list');

if (!$taskList) throw new Error('$taskList query failed');

// this event listener callback function listens for a click event on the DOM //
$taskList.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLElement;
  console.log('eventTarget:', $eventTarget);
  console.log('eventTarget.tagName', $eventTarget.tagName);

  // $taskItem targets the closest ancestor element and logs the result //
  const $taskItem = $eventTarget.closest('.task-list-item');
  if (!$taskItem) throw new Error('$taskItem query failed');
  console.log('$taskItem closest', $taskItem);
  $taskItem.remove();
});
