const express = require('express')
const router = express.Router()
const {InsertImage,getAllImages,getImageById} = require('../controllers/ImageController')
const {uploadImage} = require('../utils/uploadImage')

router.get('/',getAllImages)
router.get('/:id',getImageById)
router.post('/insertImage',uploadImage.array('images'),InsertImage)

module.exports = router