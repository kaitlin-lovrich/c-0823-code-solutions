const $taskList = document.querySelector('.task-list');

function target(event) {
  console.log('Target:', event.target);
  console.log('Target tagName:', event.target.tagName);
  const closest = event.target.closest('.task-list-item');
  console.log('Closest:', closest);
  closest.remove();
}

$taskList.addEventListener('click', target);
