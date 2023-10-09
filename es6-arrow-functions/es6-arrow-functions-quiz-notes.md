# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  parameter, arrow, expression

```js
(parameter) => expression;
(parameter) => expression; // also valid if only one parameter
```

- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  it returns the result of the expression after the arrow

- When using _concise body syntax_, how do you return an object literal?
  you surround the object literal in parenthesis

```js
() => ({ property1: value1, property2: value2 });
```

- In the expression
  ```js
  foo(() => 42);
  ```
  - Identify the arrow function

* - How many arguments does the arrow function take?
    0
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    1
  - What type of argument is passed to the function `foo`?
    arrow function

- In the expression
  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```
  - Identify the arrow function
  *
  - How many arguments does the arrow function take?
    1
  - What value does it return?
    returns a console.log statement
  - How many arguments are passed to the function `bar`?
    1
  - What type of argument is passed to the function `bar`?
    arrow function
  - When does the arrow function's code get executed?
    when bar is called
- How does the value of `this` differ between standard functions and arrow functions?
  arrow functions use the `this` from the enclosing lexical scope, (the function scope that the arrow function is inside of)
  standard functions have their own `this`.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
