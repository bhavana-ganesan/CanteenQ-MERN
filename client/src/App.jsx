
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Queue from "./pages/Queue";
import History from "./pages/History";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="app-main">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
