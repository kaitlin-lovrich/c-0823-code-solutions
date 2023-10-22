/* eslint-disable no-unused-vars */
import { writeFile, readFile } from 'node:fs/promises';

const json = await readFile('data.json', 'utf8'); // string
const data = JSON.parse(json); // obj

export default async function deleteNote() {
  const [, , , id] = process.argv;
  delete data.notes[id];
  const dataNotesP = await writeFile(
    'data.json',
    JSON.stringify(data, null, 2),
    'utf8'
  );
}
