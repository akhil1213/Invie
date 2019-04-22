const mongoose = require('mongoose');

var investorSchema = new mongoose.Schema({
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
    },

    weblink: {
        type:String,
        default: String,
        required: true
    },

    currentCompany: {
        type:String,
        default: String,
        required: true
    },
// arrays of strings are written this way. 
// I used uniqueItems to filter duplicates.
    interest:  [{
        type: String,
        uniqueitems: true
    }],

});

module.exports = mongoose.model('investor', investorSchema);