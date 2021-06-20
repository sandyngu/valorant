const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const clipsData = require('./clips.json');

app.use(bodyParser.json())

const {PORT, BACKEND_URL} = process.env

app.get('/', function(req, res){
  res.sendFile(__dirname+'/bin/index.html'); // change the path to your index.html
});

app.get('/clips', (_req, res) => {
  res.json(clipsData);
})

app.listen(PORT, () => console.log(`Listening on ${BACKEND_URL}:${PORT}`));