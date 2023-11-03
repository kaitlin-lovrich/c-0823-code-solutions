# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  scoope is determined in javascript at lexical time
- What allows JavaScript functions to "remember" variables from their surroundings?
  closures
- What values does a closure contain?
  the variables and non-javascript global functions (like setTimeout) that are outside of a function, that the function utilizes, goes in the closure
- When is a closure created?
  the closure gets created when the function is defined
- How can you tell if a function will be created with a closure?
  it will be created if it accesses anythin g outside of itself that is not a global scope
- In React, what is one important case where you need to know if a closure was created?
  when you are writing out your dependency array for your useEffect

## Notes
