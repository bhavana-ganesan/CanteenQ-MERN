
import React, { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const placeOrder = (cart) => {
    const newOrder = {
      id: Date.now(),
      queueNumber: orders.length + 1,
      items: [...cart],
      date: new Date().toLocaleString(),
      status: "Confirmed",
      waitTime: (orders.length + 1) * 5,
    };

    setOrders((prevOrders) => [...prevOrders, newOrder]);
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
