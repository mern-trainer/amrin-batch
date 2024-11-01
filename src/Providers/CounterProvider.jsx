import { createContext, useState } from "react";

export const CounterContext = createContext()

export const CounterProvider = ({ children }) => {

    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(10)

    const values = { counter, setCounter, counter2, setCounter2 }

    return <CounterContext.Provider value={values}>
        {children}
    </CounterContext.Provider>
}