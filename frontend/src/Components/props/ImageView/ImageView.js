import {useEffect,useState} from 'react'
import { useParams , Link, useNavigate} from 'react-router-dom';
import './ImageView.css'
import { AiOutlineClose } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosArrowDropleftCircle,IoIosArrowDroprightCircle  } from "react-icons/io";
import api from '../../../hooks/api'
const ImageView = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [image,setImage] = useState([])
    const [imageURL,setImageURL] = useState({backgroundImage: 'url(/imagenotfound.png)'})
    const [countImage,setCountImage] = useState(0)
    
    useEffect(()=>{
        if(image.length===0){
            const getImages = async()=>{
                await api.get(`/${id}`)
                .then((response)=>{
                  response.data.imgLength = response.data.images.length
                  setImage(response.data)
                  setImageURL({backgroundImage: `url(http://localhost:5000/images/${response.data.images[0].filename})`})
                })
                .catch((err)=>console.log(err))
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

    const deleteImage = async()=>{
        await fetch(`http://localhost:5000/delete/${id}`,{
            method:'DELETE',
            headers:{
              'Content-Type':'application/json'
            }
          }).then((res)=>res.json()).then((data)=>{
            navigate('/')
          })
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

                    <RiDeleteBin5Line onClick={deleteImage} />
                </div>
            </div>
            
        </div>)}
    </div>
  )
}

export default ImageView