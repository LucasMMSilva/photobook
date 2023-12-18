import React from 'react'
import './ImageUpload.css'
const ImageUpload = () => {
  return (
    <div className='form-container'>
        <form>
            <label htmlFor="">Titulo:</label>
            <input type="text" name="" id="" />
            <div className="message-erro">
              <p>Mensagem de erro vai aqui!</p>
            </div>
            <label htmlFor="">Descrição</label>
            <input className='desc' type="text" name="" id="" />
            <div className="message-erro">
              <p>Mensagem de erro vai aqui!</p>
            </div>
            <label htmlFor="">Enviar imagens</label>
            <input type="file" name="" id="" />
            <div className="message-erro">
              <p>Mensagem de erro vai aqui!</p>
            </div>
            <button type="submit">Enviar Imagem</button>
        </form>
    </div>
  )
}

export default ImageUpload