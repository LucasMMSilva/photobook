const mongoose = require('../db/conn')
const {schema} = mongoose

const Image = mongoose.model(
    'Image',
    new schema({
    title: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    }
}))

module.exports = Image;