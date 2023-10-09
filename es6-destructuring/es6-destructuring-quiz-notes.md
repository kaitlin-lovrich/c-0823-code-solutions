# es6-destructuring-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is destructuring, conceptually?
  destructuring is breaking down object properties and array elements into variables
- What is the syntax for `Object` destructuring?
  const {property1, propery2} = object;
  const {property1: variable1, propery2: variable2} = object;

- What is the syntax for `Array` destructuring?
  const [element1, element2] = arrayOf2Elements
  const [element1, element2, ...args] = arrayOf4Elements //args stores an array of 2 elements
  const [, , , element4] = arrayOf4Elements // element4 stores the 4th element, use ',' to skip elements in array deconstructuring
- How can you tell the difference between destructuring and creating `Object`/`Array` literals?
  for array and object literals, the variable goes on the left of the assignment operator and deconstruction, the object or array name goes on the right.

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
