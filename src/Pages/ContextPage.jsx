import { useContext } from "react"
import { CounterContext } from "../App"

const ContextPage = () => {

    const { counter, setCounter } = useContext(CounterContext)

    return <div className="d-flex flex-column gap-2 mt-3 align-items-center">
        <div>{ counter }</div>
        <div className="d-flex gap-3">
            <button className="btn btn-success" onClick={() => setCounter(counter + 1)}>Increment</button>
            <button className="btn btn-danger" onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    </div>
}

export default ContextPage
