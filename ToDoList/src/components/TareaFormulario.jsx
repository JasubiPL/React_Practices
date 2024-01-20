import '../css/TareaFormulario.css'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

export default function TareFormulario(props){

    const [input, setInput] = useState('');

    const manejarCambio = e =>{ 
        setInput(e.target.value);
    }


    const manejarEnvio = e =>{

        e.preventDefault();
        console.log("Enviando Formulario");

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    }

    return(
        <form className="tareaFormulario" onSubmit={manejarEnvio}>
            <input className="tareaInput" type="text" placeholder="Escribe tu tarea" name="texto" onChange={manejarCambio}/>
            <button className="tareaBoton">Agregar Tarea</button>
        </form>    
    );
}