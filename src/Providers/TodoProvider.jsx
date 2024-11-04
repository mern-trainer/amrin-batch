import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { v4 } from "uuid";

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {

    const [todoList, setTodoList] = useState([])

    const addToList = (title) => {
        if (title === "") {
            return toast.error("Task is required!")
        }
        const currentDateTime = new Date().toLocaleString("en-IN")
        const taskObject = {
            id: v4(),
            title: title,
            createdAt: currentDateTime,
            updatedAt: currentDateTime,
            completed: false
        }
        setTodoList([...todoList, taskObject])
    }

    const handleRemove = (id) => {
        const res = todoList.filter(todo => todo.id != id)
        setTodoList(res)
    }

    const updateCompleted = (id) => {
        const currentDateTime = new Date().toLocaleString("en-IN")
        const res = todoList.map(todo => {
            if (todo.id == id) {
                let status;
                if (todo.completed) {
                    status = false
                } else {
                    status = true
                }
                return {
                    ...todo,
                    completed: status,
                    updatedAt: currentDateTime
                }
            }
            return todo
        })
        setTodoList(res)
    }

    const values = { todoList, addToList, handleRemove, updateCompleted }

    return <TodoContext.Provider value={values}>
        {children}
    </TodoContext.Provider>
}

export const useTodo = () => {
    return useContext(TodoContext)
}