import { useState } from "react"

const Form = () => {

    const [formData, setFormData] = useState({
        username: "", password: "", confirm_password: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        if (formData.username == "") {
            
        }
    }   

    const handleChange = (event) => {
        const { name, value } = event.target
        console.log(name, "=>", value)
        setFormData({...formData, [name]: value})
    }

    return <div className="d-flex justify-content-center mt-4">
        <form className="d-flex flex-column gap-2 w-50" onSubmit={handleSubmit}>
            <input onChange={handleChange} value={formData.username} className="p-2 border-0 w-100" style={{outline: 0}} type="text" name="username" placeholder="Enter username"/>
            <input onChange={handleChange} value={formData.password} className="p-2 border-0 w-100" style={{outline: 0}} type="password" name="password" placeholder="Enter password"/>
            <input onChange={handleChange} value={formData.confirm_password} className="p-2 border-0 w-100" style={{outline: 0}} type="password" name="confirm_password" placeholder="Enter confirm password"/>
            <button className="p-2 border-0 w-100 btn btn-primary rounded-0" style={{outline: 0}}>Create Account</button>
        </form>
    </div>
}

export default Form
