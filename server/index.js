const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const fs = require('fs');
const clipsData = require('./clips.json');
const friendsClipsData = require('./friendsclips.json');

app.use(bodyParser.json())

const {PORT, BACKEND_URL} = process.env

app.get('/', function(req, res){
  res.sendFile(__dirname+'/bin/index.html'); // change the path to your index.html
});

app.use(express.static('../client/build/'));
app.use('/', express.static('../client/build/index.html'));

app.get('/clips', (_req, res) => { 
    res.json(clipsData);
})


app.get('/friendsclips', (_req, res) => {
  res.json(friendsClipsData);
})

// app.post('/clips', (req, res) => {
//   const { newVideo } = req.body
//   console.log(newVideo)

//   // const nextClipsList = clipsData;
//   // nextClipsList.push(newVideo);
  
//   // clipsData.push(newVideo);

//   res.json(clipsData)
// })

app.post('/clips', (req, res) => {
  console.log(req.body);
  const { newVideo } = req.body
  const videoData = JSON.parse(fs.readFileSync('./clips.json'));
  videoData.push(newVideo);
  console.log(videoData);
  fs.writeFileSync('./clips.json', JSON.stringify(videoData), null, 2);
  res.status(201).send({status: 'Video Added'});
})

app.listen(PORT, () => console.log(`Listening on ${BACKEND_URL}:${PORT}`));