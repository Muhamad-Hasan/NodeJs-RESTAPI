var express = require('express');
const bodyParser = require('body-parser');
var User = require('../models/user');
//const mongoose = require('mongoose');
//var app = express();
var passport = require('passport');

var router = express.Router();
//console.log('users connectes');
router.use(bodyParser.json());
//router.use(express.json());

router.post('/signup', (req, res, next) => {
  User.register(new User({username: req.body.username}), 
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      passport.authenticate('local')(req, res, () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, status: 'Registration Successful!'});
      });
    }
  });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({success: true, status: 'You are successfully logged in!'});
});


router.get('/logout', (req, res, next) => {
  console.log('logout')
    if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
    res.end('You are logged out');
  }
  else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});

module.exports = router;