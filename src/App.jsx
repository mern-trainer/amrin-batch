// context api => Global state management
// to create => createContext() method
// to use context states => useContext(<context>) Hook => 

import { Toaster } from "react-hot-toast"
import ContextPage from "./Pages/ContextPage"
import { CounterProvider } from "./Providers/CounterProvider"
import { TodoProvider } from "./Providers/TodoProvider"

const App = () => {

    return <CounterProvider>
        <TodoProvider>
            <ContextPage />
            <Toaster position="top-right"/>
        </TodoProvider>
    </CounterProvider>
}

export default App