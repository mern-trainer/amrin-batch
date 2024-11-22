import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todoList: []
    },
    reducers: {
        createTodo: (state, action) => {
            state.todoList = [action.payload, ...state.todoList]
        },
        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter((item) => item.id !== action.payload.removeId)
        },
        updateTodo: (state, action) => {
            
        },
        updateTodoStatus: (state, action) => {
            state.todoList = state.todoList.map(item => {
                if (item.id == action.payload.updateId) {
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
        }
    }
})

export const { createTodo, removeTodo, updateTodo, updateTodoStatus } = todoSlice.actions
export const { reducer: todoReducer } = todoSlice