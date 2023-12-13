import React from 'react'
import "./ImagePreview.css"
const ImagePreview = (props) => {
  return (
    <div className='imagePreview'>
        <img src={props.src} alt={props.title} />
    </div>
  )
}

export default ImagePreview