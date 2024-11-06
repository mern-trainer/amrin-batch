import { Button, Col } from "react-bootstrap"
import { FaShoppingCart, FaTrash } from "react-icons/fa"

const ProductList = ({ product, discountPrice, cart, setCartList, cartList }) => {

    const handleAddToCart = () => {
        const index = cartList.findIndex(item => item.id === product.id)
        if (index === -1) {
            product.quantity = 1
            setCartList((cartList) => ([...cartList, product]))
        } else {
            const res = cartList.map(item => {
                if (item.id === product.id) {
                    return {...item, quantity: item.quantity + 1}
                }
                return item
            })
            setCartList(res)
        }
        
    }

    const handleRemoveFromCart = () => {
        const res = cartList.filter(item => item.id !== product.id)
        setCartList(res)
    }

    const handleQuantity = (operator) => {
        if (operator == "-" && product.quantity == 1) {
            return handleRemoveFromCart()
        }
        const res = cartList.map(item => {
            if (item.id === product.id) {
                return {
                    ...item,
                    quantity: operator == "+" ? item.quantity + 1 : item.quantity - 1
                }
            }
            return item
        })
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
                    <span className="ms-1">${(discountPrice * product.quantity).toFixed(2)}</span>
                </div>
            </div>
            {
                cart && <div className="d-flex my-2 justify-content-between align-items-center">
                    <button className="btn btn-success w-50" onClick={() => handleQuantity("-")}> - </button>
                    <div className="w-100">{product.quantity}</div>
                    <button className="btn btn-success w-50" onClick={() => handleQuantity("+")}> + </button>
                </div>
            }
        </div>
        {cart ? <Button variant="danger" className="w-100" onClick={handleRemoveFromCart}><FaTrash />Remove</Button> :
            <Button variant="success" className="w-100" onClick={handleAddToCart}><FaShoppingCart /> Add To Cart</Button>}
        
    </Col>
}

export default ProductList