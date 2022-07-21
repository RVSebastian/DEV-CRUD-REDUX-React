import './App.css';
import { useSelection, useSelector } from 'react-redux';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const taskState = useSelector(state => state.tasks)
  console.log(taskState)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <TaskList />} />
          <Route path="/create-task" element={ <TaskForm />} />
          <Route path="/edit-task/:id" element={ <TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
