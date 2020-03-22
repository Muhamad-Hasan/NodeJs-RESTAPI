const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscribers');


router.route('/')
.get((req,res,next) => {
    Subscriber.find({})
    .then((dishes) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dishes);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Subscriber.create(req.body)
    .then((sub) => {
        console.log('Dish Created ', sub);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(sub);
    }, (err) => next(err))
    .catch((err) => next(err));res.json({message:'Created successfully'})
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    Subscriber.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

router.route('/:Id')
.get((req,res,next) => {
    Subscriber.findById(req.params.Id)
    .then((sub) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(sub);
    }, (err) => next(err))
    .catch((err) => next(err));res.json({message:'does not exsit'})
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dishes/'+ req.params.dishId);
})
.delete((req, res, next) => {
    Subscriber.findByIdAndRemove(req.params.Id)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, 
    (err) => next(err))
    .catch((err) => next({message: 'deleted successfully'}));
});

router.route('/:name')
.get((req,res,next) => {
    console.log(req.params.name);
    Subscriber.find({'name':req.params.name})
    .then((sub) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(sub);
    }, (err) => next(err))
    .catch((err) => next(err));res.json({message:'does not exsit'})
});




/*router.get('/', async (req ,res)=>{
    try{
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    }catch(err){
        res.status(500).json({message : err.meassage})
    } 
})

router.get('/:id',async(req ,res)=>{
    try{
        const subscriber = await Subscriber.findById(req.params.id,(err,subscribers)=>{
            console.log(subscribers.name);
            res.json(subscribers)
        });
//        console.log(subscriber)
        if(subscriber == null){
            return res.status(404).json({message: 'Cannot find subscriber'})
        }
    }catch(err){
        return res.status(500).json({meassage : err.meassage})
    
    }
    res.json(res.subscriber.name);
})

router.post('/',async (req ,res)=>{
    const subscriber = new Subscriber({
        name:req.body.name,
        subscribeToChannel:req.body.subscribeToChannel,

    })
    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
})

router.patch('/',getSubscriber ,(req ,res)=>{
    
})

router.delete('/:id',getSubscriber, async(req ,res)=>{
    try{
        await res.subscriber.remove()
        res.json({meassage: 'deleted Subscriber'})
    }catch(err){
        res.status(5000).json({message : err.message})
    }
})

async function getSubscriber(req , res ,next){
    let subscriber
    console.log(req)
    try{
        const subscriber = await Subscriber.findById(req.params.id,(err,subscribers)=>{
            console.log(subscribers.name)
        });
//        console.log(subscriber)
        if(subscriber == null){
            return res.status(404).json({message: 'Cannot find subscriber'})
        }
    }catch(err){
        return res.status(500).json({meassage : err.meassage})
    
    }
    res.subscriber = subscriber
    next()
}

*/



module.exports = router

