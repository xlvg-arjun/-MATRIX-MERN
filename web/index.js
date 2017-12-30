const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;

const url = `mongodb://${process.env.DB_PORT_27017_TCP_ADDR}:${process.env.DB_PORT_27017}/app`

MongoClient.connect(url, (err, db) => {
  console.log('Connected successfully to server.');
});

app.get('/', (req, res) => {
  res.send('Docker is awesome af.');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
