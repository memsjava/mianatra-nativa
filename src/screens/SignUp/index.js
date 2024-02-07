import React, { useContext, useEffect, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';

import RegisterComponent from "../../components/Register";
import register, { clearAuthState } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";
import { useNavigation } from "@react-navigation/native";
import { LOGIN } from "../../constants/routeNames";


const SignUp = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const { navigate } = useNavigation();

    const { authDispatch, authState: { error, loading, data } } = useContext(GlobalContext);

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

        if (
            Object.values(form).length === 5 &&
            Object.values(form).every(item => item.trim('').length > 0)
        ) {
            register(form)(authDispatch);
        }
    }

    useEffect(() => {
        if (data)
            navigate(LOGIN);
    }, [data])
    useFocusEffect(
        React.useCallback(() => {
            if (data || error) {
                clearAuthState()(dispatch);
            }
        }, [data, error])
    );
    return (
        <RegisterComponent
            onChange={onChange}
            onSubmit={onSubmit}
            form={form}
            errors={errors}
            loading={loading}
            error={error}
        />
    )
};

export default SignUp;