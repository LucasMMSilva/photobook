const Image = require('../models/Image')

const InsertImage = async(req,res)=>{
    const {title,description} = req.body
    const images = req.files
    const newImages = await Image.create({
        title,
        description,
        images
    })
    if(!newImages){
        res.status(422).json({msg:'Algo de errado aconteceu!'})
        return
    }
    res.status(201).json(newImages)
}
const getAllImages = async(req,res)=>{
    const images = Image.find().select(title,description,images[0])
    if(!images){
        res.status(422).json({msg:'Nenhuma imagem foi encontrada!'})
        return
    }
    res.status(201).json(images)
}
module.exports={InsertImage,getAllImages}