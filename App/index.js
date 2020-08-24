import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const params = req.params;
  res.send('Hello World' + params);
});

app.listen(port, () => {
  console.log('Listening to port :', port);
});
