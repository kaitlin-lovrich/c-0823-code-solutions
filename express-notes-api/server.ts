import express from 'express';
import { writeFile, readFile } from 'node:fs/promises';

const app = express();
app.use(express.json());

const json = await readFile('data.json', 'utf8'); // string
const data = JSON.parse(json); // obj

console.log(data, writeFile); // to get rid of errors

app.get('/api/notes', (req, res) => {
  res.send('Hi Kaitlin');
  // res.status(200).json(data.notes);
});
