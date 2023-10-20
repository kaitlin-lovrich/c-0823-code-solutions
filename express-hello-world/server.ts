import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(req.method);
  res.send('Hi Roberto!');
  next();
});

app.listen(8080, () => console.log('Listening on port 8080'));
