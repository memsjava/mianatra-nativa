import React, { useState } from "react";
import RegisterComponent from "../../components/Register";


const SignUp = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value })
        if (name === "password" && value.length < 6) {
            setErrors(prev => {
                return { ...prev, [name]: "Need more than 6 characters" }
            })
        } else {
            if (value !== "") {
                setErrors(prev => {
                    return { ...prev, [name]: null }
                })
            } else {
                setErrors(prev => {
                    return { ...prev, [name]: "This field is required" }
                })
            }
        }

    }
    const onSubmit = () => {
        if (!form.userName) {
            setErrors(prev => {
                return { ...prev, userName: "Please fill this field" }
            })
        }
        if (!form.lastName) {
            setErrors(prev => {
                return { ...prev, lastName: "Please fill this field" }
            })
        }
        if (!form.firstName) {
            setErrors(prev => {
                return { ...prev, firstName: "Please fill this field" }
            })
        }
        if (!form.email) {
            setErrors(prev => {
                return { ...prev, email: "Please fill this field" }
            })
        }
        if (!form.password) {
            setErrors(prev => {
                return { ...prev, password: "Please fill this field" }
            })
        }
    }
    return (
        <RegisterComponent
            onChange={onChange}
            onSubmit={onSubmit}
            form={form}
            errors={errors}
        />
    )
};

export default SignUp;