import express from 'express';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

console.log(grades); // to get rid of variable never used error

const app = express();

app.get('/api/grades', (req, res, next) => {
  const gradeObjsArray: any = [];
  for (const id in grades) {
    gradeObjsArray.push(grades[id]);
  }
  res.json(gradeObjsArray);
  res.send();
  next();
});

app.listen(8080, () => console.log('Listening on port 8080'));
