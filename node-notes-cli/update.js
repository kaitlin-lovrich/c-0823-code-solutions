/* eslint-disable no-unused-vars */
import { writeFile, readFile } from 'node:fs/promises';

const json = await readFile('data.json', 'utf8'); // string
const data = JSON.parse(json); // obj

export default async function updateNote() {
  const [, , update, id, note] = process.argv;
  data.notes[id] = note;
  const dataNotesP = await writeFile(
    'data.json',
    JSON.stringify(data, null, 2),
    'utf8'
  );
}
