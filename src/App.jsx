import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import AppRouter from './router/AppRouter'
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const shouldShowHeader = !["/inicio", "/Descripcion"].includes(location.pathname);

  return (
    <>
     {shouldShowHeader && <Header/>}
      <AppRouter/>
        
      <footer>
        <Footer/>
      </footer>
        
    </>
    
  )
}

export default App
