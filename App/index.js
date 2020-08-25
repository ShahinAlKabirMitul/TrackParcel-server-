import express from 'express';
import models from './models/index.js';

const app = express();

const port = 3000;

//log = (msg) => console.log(msg);

app.use(express.json());

const log = (ms) => console.log(ms);

app.get('/', (req, res) => {
  const params = req.params;
  res.send('Hello World' + params);
});

app.post('/', (req, res) => {
  const body = req.body;
  res.send('Hello Viewers this is post' + JSON.stringify(body));
});

app.listen(port, () => {
  console.log('Listening to port :', port);
});

//log(models);
