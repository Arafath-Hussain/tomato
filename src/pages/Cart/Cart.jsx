import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cardItems, food_list, removeFromCart, addToCart,getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <br />
        <hr />
        {food_list.map((element) => {
          const id = String(element._id);
          const quantity = cardItems?.[id];
          if (quantity && quantity > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-element" key={id}>
                  <img src={element.image} alt={element.name} />
                  <p>{element.name}</p>
                  <p>₹ {element.price}</p>
                  <p className="addOrRemoveBtn"> 
                    <span>
                      <p
                        className="addOrRemove"
                        onClick={() => removeFromCart(element._id)}
                      >
                        -
                      </p>
                    </span>{" "}
                    {quantity}
                    <span>
                    <p
                        className="addOrRemove"
                        onClick={() => addToCart(element._id)}
                      >
                        +
                      </p>
                    </span>
                  </p>
                  <p>₹ {element.price * quantity}</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div> 
      <div className="cart-bottom">
        <div  className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>₹ {getTotalCartAmount()}</p>
            </div>
              <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹ {2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹ {getTotalCartAmount()+2}</b>
            </div>
          </div>
         <button onClick={()=>navigate('/order')}>Proceed to Checkout</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promo-input">
            <input type="text"  placeholder="PROMO CODE"/>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
