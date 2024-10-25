const utils = require('./hashing_utils');

const serverSet1 = [
  'server0',
  'server1',
  'server2',
  'server3',
  'server4',
  'server5'
]

const serverSet2 = [
  'server0',
  'server1',
  'server2',
  'server3',
  'server4'
]

const usernames = [
  'username0',
  'username1',
  'username2',
  'username3',
  'username4',
  'username5',
  'username6',
  'username7',
  'username8',
  'username9'
]

const pickServersSimple = (username, servers) => {
  const hash = utils.hashString(username);
  return servers[hash%servers.length];
}

const pickServerRendezvous = (username, servers) => {
  let maxServer= null;
  let maxScore=null;

  for (const server of servers){
    const score = utils.computeScore(username, server);
    if (maxScore == null || score > maxScore){
      maxScore = score;
      maxServer = server;
    }
  }

  return maxServer;
}


const printServersSimple = (users, servers) => {
  for (let idx = 0; idx < users.length; idx++){
    const server = pickServerRendezvous(usernames[idx], servers);
    console.log("selected server for ", usernames[idx], "is ", server);
  }
}

const printServersRendezvous = (users, servers) => {
  for (let idx = 0; idx < users.length; idx++){
    const server = pickServersSimple(usernames[idx], servers);
    console.log("selected server for ", usernames[idx], "is ", server);
  }
}

printServersSimple(usernames, serverSet1);
console.log("\n");
printServersRendezvous(usernames, serverSet1);
console.log("\n");
printServersSimple(usernames, serverSet2);
console.log("\n");
printServersRendezvous(usernames, serverSet2);