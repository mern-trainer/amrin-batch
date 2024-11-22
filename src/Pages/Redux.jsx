import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/counterSlice'

const Redux = () => {

    const { counter } = useSelector((store) => store.counter)

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment({ num: 2 }))
    }

    const handleDecrement = () => {
        dispatch(decrement({ num: 1 }))
    }

    const handleReset = () => {
        dispatch(reset())
    }

    return <div className="d-flex flex-column align-items-center mt-4 gap-3">
        <div>{counter}</div>
        <div className="d-flex gap-3">
            <button className="btn btn-primary" onClick={handleIncrement}>Increment</button>
            <button className="btn btn-success" onClick={handleReset}>Reset</button>
            <button className="btn btn-danger" onClick={handleDecrement}>Decrement</button>
        </div>
    </div>
}

export default Redux
