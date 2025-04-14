import express from 'express';

const app = express();

// this is the middleware function array
app.use((req, res, next) => {
  console.log('Hello, World!');
  console.log('The date is', new Date());
  next();
});

// this gets added to the middleware array
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.get('/notes', (req, res) => {
  res.send('Got notes');
});

app.post('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.send(`Got note ${noteId}`);
});

// this attaches to the network on port 8080
app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
