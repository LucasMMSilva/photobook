import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import './ImageView.css'
import { AiOutlineClose } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const ImageView = () => {
    const {id} = useParams()
    const [image,setImage] = useState([])
    const [imageURL,setImageURL] = useState({backgroundImage: 'url(/imagenotfound.png)'})
    
    useEffect(()=>{
        if(image.length===0){
            const getImages = async()=>{
                await fetch(`http://localhost:5000/${id}`).then((res)=>res.json()).then((data)=>{
                  setImage(data)
                  setImageURL({backgroundImage: `url(http://localhost:5000/images/${data.images[0].filename})`})
                  
                }).catch((err)=>console.log(err))
              }
              getImages()
        }
    },[image])
    


  return (
    <div className='bgf'>
        {image && (<div className="container-image-view">
            <div className="image-view"  style={imageURL}>

            </div>
            <div className="image-content">
                <div className="description">
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
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