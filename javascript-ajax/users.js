const $userList = document.querySelector('#user-list');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('xhr.status:', xhr.status);
  console.log('xhr.response:', xhr.response);
  for (const userObj of xhr.response) {
    const $li = document.createElement('li');
    $li.textContent = userObj.name;
    $userList.appendChild($li);
  }
});
xhr.send();
