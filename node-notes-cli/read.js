/* eslint-disable no-unused-vars */
import { writeFile, readFile } from 'node:fs/promises';

const json = await readFile('data.json', 'utf8'); // string
const data = JSON.parse(json); // obj

export default async function readNote() {
  const output = [];
  for (const id in data.notes) {
    console.log(id, ': ', data.notes[id]);
  }
}
