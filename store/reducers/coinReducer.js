const defaultState = {
    loading: false,
    data: {},
    errorMsg: ""
};

const coinReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "COIN_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case "COIN_LOAD_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: "unable to find coin"
            };
        case "COIN_LOAD_SUCCESS":
            return {
                ...state,
                loading: false,
                errorMsg: "",
                data: {
                    ...state.data,
                    [action.coinId]: action.payload
                }
            };
        default:
            return state
    }
};

export default coinReducer