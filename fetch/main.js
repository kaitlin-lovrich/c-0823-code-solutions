async function logUserObjs() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const userObjects = await response.json();
  console.log(userObjects);
}

logUserObjs();
