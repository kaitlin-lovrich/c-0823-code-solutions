function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log(
  'Output for convertMinutesToSeconds function:',
  convertMinutesToSeconds(5)
);

function greet(name) {
  return 'Hey ' + name;
}
console.log('Output for greet function:', greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
console.log('Output for getArea function:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}
console.log(
  'Output for getFirstName function:',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);

function getLastElement(array) {
  return array.at(-1);
}
console.log(
  'Output for getLastElement function:',
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
