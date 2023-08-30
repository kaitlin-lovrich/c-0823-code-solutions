# javascript-methods-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  console.log()
- What is a method?
  A method is a function which is a property of an object
- How is a method different from any other function?
  methods are tied to objects
- How do you remove the last element from an array?
  .pop()
- How do you round a number down to the nearest integer?
  Math.floor()
- How do you generate a random number?
  Math.random()
- How do you delete an element from an array?
  splice.()
- How do you append an element to an array?
  .push()
- How do you break a string up into an array?
  .split()
- Do string methods change the original string? How would you check if you weren't sure?
  No they do not, strings are immutable, console.log() the origninal string
- Roughly how many string methods are there according to the MDN Web docs?
  about 60
- Is the return value of a function or method useful in every situation?
  its usefull but not always neccessary
- Roughly how many array methods are there according to the MDN Web docs?
  about 50
- What three-letter acronym should you always include in your Google search about a JavaScript method or CSS property?
  MDN

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

.pop() removes the last element and returns the value

push(x) adds elements to the end of an array

.shift() removes the first element and returns the value

.unshift(x) inserts element into the first index

.split(x) splits a string into an array of elements separated by the specified input ex string.split(' ');

Sean says avoid w3 schools. use MDN
