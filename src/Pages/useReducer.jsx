import React, { useReducer } from 'react'
import { FaTrash } from 'react-icons/fa'

// Random password generator

const strings = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '_', '+', '[', ']', '{', '}', '|', ';', ':', '\'', ',', '.', '<', '>', '/', '?', '`', '~'
]

const reducer = (state, action) => {
    if (action.type === "passwords/create") {
        return [action.payload, ...state]
    }
    if (action.type === "passwords/remove") {
        return state.filter((_, index) => index !== action.payload.index)
    }
}

const UseReducer = () => {

    const [passwords, dispatch] = useReducer(reducer, [])

    const generatePassword = () => {
        let i = 0
        let password = ""
        while (i < 16) {
            const randomIndex = Math.floor(Math.random() * strings.length)
            const element = strings[randomIndex]
            password += element
            i++
        }
        dispatch({ type: "passwords/create", payload: password });
    }

    const handleRemove = idx => {
        dispatch({ type: "passwords/remove", payload: { index: idx } });
    }

    return <div className="d-flex flex-column align-items-center mt-4 gap-3">
        <button className="btn btn-success rounded" onClick={generatePassword}>Generate Password</button>
        <h3>Password History</h3>
        <div className='w-50 d-flex flex-column gap-2'>
            {
                passwords.map((pass, idx) => {
                    return <div key={idx} className="d-flex bg-light p-2 justify-content-between">
                        <div>{pass}</div>
                        <FaTrash cursor={"pointer"} color='red' onClick={() => handleRemove(idx)}/>
                    </div>
                })
            }
        </div>
    </div>
}

export default UseReducer
