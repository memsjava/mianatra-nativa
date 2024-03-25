import { CLEAR_AUTH_STATE, LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../constants/actionTypes";

const auth = (state, { type, payload }) => {
    switch (type) {

        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload,
                isLoggedIn: true
            };

        case LOGIN_LOADING:
        case REGISTER_LOADING:
            return {
                ...state,
                loading: true
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: payload
            };
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            return {
                ...state,
                data: null,
                error: payload,
                loading: false
            };
        case CLEAR_AUTH_STATE:
            return {
                ...state,
                data: null
            }

        default:
            return state;
    }
};
export default auth;