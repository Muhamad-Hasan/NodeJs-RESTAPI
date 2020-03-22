const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Remmittance = require('../models/Remmittances');

//const accountRouter = express.Router();

const router = express.Router();

router.route('/')
.get((req,res,next) => {
    Remmittance.find({})
    .then((remmit) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(remmit);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Remmittance.create(req.body)
    .then((remmit) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(remmit);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Remmittance.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

router.route('/last')
.get((req,res,next) => {
    Remmittance.find({}).sort({'_id':-1}).limit(1)
    .then((remmit) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(remmit);
    }, (err) => next(err))
    .catch((err) => next(err));
});



module.exports = router
