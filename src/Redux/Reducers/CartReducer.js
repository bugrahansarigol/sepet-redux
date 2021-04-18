import { ADD_CART_SUCCESS, REMOVE_CART_SUCCESS } from "../types";
const INITIAL_STATE = {
  cart: [],
  totalPrice: 0
};
const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CART_SUCCESS: {
      let addedItem = state.cart.find((e) => {
        return e.id == action.payload.id;
      });
      if (addedItem) {
        addedItem.quantity += 1;
        state.totalPrice += addedItem.price;

        return { ...state };
      } else {
        state.totalPrice += action.payload.price;
        return { ...state, cart: [...state.cart, action.payload] };
      }
    }
    case REMOVE_CART_SUCCESS: {
      let removedItem = state.cart.find((e) => {
        return e.id == action.payload.id;
      });
      if (removedItem) {
        if (removedItem.quantity == 1) {
          state.cart.splice(state.cart.indexOf(removedItem), 1);
          state.totalPrice -= removedItem.price;
          return { ...state };
        } else if(removedItem.quantity > 1){
          removedItem.quantity -= 1;
          state.totalPrice -= removedItem.price;
          return { ...state };
        }
      }
    }
    default:
      return state;
  }
};
export default CartReducer;
