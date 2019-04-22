const mongoose = require('mongoose');

var investeeSchema = new mongoose.Schema({
    email: {
        type: String,
        default: String,
        required: true
    },
    password: {
        type:String,
        default:String,
        required:true
      },
    username: {
        type:String,
        default: String,
        required: true
    },

    phoneNumber: {
        type:String,
        default: String,
        required: true
    },

    description: {
        type:String,
        default: String,
        required: true
    }

});

module.exports = mongoose.model('investee', investeeSchema);