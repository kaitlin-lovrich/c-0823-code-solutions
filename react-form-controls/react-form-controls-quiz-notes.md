# react-form-controls-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do controlled components differ from uncontrolled components?
  Controlled components require value and onChange props and a useState to pass to the value prop, form data is handled by a React component.
  Uncontrolled props can optionally utilize a default value, form data is handled by the DOM itself.
- What are some advantages of using uncontrolled components?
  Easier to integrate React and non-React code, when the use case is simple
- What are some advantages of using controlled components?
  You can do something for each keystroke with controlled components, they are more predictable and easier to debug because the state is controlled by the parent component, they are easier to track and manage in larger projects
- Which style do you prefer?
  Controlled
- What two props must you pass to an input for it to be "controlled"?
  value and onChange
- What are some popular npm packages for creating forms in React?
  React Hook Form, Formik, and React Final Form

## Notes

# Documentation for this exercise:

https://react.dev/reference/react-dom/components/input#usage

- For a controlled checkbox, you need to read e.target.checked rather than e.target.value.

```js
<input
  type="checkbox"
  checked={something}
  onChange={(e) => setSomething(e.target.checked)}
/>
```

- A controlled component should always receive a string value, not null or undefined
  if it needs to be empty, pass value an empty string `value={''}` or pass value={someValue ?? ''}
  ?? nullish coalescing operator
