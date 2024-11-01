// context api => Global state management
// to create => createContext() method
// to use context states => useContext(<context>) Hook => 

import ContextPage from "./Pages/ContextPage"
import { CounterProvider } from "./Providers/CounterProvider"

const App = () => {

    return <CounterProvider>
        <ContextPage />
    </CounterProvider>
}

export default App