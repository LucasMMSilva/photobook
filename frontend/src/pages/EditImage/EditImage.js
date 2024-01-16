import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './EditImage.css'
const EditImage = () => {
  const [imageURL,setImageURL] = useState({backgroundImage: 'url(/imagenotfound.png)'})
  const [msg,setMsg] = useState({msg:'',type:''})
  const [title,setTitle] = useState()
  const [description,setDescription] = useState()
  const [images,setImages] = useState()
  const navigate = useNavigate()

  const {id} = useParams()
  const [image,setImage] = useState([])

  useEffect(()=>{
    if(image.length===0){
        const getImages = async()=>{
            await fetch(`http://localhost:5000/${id}`).then((res)=>res.json()).then((data)=>{
              data.imgLength = data.images.length
              setImage(data)
              setImageURL({backgroundImage: `url(http://localhost:5000/images/${data.images[0]})`})
            }).catch((err)=>console.log(err))
          }
          getImages()
    }
  },[image])


  const uploadImage =async(e)=>{
    
    e.preventDefault()
    if(images.length>0){

      const formData = new FormData()
      formData.append('title',title)
      formData.append('description',description)

      for(let i = 0; i < images.length; i++){
        
        formData.append('images',images[i])
      } 
      
      await fetch('http://localhost:5000/insertImage',{
        method:'POST',
        mode: 'cors',
        body: formData 
      }).then((data) => data.json()).then((data)=>{
        navigate(`/image/${data._id}`)
      }).catch((err)=>{
        setMsg(err)
      })

    }
  }

  return (
    <div className='form-container'>
        <form onSubmit={uploadImage} encType="multipart/form-data">

            <label htmlFor="">Titulo:</label>
            <input type="text" name="" id="" onChange={(e)=>setTitle(e.target.value)}/>

            {msg.type === 'title' && (
              <div className="message-erro">
                <p>{msg.msg}</p>
              </div>
            )}
            
            <label htmlFor="">Descrição</label>
            <input className='desc' type="text" name="" id="" onChange={(e)=>setDescription(e.target.value)}/>

            {msg.type === 'description' && (
              <div className="message-erro">
                <p>{msg.msg}</p>
              </div>
            )}

            <div className="tumblist">
              {image.imgLength > 0 ? image.images.map((img)=>{
              const myImage = {backgroundImage: `url(http://localhost:5000/images/${img})`}
              return(
                <div className="tumbnails" style={myImage}  key={img}/>
              )}) :(
                <div className="noTumbnails">

                </div>
              )}
              
            </div>
            

           

            <label htmlFor="">Enviar imagens</label>
            <input type="file" multiple onChange={(e)=>setImages(e.target.files)} accept=".png, .jpg, .jpeg" />

            {msg.type === 'image' && (
              <div className="message-erro">
                <p>{msg.msg}</p>
              </div>
            )}

            <button type="submit">Editar Imagem</button>

        </form>
    </div>
  )
}

export default EditImage