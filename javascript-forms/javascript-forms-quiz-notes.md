# javascript-forms-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What event is fired when a user places their cursor in a form control?
  focus
- What event is fired when a user's cursor leaves a form control?
  blur
- What event is fired as a user changes the value of a form control?
  change or input
- What event is fired when a user clicks the `"submit"` button within a `<form>`?
  The submit event fires when a form is submitted.
- What does the `event.preventDefault()` method do?
  The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.
- What does submitting a form without `event.preventDefault()` do?
  the default behavior of the browzer will execute
- What property of a form element object contains all of the form's controls.
  elements property
- What property of a form control object gets and sets its value?
  value
- What is one risk of writing a lot of code without checking to see if it works so far?
  You wont know where the code 'breaks' if it doesnt run right
- What is an advantage of having your console open when writing a JavaScript program?
  you can see error messages

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

Can I see an example of
To obtain an HTMLFormElement object, you can use a CSS selector with querySelector(), or you can get a list of all of the forms in the document using its forms property.
Document.forms
Document.forms[index], Document.forms[id], Document.forms[names]

````javascript
const inputs = document.getElementById("my-form").elements;
const inputByIndex = inputs[0];
const inputByName = inputs["username"];

```javascript
const inputs = document.getElementById("my-form").elements;
````

// Iterate over the form controls
for (let i = 0; i < inputs.length; i++) {
if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
// Update text input
inputs[i].value.toLocaleUpperCase();
}
}

````

The elements included by HTMLFormElement.elements and HTMLFormElement.length are the following:
<button>
<fieldset>
<input> (with the exception that any whose type is "image" are omitted for historical reasons)
<object>
<output>
<select>
<textarea>

```javascript
const f = document.createElement("form"); // Create a form
document.body.appendChild(f); // Add it to the document body
f.action = "/cgi-bin/some.cgi"; // Add action and method attributes
f.method = "POST";
f.submit(); // Call the form's submit() method
````
