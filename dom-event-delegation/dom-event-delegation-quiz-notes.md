# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  a reference to the element the event occurred upon
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  bubbling
- What DOM element property tells you what type of element it is?
  nodeType
- What does the `element.closest()` method take as its argument and what does it return?
  traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector
- How can you remove an element from the DOM?
  element.remove() method
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  add an event listener to their parent element

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
