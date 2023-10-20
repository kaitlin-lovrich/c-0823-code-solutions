# express-hello-world-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is Express middleware?
  functions that have access to the request object ( req ), the response object ( res )
- What is Express middleware useful for?
  execute during the processing of HTTP requests received by an Express application
- How do you mount a middleware with an Express application?
  app.use, short answer
  class answer: you can also do 'only use this middleware on these paths'
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  request response next optionally error

## Notes

anytime you want to do anything to a request, you use a middleware function
