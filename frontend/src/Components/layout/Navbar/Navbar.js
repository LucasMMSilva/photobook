import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div>
            <img src="logopb.png" alt="" />
            <Link to={'/upload'}>Enviar imagem</Link>
        </div>
    </nav>
  )
}

export default Navbar