const createError = require('http-errors');
const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const cookieParser = require('cookie-parser');
// const bodyParser = require("body-parser");
const logger = require('morgan');
const exphbs = require('express-handlebars');
const dotenv = require('dotenv');
const route = require('./app/routes');
const util = require("util");
const pg = require('pg');
//passport
const passport = require('passport');
const session = require('express-session');
const expressHandlebarsSections = require('express-handlebars-sections');

const app = express();
dotenv.config({ path: '.env' });

app.use(favicon(path.join(__dirname, 'public', 'img', 'favicon.ico')));

//flatpickr (module to pick date)
const flatpickr = require("flatpickr");

// view engine setup
app.engine('.hbs', exphbs({

  extname: '.hbs',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
  helpers: {
    section: expressHandlebarsSections(),
    sum: function (a, b) {
      return a + b;
    },
    when: function(operand_1, operator, operand_2, options) {
      var operators = {
        'eq': function (l, r) { return l == r; },
        'noteq': function (l, r) { return l != r; },
        'gt': function (l, r) { return Number(l) > Number(r); },
        'or': function (l, r) { return l || r; },
        'and': function (l, r) { return l && r; },
        '%': function (l, r) { return (l % r) === 0; }
      }
        , result = operators[operator](operand_1, operand_2);

      if (result) return options.fn(this);
      else return options.inverse(this);
    }
  }
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: process.env.SESSION_SECRET }));
// app.use(session({ secret: "cats"}));
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

// routes
route(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
