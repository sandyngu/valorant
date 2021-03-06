const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const mysql = require("mysql");
const knex = require("../knexfile");
const path = require('path');
const fs = require('fs');
const clipsData = require('./clips.json');
const friendsClipsData = require('./friendsclips.json');
const Clip = require('../models/Clip');
const FriendsClip = require('../models/FriendsClip');

app.use(bodyParser.json())

const PORT = process.env.PORT || 5000

// const distDir = __dirname + "/dist/";
//  app.use(express.static(distDir));
//  app.use(express.urlencoded({ extended: false }));

// app.get('/', function(req, res){
//   res.sendFile(__dirname+'/bin/index.html'); // change the path to your index.html
// });

app.use(express.static('../client/build/'));
app.use('/', express.static('../client/build/index.html'));

// app.get('/clips', (_req, res) => { 
//     res.json(clipsData);
// })

// app.get('/friendsclips', (_req, res) => {
//   res.json(friendsClipsData)

// app.listen(PORT, () => console.log(`Listening on ${BACKEND_URL}:${PORT}`));

app.get('/clips', (req, res) => {
  Clip.where(req.query)
  .fetchAll()
  .then(clips => {
      res.status(200).json(clips);
  });
});

app.get('/friendsclips', (req, res) => {
  FriendsClip.where(req.query)
  .fetchAll()
  .then(friendsclips => {
      res.status(200).json(friendsclips);
  });
});

let db_config = {
    host: "us-cdbr-east-04.cleardb.com",
    user: "b7e20582588cef",
    password: "321846ae",
    database: "heroku_fb81c49fbfec3d0",
    charset: "utf8",
    insecureAuth: true
};

let connection;
// make connection
if (process.env.CLEARDB_DATABASE_URL) {
  connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
} else {
  connection = mysql.createConnection(knex.development);
}

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("../client/build"));

  connection.on('error', function(err) {
    connection = mysql.createConnection(db_config)
    console.log(err.code);
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"));
  });
}

module.exports = connection;

// For Server Disconnection After Upload; Duplicates Upload //

function handleDisconnect() {
  connection = mysql.createConnection(db_config);

  connection.connect(function(err) {
    if(err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }
  });
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') {
    handleDisconnect();
  } else {
    throw err;
  }
});
}

handleDisconnect();

setInterval(function () {
  connection.query('SELECT 1');
}, 5000);

app.post('/clips', (req, res) => {
  const { date, agent, video, description, poster } = req.body
  req.setTimeout(60*10*1000)
  console.log(req.body)

  connection.query('INSERT INTO clips(date, agent, video, description, poster) VALUES (?,?,?,?,?)',
  [date, agent, video, description, poster],
  
  (err, res) => {
    if (err) {
      console.log(err);
    };
  });
});

app.post('/friendsclips', (req, res) => {
  const { date, agent, video, description, poster } = req.body
  req.setTimeout(60*10*1000)
  console.log(req.body)

  connection.query('INSERT INTO friendsclips(date, agent, video, description, poster) VALUES (?,?,?,?,?)',
  [date, agent, video, description, poster],
  
  (err, res) => {
    if (err) {
      console.log(err);
    };
  });
});

app.listen(PORT, () => {
  console.log(`=> rePORTing for duty on port ${PORT}. <=`);
});