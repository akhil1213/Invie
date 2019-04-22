const mongoose = require('mongoose');

var BusinessideaSchema = new mongoose.Schema({

    name:  {
        type: String,
        default: String,
        required: true
    },

    objective:  {
        type: String,
        default: String,
        required: true
    },

    description:  {
        type: String,
        default: String,
        required: true
    },

    weblink:  {
        type: String,
        default: String,
        required: true
    },

    tags:  [{
        type: String
    }],

    owners: [{
        type: String
    }],

    typeOfBusiness: {
        type: String,
        default: String,
        required: true
    },

    views: {
        type: String,
        default: String,
        required: true
    },

    phoneNumbers: {
        type: String,
        default: String,
        required: true
    }

});

module.exports = mongoose.model('BusinessIdea', BusinessideaSchema);