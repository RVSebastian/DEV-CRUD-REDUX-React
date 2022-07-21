import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../features/task/taskSlice'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

function TaskList() {
  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  const handleEdite = (id) => {
    console.log(id)
  }



  return (
    <div className='card'>
      {tasks.map(task => (
        <div key={task.id} className='cd'>
          <p>ID: {task.id}</p>
          <p>Nombre: {task.nombre}</p>
          <p>Nombre: {task.descripcion}</p>
          <button onClick={() => handleDelete(task.id)} className='eliminar'>Eliminar</button>
          <Link to={`/edit-task/${task.id}`} ><button onClick={() => handleEdite(task.id)} className='editar'>Editar</button></Link>
        </div>
      ))}
      <div className='cd-new'>
        <p>CREAR NUEVA TAREA</p>
        <Link to="/create-task">
          <button className='eliminar'>Añadir mas</button>
        </Link>

      </div>
    </div>
  )
}

export default TaskList