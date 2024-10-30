import { Container, Row } from "react-bootstrap"
import { products } from "../Constants/products"
import ProductList from "../Components/ProductList"
import { useState } from "react"
import NavBar from "../Components/NavBar"

const ShopPage = () => {

    const [cartList, setCartList] = useState([])

    return <div>
        <NavBar />
        <Container fluid>
            <Row>
                {
                    products.map(product => {

                        const discountPrice = (product.price - (product.price * product.discountPercentage / 100)).toFixed(2)

                        return <ProductList key={product.id} product={product} discountPrice={discountPrice} setCartList={setCartList}/>
                    })
                }
            </Row>
        </Container>
        <h3 className="my-5 text-center">Cart</h3>
        <Container fluid>
            <Row>
                {
                    cartList.map(product => {

                        const discountPrice = (product.price - (product.price * product.discountPercentage / 100)).toFixed(2)

                        return <ProductList key={product.id} product={product} discountPrice={discountPrice} setCartList={setCartList} cart={true} cartList={cartList} />
                    })
                }
            </Row>
        </Container>
    </div>
}

export default ShopPage
