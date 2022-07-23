import Tarea from "./Tarea"
import { useState } from "react";

const Formulario = ({tareas, crearTarea, eliminarTarea}) => {

    const [tarea, actualizarTarea] = useState("");

    const validarTarea = e => {
        e.preventDefault();
        if(tarea.trim() === ""){
           alert("No puedes tener una tarea vacía");
        }else{
           const tareasObj = {
             id:Date.now(),
             tarea
           }
	   crearTarea(tareasObj);
        }
    }

    return(
      <form class="form" onSubmit={validarTarea}>
      <input type="text" class="form__input" name="tarea" placeholder="tarea" onChange={e => actualizarTarea(e.target.value)} />
      <input type="submit" class="form__btn" value="Agregar" />
      <div class="container-tarea">
        <Tarea tareas={tareas} eliminarTarea={eliminarTarea} />
      </div>
    </form>
    )
}

export default Formulario
