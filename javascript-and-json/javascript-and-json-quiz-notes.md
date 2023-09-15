# javascript-and-json-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is JSON?
  a text-based data format following JavaScript object syntax used to send and store information in computer systems
  JSON exists as a string
- What are serialization and deserialization?
  Converting a string to a native object is called deserialization, while converting a native object to a string so it can be transmitted across the network is called serialization.
- Why are serialization and deserialization useful?
  Serialization is useful when you want to transmit data across a network.
  Deserialization is useful when you want to access the data
- How do you serialize a data structure into a JSON string using JavaScript?
  The JSON.stringify() static method converts a JavaScript value to a JSON string
- How do you deserialize a JSON string into a data structure using JavaScript?
  JSON.parse()

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

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON#no_really_what_is_json

JSON needs to be converted to a native JavaScript object when you want to access the data. This is not a big issue — JavaScript provides a global JSON object that has methods available for converting between the two.

JSON requires double quotes to be used around strings and property names. Single quotes are not valid other than surrounding the entire JSON string.

Contains only properties, no methods.

Even a single misplaced comma or colon can cause a JSON file to go wrong, and not work. You should be careful to validate any data you are attempting to use (although computer-generated JSON is less likely to include errors, as long as the generator program is working correctly). You can validate JSON using an application like `JSONLint`

Unlike in JavaScript code in which object properties may be unquoted, in JSON only quoted strings may be used as properties.

```javascript
async function populate() {
  const requestURL =
    'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const superHeroes = await response.json();

  populateHeader(superHeroes);
  populateHeroes(superHeroes);
}
```

above ^^^^

- we declare the <requestURL> variable to store the <GitHub URL>
- we use the <URL> to initialize a <new Request> object.
- we make the network request using the <fetch()> function, and this returns a <Response> object
- we retrieve the response as JSON using the <json()> function of the <Response object>

The fetch() API is asynchronous. We need to add the keyword `async` before the name of the function that uses the fetch API, and add the keyword `await` before the calls to any asynchronous functions.
