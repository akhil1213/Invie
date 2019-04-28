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
    name: {
        type:String,
        required: true
    },

    phoneNumber: {
        type:String
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
    }]

});

investorSchema.plugin(validator);

module.exports = mongoose.model('Investor', investorSchema);
