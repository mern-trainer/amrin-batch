import React, { Fragment } from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductList from '../Components/ProductList'
import { useCart } from '../Providers/CartProvider'

const CartPage = () => {

    const { cartList, setCartList } = useCart()

    return <Fragment>
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
    </Fragment>
}

export default CartPage
