# fetch-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does `fetch()` return?
  A Promise that resolves to a Response object.
- What is the default request method used by `fetch()`?
  get
- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  specify the method as the second parameter of the fetch method. example: fetch(resource, "POST")
- How does `fetch` report errors?
  A fetch() promise will reject with a TypeError when a network error is encountered or CORS is misconfigured on the server-side.
  fetch will not reject if the server returns a 404 or 500. Instead, it resolves and sets the ok property to false.
  access by using response.ok (it returns either true or false)

## Notes
