const mongoose = require("mongoose")
const { Schema } = require('mongoose')

const dataformat = new Schema({
    Name: {
        type: String,
        maxlength: 25,
        required: true
    },
    
    language: {
        type: String
    },
    Rating: {
        type:Number,
        min: 0,
        max: 5
    },
    is3D: {
        type: Boolean
    }
})

const movieModel = mongoose.model('movies',dataformat)
module.exports = movieModel