import './App.css';
import Contador from './componentes/Contador';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './img/logo-freecodecamp.png';
import { useState } from 'react';

function App() {
    const [numeroDeClics, setNumeroDeClics] = useState(0);
    
    const manejarClic = () =>{
        //console.log(numeroDeClics);
        setNumeroDeClics(numeroDeClics + 1);
    }

    const reiniciarContador = () =>{
        //console.log(numeroDeClics);
        setNumeroDeClics(0);
    }

  return (
    <div className="App">
        <div className='freecodecamp-logo-contenedor'>
            <img 
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt='Logo de freecodecamp' />
        </div>
        <div className='contenedor-contador'>
            <Contador numeroDeClics = {numeroDeClics}/>

            <div className='contenedor-botones'>
                <Boton 
                texto = 'Clic'
                esBotonDeClic={true}
                manejarClick={manejarClic} />
                <Boton 
                texto = 'Reiniciar'
                esBotonDeClic={false}
                manejarClick={reiniciarContador}/>
            </div>
        </div>
    </div>
  );
}

export default App;
