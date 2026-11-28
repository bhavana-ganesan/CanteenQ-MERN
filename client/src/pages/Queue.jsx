
import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

function Queue() {
  const { orders } = useContext(OrderContext);

  return (
    <div style={{ padding: "25px" }}>
      <h2>Queue Status</h2>
      <p>Track your canteen orders here.</p>

      {orders.length === 0 ? (
        <p>No active orders in the queue.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              background: "white",
              padding: "20px",
              marginTop: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>Queue Number: #{order.queueNumber}</h3>

            <p>Order ID: {order.id}</p>

            <p>
              Status: <strong>{order.status}</strong>
            </p>

            <p>
              Estimated Waiting Time: {order.waitTime} minutes
            </p>

            <h4>Ordered Items:</h4>

            {order.items.map((item, index) => (
              <p key={index}>🍽 {item.name}</p>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default Queue;
