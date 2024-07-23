import './App.css'
import Footer from './Components/Footer/Footer'
import AppRouter from './router/AppRouter'


function App() {
  return (
    <>
    <AppRouter></AppRouter>
        <div className='contenedor'>
          <header>
            <h1>Blog<span>DV</span></h1>
          </header>
          <main>
            <div className='card'>
              <h2> Descripción</h2>
              <p>¡Hola!  bienvenido a mi blog sobre programación</p>
            </div>
          </main>
        </div>

        <footer>
          <Footer/>
        </footer>
        
    </>
    
  )
}

export default App
