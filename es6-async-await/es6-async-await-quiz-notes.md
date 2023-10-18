# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  The async keyword turns a function into an async function, which allows you to use the await keyword in its body
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Promises are a cleaner way to handle asynchronous code that allows for chaining . then() and . catch() methods, while
  Async/await provides a more procedural syntax that makes asynchronous code look similar to synchronous code, with better error handling capabilities.
- When do you use `async`?
  before the function keyword and when you want to return a promise
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  when you want to return the value of the awaited expression. use await when you want to get the resolved value out of a promise. dont use await if you dont want your code to wait until the rest of the code is done executing
- How do you handle errors with `await`?
  using catch (error) {
  console.error(error.msg)
  }
- What do `try`, `catch` and `throw` do? When do you use them?
  try ties a block of code, if the code runs, the code is done. if the code throws an error, catch, catches the error and prints a message that you write to the console and throw will throw an error code
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  if you do not use await, the program will return the promise object and not its resolved value
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async await - its easier to read and write

## Notes

Anytime you want to get the resolved value out of a PROMISE you AWAIT it
if you do not, it will return a promise
