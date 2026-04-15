import { useState } from "react"

export default function TodoNew(props) {
    const [addVal, onAddValue] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!addVal) return
        props.handleNewTodo(addVal)
        onAddValue("")

    }
    const inputVAl = (e)=> { 
        onAddValue(e.target.value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
 
            <input className="border mr-2" type="text" name="task" 
            value ={addVal} 
            onChange={inputVAl} />
            
            <button className="bg-gray-200 p-1 rounded">add task</button>

        </form>
      
    </div>
  )
}