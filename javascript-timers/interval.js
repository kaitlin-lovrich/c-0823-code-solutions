const $countdownDisplay = document.querySelector('.countdown-display');
let count = 4;

const countDownId = setInterval(() => {
  count--;
  if (count > 0) {
    $countdownDisplay.textContent = count;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countDownId);
  }
}, 1000);
