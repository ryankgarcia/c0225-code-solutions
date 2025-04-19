import express from 'express';

const app = express();

// this is the middleware function array
app.use((req, res, next) => {
  console.log('Hello, World!');
  console.log('The date is', new Date());
  next();
});

// the first argument is the path, followed by the callback function
// this GET is a method that is added to the middleware array which indicates our routes
// if you don't add 'req', even though you're not using it, your res will become the req, which we don't want
// for this reason we leave it (req, res) as the two arguments to our callback function
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// route or endpoint, they include the method and the path combined
app.get('/notes', (req, res) => {
  res.send('Got notes');
});

// this endpoint is updating
// route or endpoint, they include the method and the path combined
app.post('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.send(`Got note ${noteId}`);
});

// this attaches to the network on port 8080
app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
