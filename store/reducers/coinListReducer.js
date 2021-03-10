const defaultState = {
  loading: false,
  data: [],
  errorMsg: "",
  count: 0
};

const coinListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "COIN_LIST_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: ""
      };
    case "COIN_LIST_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to get coin"
      };
    case "COIN_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        errorMsg: "",
        count: action.payload.count
      };
    default:
      return state
  }
};

export default coinListReducer