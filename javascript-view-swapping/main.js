const $tabContainer = document.querySelector('.tab-container');
const $tabChildNodes = document.querySelectorAll('.tab');
const $viewChildNodes = document.querySelectorAll('.view');

function matchesTab(event) {
  console.log(event.target);
  if (event.target.matches('.tab')) {
    for (const tab of $tabChildNodes) {
      if (tab === event.target) {
        tab.className = 'tab active';
      } else {
        tab.className = 'tab';
      }
    }
    const dataView = event.target.getAttribute('data-view');
    for (const view of $viewChildNodes) {
      if (view.getAttribute('data-view') !== dataView) {
        view.className = 'view hidden';
      } else {
        view.className = 'view';
      }
    }
  }
}

$tabContainer.addEventListener('click', matchesTab);
