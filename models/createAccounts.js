const mongoose = require('mongoose');
const createAccount= new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    postalCode:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now()
    }
},
{
    timestamps : true
}
); 
const Account = mongoose.model('createAccount',createAccount);

module.exports = Account;