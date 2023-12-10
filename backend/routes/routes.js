const express = require('express')
const router = express.Router()
const {InsertImage} = require('../controllers/ImageController')
const {uploadImage} = require('../utils/uploadImage')

router.post('/insertImage',uploadImage.array('images'),InsertImage)

module.exports = router