import {useState,useEffect} from 'react'
const Home = () => {
    const [images,setImages] = useState([])
    
    useEffect(()=>{
        const getImages = async()=>{
            const responseImages = await fetch('http://localhost:5000/')
            const images = responseImages.json()
            
            console.log(images[0])
        }
        getImages()
    },[])

    
  return (
    <div>

    </div>
  )
}

export default Home