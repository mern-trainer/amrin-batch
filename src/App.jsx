// context api => Global state management
// to create => createContext() method
// to use context states => useContext(<context>) Hook => 

import { createContext, Fragment, useState } from "react"
import ContextPage from "./Pages/ContextPage"

export const CounterContext = createContext()

const App = () => {

    const [counter, setCounter] = useState(0)

    const values = { counter, setCounter }

    return <CounterContext.Provider value={values}>
        <ContextPage />
    </CounterContext.Provider>
}

export default App