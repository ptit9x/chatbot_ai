const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'default', // see view/layouts/default.hsb
  extname: '.hbs',
}));
app.set('view engine', '.hbs');

app.use(express.static('public'));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Controllers
const BOT_CHAT = require('./src/botController');
// Router each link
app.get('/', (req, res) => {
  const data = {
    domain: process.env.DOMAIN,
  };
  res.render('home', data);
});

app.post('/', (req, res) => {
  BOT_CHAT(req, res);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port ', port);
});
