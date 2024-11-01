import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {

    const [todoList, setTodoList] = useState([])

    const addToList = (title) => {
        if (title === "") {
            return toast.error("Task is required!")
        }
        if (todoList.includes(title)) {
            return toast.error("Task already exist!")
        }
        setTodoList([...todoList, title])
    }

    const values = { todoList, setTodoList, addToList }

    return <TodoContext.Provider value={values}>
        {children}
    </TodoContext.Provider>
}