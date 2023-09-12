function handleClick(event) {
  console.log('button clicked');
  console.log('Event object:', event);
  console.log('Target property of "event":', event.target);
}

const clickButton = document.querySelector('.click-button');

clickButton.addEventListener('click', handleClick);

function handlerMouseover(event) {
  console.log('button hovered');
  console.log('Event object:', event);
  console.log('Target property of "event":', event.target);
}

const hoverButton = document.querySelector('.hover-button');

hoverButton.addEventListener('mouseover', handlerMouseover);

function doubleClick(event) {
  console.log('button double-clicked');
  console.log('Event object:', event);
  console.log('Target property of "event":', event.target);
}

const doubleClickButton = document.querySelector('.double-click-button');

doubleClickButton.addEventListener('dblclick', doubleClick);
