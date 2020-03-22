const mongoose = require('mongoose');
const subscriberSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    subscribeToChannel:{
        type:String,
        
    },
    subscriberDate:{
        type:String,
        required:true,
        default:Date.now
    } 

}) 
module.exports = mongoose.model('Subscriber' ,subscriberSchema);