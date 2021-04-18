import { GET_PRODUCTS_ERROR, GET_PRODUCTS_SUCCES } from "../types";
const INITIAL_STATE = {
  products: [],
  message: ""
};
const ProductsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS_SUCCES:
      return { ...state, products: action.payload };
    case GET_PRODUCTS_ERROR:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
export default ProductsReducer;
