import {
  GET_STOCKS_REQUEST,
  GET_STOCKS_SUCCESS,
  GET_STOCKS_FAILURE,
} from "./actionTypes";

const initState = {
    isLoading: false,
    isError: false,
    response: null
}

const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_STOCKS_FAILURE:
            return {
                ...state,
                isError: true
            }
        case GET_STOCKS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_STOCKS_SUCCESS:
            return {
                ...state,
                response: payload
            }
        default:
            return state
    }
}

export default reducer;
