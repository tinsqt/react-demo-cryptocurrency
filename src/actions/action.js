import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ERROR,
} from "../const/actionType";

export function fetchDataRequest() {
    return {
        type: FETCH_DATA_REQUEST
    };
}

export function fetchDataSuccess(item) {
    return {
        type: FETCH_DATA_SUCCESS,
        item
    };
}

export function fetchDataError(error) {
    return {
        type: FETCH_DATA_ERROR,
        payload: { error }
    };
}