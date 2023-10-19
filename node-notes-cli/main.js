import createNote from './create.js';
import readNote from './read.js';
import updateNote from './update.js';
import deleteNote from './delete.js';

try {
  const [, , op] = process.argv;
  switch (op) {
    case 'create':
      await createNote();
      break;
    case 'read':
      await readNote();
      break;
    case 'update':
      await updateNote();
      break;
    case 'delete':
      await deleteNote();
      break;
    default:
      throw new Error(
        "Need to specify operation: 'create', 'read', 'update', 'delete'"
      );
  }
} catch (err) {
  console.error(err);
  process.exit(1);
}

// // Robert's solulu:
// import { readFile, writeFile } from 'node:fs/promises';

// const [,, op, arg1, arg2] = process.argv;

// // Error handling functions:
// function checkId(){
//   if (!(id in data.notes)) {
//     console.error('Hey, dummy, it is not there:', id);
//     process.exit(1);
//   }
// }

// function checkNote(data, id, note) {
//   if (note === undefined || note === null) {
//     console.error('Hey, dummy, no note:', note);
//     process.exit(1);
//   }
//   if (note === data.notes[id]) {
//     console.error('Hey, dummy, it is the same:', note);
//     process.exit(1);
//   }
// }

// try {
//   switch (op) {
//     case 'create':
//       break;
//     case 'read':
//       readNote();
//       break;
//     case 'update':
//       updateNote();
//       break;
//     case 'delete':
//       deleteNote(arg1);
//       break;
//     default:
//       console.log('Bad op', op);
//       process.exit(1);
//   }
// } catch (err) {
//   console.error('Badness happened:', err);
//   process.exit(1)
// }

// // Writes data to the file system
// async function writeData(data) {
//   await writeFile(
//     'data.json'
//     JSON.stringify(data, null, 2),
//     'utf8'
//   )
// }

// async function createNote(note) {
//   const date = await readData();
//   checkNote(data, data.nextId, note)
//   data.notes[data.nextId++] = note;
//   await writeData(data);
// }

// // Returns the data from the file system.
// async function readNote() {
//   const file = await readFile('data.json', 'utf8');
//   if (data.notes.length === 0) {
//     console.log('No notes')
//     return;
//   }
//   for (const key in data.notes) {
//     console.log(`${key} : ${data.note[key]}`);
//   }
// }

// async function updateNote(id, note) {
//   const date = await readData();
//   checkId(data, id);
//   data.notes[id] = note;
//   await writeData(data);
// }

// async function deleteNote() {
//   const date = await readData();
//   checkId(data, id);
//   delete data.notes[id];
//   await writeData(data);
// }
