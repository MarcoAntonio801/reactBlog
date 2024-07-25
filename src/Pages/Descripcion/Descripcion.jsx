import React from 'react'
import './Descripcion.css'
import AnimatedLink from '../../Components/AnimatedLink/AnimatedLink'

function Descripcion() {
  return (
    <><AnimatedLink to="/inicio">
        <div className='fondoDescripcion'>
        <header className='headerDescrip'><h1 className='tituloDescripcion'> Descripción</h1></header>
        <main><p className='pDescripcion'>¡Hola! bienvenido a mi blog sobre programación, te daré guías y mini tutoriales sobre programación. Espero ser de ayuda 😇 </p></main>
        Volver
        
        </div></AnimatedLink>
    
        
    </>
  )
}

export default Descripcion