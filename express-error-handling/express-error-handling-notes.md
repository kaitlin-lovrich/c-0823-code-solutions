# express-error-handling-notes

## Notes

You have to put your error middleware down at the bottom because you call next(err) to handle the error and it goes in the order of whats on the page.

copy paste error-middleware.ts if you'd like to use this code for easy error handling.
