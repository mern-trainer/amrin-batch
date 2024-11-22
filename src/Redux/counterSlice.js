import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state, action) => {
            const { num } = action.payload
            state.counter = state.counter + num
        },
        decrement: (state, action) => {
            const { num } = action.payload
            state.counter = state.counter - num
        },
        reset: (state) => {
            state.counter = 0
        } 
    }
})

export const { increment, decrement, reset } = counterSlice.actions
export const { reducer: counterReducer } = counterSlice
