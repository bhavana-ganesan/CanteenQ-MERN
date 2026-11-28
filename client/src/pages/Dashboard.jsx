
import React, { useEffect, useState, useContext } from "react";
import "./Dashboard.css";
import { CartContext } from "../context/CartContext";

function Dashboard() {
  const { cart, addToCart } = useContext(CartContext);

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=8")
      .then((response) => response.json())
      .then((data) => {
        setFoods(data.recipes);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard-content">
      <h2>Today's Menu</h2>
      <h3>Cart Items: {cart.length}</h3>

      {loading ? (
        <p>Loading food items...</p>
      ) : (
        <div className="food-container">
          {foods.map((food) => (
            <div className="food-card" key={food.id}>
              <img src={food.image} alt={food.name} />

              <h3>{food.name}</h3>
              <p>⭐ {food.rating}</p>
              <p>⏱ {food.cookTimeMinutes} minutes</p>
              <p>₹{Math.round(food.caloriesPerServing / 10)}</p>

              <button onClick={() => addToCart(food)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
