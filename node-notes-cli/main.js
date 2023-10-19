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
