import axios from "axios";

export const getCoinList = (page) => async dispatch => {
  try {
    dispatch({
      type: "COIN_LIST_LOADING"
    });

    const perPage = 10;
    const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
    const currency = 'USD';
    const apiKey = '6a4c40f3-0921-4b74-8dda-c322bf61e1f2';

    const res = await axios.get(`${url}?start=${page}&limit=${perPage}&convert=${currency}&CMC_PRO_API_KEY=${apiKey}`)

    dispatch({
      type: "COIN_LIST_SUCCESS",
      payload: res.data
    })
  } catch (e) {
    dispatch({
      type: "COIN_LIST_FAIL",
    })
  }
};