import { REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../constants/actionTypes";

const auth = (state, { type, payload }) => {
    switch (type) {
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
        case REGISTER_FAIL:
            return {
                ...state,
                data: null,
                error: null,
                loading: false
            };
        case CLEAR_AUTH_STATE:

        default:
            return state;
    }
};
export default auth;