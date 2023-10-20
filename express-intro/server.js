import express from 'express'; // automatically looks in node modules directory no slash needed, default exports do not need curly backets. named imports need curly backets.

const app = express(); // express returns an object, traditionally we name it app
app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});

// .listen():
// attaches to port 8080
// listhes for http request
// calls function
// loops
