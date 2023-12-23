import React, { useState,useEffect } from 'react'
import './ImageUpload.css'
const ImageUpload = () => {
  const [msg,setMsg] = useState({msg:'',type:''})
  const [title,setTitle] = useState()
  const [description,setDescription] = useState()
  const [images,setImages] = useState()

  const test =(e)=>{
    e.preventDefault()
    console.log(title)
    console.log(description)
    console.log(images)
    console.log('--------------')
  }


  return (
    <div className='form-container'>
        <form onSubmit={test}>

            <label htmlFor="">Titulo:</label>
            <input type="text" name="" id="" onChange={(e)=>setTitle(e.target.value)}/>

            {msg.type === 'title' && (
              <div className="message-erro">
                <p>Mensagem de erro vai aqui!</p>
              </div>
            )}
            
            <label htmlFor="">Descrição</label>
            <input className='desc' type="text" name="" id="" onChange={(e)=>setDescription(e.target.value)}/>

            {msg.type === 'title' && (
              <div className="message-erro">
                <p>Mensagem de erro vai aqui!</p>
              </div>
            )}

            <label htmlFor="">Enviar imagens</label>
            <input type="file" name="" id="" multiple onChange={(e)=>setImages(e.target.value)}/>

            {msg.type === 'title' && (
              <div className="message-erro">
                <p>Mensagem de erro vai aqui!</p>
              </div>
            )}

            <button type="submit">Enviar Imagem</button>

        </form>
    </div>
  )
}

export default ImageUpload