const apiai = require('apiai');

const app = apiai('85b4b4d342324662911fe38e9ceee4e0');
const request = app.textRequest('Hello', {
  sessionId: 'ptit9x',
});

request.on('response', (response) => {
  console.log(response);
});

request.on('error', (error) => {
  console.log(error);
});

request.end();
