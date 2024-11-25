import React, { useReducer } from 'react'

const reducer = (state, action) => {
    if (action.type == "counter/increment") {
        return state + action.payload.number
    }
}

const UseReducer = () => {
    
    const [counter, dispatch] = useReducer(reducer, 0)

    const handleUpdate = () => {
        dispatch({ type: "counter/increment", payload: { number: 100 } })
    }

    return <div className="d-flex flex-column align-items-center mt-4 gap-3">
        <div>{counter}</div>
        <button className="btn btn-success rounded-0" onClick={handleUpdate}>Increment</button>
    </div>
}

export default UseReducer
