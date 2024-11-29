import { createContext, useContext, useState } from "react";

const hotelContext = createContext()

export const HotelProvider = ({ children }) => {

    const [hotels, setHotels] = useState([])

    return <hotelContext.Provider value={{ hotels, setHotels }}>
        { children }
    </hotelContext.Provider>
}

export const useHotels = () => useContext(hotelContext)