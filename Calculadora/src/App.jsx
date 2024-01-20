import './App.css'
import Boton from './componentes/Boton'
import Screen from './componentes/Screen'
import BtnClear from './componentes/BtnClear'
import Logo from './componentes/Logo'
import { useState } from 'react'
import {evaluate} from 'mathjs'

function App() {

  const [input, setInput] = useState('');


  const agregarInput = val =>{
    setInput(input + val);
  };
  
  const calcularResultado = () =>{
    if(input == ''){
      setInput("");
    }else{
      setInput(evaluate(input));
    }
    
  };

  return (
    <div className="App">
      <Logo />
      <div className='contenedor-calculadora'>
        <Screen input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}> -</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}> =</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}> . </Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BtnClear borrarScreen={() => setInput('')}>Clear</BtnClear>
        </div>
      </div>
    </div>
  )
};

export default App
