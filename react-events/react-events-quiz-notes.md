# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
  an object with event properties such as onClick, onMouseOver
- What is an "event handler"? Which component declares the handler?
  Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.
- How do you pass an event handler to a React component?
  To add an event handler, you will first define a function and then pass it as a prop to the appropriate JSX tag
- What is the naming convention for event handlers?
  they are prepended with 'handle'
- What is an "event handler prop"? Which component declares the prop?
  an event handler prop is an event handler fuction declared inside the component its being called in
- What are some custom event handler props a component may wish to define?
  onClick
- What is the naming convention for custom event handler props?
  they are prepended with 'handle'

## Notes

```js
export default function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

or inline like so:

```js
export default function Button() {
  return <button onClick={() => alert('You clicked me!')}>Click me</button>;
}
```
