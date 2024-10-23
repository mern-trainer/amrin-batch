import ArrayUpdateState from "./Pages/ArrayUpdateState"
import Counter from "./Pages/Counter"
import MultiCounter from "./Pages/MultiCounter"

const App = () => { 
    return <div className="text-center">
        <h3 className="my-3">Single Counter</h3>
        <Counter />
        <h3 className="my-3">Multi Counter</h3>
        <MultiCounter />
        <h3 className="my-3">Array Update</h3>
        <ArrayUpdateState />
    </div>
}

// default export
export default App