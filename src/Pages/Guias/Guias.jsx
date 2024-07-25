import React from 'react'
import './Guias.css'
import { Link , useNavigate} from 'react-router-dom'

function Guias() {

  const CardGuias = ({ title, description, fecha, to }) => (
    <Link to={to} className='cardguias-link'>
      <div className='cardguias'>
        <h2>{title}</h2>
        <p className='pguia'>{description}</p>
        <p className='fecha'>{fecha}</p>
      </div>
    </Link>
  );


  return (
    <div>
        <div className='guia-container'>
    <CardGuias to="/Guias/Introduccion" title="Introducción a la Programación" description="Aprende los conceptos básicos y la importancia de la programación en el mundo actual." fecha="20/07/2024" />
    <CardGuias to="/Guias/Variables" title="Variables y Tipos de Datos" description="Conoce qué son las variables y los tipos de datos comunes como números, cadenas y booleanos." fecha="20/07/2024" />
    <CardGuias to="/Guias/Funciones" title="Funciones y Métodos" description="Descubre cómo definir y usar funciones, además del ámbito de variables." fecha="20/07/2024" />
    <CardGuias to="/Guias/Estructuras" title="Estructuras de Control" description="Las estructuras de control, como los condicionales y los bucles." fecha="20/07/2024" />
  </div>
    </div>
  )
}

export default Guias