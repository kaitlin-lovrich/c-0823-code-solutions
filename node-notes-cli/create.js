/* eslint-disable no-unused-vars */
import { writeFile, readFile } from 'node:fs/promises';

const json = await readFile('data.json', 'utf8'); // string
const data = JSON.parse(json); // obj

export default async function createNote() {
  const [, , , userNote] = process.argv;
  data.notes[data.nextId] = userNote;
  data.nextId++;
  const dataNotesP = await writeFile(
    'data.json',
    JSON.stringify(data, null, 2),
    'utf8'
  );
}
