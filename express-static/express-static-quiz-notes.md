# express-static-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the Express Static middleware?
  It serves static files and is based on serve-static.
- What does `express.static()` return?
  the static files in an object
  class answer: returns a middleware function
- What are several examples of static files?
  css stylesheets, html, images, and javascript files ,video, sound files
- What is a good way to serve application images using Express?
  express static middlware
  class answer: inside serverfile inside public directory, inside images directory
  app.use(express.static('public'))

## Notes

express.json returns a middleware function
need to call app.use for each middlewar installment. example:
app.use(express.json());
app.use(express.static('public'));

express.json()
looks in HEADERS for CONTENT TYPE and looks to see if it is APLLICATION/JSON, if it is, calls JSON.PARSE and puts the json OBJECT in REC.BODY (capitalized for emphasis, not syntax)
