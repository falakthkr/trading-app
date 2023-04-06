import {
  GET_STOCKS_REQUEST,
  GET_STOCKS_SUCCESS,
  GET_STOCKS_FAILURE,
} from "./actionTypes";
import axios from "axios";

export const getStocksRequest = (payload) => ({
  type: GET_STOCKS_REQUEST,
  payload,
});

export const getStocksSuccess = (payload) => ({
  type: GET_STOCKS_SUCCESS,
  payload,
});

export const getStocksFailure = (payload) => ({
  type: GET_STOCKS_FAILURE,
  payload,
});

export const getStocks = () => (dispatch) => {
  dispatch(getStocksRequest());
  const options = {
    method: "GET",
    url: "https://alpha-vantage.p.rapidapi.com/query",
    params: {
      interval: "5min",
      function: "TIME_SERIES_INTRADAY",
      symbol: "MSFT",
      output_size: "compact",
    },
    headers: {
      "X-RapidAPI-Key": "47d8b249edmsh76711b08531977bp19b59cjsnd519d0c5864b",
      "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then((response) => {
      dispatch(getStocksSuccess({ response: response.data }));
    })
    .catch((error) => {
      dispatch(getStocksFailure({ response: error }));
    });
};
