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
  res.render('home');
});

app.post('/', (req, res) => {
  BOT_CHAT(req, res);
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
