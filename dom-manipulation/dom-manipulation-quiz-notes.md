# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
  The className property of the Element interface gets and sets the value of the class attribute of the specified element.
- How do you update the CSS class attribute of an element using JavaScript?
  element.className = '.class-name'
- What is the `textContent` property of element objects?
  The textContent property of the Node interface represents the text content of the node and its descendants.
- How do you update the text within an element using JavaScript?
  element.textContent = 'updated text'
- Is the `event` parameter of an event listener callback always useful?
  yes
- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
  More complicated
- Why is storing information about a program in variables better than only storing it in the DOM?
  because variables can be manipulated and and used repeatedly

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

Note: To get all of the text and CDATA data for the whole document, use document.documentElement.textContent.
