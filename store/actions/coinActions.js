import axios from "axios";

const apiKey = '6a4c40f3-0921-4b74-8dda-c322bf61e1f2';

export const getCoinList = (page) => async dispatch => {
  try {
    dispatch({
      type: "COIN_LIST_LOADING"
    });

    const perPage = 10;
    const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
    const currency = 'USD';

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

export const getCoin = (coinId) => async dispatch => {
  try {
    dispatch({
      type: "COIN_LOADING"
    });

    const url = 'https://pro-api.coinmarketcap.com';
    const res = await axios.get(`${url}/v1/cryptocurrency/info?id=${coinId}&CMC_PRO_API_KEY=${apiKey}`);

    dispatch({
      type: "COIN_LOAD_SUCCESS",
      payload: res.data,
      coinId: coinId
    })
  } catch (e) {
    dispatch({
      type: "COIN_LOAD_FAIL",
    })
  }
};