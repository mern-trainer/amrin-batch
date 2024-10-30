// import ArrayUpdateState from "./Pages/ArrayUpdateState"
// import Counter from "./Pages/Counter"
// import MultiCounter from "./Pages/MultiCounter"

import { Fragment } from "react"
import TodoPage from "./Pages/TodoPage"
import A from "./Pages/A"
import ShopPage from "./Pages/ShopPage"

const App = () => { 
    // return <div className="text-center">
    //     <h3 className="my-3">Single Counter</h3>
    //     <Counter />
    //     <h3 className="my-3">Multi Counter</h3>
    //     <MultiCounter />
    //     <h3 className="my-3">Array Update</h3>
    //     <ArrayUpdateState />
    // </div>
    return <Fragment>
        {/* <TodoPage /> */}
        {/* <A /> */}
        <ShopPage />
    </Fragment>
}

// default export
export default App