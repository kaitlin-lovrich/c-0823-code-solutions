/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import { writeFile, readFile } from 'node:fs/promises';

type Note = {
  id: number;
  content: string;
};

type Data = {
  nextId: number;
  notes: Record<string, Note>;
};

const app = express();
app.use(express.json());

// Reads data from data.json
async function readData(): Promise<Data> {
  const json = await readFile('data.json', 'utf8'); // string
  return JSON.parse(json); // obj
}

// Writes data to data.json
async function writeData(data: Data) {
  await writeFile('data.json', JSON.stringify(data, null, 2));
}

// Reads all notes in the array
app.get('/api/notes', async (req, res) => {
  try {
    const data = await readData();
    let note: any;
    const notesArray = [];
    for (note in data.notes) {
      notesArray.push(data.notes[note]);
    }
    res.status(200).json(notesArray);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred.' });
  }
});

// Reads the note specified by the inputted id
app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = await readData();
    const { id } = req.params;
    if (+id < 0) {
      res.status(400).json({ error: `${id} not a positive integer` });
    } else if (!(id in data.notes)) {
      res.status(404).json({ error: `cannot find note with id: ${id}` });
    } else {
      res.status(200).json(data.notes[id]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred.' });
  }
});

// Creates a new note and writes it to data.json
app.post('/api/notes', async (req, res) => {
  try {
    const data = await readData();
    const { content } = req.body;
    const note = req.body;
    if (!content) {
      res.status(400).json({ error: 'content is a required field' });
    } else {
      note.id = data.nextId;
      data.notes[data.nextId++] = note;
      res.status(201).json(data.notes[note.id]);
      writeData(data);
    }
  } catch (err) {
    console.error(Error);
    res.status(500).json({ error: 'an unexpected error occurred.' });
  }
});

// Deletes the note specified by the inputted id and removes it from data.json
app.delete('/api/notes/:id', async (req, res) => {
  try {
    const data = await readData();
    const { id } = req.params;
    if (+id < 0) {
      res.status(400).json({ error: `${id} not a positive integer` });
    } else if (!(id in data.notes)) {
      res.status(404).json({ error: `cannot find note with id: ${id}` });
    } else {
      delete data.notes[id];
      res.sendStatus(204);
      writeData(data);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred.' });
  }
});

// Updates the note specified by the inputted id
app.put('/api/notes/:id', async (req, res) => {
  try {
    const data = await readData();
    const { id } = req.params;
    const { content } = req.body;
    const note = req.body;
    if (+id < 0 || !content) {
      res.status(400).json({
        error: `${id} not a positive integer or content is null`,
      });
    } else if (!(id in data.notes)) {
      res.status(404).json({ error: `cannot find note with id: ${id}` });
    } else {
      note.id = +id;
      data.notes[id] = note;
      res.status(200).json(data.notes[id]);
      writeData(data);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred.' });
  }
});

app.listen(8080, () => console.log('Listening on port 8080'));
