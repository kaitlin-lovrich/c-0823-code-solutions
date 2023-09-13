const $button = document.querySelector('button');
const $body = document.querySelector('body');

function buttonLightOrDark(event) {
  if ($button.className === 'light') {
    $body.className = 'dark';
    $button.className = 'dark';
  } else if ($button.className === 'dark') {
    $body.className = 'light';
    $button.className = 'light';
  }
}

$button.addEventListener('click', buttonLightOrDark);
