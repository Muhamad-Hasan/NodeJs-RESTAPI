var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trackingSchema = new Schema({
    trackingId:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    transaction:{
        type:Number,
        required:true
    },
    currency:{
        type:String,
        required:true
    }

},
{
    timestamps:true
});

module.exports = mongoose.model('Tracking', trackingSchema);