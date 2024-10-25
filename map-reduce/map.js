const mapReduce = require('./mapReduce');

const map = (text) => {
  const lines = text.split('\n');
  for (const line of lines){
    const latency = parseInt(line);
    if (latency < 1000){
      mapReduce.emitMapResult('under_1_second', 1);
    }else {
      mapReduce.emitMapResult('above_1_second', 1);
    }
  }
}

const mapInput = mapReduce.getMapInput('latencies.txt');
map(mapInput);