const express = require('express')
const router = express.Router()
const {InsertImage,getAllImages} = require('../controllers/ImageController')
const {uploadImage} = require('../utils/uploadImage')

router.get('/',getAllImages)
router.post('/insertImage',uploadImage.array('images'),InsertImage)

module.exports = router