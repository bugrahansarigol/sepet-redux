import ProductsReducer from "./ProductReducer";
import CartReducer from "./CartReducer";
import { combineReducers } from "redux";
const Reducers = combineReducers({
  products: ProductsReducer,
  cart: CartReducer
});
export default Reducers;
