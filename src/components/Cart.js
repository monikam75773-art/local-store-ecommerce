import React from "react";
import "./style.css";

const Cart = ({ cart }) => {

  return (
    <div className="cart-page">

      <h1>Your Cart</h1>

      {cart.length === 0 ? (

        <p>Cart is empty</p>

      ) : (

        <div className="cart-horizontal">

          {cart.map((item, index) => (

            <div key={index} className="cart-card">

              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
              />

              <h3>{item.name}</h3>

              <p>₹{item.price}</p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default Cart;