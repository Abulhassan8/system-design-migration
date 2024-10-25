const mapReduce = require('./mapReduce');

const reduce = (key, values) => {
  const valuesCount = values.length;
  mapReduce.emitReduceResults(key, valuesCount);
};

const reduceInputs = mapReduce.getReduceInputs();
for (const input of reduceInputs){
  reduce(input[0], input[1]);
};
