const mongoose = require('mongoose');
const validator = require('mongoose-unique-validator');

var investorSchema = new mongoose.Schema({
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
    },

    weblink: {
        type:String,
        default: ''
    },

    currentCompany: {
        type:String,
        default: ''
    },
// arrays of strings are written this way.
// I used uniqueItems to filter duplicates.
    interest:  [{
        type: String,
        uniqueitems: true
    }],

});

investorSchema.plugin(validator);

module.exports = mongoose.model('Investor', investorSchema);
