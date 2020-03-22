var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
const usersRouter = require('./routes/users');
//const cookieParser = require('cookie-parser');
const newsRouter = require('./routes/News');
const RemmitanceRouter = require('./routes/Remmittence');
const trackingRouter = require('./routes/tracking');
var passport = require('passport');
var authenticate = require('./authenticate');


const mongoose = require('mongoose');
const uri = "mongodb+srv://Mhassan:artificial.intelligence@cluster0-2bd7c.mongodb.net/Practice?retryWrites=true&w=majority";
//const url = 'mongodb://localhost:27017/RapidRemit';
//const uri = process.env.MONGODB_URI || 'mongodb://localhost/rapidRemit';
const connect = mongoose.connect(uri ,{ useNewUrlParser: true });

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });
var app = express();
//app.use(cookieParser('12345-67890-09876-54321'));
app.use(express.json());
app.use(express.urlencoded({extended :false}))
//app.use(cookieParser('12345-67890-09876-54321'));

app.use(session({
    name: 'session-id',
    secret: '12345-67890-09876-54321',
    saveUninitialized: false,
    resave: false,
    store: new FileStore()
  }));

app.use(passport.initialize());
app.use(passport.session());
app.use('/users',usersRouter);

  
function auth (req, res, next) {
    console.log(req.user);

    if (!req.user) {
      var err = new Error('You are not authenticated!');
      err.status = 403;
      next(err);
    }
    else {
          next();
    }
}

    
    
//app.use(auth);

//app.use('/account',accountRouter);
app.use('/news', newsRouter);
app.use('/tracking', trackingRouter);
app.use('/remmitance',RemmitanceRouter);



module.exports=app