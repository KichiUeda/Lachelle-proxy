require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(__dirname + 'public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Coming soon!');
});

app.listen(PORT, (error) => {
  if (error) {
    console.log('Server connection failed: ', error);
  }
  console.log('Server listening on port ', PORT);
});