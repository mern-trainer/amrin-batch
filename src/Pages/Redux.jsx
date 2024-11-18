import { useDispatch, useSelector } from "react-redux"
import { increment } from "../Redux/counterSlice"

const Redux = () => {
    
    const { counter } = useSelector((store) => store.counter) // hook => to fetch state from redux store
    
    const dispatch = useDispatch() // hook to update state in redux

    const handleIncrement = () => {
        dispatch(increment({ inc: 10 }))
    }

    return <div className="d-flex flex-column align-items-center gap-3">
        <div className="mt-4">{counter}</div>
        <button className="btn btn-primary" onClick={handleIncrement}>Increment</button>
    </div>
}

export default Redux
