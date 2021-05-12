const mongoose = require('mongoose');

var scheme = new mongoose.Schema({
    name:{
        type: String , 
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    gender:{
        type: String
    },
    status:{
        type: String
    }

});

const userDB = mongoose.model('userDB',scheme);

module.exports = userDB;