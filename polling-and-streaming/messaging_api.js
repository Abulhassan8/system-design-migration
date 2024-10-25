const axios = require('axios');
const websocket = require('ws');

const createMessagingSocket = () => {
  return new websocket('ws://localhost:3001/messages');
};

const getMessages = () => {
  return axios.get('http://localhost:3001/messages').then(res => res.data);
};

const sendMessages = (message) => {
  return axios.post('http://localhost:3001/messages', message);
};

module.exports = {
  createMessagingSocket,
  getMessages,
  sendMessages
}