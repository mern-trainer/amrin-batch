import { useState } from "react"

const MultiCounter = () => {
    
    const [counter, setCounter] = useState({ counterOne: 0, counterTwo: 0 })

    const handleIncrementOne = () => {
       setCounter({...counter, counterOne: counter.counterOne + 1})
    }

    const handleDecrementOne = () => {
        setCounter({...counter, counterOne: counter.counterOne - 1})
    }

    const handleIncrementTwo = () => {
        setCounter({...counter, counterTwo: counter.counterTwo + 1})
    }

    const handleDecrementTwo = () => {
        setCounter({...counter, counterTwo: counter.counterTwo - 1})
    }

    return <div className="d-flex justify-content-center mt-4 flex-column align-items-center">
        <div className="text-center">
            <div>{counter.counterOne}</div>
            <div className="d-flex gap-5">
                <button className="btn btn-primary mt-4" onClick={handleIncrementOne}>Increment 1</button>
                <button className="btn btn-danger mt-4" onClick={handleDecrementOne}>Decrement 1</button>
            </div>
        </div>
        <div className="text-center mt-5">
            <div>{counter.counterTwo}</div>
            <div className="d-flex gap-5">
                <button className="btn btn-primary mt-4" onClick={handleIncrementTwo}>Increment 2</button>
                <button className="btn btn-danger mt-4" onClick={handleDecrementTwo}>Decrement 2</button>
            </div>
        </div>
    </div>
}

export default MultiCounter
