const express = require('express');
// const fs = require('fs');
const database = require('./database');
const redis = require('redis').createClient();

const app = express();
app.use(express.json());

const hashTable = {};
app.listen(3000, () => console.log('Listening on port 3000'));


app.get('/withcache/index.html', (req, res) => {
  redis.get('index.html', (err, redisResponse) => {
    if(redisResponse){
      res.send(redisResponse);
      return;
    }

    database.get('index.html', page => {
      redis.set('index.html', page, 'EX', 10);
      res.send(page);
    })
  })
});

app.get('/nocache/index.html', (req, res) => {
  database.get('index.html', page => {
    res.send(page);
  })
});

// app.get('/withcache/index.html', (req, res) => {
//   const key = req.params.key;
//   console.log(hashTable);

//   if (key in hashTable){
//     res.send(hashTable[key]);
//     return;
//   }

//   res.send('null');
// });

// app.post('/disk/:key', (req, res) => {
//   const destinationFile = `${DATA_DIR}/${req.params.key}`;
//   fs.writeFileSync(destinationFile, req.body.data);
//   res.send();
// });

// app.get('/disk/:key', (req, res) => {
//   const destinationFile = `${DATA_DIR}/${req.params.key}`;
//   try{
//     const data = fs.readFileSync(destinationFile);
//     res.send(data);
//   } catch(e){
//     res.send(`Error - ${e}`);
//   }
// })


