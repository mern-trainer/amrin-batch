import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { useHotels } from '../Providers/HotelProvider'

const Crud = () => {

    const { hotels, setHotels } = useHotels()

    const remove = (id) => {
        const res = hotels.filter(hotel => hotel.id !== id)
        setHotels(res)
    }

    const navigate = useNavigate()

    return (
        <Fragment>
            <div onClick={() => navigate("/hostel/add")} className='d-flex justify-content-end p-3 position-fixed rounded-circle bg-primary d-flex justify-content-center align-items-center' style={{width: "30px", height: "30px", bottom: "20px", right: "20px"}}> + </div>
            <div className='mt-3 d-flex justify-content-center flex-wrap gap-2'>
                {
                    hotels.map(hotel => {
                        return <div key={hotel.id} className='bg-light p-1'>
                            <div>
                                <img src={hotel.image} alt={hotel.name} style={{width: "14rem", aspectRatio: 4/3}}/>
                            </div>
                            <div>
                                <div>{hotel.name}</div>
                                <div>{hotel.location}</div>
                                <div>{hotel.phone}</div>
                                <div><FaStar /> {hotel.rating}</div>
                                <button className='btn btn-danger w-100' onClick={() => remove(hotel.id)}>Remove</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </Fragment>
    )
}

export default Crud
