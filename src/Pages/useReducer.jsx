import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if (action.type === "counter/increment1") {
        return { ...state, counter1: state.counter1 + action.payload.number }
    }
    if (action.type === "counter/increment2") {
        return { ...state, counter2: state.counter2 + action.payload.number }
    }
    if (action.type === "counter/decrement1") {
        return { ...state, counter1: state.counter1 - action.payload.number }
    }
    if (action.type === "counter/decrement2") {
        return { ...state, counter2: state.counter2 - action.payload.number }
    }
}

const UseReducer = () => {
    
    const [counter, dispatch] = useReducer(reducer, {
        counter1: 0,
        counter2: 0
    })

    const handleUpdate = (type, operator) => {
        const obj = { payload: { number: 100 } }
        if (type === 1 && operator === "+") {
            obj.type = "counter/increment1"
        }
        if (type === 2 && operator === "+") {
            obj.type = "counter/increment2"
        }
        if (type === 1 && operator === "-") {
            obj.type = "counter/decrement1"
        }
        if (type === 2 && operator === "-") {
            obj.type = "counter/decrement2"
        }
        dispatch(obj)
    }

    return <div className="d-flex flex-column align-items-center mt-4 gap-3">
        <div>Counter 1: {counter.counter1}</div>
        <div>Counter 2: {counter.counter2}</div>
        <div className="d-flex gap-3">
            <button className="btn btn-success rounded-0" onClick={() => handleUpdate(1, "+")}>Increment 1</button>
            <button className="btn btn-danger rounded-0" onClick={() => handleUpdate(1, "-")}>Decrement 1</button>
        </div>
        <div className="d-flex gap-3">
            <button className="btn btn-success rounded-0" onClick={() => handleUpdate(2, "+")}>Increment 2</button>
            <button className="btn btn-danger rounded-0" onClick={() => handleUpdate(2, "-")}>Decrement 2</button>
        </div>
    </div>
}

export default UseReducer
