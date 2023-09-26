function ExampleConstructor() {}
console.log(
  'value of the prototype property of ExampleConstructor:',
  ExampleConstructor.prototype
);

console.log(
  'typeof the prototype property of ExampleConstructor:',
  typeof ExampleConstructor.prototype
);

const obj = new ExampleConstructor();
console.log('value of obj:', obj);
