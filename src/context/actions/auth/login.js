import AsyncStorage from "@react-native-async-storage/async-storage";
import { CLEAR_AUTH_STATE, LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor";

export const clearAuthState = () => (dispatch) => {
    dispatch({
        type: CLEAR_AUTH_STATE
    })
};

export default ({
    username,
    password
}) => dispatch => {
    dispatch({
        type: LOGIN_LOADING
    })
    axiosInstance.post('auth/login', { username, password }).then(res => {
        AsyncStorage.setItem("token", res.data.token)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

    }).catch(err => {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response ? res.response.data : { error: "Something wrong" }
        })
    })
}