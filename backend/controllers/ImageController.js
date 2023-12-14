const fs = require('fs')

const Image = require('../models/Image')

function removeImages (e){
    e.forEach(element => {
        fs.unlink(element.path,(err)=>{
            if(err){
                console.log(element.filename + ' não foi encontrado!')
            }
        })
    });
}

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
    const images = await Image.find()
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
    removeImages(image.images)
    res.status(200).json({msg:"Imagem apagada com sucesso."}) 
}
const imageUpdateById = async (req,res)=>{
    const {id} = req.params
    const {title,description} = req.body
    const images = req.files
    let updateData = {}
    
    const image = await Image.findById(id)
    if(!image){
        res.status(422).json({msg:'Imagem não existe'})
        return
    }
    if(!title){
        res.status(422).json({msg:'Titulo é obrigatorio.',type:'TITLE NULL'})
        return
    }else(
        updateData.title = title
    )
    if(!description){
        res.status(422).json({msg:'Descrição é obrigatoria.',type:'DESCRIPTION NULL'})
        return
    }else(
        updateData.description = description
    )
    if(!images){
        res.status(422).json({msg:'Imagem é obrigatoria.',type:'IMAGE NULL'})
        return
    }else{
        updateData.images = []
        images.map((image) => {
            updateData.images.push(image)
        })
    }
    const newImage = await Image.findByIdAndUpdate(id,updateData)
    removeImages(image.images)
    res.status(200).json(newImage)
}

module.exports={InsertImage,getAllImages,getImageById,deleteImageById,imageUpdateById}