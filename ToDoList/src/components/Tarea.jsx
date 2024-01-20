import {AiOutlineCloseCircle} from 'react-icons/ai'
import '../css/Tarea.css'

export default function Tarea({id, texto, completada, completarTarea, eliminarTarea}){
    return(
        <div className={completada ? 'tareaContenedor completada' : 'tareaContenedor'}>
            <div className="tareaTexto" onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className="tareaContenedorIcons" onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className="tareaIcon"/>
            </div>
        </div>
    );
}