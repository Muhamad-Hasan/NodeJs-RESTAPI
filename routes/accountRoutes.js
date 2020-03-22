const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(bodyParser.json());

const Account = require('../models/createAccounts');
const User = require('../models/user');
//const accountRouter = express.Router();

const router = express.Router();

router.route('/')
.get((req,res,next) => {
    console.log('account');
    Account.find({})
    .then((account) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(account);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Account.create(req.body)
    .then((account) => {
        console.log('account Created ', account);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(account);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Account.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});


router.route('/:Id')
.get((req,res,next) => {
    console.log('get id ');
    Account.findById(req.params.Id)
    .then((account) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(account);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Account.findByIdAndRemove(req.params.Id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
        console.log("deleted")
    }, (err) => next(err))
    .catch((err) => next(err));
});

router.route('/signup')
.post((req,res,next) => {
    //console.log(req.body.username)
    console.log("signup")
});

module.exports = router
