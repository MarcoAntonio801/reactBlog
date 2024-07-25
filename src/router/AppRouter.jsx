import React from 'react'
import { Route,Routes,Navigate,  } from 'react-router-dom'
import Guias from '../Pages/Guias/Guias'
import Home from '../Pages/Home/Home'
import Descripcion from '../Pages/Descripcion/Descripcion'
import Tutoriales from '../Pages/Tutoriales/Tutoriales'
import Introduccion from '../Pages/Guias/ElementosGuias/Introduccion'
import Variables from '../Pages/Guias/ElementosGuias/Variables'
import Funciones from '../Pages/Guias/ElementosGuias/Funciones'
import Estructuras from '../Pages/Guias/ElementosGuias/Estructuras'

function AppRouter() {
  return (
    <Routes>
        <Route path='/Guias' element={<Guias/>}/>
        <Route path='/inicio' element={<Home/>}/>
        <Route path='/Descripcion' element={<Descripcion/>}/>
        <Route path='/Tutoriales' element={<Tutoriales/>}/>
        <Route path='/Guias/Introduccion' element={<Introduccion/>}/>
        <Route path='/Guias/Variables' element={<Variables/>}/>
        <Route path='/Guias/Funciones' element={<Funciones/>}/>
        <Route path='/Guias/Estructuras' element={<Estructuras/>}/>
        

        <Route path='/*' element={<Navigate to="/inicio"/>}/>
    </Routes>
  )
}

export default AppRouter