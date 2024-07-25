import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer>
      <p className='copy'> © 2024 BlogDV. Todos los derechos reservados.</p>
      <p className='contactoFooter'><Link to="/inicio">Contacto</Link></p>
      </footer>
      
    </div>
  )
}

export default Footer