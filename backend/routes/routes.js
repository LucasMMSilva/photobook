const express = require('express')
const router = express.Router()
const {
    InsertImage,
    getAllImages,
    getImageById,
    deleteImageById,
    imageUpdateById
} = require('../controllers/ImageController')

const {uploadImage} = require('../utils/uploadImage')

router.get('/',getAllImages)
router.get('/:id',getImageById)
router.post('/insertImage',uploadImage.array('images'),InsertImage)
router.put('/edit/:id',uploadImage.array('images'),imageUpdateById)
router.delete('/delete/:id',deleteImageById)

module.exports = router