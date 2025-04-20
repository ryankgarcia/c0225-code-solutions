# express-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the significance of an HTTP request's method?

the request method is significant in the http protocol so that the server knows what action to perform on that given data in terms of CRUD
CREATE = POST method
READ = GET method
UPDATE = PUT method
DELETE = DELETE method

- What is the significance of an HTTP response's status?

these status responses indicate whether specific http requests have bee successfully completed

- What does the express.json() middleware do and when would you need it?

it parses incoming requests with JSON payloads and is based on body-parser
I would need it in order to have access to data when performing the post or put methods since those methods require json

## Notes

res.status(code) sets the http status for response. it is a chainable alias of Node's response.statusCode
ex:
res.status(403).end()
res.status(400).send('Bad request')
res.status(404).sendFile('/absolute/path/to/404.png')

res.sendStatus(404)
