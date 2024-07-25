import React from 'react'
import './Header.css'
import { Link , useNavigate} from 'react-router-dom'

function Header() {
  return (
    <>
      <header className='header'>
        <h1 className='tituloHead'>Blog<span className='DV'>DV</span></h1>
        <nav className='nav'>
        
        <ul className='ulLink'>
                    <li className='li10'><Link to="/inicio">Inicio</Link></li>
                    <li className='li11'><Link to="/Tutoriales">Tutoriales</Link></li>
                    <li className='li10'><Link to="/Guias">Guias</Link></li>
                    <li className='li10'><Link to="/Guias">Portafolio</Link></li>      
        </ul>
        </nav>
      </header>
    </>
  )
}

export default Header