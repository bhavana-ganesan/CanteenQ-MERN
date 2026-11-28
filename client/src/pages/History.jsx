
import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

function History() {
  const { orders } = useContext(OrderContext);

  return (
    <div style={{ padding: "25px" }}>
      <h2>Order History</h2>

      {orders.length === 0 ? (
        <p>No previous orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              background: "white",
              padding: "20px",
              marginTop: "15px",
              borderRadius: "10px",
            }}
          >
            <h3>Order #{order.id}</h3>
            <p>Date: {order.date}</p>
            <p>Status: {order.status}</p>
            <p>Queue Number: #{order.queueNumber}</p>

            <h4>Items:</h4>
            {order.items.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default History;
