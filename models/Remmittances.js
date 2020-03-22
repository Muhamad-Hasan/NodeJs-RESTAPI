const mongoose = require('mongoose');
const remmittanceScehma= new mongoose.Schema({
    country:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true,
    },
    tocountry:{
        type:String,
        required:true,
    },
    recivecurrencyin:{
        type:String,
        required:true,
    }},
    {
        timestamps : true
    }
    
    
); 
const Remmittance = mongoose.model('Remmittance',remmittanceScehma);

module.exports = Remmittance;