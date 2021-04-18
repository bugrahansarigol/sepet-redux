import { ADD_CART_SUCCESS, REMOVE_CART_SUCCESS } from "../types";
export const AddToCart = (product) => {
  return {
    type: ADD_CART_SUCCESS,
    payload: product
  };
};
export const RemoveToCart = (product) => {
  return {
    type: REMOVE_CART_SUCCESS,
    payload: product
  };
};
