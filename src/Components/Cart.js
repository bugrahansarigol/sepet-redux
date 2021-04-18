import { useSelector, useDispatch } from "react-redux";
import { AddToCart, RemoveToCart } from "../Redux/Actions/ACart";
import { useState } from "react";
import "../style/Cart.css";
const Cart = () => {
  const [toggle, setToggle] = useState(false);
  const { cart, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="basket">
      <div className="ac">
        <div className="counter">{cart.length}</div>
        <i
          onClick={() => setToggle(!toggle)}
          className="icon fas fa-shopping-basket"
        />
      </div>
      {toggle && cart.length > 0 ? (
        <div className="cart">
          {cart.map((product) => (
            <div className="card">
              <img alt={product.title} src={product.image} />
              <h4 className='quantity'>{product.quantity}</h4> 

              <h4 className="title">{product.title}</h4>
              <div className="action">
                <button
                  onClick={() => dispatch(AddToCart(product))}
                  className="btn buy"
                >
                  Al
                </button>
                <div className="price">
                  <span>$ </span>
                  {product.price}
                </div>
                <button
                  onClick={() => dispatch(RemoveToCart(product))}
                  className="btn sell"
                >
                  Sat
                </button>
              </div>
            </div>
          ))}
          <div className="cart-footer">
            <div className="detail">
              <div className="cart-detail-left">
                <h5 className="cart-detail-title">Cart Detail</h5>
                {cart.map((item) => (
                  <div className="item">
                    - {item.title} <span> x{item.quantity} </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="last">
              <button className="buy-btn">Buy</button>
              <div className="cart-detail-right">
                <h4>$ { totalPrice.toFixed(2)}</h4>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Cart;
{
  /* <div>
        <div>
          <h3> - {totalPrice.toFixed(2)} - </h3>
          <div style={{cursor:'pointer',width:'50px',height:'50px'}} onClick={() =>setToggle(!toggle)}>
            <i class="fas fa-shopping-basket"></i>
            <h2>{totalPrice}</h2>
          </div>
        </div>
        <div className='cart'>
        {toggle ? (
          <div>
            {cart.map((el) => (
              <div
                key={el.id}
                style={{
                  border: "1px solid black",
                  width: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "30px"
                }}
              >
                <h3> {el.quantity} </h3>

                <img
                  src={el.image}
                  alt={el.title}
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: "10px",
                    border: "1px solid black"
                  }}
                />
                <h5>{el.title}</h5>
                <p style={{ fontStyle: "italic" }}>"{el.description}"</p>
                <h4>
                  {el.price}
                  <span style={{ fontSize: "12px", margin: "2px" }}>$</span>
                </h4>
                <div>
                  <button
                    onClick={() => dispatch(AddToCart(el))}
                    style={{ width: "50px", height: "40px" }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(RemoveToCart(el))}
                    style={{ width: "50px", height: "40px" }}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : null}
        </div>
      </div> */
}
