import { useFormik } from 'formik'
import React from 'react'
import { useHotels } from '../Providers/HotelProvider'

const AddHotel = () => {

    const { hotels, setHotels } = useHotels()
    
    const formik = useFormik({
        initialValues: {
            name: "",
            image: "",
            location: "",
            phone: "",
            rating: "",
            description: ""
        },
        onSubmit: (values) => {
            const id = hotels.length 
            values.id = id + 1
            setHotels([...hotels, values])
        }
    })
    
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input type="text" placeholder='Enter name' name='name' onChange={formik.handleChange} value={formik.values.name}/>
                <input type="text" placeholder='Enter image url' name='image' onChange={formik.handleChange} value={formik.values.image}/>
                <input type="text" placeholder='Enter location' name='location' onChange={formik.handleChange} value={formik.values.location}/>
                <input type="text" placeholder='Enter phone number' name='phone' onChange={formik.handleChange} value={formik.values.phone}/>
                <input type="number" placeholder='Enter rating' name='rating' onChange={formik.handleChange} value={formik.values.rating}/>
                <input type="text" placeholder='Enter description' name='description' onChange={formik.handleChange} value={formik.values.description}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddHotel
