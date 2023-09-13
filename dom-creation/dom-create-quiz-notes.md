# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
  no
- How do you add an element as a child to another element?
  document.body.appendChild(element)

(element without quotes)

- What do you pass as the arguments to the `element.setAttribute()` method?
  setAttribute(name, value)
- What steps do you need to take in order to insert a new element into the page?
  1.let div = document.createElement('div');
  2.div.className = "alert";
  3a.const newContent = document.createTextNode("Hi there and greetings!");
  3b.div.innerText = "<strong>Hi there!</strong> You've read an important message."; // or textContent or rarely innerHTML
  4.document.body.appendChild(div); // or just append()

  1.call the create element method of the document object and pass in the element you'd like to create with quotes and save that to a variable
  2.set the elements className for optional styling purposes
  3.set the innerHTML property to what you'd like the inner text of the element to be
  4.append to the document into whatever element you'd like you new element to be a child of

- What is the `textContent` property of an element object for?
  to get and set the textContent of a node
- Name two ways to set the `class` attribute of a DOM element.
  element.className = 'class-name'
  element.setAttribute('class-name', 'value')
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  so you dont have to input each piece of data manually. and to reduce human error.

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

call append method on any other element, to put another element into it.

```javascript
div.append(anotherElement);
```

```javascript
<style>
.alert {
  padding: 15px;
  border: 1px solid #d6e9c6;
  border-radius: 4px;
  color: #3c763d;
  background-color: #dff0d8;
}
</style>

<script>
  let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

  document.body.append(div);
</script>
```

node.append(...nodes or strings) – append nodes or strings at the end of node,
node.prepend(...nodes or strings) – insert nodes or strings at the beginning of node,
node.before(...nodes or strings) –- insert nodes or strings before node,
node.after(...nodes or strings) –- insert nodes or strings after node,
node.replaceWith(...nodes or strings) –- replaces node with the given nodes or strings.

insertion methods 'prepend' and 'before' and 'append' and 'after' difference. this example is from an ol (ordered list) element
before
prepend
0
1
2
append
after
