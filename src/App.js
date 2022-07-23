import Formulario from "./components/Formulario";
import { useState, useEffect } from "react";

function App() {

  let tareasIniciales = JSON.parse(localStorage.getItem("tareas"));
  if(!tareasIniciales){
    tareasIniciales = [];
  }

  useEffect(() => {
    if(tareasIniciales === null){
      localStorage.setItem("tareas", JSON.stringify([]))
    }else{
      localStorage.setItem("tareas", JSON.stringify(tareas))
    }
  })

  const [tareas, actualizarTareas] = useState(tareasIniciales);

  const crearTarea = tarea => actualizarTareas([...tareas, tarea]);

  const eliminarTarea = id => {
    const tarea = tareas.filter(tarea => tarea.id !== id);
    actualizarTareas(tarea);
  }

  return (
    <div className="container">
      <Formulario tareas={tareas} crearTarea={crearTarea} eliminarTarea={eliminarTarea} />
    </div>
  );
}

export default App;
