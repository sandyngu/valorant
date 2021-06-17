const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const clipsData = require('./clips.json');

app.use(bodyParser.json())

const {PORT, BACKEND_URL} = process.env

app.get('/clips', (_req, res) => {
  res.json(clipsData);
})