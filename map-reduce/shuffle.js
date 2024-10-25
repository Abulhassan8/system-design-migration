const fs = require('fs');

const HOSTS = process.env.HOSTS.split(',');

for(const host of HOSTS){
  const filenames = fs.readdirSync(`${host}/map_results`, 'utf-8');
  for (const filename of filenames){
    const key = filename.split('.')[0];
    const contents = fs.readFileSync(`${host}/map_results/${filename}`, 'utf-8');
    fs.appendFileSync(`map_results/${key}.txt`, contents);
  }
}