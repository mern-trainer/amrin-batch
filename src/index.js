import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client"
import App from "./App" // default import
import "./index.css"
import { TodoProvider } from './Providers/TodoProvider';
import { CartProvider } from './Providers/CartProvider';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { HotelProvider } from './Providers/HotelProvider';

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Provider store={store}>
    <TodoProvider>
        <CartProvider>
            <HotelProvider>
                <App />
            </HotelProvider>
        </CartProvider>
    </TodoProvider>
</Provider>)