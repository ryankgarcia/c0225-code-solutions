# express-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the significance of an HTTP request's method?

- What is the significance of an HTTP response's status?

- What does the express.json() middleware do and when would you need it?

it parses incoming requests with JSON payloads and is based on body-parser

## Notes

res.status(code) sets the http status for response. it is a chainable alias of Node's response.statusCode
ex:
res.status(403).end()
res.status(400).send('Bad request')
res.status(404).sendFile('/absolute/path/to/404.png')

res.sendStatus(404)
