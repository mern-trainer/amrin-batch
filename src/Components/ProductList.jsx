import { Button, Col } from "react-bootstrap"
import { FaShoppingCart, FaTrash } from "react-icons/fa"

const ProductList = ({ product, discountPrice, cart, setCartList, cartList }) => {

    const handleAddToCart = () => {
        setCartList((cartList) => ([...cartList, product]))
    }

    const handleRemoveFromCart = () => {
        const res = cartList.filter(item => item.id != product.id)
        setCartList(res)
    }

    return <Col className="bg-light p-2" xs={12} sm={6} md={4} lg={3} xxl={2}>
        <div className="d-flex justify-content-center">
            <img src={product.images[0]} alt="" style={{width: "15rem", aspectRatio: 1/1, objectFit: "contain"}} />
        </div>
        <div className="text-center mb-3">
            <h5 className="text-truncate">{product.title}</h5>
            <div className="d-flex justify-content-between align-items-center">
                <div>{product.rating}</div>
                <div>
                    <s className="text-muted">${product.price}</s>
                    <span className="ms-1">${discountPrice}</span>
                </div>
            </div>
        </div>
        {cart ? <Button variant="danger" className="w-100" onClick={handleRemoveFromCart}><FaTrash />Remove</Button> :
            <Button variant="success" className="w-100" onClick={handleAddToCart}><FaShoppingCart /> Add To Cart</Button>}
        
    </Col>
}

export default ProductList