// imports
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const bodyParser = require('body-parser');

// express application
const app = express();
const port = 3000;

app.engine('hbs', exphbs({
  extname: 'hbs',
  defaultView: 'main',
  layoutsDir: path.join(__dirname, '/views/layouts'),
  partialsDir: path.join(__dirname, '/views/partials')
}));

app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// homepage
app.get('/', function(req, res) {
  res.render('home', {title: "Lipay"});
});

// login
app.get('/login', function(req, res) {
  res.render('login', {title: "Lipay", layout: "main-plain"});
});

// register
app.get('/register', function(req, res) {
  res.render('register', {title: "Lipay", layout: "main-plain"})
});

// shop
app.get('/shop', function(req,res) {
  res.render('shop', {title: "Lipay", layout: "main"});
});

app.use(express.static('public'));
app.listen(port, function() {
  console.log('App listening at port ' + port);
});