const mongoose = require('mongoose');

var BusinessideaSchema = new mongoose.Schema({

    name:  {
        type: String,
        require: true
    },

    objective:  {
        type: String,
        default: ''
    },

    description:  {
        type: String,
        default: ''
    },

    weblink:  {
        type: String,
        default: ''
    },

    tags:  [{
        type: String,
        uniqueitems: true
    }],

    owners: [{
        type: String
    }],

    typeOfBusiness: {
        type: String,
        default: ''
    },

    views: {
        type: String,
        default: 0
    },

    phoneNumbers: {
        type: String,
        default: ''
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Investee",
      require: true
    }

});

module.exports = mongoose.model('BusinessIdea', BusinessideaSchema);
