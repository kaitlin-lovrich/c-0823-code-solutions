# react-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you define a React component?
  using the function keyword followed by the name of th component, starting with a capital letter, parenthesis, and curly brace to open the code block
- How do you use JSX in a React component?
  use the return keyword followed by parenthesis and wrap all jsx inside of those parenthesis jsx is html embeded in react components
- How do you declare the props a React component needs?

- How do you pass props to a React component?
  by passing them in as destructured parameters
- How do you include JavaScript expressions in JSX?
  wrapping it in curly braces
- What are React hooks and what are the three "Rules of Hooks"?
  Hooks are JavaScript functions.
  Only call Hooks at the top level.
  Don't call Hooks inside loops, conditions, or nested functions.
  Only call Hooks from React function components
  Do not call Hooks after a conditional return statement.
- How do you manage state in a React component?
  with a useState
- How do you handle events in React?
  with event handler functions usually prefixed with the word handle
- How do you let a parent component know that an event happened?
  you pass the event handler function to the event name such as onClick

## Notes

you can only pass state from a parent down to its child, siblings cannot pass state to eachother

step1 add content to the page, aka the buttons and <p> tags
step2 add state
step3 add functionality
step4 add styling
