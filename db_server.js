const database = require('./database');
const express = require('express');

const app = express();
const cache = {};

const port = process.env.port;

app.listen(port, () =>{
  console.log(`Listening on port ${port}...`);
})

app.get('/nocache/index.html', (req, res) => {
  database.get('index.html', page => {
    res.send(page);
  });
});

app.get('/withcache/index.html', (req, res) => {
  if ('index.html' in cache){
    res.send(cache['index.html']);
    return;
  }

  database.get('index.html', page => {
    cache['index.html'] = page;
    res.send(page);
  })
});

app.get('/hello', (req, res) => {
  console.log(req.headers);
  res.send(`Hello from ${port}`);
});
