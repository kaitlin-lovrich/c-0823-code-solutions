import { readFile, writeFile } from 'node:fs/promises';

async function cpFile() {
  const originalFile = process.argv[2];
  const copiedFile = process.argv[3];
  const oFileContents = await readFile(originalFile);
  // eslint-disable-next-line no-unused-vars
  const filePromise = await writeFile(copiedFile, oFileContents, 'utf8');
}

try {
  cpFile();
} catch (err) {
  console.error(err);
}

// if you include encodeing 'utf8' on line 6, it converts the file to a text file. if its an image, you dont want that
