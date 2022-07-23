const Tarea = ({tareas, eliminarTarea}) => (
        tareas.map(tarea => (
          <>
            <div class="tarea">
              <div class="tarea__item">{tarea.tarea}</div>
              <div class="tarea__delete" onClick={() => eliminarTarea(tarea.id)}>X</div>
            </div>
          </>
        ))
)


export default Tarea
