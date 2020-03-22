var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    news:{
        type:String,
        required:true
    },
    newsDetails:{
        type:String,
        required:true
    }
},
{
    timestamps:true
});

module.exports = mongoose.model('New', newsSchema);