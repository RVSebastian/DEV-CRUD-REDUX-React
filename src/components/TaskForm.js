import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTask ,editTask } from '../features/task/taskSlice'
import { useNavigate, useParams } from 'react-router-dom'
function TaskForm() {
  const [task, setTask] = useState({
    id: '',
    nombre: '',
    descripcion: '',
  })


  const dispth = useDispatch()

  const navigate = useNavigate()

  const params = useParams()

  const tasks = useSelector(state => state.tasks)
  const handleChange = e => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }
  // 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispth(editTask(task))
      navigate('/')
    } else {
      dispth(addTask(task))
      navigate('/')
    }
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [])

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label for="">Id</label>
          <input type="text" 
          name="id" 
          placeholder="id" 
          onChange={handleChange} 
          value={task.id}
          required />
          <label for="">Nombre</label>
          <input type="text" 
          name="nombre" 
          placeholder="nombre" 
          value={task.nombre}
          onChange={handleChange} />
           <label for="">Descripcion</label>
          <input type="text" 
          name="descripcion" 
          placeholder="descripcion" 
          value={task.descripcion}
          onChange={handleChange} />
          <button type="submit">Guardar Registro</button>
        </form>
      </div>
    </div>
  )
}

export default TaskForm