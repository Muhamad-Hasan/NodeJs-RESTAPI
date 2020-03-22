const express = require('express');
const bodyParser = require('body-parser');
const Promotions = require('../models/Promotions');
const router = express.Router();

router.use(bodyParser.json());


router.route('/')
.get((req,res,next) => {
    Promotions.find({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Promotions.create(req.body)
    .then((resp) => {
        console.log('account Created ', account);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Promotions.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotion');
});


router.route('/:promoId')
.get((req,res,next) => {
    Promotions.findById(req.params.promoId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Promotions.findByIdAndRemove(req.params.promoId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
        console.log("deleted")
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    Promotions.findByIdAndUpdate(req.params.promoId, {
        $set: req.body
    }, { new: true })
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
     }, (err) => next(err))
    .catch((err) => next(err));
});



module.exports = router;