import {useState,useEffect} from 'react'
import ImagePreview from '../../components/ImagePreview/ImagePreview'
import './Home.css'
const Home = () => {

    const [images,setImages] = useState([])
    
    useEffect(()=>{
        if(images.length === 0){
          const getImages = async()=>{
            await fetch('http://127.0.0.1:5000/',{
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

    },[images])

  return (
    <>
      <div className='images'> 
        {images && (
          images.map((image)=>(
            <ImagePreview key={image._id} id={image._id} src={'http://localhost:5000/images/'+image.images[0]} title={image.title} images={image.images}/>
          ))
        )}
      </div>
  </>
    
  )
}

export default Home