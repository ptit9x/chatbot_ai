const apiai = require('apiai');

const app = apiai('85b4b4d342324662911fe38e9ceee4e0');
const botController = (req, res) => {
  try {
    const textInput = req.body.txtInput;
    const request = app.textRequest(textInput, {
      sessionId: 'ptit9x',
    });

    request.on('response', (response) => {
      // console.log(response.result.fulfillment);
      res.send(response.result.fulfillment);
    });

    request.on('error', (error) => {
      // console.log(error);
      res.send(error);
    });

    request.end();
  } catch (err) {
    throw err;
  }
};

module.exports = botController;
