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
    const images = await Image.find().select({
        title: 1,
        description: 1,
        images: { $slice: 1 }
      })
    if(!images){
        res.status(422).json({msg:'Nenhuma imagem foi encontrada!'})
        return
    }
    res.status(201).json(images)
}
const getImageById = async(req,res)=>{
    const {id} = req.params

    const image = await Image.findById(id)
    if(!image){
        res.status(422).json({msg:'Nenhuma imagem foi encontrada!'})
        return
    }
    res.status(200).json(image)  
}
const deleteImageById = async(req,res)=>{
    const {id} = req.params
    const image = await Image.findById(id)
    if(!image){
        res.status(422).json({msg:'Não foi possivel apagar imagem.'})
        return
    }
    try{
        await Image.deleteOne({_id:image._id})
    }catch(err){
        res.status(422).json({msg:'Não foi possivel apagar imagem.'})
        return
    }
    res.status(200).json({msg:"Imagem apagada com sucesso."})
    
}
module.exports={InsertImage,getAllImages,getImageById,deleteImageById}