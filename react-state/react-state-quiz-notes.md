# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Hooks are special functions that are only available while React is rendering
  any function starting with ”use”, is called a Hook
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  can only be called at the top level of your components or your own Hooks. You can’t call Hooks inside conditions, loops, or other nested functions.
- What is the purpose of state in React?
  Retain data between renders.
  Update the variable and trigger React to render the component again.
- Why can't we just maintain state in a local variable?
  Local variables don’t persist between renders.
  Changes to local variables won’t trigger renders.
- What two actions happen when you call a `state setter` function?
  updates the variable and trigger React to render the component again.
- When does the local `state variable` get updated with the new value?
  Every time your component renders

## Notes
