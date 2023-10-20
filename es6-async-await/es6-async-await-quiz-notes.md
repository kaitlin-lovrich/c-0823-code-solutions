# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  The async keyword turns a function into an async function and truns the return into a Promise, which allows you to use the await keyword in its body
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Promises are a cleaner way to handle asynchronous code that allows for chaining . then() and . catch() methods, while
  Async/await provides a more procedural syntax that makes asynchronous code look similar to synchronous code, with better error handling capabilities.
- When do you use `async`?
  before the function keyword and when you want to return a promise
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  when you want to return the value of the awaited expression. use await when you want to get the resolved value out of a promise. only use await as long as you are returning a promise
- How do you handle errors with `await`?
  using catch (error) {
  console.error(error.msg)
  }
- What do `try`, `catch` and `throw` do? When do you use them?
  try ties a block of code, if the code runs, the code is done. if the code throws an error, catch, catches the error and prints a message that you write to the console and throw will throw an error code. throw can be anywhere.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  if you do not use await, the program will return the promise object and not its resolved value, the rejection wont be executed, and you'll see an unhandled promise rejection
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async await - its easier to read and write

## Notes

Anytime you want to get the resolved value out of a PROMISE you AWAIT it
if you do not, it will return a promise

if you make a function an async, it will return a promise. If it does not already return a promise, it will wrap the return in a promise object

You do not need async and await with promises

NEVER use AWAIT without a TRY CATCH!!!!!!!! if you dont use try catch, it will not return an error. Your user will be confused why the program isnt working

```js
async function throwSeveral() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.
  try {
    const msg1 = await read('foo1', false);
    console.log(elapsed(), 'throwSeveral1', msg1);
    const msg2 = await read('foo2', false);
    if (msg2 === 'oops') throw neew Error('wow') /// How to use throw, once thrown, it goes to the catch
    console.log(elapsed(), 'throwSeveral2', msg2);
    const msg3 = await read('foo3', false);
    console.log(elapsed(), 'throwSeveral', msg3);
  } catch (error) {
    console.error(elapsed(), 'throwSeveral Error:', error.message);
  }
}

```

a catch block takes care of the exception

exceptions-best is best practice for try catch

only put try catch in places you want to display to the user. like where you make function calls

```js
try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (error) {
  console.error('Throw Error', error.message);
} finally {
  console.log('Done!'); // finally always runs whether there's an exception thrown or not.
}
```
