import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductSingleView = () => {

    const { product_id } = useParams()
    const [product, setProduct] = useState(null) // object
    const [currentImage, setCurrentImage] = useState("")

    const getProduct = async () => {
        const { data } = await axios.get(`https://dummyjson.com/products/${product_id}`) 
        setProduct(data)
        setCurrentImage(data.images[0])
    }

    useEffect(() => { 
        getProduct() 
    }, [product_id])

    return (
        <div>
            {
                product && <div className='d-flex justify-content-between mt-3 px-2'>
                    <div className='w-100'>
                        <img src={currentImage} className='w-100' style={{aspectRatio: 1/1, objectFit: "contain"}}/>
                        <div className='d-flex justify-content-between'>
                            {
                                product.images.map((image, index) => {
                                    return <img key={index} onMouseOver={() => setCurrentImage(image)} src={image} width={80} height={80} style={{cursor: "pointer"}}/>
                                })
                            }
                        </div>
                    </div>
                    <div className="text-start w-100">
                        <h5>{product.title}</h5>
                        <p>{product.description}</p>
                        <div className='d-flex gap-2'>
                            <s>${product.price}</s> 
                            <b className='text-success'>${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</b>
                        </div>
                        <div className='d-flex w-100 gap-2 mt-4'>
                            <button className='btn w-100 btn-success'>Add To Cart</button>
                            <button className='btn w-100 btn-danger'>Buy Now</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProductSingleView
