# http-messages-recap-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a client?
  a piece of computer hardware or software that accesses a service made available by a server
- What is a server?
  a piece of computer hardware or software (computer program) that provides functionality for other programs or devices, called "clients".
- Which HTTP method does a browser issue to a web server when you visit a URL?
  The browser initiates a TCP connection with the server via a TCP method
- What is on the first line of an HTTP **request** message?
  protocal version, status code, status text
- What is on the first line of an HTTP **response** message?
  The protocol version, usually HTTP/1.1 and a status code, indicating success or failure of the request
  Class Response: An HTTP method, a verb (like GET, PUT or POST)
- What are HTTP headers?
  HTTP headers let the client and the server pass additional information with an HTTP request or response.
- Is a body required for a valid HTTP message?
  Not all requests have one: requests fetching resources, like GET, HEAD, DELETE, or OPTIONS, usually don't need one.

## Notes

to view "Headers", "Preview", and "Response" in the Network tab of the developer tools:
make sure you refresh the page and select all (under the filter search bar)
