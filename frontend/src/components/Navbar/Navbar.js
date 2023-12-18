import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
        <img src="/logopb.png" alt="Logo Photobook"/>
        <div>
            <a href='http://localhost:3000/upload'>Enviar Imagem</a>
        </div>
    </nav>
  )
}

export default Navbar