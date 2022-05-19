import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
function Cart(props) {
  const [showForm, setShowForm] = useState(false);

  const [value, setValue] = useState("");

  const submitOrder = (e) => {
    e.preventDefault();

    const order = {
      name: value.name,
      email: value.email,
    };
    console.log(order);
  };

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.CartItems.length === 0 ? (
          "Cart Empty"
        ) : (
          <p>There is {props.CartItems.length} products in cart.</p>
        )}
      </div>
      <div className="cart-items">
        {props.CartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.imageUrl} alt="" />
            <div className="cart-info">
              <div>
                <p>{item.title}</p>
                <p>{item.qty}</p>
                <p>{item.price}</p>
              </div>
              <button onClick={() => props.removeFromCart(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      {props.CartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            Total price : ${" "}
            {props.CartItems.reduce((acc, p) => {
              return acc + p.price * p.qty;
            }, 0)}{" "}
          </div>
          <button onClick={() => setShowForm(true)}>Select products</button>
        </div>
      )}

      {/* {checkoutForm} */}
      <CheckoutForm
      value={value}
        showForm={showForm}
        submitOrder={submitOrder}
        setShowForm={setShowForm}
        handleChange={handleChange}
      />
    </div>
  );
}

export default Cart;
