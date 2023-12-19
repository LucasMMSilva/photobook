import {useEffect,useState} from 'react'
import { useParams , Link} from 'react-router-dom';
import './ImageView.css'
import { AiOutlineClose } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosArrowDropleftCircle,IoIosArrowDroprightCircle  } from "react-icons/io";
const ImageView = () => {
    const {id} = useParams()
    const [image,setImage] = useState([])
    const [imageURL,setImageURL] = useState({backgroundImage: 'url(/imagenotfound.png)'})
    const [countImage,setCountImage] = useState(0)
    
    useEffect(()=>{
        if(image.length===0){
            const getImages = async()=>{
                await fetch(`http://localhost:5000/${id}`).then((res)=>res.json()).then((data)=>{
                  data.imgLength = data.images.length
                  setImage(data)
                  setImageURL({backgroundImage: `url(http://localhost:5000/images/${data.images[0].filename})`})
                }).catch((err)=>console.log(err))
              }
              getImages()
        }
    },[image])
    
    const backImage = () =>{
        if(countImage > 0){
            setImageURL({backgroundImage: `url(http://localhost:5000/images/${image.images[countImage-1].filename})`})
            setCountImage(countImage -1)
        }
    }
    const nextImage = () =>{
        if(countImage < image.images.length-1){
            setImageURL({backgroundImage: `url(http://localhost:5000/images/${image.images[countImage+1].filename})`})
            setCountImage(countImage +1)     
        }
    }
  return (
    <div className='bgf'>
        {image && (<div className="container-image-view">
            <div className="view">
                <div className='button-container'>
                    <button className='btn-left' onClick={backImage}>
                        {countImage > 0 ? (<IoIosArrowDropleftCircle/>) : (<IoIosArrowDropleftCircle color='#f0f0f0'/>)}
                    </button>
                </div>
                <div className="image-view"  style={imageURL}>

                </div>
                <div className='button-container'>
                    <button className='btn-right' onClick={nextImage}>
                    {countImage < image.imgLength-1 ? (<IoIosArrowDroprightCircle/>) : (<IoIosArrowDroprightCircle color='#f0f0f0'/>)}
                    </button>
                </div>
            </div>
            
            <div className="image-content">
                <div className="description">
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                </div>
                <div className='image-icons'>
                    <Link to={'/'}><AiOutlineClose /></Link>
                    
                    <FiEdit />
                    <RiDeleteBin5Line />
                </div>
            </div>
            
        </div>)}
    </div>
  )
}

export default ImageView