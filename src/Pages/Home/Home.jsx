import React from 'react'
import { Link , useNavigate} from 'react-router-dom'
import './Home.css'
import AnimatedLink from '../../Components/AnimatedLink/AnimatedLink';

function Home() {
    const navigate = useNavigate();

  const handleClick = () => {
    // Puedes añadir cualquier lógica aquí antes de la navegación
    navigate("/Descripcion");
  };
  return (
    <div className='contenedor'>
          <header>
            <h1 className='titu'>Blog<span>DV</span></h1>
            <nav className='nav1'>
                <ul>
                    <li className='li1'><Link to="/Guias">Guias</Link></li>
                    <li><Link to="/Guias">Tutoriales</Link></li>
                </ul>
                <ul className='ulFlex'>
                    <li className='li2'><Link to="/Guias">Portafolio</Link></li>
                    <li className='li4'><Link to="/Guias">Recomendados</Link></li>
                </ul>
                <ul>
                    <li className='li3'><Link to="/inicio">Contacto</Link></li>
                    <li><Link to="https://github.com/MarcoAntonio801">Repositorio</Link></li>
                </ul>
            </nav>
            
          </header>
          <main>
          <AnimatedLink to="/Descripcion">
            <div className='cardhome'  style={{ cursor: 'pointer' }}>
              <h2> Descripción</h2>
              <p>¡Hola!  bienvenido a mi blog sobre programación...</p>
              
              
            </div></AnimatedLink>
          </main>
    </div>
  )
}

export default Home