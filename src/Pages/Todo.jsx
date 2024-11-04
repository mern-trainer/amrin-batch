import { useState } from "react"
import { useTodo } from "../Providers/TodoProvider"
import { FaCheckCircle } from "react-icons/fa"
import { FaCheck, FaCircleXmark, FaTrash } from "react-icons/fa6"

const Todo = () => {

    const { todoList, addToList, handleRemove, updateCompleted } = useTodo()
    const [todo, setTodo] = useState("")

    return <div className="d-flex flex-column align-items-center mt-5"> 
        <div className="w-50">
            <input type="text" onChange={(event) => setTodo(event.target.value)} value={todo} placeholder="Enter your task..." name="todo" className="p-2 w-100 border-1 border-secondary" style={{ outline: "none"}} />
            <button onClick={() => addToList(todo)} className="p-1 w-100 bg-secondary text-light border-0 mt-3">Add To List</button>
        </div>
        <div className="w-50 mt-3 d-flex flex-column gap-2">
            {
                todoList.map((item) => {
                    // key => unique identifier
                    return <div key={item.id} className="p-2 bg-light  d-flex justify-content-between text-dark w-100">
                        <div style={{width: "90%"}} className="text-truncate d-flex gap-2 align-items-center">
                            {item.completed && <div><FaCheckCircle color="green" /></div>}
                            {!item.completed && <div><FaCircleXmark color="red"/></div>}
                            <div>{item.title}</div>
                        </div>
                        <div style={{width: "10%"}} className="text-center">
                            <FaTrash cursor={"pointer"} onClick={() => handleRemove(item.id)}/>
                            <FaCheck cursor={"pointer"} onClick={() => updateCompleted(item.id)}/>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default Todo