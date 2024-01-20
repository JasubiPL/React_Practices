import TareFormulario from "./TareaFormulario";
import Tarea from "./Tarea";
import '../css/ListaDeTareas.css';
import { useState } from "react";

export default function ListaDeTareas(){

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea =>{
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas)
        }
    }

    const eliminarTarea = id =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !==id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id =>{
        const tareaActualizada = tareas.map(tarea =>{
            if (tarea,id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea;
        })
        setTareas(tareaActualizada);
    }

    return(
        <>
        <TareFormulario onSubmit={agregarTarea}/>
        <div className="tareaListaContenedor">
            {
                tareas.map((tarea) =>
                    <Tarea 
                        key={tarea.id}
                        id={tarea.id}
                        texto={tarea.texto}
                        completada={tarea.completada}
                        completarTarea={completarTarea}
                        eliminarTarea={eliminarTarea}

                    />
                )
            }
        </div>
        </>
    );
}