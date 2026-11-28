
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { OrderContext } from "../context/OrderContext";

function Cart() {
  const { cart, removeFromCart, clearCart } =
    useContext(CartContext);

  const { placeOrder } = useContext(OrderContext);

  const [message, setMessage] = useState("");

  const getPrice = (item) =>
    Math.round(item.caloriesPerServing / 10);

  const total = cart.reduce(
    (sum, item) => sum + getPrice(item),
    0
  );

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      setMessage("Your cart is empty!");
      return;
    }

    placeOrder(cart);
    clearCart();
    setMessage("Your order has been placed successfully!");
  };

  return (
    <div style={{ padding: "25px" }}>
      <h2>My Cart</h2>

      {message && <h3>{message}</h3>}

      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                marginBottom: "20px",
                padding: "15px",
                background: "white",
                borderRadius: "10px",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                width="80"
                height="80"
                style={{
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <div>
                <h3>{item.name}</h3>
                <p>₹{getPrice(item)}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total Amount: ₹{total}</h3>

          <button onClick={clearCart}>
            Clear Cart
          </button>

          <button
            onClick={handlePlaceOrder}
            style={{
              marginLeft: "15px",
              padding: "10px 20px",
              background: "#123d2b",
              color: "white",
              border: "none",
              borderRadius: "7px",
              cursor: "pointer",
            }}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
