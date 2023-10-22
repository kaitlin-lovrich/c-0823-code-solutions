import express from 'express';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const app = express();
app.use(express.json());

let nextId = 1;
const grades: Record<number, Grade> = {};

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  const { name, course, score } = req.body;
  if (!name || !course || score === undefined) {
    res.status(400).json('Bad request');
    return;
  }
  const grade = req.body;
  grade.id = nextId;
  grades[nextId++] = grade;
  res.status(201).json(grade);
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});

// Robert's solulu:

// import express from 'express';
// type Grade = {
//   id: number;
//   name: string;
//   course: string;
//   score: number;
// };
// const app = express();
// app.use(express.json());
// let nextId = 4;
// const grades: Record<number, Grade> = {
//   1: {
//     id: 1,
//     name: 'Tim Berners-Lee',
//     course: 'HTML',
//     score: 95,
//   },
//   3: {
//     id: 3,
//     name: 'Brendan Eich',
//     course: 'JavaScript',
//     score: 100,
//   },
// };
// app.get('/api/grades', (req, res) => {
//   res.json(Object.values(grades));
// });
// app.get('/api/gradesObj', (req, res) => {
//   res.json(grades);
// });
// app.delete('/api/grades/:id', (req, res) => {
//   const { id } = req.params;
//   if (!Number.isInteger(id)) {
//     res.status(400).json({ error: `${id} not an integer` });
//     return;
//   }
//   if (!(id in grades)) {
//     res.status(404).json({ error: `${id} not found` });
//     return;
//   }
//   delete grades[+id];
//   res.sendStatus(204);
// });
// app.post('/api/grades', (req, res) => {
//   const { name, course, score } = req.body;
//   if (!name || !course || score === undefined) {
//     res.status(400).json('Bad request');
//     return;
//   }
//   const grade = req.body;
//   grade.id = nextId;
//   grades[nextId++] = grade;
//   res.status(201).json(grade);
// });
// app.listen(8080, () => {
//   console.log('Listening on port 8080!');
// });
