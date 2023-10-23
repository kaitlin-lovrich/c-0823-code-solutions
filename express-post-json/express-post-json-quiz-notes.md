# express-post-json-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does the `express.json()` middleware do and when would you need it?
  parses and srtingify's aka handles http requests
  claas: looks for content type header, if it is application/json, if it is, it reads it, then parses, and that is the body

## Notes

app.post - create
app.get - read
app.put - update
app.delete - delete

req and res parameters are positional!!!!

app.METHOD(PATH, HANDLER) ~basic routing, each route can have one or more handler functions, which are -executed- when the route is -matched-.

do `+variable` to convert a string variable into a number

res.status(404).json({error: `${id} not found`}) json sends status for you , no need to explicitly say sendStatus

if you do app.use without a path, it will match for every path

do app.use(express.json()); ? to do what exactly?

# Notes/hints from the assignment directions:

express.json() returns a “middleware”.
app.use() is how you “mount” a middleware.
Every middleware (or route) mounted after the JSON middleware will have an object on req.body.
