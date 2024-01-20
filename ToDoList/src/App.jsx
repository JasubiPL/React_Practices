import './App.css'
import ListaDeTareas from './components/ListaDeTareas'
import freeCodeCampLogo from './img/freeCodeCamp_logo.png'

function App() {

  return (
    <div className="aplicacionTareas">
      <div className='freeCodeCampLogoContenedor'>
        <img className='freeCodeCampLogo' src={freeCodeCampLogo} />
      </div>
      <div className='tareasListaPrincipal'>
        <h1>Mis Tareas</h1>
       <ListaDeTareas/>
      </div>
    </div>
  )
}

export default App
