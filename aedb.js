const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const DATA_DIR = process.env.DATA_DIR;
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.post('/:key', (req, res) => {
  const {key} = req.params;
  console.log(`Storing key for ${key}`);
  const destinationFile = `${DATA_DIR}/${key}`;
  fs.writeFileSync(destinationFile, req.body.data);
  res.send();
});

app.get('/:key', (req, res) => {
  const {key} = req.params;
  console.log(`Retrieveing data for ${key}`);
  const destinationFile = `${DATA_DIR}/${key}`;

  try {
    const data = fs.readFileSync(destinationFile);
    res.send(data);
  } catch(e){
    res.send('Error');
  }
});

