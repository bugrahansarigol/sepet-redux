import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../Redux/Actions/AProducts";
import "../style/Products.css";
import Product from "./Product";
const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className='product'>
      <h3>Products </h3>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Products;
