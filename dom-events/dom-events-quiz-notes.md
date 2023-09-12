# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  to debug, and test
- What is the purpose of events and event handling?
  to make webpages interactive
- Are all possible parameters required to use a JavaScript method or function?
  no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  .addEventListener()
  syntax:
  btn.addEventListener(click, function);
- What is a callback function?
  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
- What object is passed into an event listener callback when the event fires?
  event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  tells you what element is being targetted by the event.
  console.log() the target property of the event object and the event object itself.
- What is the difference between these two snippets of code?
  `js
    element.addEventListener('click', handleClick)
    `
  `js
    element.addEventListener('click', handleClick())
    `
  The first passess a function as an argument to an event handler functon, the second calls the function inside of the event handler function.

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

```javascript
btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
```
