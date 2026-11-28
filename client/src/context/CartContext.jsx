
import React, { createContext, useReducer } from "react";
import { cartReducer, initialState } from "./CartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (food) => {
    dispatch({ type: "ADD", payload: food });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
