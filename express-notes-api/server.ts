/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import { writeFile, readFile } from 'node:fs/promises';

const app = express();
app.use(express.json());

const json = await readFile('data.json', 'utf8'); // string
const data = JSON.parse(json); // obj

console.log(data, writeFile); // to get rid of errors

app.get('/api/notes', (req, res) => {
  let note: any;
  const notesArray = [];
  for (note in data.notes) {
    notesArray.push(data.notes[note]);
  }
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const { id } = req.params;
  if (+id < 0) {
    res.status(400).json({ error: `${id} not a positive integer` });
  } else if (!(id in data.notes)) {
    res.status(404).json({ error: `cannot find note with id: ${id}` });
  } else {
    res.status(200).json(data.notes[id]);
  }
});

app.post('/api/notes', async (req, res) => {
  const { content } = req.body;
  const note = req.body;
  if (!content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (content) {
    note.id = data.nextId;
    data.notes[data.nextId++] = note;
    res.status(201).json(data.notes[note.id]);
    const dataNotesP = await writeFile(
      'data.json',
      JSON.stringify(data, null, 2),
      'utf8'
    );
  }
  // if (note.id in data.notes) {
  //   console.error(Error);
  //   res.status(500).json({ error: 'an unexpected error occurred.' });
  // }
});

app.delete('/api/notes/:id', (req, res) => {
  const { id } = req.params;
  if (+id < 0) {
    res.status(400).json({ error: `${id} not a positive integer` });
  } else if (!(id in data.notes)) {
    res.status(404).json({ error: `cannot find note with id: ${id}` });
  } else {
    delete data.notes[id];
    res.status(204).json('note removed successfully');
  }
  // if (data.notes[note.id]) {
  //   res.status(500).json({ error: 'an unexpected error occurred.' });
  // }
});

app.listen(8080, () => console.log('Listening on port 8080'));
