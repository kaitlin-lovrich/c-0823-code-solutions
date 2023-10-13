# react-props-and-expressions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are props in React?
  Props are the information that you pass to a JSX tag.
  Props are how react components communicate with eachother. Every parent component can pass some information to its child components by giving them props. You can pass any JavaScript value through them, including objects, arrays, and functions.
- How do you declare and access props in a component?
  refer to below notes for code example
  Step 1. Pass props to the child component,
  Step 2. Read props inside the child component
  ~ do this by listing their names person, size separated by the commas inside ({ and }) directly after function Avatar. This lets you use them inside the Avatar code, like you would with a variable.
- How do you pass props to a component?
  as an object. eg MyComponent({prop1, prop2, prop3})
- How do you write JavaScript expressions in JSX?
  enclose them in curly braces

## Notes

STEP 1

```js
export default function Profile() {
  return (
    <Avatar person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={100} />
  );
}
```

STEP 2

```js
function Avatar({ person, size }) {
  // person and size are available here
}
```

to specify a default value

```js
function Avatar({ person, size = 100 }) {
  // ...
}
```

normal practice you'd create a components folder and put CustomButton.jsx inside
