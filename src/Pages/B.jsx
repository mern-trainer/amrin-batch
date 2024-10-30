const B = ({ counter, callbackFunc }) => {

    const data = "Hello"

    return <div>
        <button onClick={() => callbackFunc(data)}>Click</button>
        Component B - {counter}
    </div>
}

export default B