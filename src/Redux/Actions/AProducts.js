import { GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCES } from "../types";
import axios from "axios";
export const getProducts = () => (dispatch) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) =>
      dispatch({ type: GET_PRODUCTS_SUCCES, payload: response.data })
    )
    .catch((error) => dispatch({ type: GET_PRODUCTS_ERROR, payload: error }));
};
