# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  targets the element the event occurs on
- What is the affect of setting an element to `display: none`?
  it hides the element
- What does the `element.matches()` method take as an argument and what does it return?
  takes in selectors - A string containing valid CSS selectors to test the Element against, returns true if the element matches the selctors
- How can you retrieve the value of an element's attribute?
  getAttribute() method
- At what steps of the solution would it be helpful to log things to the console?
  after you create variables to check that they've stored the right data and after your conditionals to check that they're returning a valid boolean
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  using a dom creation funtion
- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  you'd have a variable for each tab element and use if/else statements for each variable to test for the className set to view or view hidden and re-assign according to the data-view attribute whether is matched up with the targetted tab's data-view attribrute

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
