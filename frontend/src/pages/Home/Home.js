import {useState,useEffect} from 'react'
import ImagePreview from '../../components/ImagePreview/ImagePreview'
import './Home.css'
const Home = () => {
    const [images,setImages] = useState([])
    
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
       
        
    },[images])

  return (
    <div className='images'> 
      {images && (
        images.map((image)=>(
          <ImagePreview src={'http://localhost:5000/images/'+image.images[0].filename} title={image.title}/>
        ))
      )}
    </div>
  )
}

export default Home