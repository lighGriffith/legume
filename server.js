const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var itemRouter = require('./src/routers/router');
var passport = require('passport');
var flash    = require('connect-flash');
var db = mongoose.connect('mongodb://localhost:27017/legumedb');
var cookieParser = require('cookie-parser');
require('./config/passport')(passport);
var session = require('express-session');

//middleware bodyparser
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(cookieParser()); // read cookies (needed for auth)

app.set('view engine', 'ejs'); // set up ejs for templating
// required for passport
app.use(session({
    secret: 'ilovescotchscotchyscotchscotch',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(express.static('./'));
app.use(express.static('dist'));
app.use('/api', itemRouter);
require('./src/routers/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('app listening on', port);
});
