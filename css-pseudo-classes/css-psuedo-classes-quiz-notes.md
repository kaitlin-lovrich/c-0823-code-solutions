# css-psuedo-classes-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a pseudo-class?
  pseudo-classes are keywords that start with a colon.
  :hover is a pseudo-class

- What are CSS pseudo-classes useful for?
  helps cut down on excess classes in your markup, and makes for more flexible, maintainable code

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

Pseudo Class Notes (See below for pseudo elements)
syntax for pseudo-class:
element:pseudo-class {}

It is valid to write pseudo-classes and elements without any element selector preceding them. In the example above, you could write :first-child and the rule would apply to any element that is the first child

:first-child targets the first child element in the article

:only-child - represents an element without any siblings. This is the same as :first-child:last-child or :nth-child(1):nth-last-child(1), but with a lower specificity.

:hover — this only applies if the user moves their pointer over an element, typically a link.

:focus — only applies if the user focuses the element by clicking or using keyboard controls.

The :invalid CSS pseudo-class represents any <form>, <fieldset>, <input> or other <form> element whose contents fail to validate.

Pseudo Element Notes
syntax for pseudo-element:
::pseudo-element

Note: Some early pseudo-elements used the single colon syntax

p::first-line - will only select the first line of text in a paragraph

If you wanted to make the first line of the first paragraph bold you could chain the :first-child and ::first-line selectors together

article p:first-child::first-line - says that we want to select the first line, of the first <p> element, which is inside an <article> element.

.box::after {
content: " ➥";
}
A valid use of these pseudo-elements is to insert an icon, for example the little arrow added in the example below, which is a visual indicator that we wouldn't want read out by a screen reader
