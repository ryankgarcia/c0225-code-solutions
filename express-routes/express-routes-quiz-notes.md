# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?

Create = POST
Read = GET
Update = PUT
Delete = DELETE

The server could delete objects in response to a GET request, the mapping is only by convention

- What is Express middleware?

middleware is a function that fulfills the request action

- What is Express middleware useful for?

they read or change requests, modify the response, or decide if the next handler should run

- How do you mount a middleware with an Express application?

using the app.use() method which will mount the specified middleware function or functions at the specified path

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?

req and res (request & response)

- How do you specify and retrieve route parameters?

you specify them in the route path by prefixing the identifier name with a :
and they are retrieved with destructuring and assigning them to the req.params object

## Notes

Express middleware is like an array of functions held by the Express process.
