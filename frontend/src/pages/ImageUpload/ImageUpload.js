import React from 'react'
import './ImageUpload.css'
const ImageUpload = () => {
  return (
    <div className='form-container'>
        <form>
            <label htmlFor="">Titulo:</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Descrição</label>
            <input className='desc' type="text" name="" id="" />
            <label htmlFor="">Enviar imagens</label>
            <input type="file" name="" id="" />
        </form>
    </div>
  )
}

export default ImageUpload