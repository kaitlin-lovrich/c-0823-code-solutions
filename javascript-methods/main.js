// The Math object
// 2.
const num1 = 5;
const num2 = 10;
const num3 = 15;
// 3.
const maximumValue = Math.max(num1, num2, num3);
console.log('Value maximumValue variable:', maximumValue);
// 4.
const heroes = ['Batman', 'Kaneki', 'Touka', 'Aqua man'];
// 5.
let randomNumber = Math.random();
// 6.
randomNumber *= heroes.length;
// 7.
const randomIndex = Math.floor(randomNumber);
// 8.
console.log('Value of randomIndex variable:', randomIndex);
// 9.
const randomHero = heroes[randomIndex];
// 10.
console.log('Value of randomHero variable:', randomHero);

// Array Methods
// 1.
const library = [
  {
    title: 'Book of Titles',
    author: 'Kaitlin Lovrich',
  },
  {
    title: 'The Greatest Book of All Time',
    author: 'Nunya Bisness',
  },
  {
    title: 'The Little Coder That Could',
    author: 'That Juan-gui',
  },
];

// 2.
const lastBook = library.pop();
// // 3.
console.log('Value of lastBook variable after #2 library.pop():', lastBook);
// 4.
const firstBook = library.shift();
// // 5.
console.log(
  'Value of firstBook variable after #4 library.shift() :',
  firstBook
);

// // 6.
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

// // 7.
library.push(js);
// 8.
library.unshift(css);
// // 9.
library.splice(1, 1);
// // 10.
console.log('Value of library object:', library);

// String Methods
// 1.
const fullName = 'Kaitlin Lovrich';
// 2.
const firstAndLastName = fullName.split(' ');
// 3.
console.log(
  'Value of firstAndLastName variable after #2 split(" "):',
  firstAndLastName
);
// 4.
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
// 6.
console.log('Value of sayMyName:', sayMyName);
