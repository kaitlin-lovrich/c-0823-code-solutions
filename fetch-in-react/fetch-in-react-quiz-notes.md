# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
  You can use `useEffect` by creating an async named function, calling the fetch method and returning the response object utilizing the await keyword, parsing the json object with awiat as well and setting the result as a useState variable to utilize inside the named async function and then call the named async function outside of the function declaration.
- What browser function can be used to make HTTP requests to a server in React?
  fetch API
- How do you use `useEffect` to load component data just once when the component mounts?
  Use an empty dependency array to only run the effect once on mount
- How do you use `useEffect` to load component data every time the data key changes?
  add the data key to the dependency array in useEffect
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  React Query and Vercel SWR

## Notes
