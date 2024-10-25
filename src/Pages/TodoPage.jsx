import { useState } from "react"
import { FaTrash } from "react-icons/fa6"

const TodoPage = () => { // todo application => task manager
    
    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState("")

    const handleAddTask = () => {
        if (todo == "") {
            return alert("Task is required!")
        }
        setTodoList([todo, ...todoList])
        setTodo("")
    }

    const handleRemove = (idx) => {
        const res = todoList.filter((_, index) => index != idx)
        setTodoList(res)
    }

    return <div className="d-flex flex-column align-items-center mt-5"> 
        <div className="w-50">
            <input type="text" onChange={(event) => setTodo(event.target.value)} value={todo} placeholder="Enter your task..." name="todo" className="p-2 w-100 border-1 border-secondary" style={{ outline: "none"}} />
            <button onClick={handleAddTask} className="p-1 w-100 bg-secondary text-light border-0 mt-3">Add To List</button>
        </div>
        <div className="w-50 mt-3 d-flex flex-column gap-2">
            {
                todoList.map((item, index) => {
                    // key => unique identifier
                    return <div key={index} className="p-2 bg-secondary  d-flex justify-content-between text-light w-100">
                        <div style={{width: "90%"}} className="text-truncate">
                            {item}
                        </div>
                        <div style={{width: "10%"}} className="text-center">
                            <FaTrash cursor={"pointer"} onClick={() => handleRemove(index)}/>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default TodoPage