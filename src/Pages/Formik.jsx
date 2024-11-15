// formik => Form management library

import { useFormik } from "formik"
import { object, ref, string } from "yup"

const Formik = () => {

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirm_password: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: object().shape({
            username: string()
                .required("Username is required!")
                .min(4, "Min 4 char. required")
                .max(12, "Max 12 char. required"),
            password: string()
                .required("Password is required")
                .min(8, "min 8")
                .max(16, "max 16"),
            confirm_password: string()
                .required("Confirm password is required")
                .min(8, "min 8")
                .max(16, "max 16")
                .oneOf([ref("password")], "Password does not match")  
        })
    })

    return <div className="d-flex justify-content-center mt-4">
        <form className="d-flex flex-column gap-2 w-50" onSubmit={formik.handleSubmit}>
            <input onChange={formik.handleChange} value={formik.values.username} className="p-2 border-0 w-100" style={{outline: 0}} type="text" name="username" placeholder="Enter username"/>
            <span>{formik.errors.username}</span>
            <input onChange={formik.handleChange} value={formik.values.password} className="p-2 border-0 w-100" style={{ outline: 0 }} type="password" name="password" placeholder="Enter password" />
            <span>{formik.errors.password}</span>
            <input onChange={formik.handleChange} value={formik.values.confirm_password} className="p-2 border-0 w-100" style={{outline: 0}} type="password" name="confirm_password" placeholder="Enter confirm password"/>
            <span>{formik.errors.confirm_password}</span>
            <button type="submit" className="p-2 border-0 w-100 btn btn-primary rounded-0" style={{outline: 0}}>Create Account</button>
        </form>
    </div>
}

export default Formik
