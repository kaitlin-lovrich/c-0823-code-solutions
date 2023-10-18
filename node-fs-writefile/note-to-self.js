import { writeFile } from 'node:fs/promises';

async function noteToSelf() {
  const fileContents = process.argv[2] + '\n';
  if (fileContents) throw new Error('Null Input. Add note.');
  // eslint-disable-next-line no-unused-vars
  const filePromise = await writeFile('note.txt', fileContents, 'utf8');
}

try {
  noteToSelf();
} catch (err) {
  console.error(err);
}
