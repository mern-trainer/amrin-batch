import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state, action) => {
            console.log(action.payload)
            state.counter += action.payload.inc // a *= b
        }
    }
})

export const { increment } = counterSlice.actions
export const { reducer: counterReducer } = counterSlice