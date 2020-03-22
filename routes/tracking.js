const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Track = require('../models/Tracking');

const router = express.Router();

router.use(bodyParser.json());

router.route('/')
.get((req,res,next) => {
    Track.find({})
    .then((track) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(track);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Track.create(req.body)
    .then((track) => {
        console.log('Tracking Created ', track);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(track);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Track.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

router.route('/:trackId')
.get((req,res,next) => {
    Track.findById(req.params.trackId)
    .then((track) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(track);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = router
