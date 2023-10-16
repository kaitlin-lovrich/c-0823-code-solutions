# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  && returns the last value if the first is truthy, otherwise it returns the first value
  || returns the last falsy value, useful for assigning a default value to a variable if all are falsy
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  moving from left to right, once condition has been met, it short circuits and stops checking the rest of the expressions
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  ?? is the same as || except that the first value must be explicitly undefined
  or null before
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  it doesnt create a scope whereas if else has a scope
- What is the `?.` (optional chaining) operator? When would you use it?
  it performs the following chained operation only if the property is not null
  useful for not throwing errors if properties do not exist returns null or undefined
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  spread allows you to take the values that exist in one object or array and put them in another
- What data types can be spread into an array? Into an object?
  you can only spread iterable into an array, technically you can spread anything into an object
- How does spread syntax differ from rest syntax?
  spread is used inside an object or array

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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

|| -returns the last falsy value
?? -checks if NULL or UNDEFINED only if it is, assigns whats on the right, else, assigns whats one the left
modal ? true : false -like ashorthand if else if modal is truthy, returns true else returns false
?.property -useful for not throwing errors if properties do not exist returns null or undefined
... -spread allows you to take the values that exist in one object and put them in another
