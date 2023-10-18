import read from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.

  const msg = await read('foo', false);
  console.log(elapsed(), 'throwOnce:', msg);
}

async function throwSeveral() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.

  const msg1 = await read('foo1', false);
  console.log(elapsed(), 'throwSeveral1', msg1);
  const msg2 = await read('foo2', false);
  console.log(elapsed(), 'throwSeveral2', msg2);
  const msg3 = await read('foo3', false);
  console.log(elapsed(), 'throwSeveral', msg3);
}

async function throwChained() {
  const msg1 = await read('foo-chain', false);
  console.log(elapsed(), 'throwChained1:', msg1);
  const msg2 = await read('foo-chain', false);
  console.log(elapsed(), 'throwChained1:', msg2);
  const msg3 = await read('foo-chain', false);
  console.log(elapsed(), 'throwChained3:', msg3);
}

try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (error) {
  console.error('Throw Error', error.message);
}
