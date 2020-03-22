const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
        
    },
    designation: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    abbr: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true  
    },
    featured: {
        type: Boolean,
        required: true      
    }
},
{    timestamps : true
    
   });
        

var leaders = mongoose.model('Leader', leaderSchema);

module.exports = leaders;