import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import "./ImagePreview.css"
const ImagePreview = (props) => {
  const navigate = useNavigate()
  const imageURL = {
    backgroundImage: `url(${props.src})`,
  }
  const showImage = ()=>{
    navigate(`/image/${props.id}`)
  }
  return (
    <div onClick={showImage} className='imagePreview'>
        <div className='imageContainer'>
          <div className='image' style={imageURL}></div>
          <div className='info'>
            {props.images.length>1 && (
              <div className='file'>
                <IoCopy />
              </div>
            )}
            
            <div className='eye'>
              <FaEye />
            </div>

          </div>
        </div>
    </div>
    
  )
}

export default ImagePreview