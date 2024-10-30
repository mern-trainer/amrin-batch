import { useState } from "react"
import B from "./B"

// props [property] => to send data from parent to child component.

const A = () => { // parent comp.

    const [counter, setCounter] = useState(0)

    const handleDataFromChild = (data) => {
        console.log(data)
    }

    return <div>
        Component A
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <B counter={counter} callbackFunc={handleDataFromChild} /> {/* child comp */}
    </div>
}

export default A