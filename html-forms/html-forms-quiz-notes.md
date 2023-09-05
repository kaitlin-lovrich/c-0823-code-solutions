# html-forms-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of an HTML `form` element?
  it allows users to enter data, for storage or to update the interface
- Give five examples of form control elements.
  single or multi-line text fields, <textarea> dropdown boxes, buttons, <button> checkboxes, select
- Give three examples of `type` attribute values for HTML `<input>` elements.
  type="text", type="checkbox", type="email"
- Is an HTML `<input>` element a block element or an inline element?
  inline-block inline

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

\*\* Best practice for multiple labels

<div>
  <label for="username">Name: <span aria-label="required">*</span></label>
  <input id="username" type="text" name="username" required />
</div>
