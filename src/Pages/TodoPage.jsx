import { useState } from "react"
import { FaCheck, FaCheckCircle } from "react-icons/fa"
import { FaCircleXmark, FaTrash, FaXmark } from "react-icons/fa6"
import { v4 } from "uuid"

const TodoPage = () => { // todo application => task manager
    
    const [todoList, setTodoList] = useState([])
    const [todo, setTodo] = useState("")

    const handleAddTask = () => {
        if (todo == "") {
            return alert("Task is required!")
        }
        const uniqueId = v4()
        const taskObject = {
            id: uniqueId,
            title: todo,
            completed: false,
            createdAt: new Date().toLocaleString("en-IN").toUpperCase(),
            updatedAt: new Date().toLocaleString("en-IN").toUpperCase(),
        }
        setTodoList([taskObject, ...todoList])
        setTodo("")
    }

    const handleRemove = (removeId) => { 
        const res = todoList.filter((item) => item.id !== removeId)
        setTodoList(res)
    }

    const handleStatusUpdate = (updateId) => {
        const res = todoList.map(item => {
            if (item.id == updateId) {
                let status;
                if (item.completed) {
                    status = false
                } else {
                    status = true
                }
                return {
                    ...item,
                    completed: status,
                    updatedAt: new Date().toLocaleString("en-IN").toUpperCase(),
                }
            }
            return item
        })
        setTodoList(res)
    }

    return <div className="d-flex flex-column align-items-center mt-5"> 
        <div className="w-50">
            <input type="text" onChange={(event) => setTodo(event.target.value)} value={todo} placeholder="Enter your task..." name="todo" className="p-2 w-100 border-1 border-secondary" style={{ outline: "none"}} />
            <button onClick={handleAddTask} className="p-1 w-100 bg-secondary text-light border-0 mt-3">Add To List</button>
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
                            <FaCheck cursor={"pointer"} onClick={() => handleStatusUpdate(item.id)}/>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default TodoPage