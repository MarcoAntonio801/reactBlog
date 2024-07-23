import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'
import Guias from '../Pages/Guias/Guias'

function AppRouter() {
  return (
    <Routes>
        <Route path='/Guias' element={<Guias/>}/>


        <Route path='/*' element={<Navigate to="/inicio"/>}/>
    </Routes>
  )
}

export default AppRouter