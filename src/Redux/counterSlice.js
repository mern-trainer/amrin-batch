import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state, action) => {
            const { inc } = action.payload
            state.counter = state.counter + inc
        }
    }
})

export const { increment } = counterSlice.actions
export const { reducer: counterReducer } = counterSlice
