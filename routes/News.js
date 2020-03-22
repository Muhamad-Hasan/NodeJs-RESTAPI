const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const News = require('../models/news');

const router = express.Router();

//router.use(bodyParser.json());

router.route('/')
.get((req,res,next) => {
    News.find({})
    .then((news) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(news);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    News.create(req.body)
    .then((news) => {
        console.log('News Created ', news);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(news);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    News.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

router.route('/:newsId')
.get((req,res,next) => {
    News.findById(req.params.newsId)
    .then((news) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(news);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = router
