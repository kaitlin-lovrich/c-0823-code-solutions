import { readFile } from 'node:fs/promises';

async function logFile() {
  const filePath = process.argv[2];
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
}

try {
  logFile();
} catch (err) {
  console.error(err);
}
