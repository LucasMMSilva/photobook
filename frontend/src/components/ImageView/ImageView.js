import {useEffect,useState} from 'react'
import './ImageView.css'
import { AiOutlineClose } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const ImageView = (props) => {
    const images = props.images
    let imageURL = {backgroundImage: `url(imagenotfound.png)`,}
    useEffect(()=>{
        imageURL = {backgroundImage: `url(http://localhost:5000/images/${images.images[0].filename})`,}
    },[images])
    console.log(images)

  return (
    <div className='bgf'>
        {images && (<div className="container-image-view">
            <div className="image-view"  style={imageURL}>

            </div>
            <div className="image-content">
                <div className="description">
                    <h3>{images.title}</h3>
                    <p>{images.description}</p>
                </div>
                <div className='image-icons'>
                    <AiOutlineClose />
                    <FiEdit />
                    <RiDeleteBin5Line />
                </div>
            </div>
            
        </div>)}
    </div>
  )
}

export default ImageView