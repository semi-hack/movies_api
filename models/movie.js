const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const MovieSchema = new Schema({
    Title: {
        type: String,
        required: true,
    },
    Year: {
        type: String,
        required: true
    },
    Genre: {
        type: String,
        required: true,
    },
    Type: {
        type: String,
        required: true
    },
    Runtime: {
        type: String,
        required: true
    },
    Actors: {
        type: String,
        required: true
    },
    Language: {
        type: String,
        required: true
    },
    Country: {
        type: String,
        required: true
    }
})

const Movie = mongoose.model("Movie", MovieSchema)

module.exports = Movie