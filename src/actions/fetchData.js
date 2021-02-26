import axios from "axios";
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./action";

export function fetchCoins() {
    return dispatch => {
        dispatch(fetchDataRequest());
        axios
            .get(
                "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD&CMC_PRO_API_KEY=6a4c40f3-0921-4b74-8dda-c322bf61e1f2"
            )
            .then(response => {
                dispatch(fetchDataSuccess(response.data.data));
            })
            .catch(error => {
                dispatch(fetchDataError(error));
            });
    };
}

