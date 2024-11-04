import React, { useEffect, useState } from 'react'

const EffectHook = () => {
    
    const [counter, setCounter] = useState(0)
    const [count, setCount] = useState(0)

    // Mounting => []
    // Updating => [states or props]
    // Unmounting => clean up => called before removing component from DOM.

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((counter) => counter + 1)
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [count])

    return <div className="d-flex align-items-center mt-4 flex-column">
        <div>
            Run every second: {counter}
        </div>
        <div>{count}</div>
        <button
            className='btn btn-success mt-3'
            onClick={() => setCount(count + 1)
        }>Increment</button>
    </div>
}

export default EffectHook
