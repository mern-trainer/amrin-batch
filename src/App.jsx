// context api => Global state management
// to create => createContext() method
// to use context states => useContext(<context>) Hook => 

import { Toaster } from "react-hot-toast"
// import ContextPage from "./Pages/ContextPage"
import { TodoProvider } from "./Providers/TodoProvider"
// import Todo from "./Pages/Todo"
// import EffectHook from "./Pages/EffectHook"
import ShopPage from "./Pages/ShopPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import PageNotFound from "./Pages/PageNotFound"
import CartPage from "./Pages/CartPage"
import ProductSingleView from "./Pages/ProductSingleView"

const App = () => {
// UX 
    return <BrowserRouter>
        <Routes>
            <Route path="/" Component={HomePage}/> 
            <Route path="/about" Component={AboutPage} />
            <Route path="/shop" Component={ShopPage} />
            <Route path="/cart" Component={CartPage} />
            <Route path="/shop/view/:product_id" Component={ProductSingleView} />
            <Route path="*" Component={PageNotFound} /> {/* not found page */}
        </Routes>
    </BrowserRouter>
        {/* <ContextPage /> */}
        {/* <Todo /> */}
        {/* <EffectHook /> */}
        {/* <ShopPage /> */}
        {/* <Toaster position="top-right"/> */}
    
}

export default App