
import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

function Orders() {
  const { orders } = useContext(OrderContext);

  return (
    <div style={{ padding: "25px" }}>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              background: "white",
              padding: "18px",
              marginBottom: "15px",
              borderRadius: "10px",
            }}
          >
            <h3>Order #{order.id}</h3>
            <p>Date: {order.date}</p>
            <p>Status: {order.status}</p>

            <h4>Food Items:</h4>

            {order.items.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
