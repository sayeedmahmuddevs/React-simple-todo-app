import { useState } from "react"

import TodoNew from "./TodoNew"
import TotoList from "./TotoList"

export default function App() {
    const [task, onTask] = useState([])
    
    const handleNewTodo = (newTodo)=>{
        onTask([...task, newTodo])
    }

    const deleteTask = (indexToDelete)=>{
        const updateTask = task.filter(( val ,index)=> index!== indexToDelete)
        onTask(updateTask)
    }
    

  return (
    <div className="m-3">
        {task.map((arr, index) => (
            <TotoList 
            key={index} 
            arr ={arr} 
            index ={index} 
            delete = {deleteTask}/>
        ))}

        <TodoNew handleNewTodo ={handleNewTodo} />

    </div>
  )
}
