import React from "react";
import {useDispatch} from 'react-redux'
import "../style/Product.css";
import {AddToCart ,RemoveToCart} from '../Redux/Actions/ACart'
const Product = ({ product }) => {
    const dispatch = useDispatch()
  return (
    <div className="card">
      <img alt={product.title} src={product.image} />
      <h4 className="title">{product.title}</h4>
      <h5 className="description">{product.description}</h5>
      <div className="action">
        <button onClick={() => dispatch(AddToCart({...product ,quantity : 1}))} className='btn buy' >Al</button>
        <div className="price">
          <span>$ </span>
          {product.price}
        </div>
        <button onClick={() => dispatch(RemoveToCart(product))} className='btn sell'>Sat</button>
      </div>
    </div>
  );
};
export default Product;
