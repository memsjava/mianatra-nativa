import React, { useContext, useState } from "react";
import LoginComponent from "../../components/Login";
import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../context/Provider";
import login from "../../context/actions/auth/login";

const Login = () => {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const { navigate } = useNavigation();
    const { authDispatch, authState: { error, loading, data } } = useContext(GlobalContext);

    const onSubmit = () => {
        console.log('form', form)
        if (form.userName && form.password) {
            console.log('1111', 1111)
            login(form)(authDispatch);
        }
    }
    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });
    }

    return (
        <LoginComponent
            onChange={onChange}
            onSubmit={onSubmit}
            form={form}
            errors={errors}
            loading={loading}
            error={error}
        />
    )
};

export default Login;