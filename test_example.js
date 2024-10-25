const fs = require('fs').promises;
const path = './test_example.txt';

const readFileAsync = async () => {
  try{
    const data = await fs.readFile(path, 'utf-8');
    console.log(data);
  } catch(error){
    console.log(`Error ${error}`);
  }
}

readFileAsync();
console.log("My name is Abul........");