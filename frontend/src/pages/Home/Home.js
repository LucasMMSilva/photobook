import {useState,useEffect} from 'react'
import ImagePreview from '../../components/ImagePreview/ImagePreview'
import ImageView from '../../components/ImageView/ImageView'
import './Home.css'
const Home = () => {

    const [images,setImages] = useState([])
    const [viewImage,setviewImage] = useState([])
    
    useEffect(()=>{
        if(images.length === 0){
            const getImages = async()=>{
              await fetch('http://localhost:5000/',{
                method:'GET',
                headers:{
                  'Content-Type':'application/json'
                }
              }).then((res)=>res.json()).then((data)=>{
                setImages(data)
              })
          }
          getImages()
        }
       setviewImage(images[0])
        
    },[images])

  return (
    <>
      <div className='images'> 
        {images && (
          images.map((image)=>(
            <ImagePreview key={image._id} src={'http://localhost:5000/images/'+image.images[0].filename} title={image.title} images={image.images}/>
          ))
        )}
      </div>

      {//<ImageView images={viewImage}/>
      }
  </>
    
  )
}

export default Home