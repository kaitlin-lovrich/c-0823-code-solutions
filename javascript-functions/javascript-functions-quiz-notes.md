# javascript-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a function in JavaScript?
  Functions allow you to package up code for use later in your program

- Describe the parts of a function **definition**.
  1.The function keyword to begin the creation of a new function.
  2.An optional name. (Our function's name is sayHello.)
  3.A comma-separated list of zero or more parameters, surrounded by () parentheses. (Our sayHello function doesn't have any parameters.)
  4.The start of the function's code block, as indicated by an { opening curly brace.
  5.An optional return statement. (Our sayHello function doesn't have a return statement.)
  6.The end of the function's code block, as indicated by a } closing curly brace.

```javascript
function sayHello() {
  var greeting = 'Hello, World!';
  console.log(greeting);
}
```

- Describe the parts of a function **call**.
  1.The function's name. Again, our function's name is sayHello.
  2.A comma-separated list of zero or more arguments surrounded by () parentheses.
  Our sayHello function does not take any arguments.

- When comparing them side-by-side, what are the differences between a function **call** and a function **definition**?
  A function call runs the code inside of the function, a function definition defines the code that we want to run

- What is the difference between a **parameter** and an **argument**?
  We use parameters in function definitions and we use arguments when calling a function.

- Why are function **parameters** useful?
  When a function is called, the parameters in its definition take on the values of the arguments that were passed

- What two effects does a `return` statement have on the behavior of a function?
  1.A return statement causes the function to produce a value.
  2.A return statement also exits the function; no code after the return statement is executed.

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
