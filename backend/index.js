require('dotenv').config()
const express = require('express')
const app = express()

app.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))

app.use(express.urlencoded({ 
    extended: true 
}))

app.use('/uploads',express.static(path.join(__dirname,'/uploads')))

app.use(express.json())

app.listen(5000,()=>{
    console.log('Conected server.')
})