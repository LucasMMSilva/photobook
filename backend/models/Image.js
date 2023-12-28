const mongoose = require('../db/conn')
const {Schema} = mongoose

const Image = mongoose.model(
    'Image',
    new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    date: { type: Date, default: Date.now },
}))

module.exports = Image;