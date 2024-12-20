import ShopPage from "./Pages/ShopPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import PageNotFound from "./Pages/PageNotFound"
import CartPage from "./Pages/CartPage"
import ProductSingleView from "./Pages/ProductSingleView"
import Form from "./Pages/Form"
import Formik from "./Pages/Formik"
import Redux from "./Pages/Redux"
import TodoPage from "./Pages/TodoPage"
import UseReducer from "./Pages/useReducer"
import Crud from "./Pages/CRUD"
import AddHotel from "./Pages/AddHotel"

const App = () => {
// UX 
    return <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
    }}>
        <Routes>
            <Route path="/" Component={HomePage}/> 
            <Route path="/about" Component={AboutPage} />
            <Route path="/shop" Component={ShopPage} />
            <Route path="/form" Component={Form} />
            <Route path="/formik" Component={Formik} />
            <Route path="/cart" Component={CartPage} />
            <Route path="/redux" Component={Redux} />
            <Route path="/todo" Component={TodoPage} />
            <Route path="/use-reducer" Component={UseReducer} />
            <Route path="/shop/view/:product_id" Component={ProductSingleView} />
            <Route path="/crud" Component={Crud} />
            <Route path="/hostel/add" Component={AddHotel} />

            <Route path="*" Component={PageNotFound} /> {/* not found page */}
        </Routes>
    </BrowserRouter>
}

export default App