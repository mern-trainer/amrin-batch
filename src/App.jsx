// context api => Global state management
// to create => createContext() method
// to use context states => useContext(<context>) Hook => 

import { Toaster } from "react-hot-toast"
import ContextPage from "./Pages/ContextPage"
import { TodoProvider } from "./Providers/TodoProvider"
import Todo from "./Pages/Todo"
import EffectHook from "./Pages/EffectHook"

const App = () => {

    return <TodoProvider>
        {/* <ContextPage /> */}
        <Todo />
        {/* <EffectHook /> */}
        <Toaster position="top-right"/>
    </TodoProvider>
}

export default App