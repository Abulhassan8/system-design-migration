const fs = require('fs');

const HOST = process.env.HOST;

const getMapInput = (filename) => {
  const path = `${HOST}/${filename}`;
  return fs.readFileSync(path, 'utf-8');
};

const emitMapResult = (key, value) => {
  const filename = `${HOST}/map_results/${key}.txt`;
  fs.appendFileSync(filename, value+'\n');
};

const getReduceInputs = () => {
  const fileNames = fs.readdirSync('map_results', 'utf-8');
  const inputs = [];

  for (const filename of fileNames){
    const key = filename.split('.')[0];
    const contents = fs.readFileSync(`map_results/${key}.txt`, 'utf-8');
    inputs.push([key, contents.split('\n').filter(value => value !== '')]);
  }

  return inputs;
};

const emitReduceResults = (key, value) => {
  const filename = 'reduce_results/results.txt';
  fs.appendFileSync(filename, key + ' ' + value + '\n');
};

module.exports = {
  getMapInput,
  emitMapResult,
  getReduceInputs,
  emitReduceResults
}