const aes256 = require('aes256');

const key = 'special-key-1';
const otherKey = 'special-key-2';

const plainText = 'SystemsExpert is great';
const encryptedText = aes256.encrypt(key, plainText);

console.log(encryptedText);

const decryptedText = aes256.decrypt(key, encryptedText);

console.log(decryptedText);

const FailedDecryptedText = aes256.decrypt(otherKey, encryptedText);

console.log(FailedDecryptedText);