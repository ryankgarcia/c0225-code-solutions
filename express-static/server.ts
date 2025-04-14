import express from 'express';

const app = express();

// this server now has 3 middleware in it
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('got /!');
});

app.get('/notes', (req, res) => {
  res.send('got notes!');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
