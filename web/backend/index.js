const express = require('express');
const { join } = require('path');
const { MongoClient } = require('mongodb');

const app = express();

const url = `mongodb://${process.env.DB_PORT_27017_TCP_ADDR}:${process.env.DB_PORT_27017}/app`;
const staticLocation = join(__dirname, '..', 'public');

MongoClient.connect(url, (err, db) => {
  console.log('Connected successfully to server.');
});


app.use(express.static(staticLocation));

app.get('*', (req, res) => {
  res.sendFile(join(staticLocation, 'index.html'));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
