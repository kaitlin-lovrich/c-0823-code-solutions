import { writeFile } from 'node:fs/promises';

async function writeRand() {
  const fileContents = Math.floor(Math.random() * 10).toString() + '\n';
  // eslint-disable-next-line no-unused-vars
  const filePromise = await writeFile('random.txt', fileContents, 'utf8');
}

try {
  writeRand();
} catch (err) {
  console.error(err);
}

// Class Solution

// try {
//   await writeFile('random.txt', Math.random() + '\n', 'utf8');
// } catch (err) {
//   console.error(err);
//   process.exit(1); // to throw a red x in the console
// }
