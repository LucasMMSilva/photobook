import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './ImageUpload.css'
const ImageUpload = () => {
  const [msg,setMsg] = useState({msg:'',type:''})
  const [title,setTitle] = useState()
  const [description,setDescription] = useState()
  const [images,setImages] = useState()
  const navigate = useNavigate()

  const uploadImage =async(e)=>{
    e.preventDefault()
    if(images.length>0){

      const formData = new FormData()
      formData.append('title',title)
      formData.append('description',description)

      for(let i = 0; i < images.length; i++){
        formData.append('images[]',images[i].name)
      } 
      
      await fetch('http://localhost:5000/insertImage',{
        method:'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'multipart/form-data' },
        body: formData 
      }).then((data) => data.json()).then((data)=>{
        console.log(data)
        navigate(`/image/${data._id}`)
      }).catch((err)=>{
        setMsg(err)
        console.log(err)
      })
      console.log(images.length)

    }
    
  }


  return (
    <div className='form-container'>
        <form onSubmit={uploadImage} encType="multipart/form-data">

            <label htmlFor="">Titulo:</label>
            <input type="text" name="" id="" onChange={(e)=>setTitle(e.target.value)}/>

            {msg.type === 'title' && (
              <div className="message-erro">
                <p>{msg.msg}</p>
              </div>
            )}
            
            <label htmlFor="">Descrição</label>
            <input className='desc' type="text" name="" id="" onChange={(e)=>setDescription(e.target.value)}/>

            {msg.type === 'description' && (
              <div className="message-erro">
                <p>{msg.msg}</p>
              </div>
            )}

            <label htmlFor="">Enviar imagens</label>
            <input type="file" name="" id="" multiple onChange={(e)=>setImages(e.target.files)}/>

            {msg.type === 'image' && (
              <div className="message-erro">
                <p>{msg.msg}</p>
              </div>
            )}

            <button type="submit">Enviar Imagem</button>

        </form>
    </div>
  )
}

export default ImageUpload