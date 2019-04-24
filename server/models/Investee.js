const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');

var investeeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required:true
      },
    username: {
        type:String,
        required: true,
        unique: true
    },

    phoneNumber: {
        type:String,
        required: true
    },

    description: {
        type:String,
        default: ''
    }

});

investeeSchema.plugin(validator);

module.exports = mongoose.model('Investee', investeeSchema);
