import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../Redux/counterSlice'

const Redux = () => {

    const { counter } = useSelector((store) => store.counter)

    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(increment({ inc: 2 }))
    }

    return <div className="d-flex flex-column align-items-center mt-4 gap-3">
        <div>{counter}</div>
        <div>
            <button className="btn btn-primary" onClick={handleIncrement}>Increment</button>
        </div>
    </div>
}

export default Redux
