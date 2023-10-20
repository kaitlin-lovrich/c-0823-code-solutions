import { readFile } from 'node:fs/promises';

async function logFile() {
  const filePath = './dijkstra.txt';
  const contents = await readFile(filePath, { encoding: 'utf8' }); // can use { encoding: 'utf8'} as well for second param
  console.log(contents);
}

try {
  logFile();
} catch (err) {
  console.error(err);
}
