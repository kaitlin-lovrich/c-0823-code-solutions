import { readFile } from 'node:fs/promises';

async function logFile() {
  const [, , ...fileNames] = process.argv;
  const fileMap = fileNames.map((file) => readFile(file, 'utf8'));
  const allFiles = await Promise.all(fileMap);
  console.log(allFiles.join('\n'));
}

try {
  logFile();
} catch (err) {
  console.error(err);
}

// map takes three parameters CSSMathValue, index, array

// for (let i = 0; i < fileNames.length; i++) {
//   const p = await readFile(fileNames[i], 'utf8');
//   console.log(p);
// }

// const allFiles = await Promise.all(fileMap);
// console.log(allFiles);
