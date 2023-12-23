import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">
          <img src="/logopb.png" alt="Logo Photobook"/>
        </NavLink>
          
        
        <div>
            <a href='http://localhost:3000/upload'>Enviar Imagem</a>
        </div>
    </nav>
  )
}

export default Navbar