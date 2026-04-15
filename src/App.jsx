import { useState } from "react"

import TodoNew from "./TodoNew"
import TotoList from "./TotoList"

export default function App() {
    const [task, onTask] = useState([])
    
    const handleNewTodo = (newTodo)=>{
        onTask([...task, newTodo])
    }
    

  return (
    <div>
        {task.map((arr, index) => (
            <TotoList arr ={arr} index ={index}/>
        ))}

        <TodoNew handleNewTodo ={handleNewTodo} />

    </div>
  )
}
