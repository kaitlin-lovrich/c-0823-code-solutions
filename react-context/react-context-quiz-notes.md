# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  Context lets the parent component make some information available to any component in the tree below it—no matter how deep—without passing it explicitly through props.
- What values can be stored in context?
  any kind of value (even an object)
- How do you create context and make it available to the components?

  1. import useContext and create context by declaring a variable and setting it equal to the call of useEffect and passing a value as a parameter. value can be of any type.

```js
export const LevelContext = createContext(1);
```

2. inside the component's return statment, wrap the children in an angle brackets with the variable name of useContext followed immediatley (no space) with .Provider and provide a value and pass in a value.

```js
<div>
  <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
</div>
```

3. use the context by calling useContext and passing in the variable name you gave it. store the value in a variable. (in this exercise we made the value a varibale so we had to destructure it. see examples in client/src/components/NavBar.tsx)

```js
const level = useContext(LevelContext);
```

- How do you access the context values?
  by storing the value of the call of useContex(LevelContext) in a varible or by destructuring if the value is an array or object
- When would you use context? (in addition to the best answer: "rarely")
  authorization, styling such as dark mode, routing, surrent account, managing state (advanced)

## Documentation for this exercise:

https://react.dev/learn/passing-data-deeply-with-context
https://react.dev/reference/react/useContext

## Notes

1. User can sign up:
   Checks if a user exists using the useContext value, if user doesn't exist, then the user can sign in
2. User can sign in:
   The user signs in and a token gets stored in local storage, and a user gets created
3. User can stay signed in (even if they refresh the page):
   checks to see that user has a token
4. User can sign out:
   session ends
