# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  when the component appears on the webpage
- What is a React Effect?
  it is a function that is called after a component is rendered
- When should you use an Effect and when should you not use an Effect?
  you should use an effect when you want to modify non-react widgets like the browser video player or set up a server. Dont use it if you just want to update a react component.
- When do Effects run?
  effects run after a react component has been rendered
- What function is used to declare an Effect?
  useEffect{() => { code to run }, [ dependencies ]}
- What are Effect dependencies and how do you declare them?
  effects depend on their dependencies to tell them whether or not to run. you declare them by adding them to the dependencies array. If the dependency array is [] (empty), React only runs the code inside useEffect when the component “mounts”
- Why would you want to clean up from an Effect?
  to reset the behevior of the effect or its 'effects' will stay running. or example: starting a server and stopping a server
- How do you clean up from an Effect?
  use a clean-up function for Example:
  return () => {
  connection.disconnect();
  }
- When does the cleanup function run?
  React will call your cleanup function each time before the Effect runs again, and one final time when the component unmounts (gets removed).

# Documentation for this exercise:

https://react.dev/learn/render-and-commit
https://react.dev/learn/synchronizing-with-effects

## Notes

- React will only skip re-running the Effect if all of the dependencies you specify have exactly the same values as they had during the previous render.

- The code inside the Effect does not use any props or state, so your dependency array is [] (empty). This tells React to only run this code when the component “mounts”, i.e. appears on the screen for the first time.

Why Cleanup real life example:

- The component mounts and calls connection.connect(). Then imagine the user navigates to another screen—for example, to the Settings page. The ChatRoom component unmounts. Finally, the user clicks Back and ChatRoom mounts again. This would set up a second connection—but the first connection was never destroyed! As the user navigates across the app, the connections would keep piling up.

In Production:

- In production, you would only see "✅ Connecting..." printed once. Remounting components only happens in development to help you find Effects that need cleanup. You can turn off Strict Mode to opt out of the development behavior, but we recommend keeping it on. This lets you find many bugs like the one above.
