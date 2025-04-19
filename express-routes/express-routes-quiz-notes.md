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

middleware is a set of functions that fulfill the request action

- What is Express middleware useful for?

they read or change requests, modify the response, or decide if the next handler should run
all of the routing is handled by middleware.

- How do you mount a middleware with an Express application?

using the app.use() method which will mount the specified middleware function or functions at the specified path

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?

req and res (request & response), followed by the next function

- How do you specify and retrieve route parameters?

you specify them in the route path by prefixing the identifier name with a :
and they are retrieved with destructuring and assigning them to the req.params object

## Notes

Express middleware is like an array of functions held by the Express process.

the route indicates the work that the client is requesting from the server.
the method indicates the type of work requested
the path indicates WHAT the work should be perform on

'Mounting' means calling a special function, like use or get, which add the function to the middleware array

An Express app is a series of middleware function calls

Middleware functions are functions that have access to the request object and the response object and the next middleware function in the app request-response cycle. the next middleware function is commonly denoted by a variable named next.

Middleware function can..

1. execute any code
2. make changes to the request and the response objects
3. end the request-response cycle
4. call the next middleware function in the stack

Error-handling middleware takes 4 arguments.

All of your routing is handled with middleware in Express (server)

request followed by the response then the next
