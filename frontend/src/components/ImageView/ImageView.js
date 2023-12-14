import React from 'react'
import './ImageView.css'
import { AiOutlineClose } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const ImageView = () => {
  return (
    <div className='bgf'>
        <div className="container-image-view">
            <div className="image-view">

            </div>
            <div className="image-content">
                <div className="description">
                    <h3>Este é o titulo imagem</h3>
                    <p>Esta aqui é uma paquena descrição da imagem, para dar enfaze em alguma coisa ou sei lá o que.</p>
                </div>
                <div className='image-icons'>
                    <AiOutlineClose />
                    <FiEdit />
                    <RiDeleteBin5Line />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ImageView