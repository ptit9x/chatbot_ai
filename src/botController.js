const apiai = require('apiai');

const app = apiai(process.env.API_KEY);
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
