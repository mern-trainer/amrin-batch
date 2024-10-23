import { useState } from 'react'

const ArrayUpdateState = () => {
    const [array, setArray] = useState([])

    const handleAdd = () => {
        setArray([...array, "Sample Data"])
    }

    const handleRemove = () => { 
        const res = array.filter((element, index) => index != 0)
        setArray(res)
    }

    return <div className="d-flex justify-content-center mt-4 flex-column align-items-center">
        <div className="text-center">
            <div>{array.join(" , ")}</div>
            <div className="d-flex gap-5">
                <button className="btn btn-primary mt-4" onClick={handleAdd}>Increment 1</button>
                <button className="btn btn-danger mt-4" onClick={handleRemove}>Decrement 1</button>
            </div>
        </div>
    </div>
}

export default ArrayUpdateState
