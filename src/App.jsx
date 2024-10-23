// Component
// jsx => javascript xml => 

import { useState } from "react"
import LandingPage from "./Pages/LandingPage"
import Shop from "./Pages/Shop"
import Counter from "./Pages/Counter"
import MultiCounter from "./Pages/MultiCounter"

// state => is an object to handle/manage data in a react component
// Hooks => Functions to handle state and lifecycle of a component.
// react state => useState()

const App = () => { 

    // return <Counter />
    return <MultiCounter />

    // const [counter, setCounter] = useState({ counterOne: 0, counterTwo: 0 }) // array destructure
    
    // // spread operator

    // const handleIncrementOne = () => {
    //    setCounter({...counter, counterOne: counter.counterOne + 1})
    // }

    // const handleDecrementOne = () => {
    //     setCounter({...counter, counterOne: counter.counterOne - 1})
    // }

    // const handleIncrementTwo = () => {
    //     setCounter({...counter, counterTwo: counter.counterTwo + 1})
    // }

    // const handleDecrementTwo = () => {
    //     setCounter({...counter, counterTwo: counter.counterTwo - 1})
    // }

    // const [array, setArray] = useState([])

    // const handleAdd = () => {
    //     setArray([...array, "Sample Data"])
    //     // array.push("Hello") 
    //     // setArray(array) 
    // }

    // const handleRemove = () => {
    //     // array.pop()
    //     // setArray(array) 
    //     const res = array.filter((element, index) => index != 0)
    //     setArray(res)
    // }

    // return <div className="d-flex justify-content-center mt-4 flex-column align-items-center">
    //     <div className="text-center">
    //         <div>{array.join(" , ")}</div>
    //         <div className="d-flex gap-5">
    //             <button className="btn btn-primary mt-4" onClick={handleAdd}>Increment 1</button>
    //             <button className="btn btn-danger mt-4" onClick={handleRemove}>Decrement 1</button>
    //         </div>
    //     </div>
    //     {/* <div className="text-center mt-5">
    //         <div>{counter.counterTwo}</div>
    //         <div className="d-flex gap-5">
    //             <button className="btn btn-primary mt-4" onClick={handleIncrementTwo}>Increment 2</button>
    //             <button className="btn btn-danger mt-4" onClick={handleDecrementTwo}>Decrement 2</button>
    //         </div>
    //     </div> */}
    // </div>
}

// default export
export default App