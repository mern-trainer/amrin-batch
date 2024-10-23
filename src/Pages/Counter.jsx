import { useState } from "react"

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }
    
    const handleDecrement = () => {
        setCounter(counter + 1)
    }

    return <div className="mt-5">
        <div className="d-flex justify-content-center gap-5 align-items-center">
            <button className="btn btn-primary" onClick={handleIncrement}> Decrement</button>
            <div>{counter}</div>
            <button className="btn btn-danger" onClick={handleDecrement}> Increment </button>
        </div>
    </div>
}

export default Counter
