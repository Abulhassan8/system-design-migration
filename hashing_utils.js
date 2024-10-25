const hashString = (string) => {
  let hash = 0;
  if (string.length === 0) return string;

  for (let idx = 0; idx < string.length; idx++){
    charCode = string.charCodeAt(idx);
    hash = (hash<<5) - hash + charCode;
    hash |= 0;
  }

  return hash;
}

const computeScore = (username, server) => {
  const usernameHash = hashString(username);
  const serverHash = hashString(server);

  return (usernameHash * 13 + serverHash * 11) % 67;
}

module.exports = {
  hashString,
  computeScore
}
