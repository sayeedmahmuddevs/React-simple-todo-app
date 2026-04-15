import { useState } from "react"

export default function TodoNew(props) {
    const [addVal, onAddValue] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        props.handleNewTodo(addVal)
        e.target.value = ""

    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
 
            <input type="text" name="task" value ={addVal} onChange={(e)=> onAddValue(e.target.value)} />
            <button>add task</button>

        </form>
      
    </div>
  )
}
