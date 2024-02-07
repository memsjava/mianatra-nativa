import { CLEAR_AUTH_STATE, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../../constants/actionTypes"
import axiosInstance from "../../../helpers/axiosInterceptor";

export const clearAuthState = () => (dispatch) => {
    dispatch({
        type: CLEAR_AUTH_STATE
    })
};

export default ({
    email,
    password,
    lastName: last_name,
    firsName: first_name,
    userName: username
}) => dispatch => {
    dispatch({
        type: REGISTER_LOADING
    })
    axiosInstance.post('auth/register', {
        email, password, last_name, first_name, username
    }).then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

    }).catch(err => {
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response ? res.response.data : { error: "Something wrong" }
        })
    })
}