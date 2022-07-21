import { Description } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import axios from "axios";

const initialState = [
    {
        id: "1",
        nombre: "task 1",
        descripcion: "descripcion 1"
    },
    {
        id: "2",
        nombre: "task 2",
        descripcion: "descripcion 2"
    },
    {
        id: "3",
        nombre: "task 3",
        descripcion: "descripcion 3"
    },
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log(state, action.payload)
            state.push(action.payload)
        },
        editTask: (state, action) => {
            const {id, nombre, descripcion} = action.payload
            const foundTask = state.find(task => task.id === id)
            if (foundTask) {
                foundTask.nombre = nombre;
                foundTask.descripcion = descripcion;
            }
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if (taskFound) {
                state.splice(state.indexOf(taskFound), 1)
            }
        }
    }
})

export const { addTask, deleteTask , editTask } = taskSlice.actions
export default taskSlice.reducer