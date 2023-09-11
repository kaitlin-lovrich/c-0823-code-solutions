# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  to test scripts
- What is a "model"?
  a model is a replica of the html
- Which "document" is being referred to in the phrase Document Object Model?
  index.html
- What is the word "object" referring to in the phrase Document Object Model?
  the nodes/html tag 'objects'
- What is a DOM Tree?
  the relationship between parent and child html elements in the DOM
- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.getElementById('element-id');
  document.querySelectorAll(p)[0];
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.querySelectorAll('ul > li:last-child');
  document.querySelector('.chapter');
- Why might you want to assign the return value of a DOM query to a variable?
  so you can reuse it to add multiple stylings to it
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  The browser needs to parse all of the elements in the HTML page before the JavaScript code can access them.
- What does `document.querySelector()` take as its argument and what does it return?
  returns the first element for the given CSS selector.
- What does `document.querySelectorAll()` take as its argument and what does it return?
  it takes in a css query selector (an element, class, id, etc wrapped in quotes) and returns a static array collection of elements of that type.

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

The elem.matches(css) does not look for anything, it merely checks if elem matches the given CSS-selector. It returns true or false.

```javascript
<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>

<script>
  // can be any collection instead of document.body.children
  for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      alert("The archive reference: " + elem.href );
    }
  }
</script>
```

The method elem.closest(css) looks for the nearest ancestor that matches the CSS-selector. The elem itself is also included in the search. Returns the ancestor.

```javascript
<h1>Contents</h1>

<div class="contents">
  <ul class="book">
    <li class="chapter">Chapter 1</li>
    <li class="chapter">Chapter 2</li>
  </ul>
</div>

<script>
  let chapter = document.querySelector('.chapter'); // LI

  alert(chapter.closest('.book')); // UL
  alert(chapter.closest('.contents')); // DIV

  alert(chapter.closest('h1')); // null (because h1 is not an ancestor)
</script>
```

```javascript
elem.getElementsByTagName(tag);
elem.getElementsByClassName(className);
document.getElementsByName(name);

~ Example:
let divs = document.getElementsByTagName('div');
```

```javascript
<div>First div</div>

<script>
  let divs = document.getElementsByTagName('div');
  alert(divs.length); // 1
</script>

<div>Second div</div>

<script>
  alert(divs.length); // 2
</script>
In contrast, querySelectorAll returns a `static` collection. It’s like a fixed array of elements.

If we use it instead, then both scripts output 1:
```
