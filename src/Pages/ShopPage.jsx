import { Container, Row } from "react-bootstrap"
import ProductList from "../Components/ProductList"
import { useEffect, useState } from "react"
import NavBar from "../Components/NavBar"
import axios from "axios"
import { useCart } from "../Providers/CartProvider"

const ShopPage = () => {

    const { cartList, setCartList } = useCart()
    const [products, setProducts] = useState([])

    const getAllProducts = async () => {
        const { data } = await axios.get(`https://dummyjson.com/products?limit=10`) 
        setProducts(data.products)
    }

    useEffect(() => { 
        getAllProducts() // will be executed 
    }, [])

    return <div>
        <NavBar />
        <Container fluid>
            <Row>
                {
                    products.map(product => {

                        const discountPrice = (product.price - (product.price * product.discountPercentage / 100)).toFixed(2)

                        return <ProductList key={product.id} product={product} discountPrice={discountPrice} setCartList={setCartList} cartList={cartList}/>
                    })
                }
            </Row>
        </Container>
    </div>
}

export default ShopPage
