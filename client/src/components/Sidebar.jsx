
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span>🍃</span>
        <h2>CanteenQ</h2>
      </div>

      <p className="sidebar-heading">MAIN MENU</p>

      <nav className="sidebar-links">
        <NavLink to="/" end>
          ▦ Dashboard
        </NavLink>

        <NavLink to="/cart">
          🛒 My Cart
        </NavLink>

        <NavLink to="/orders">
          🛍 My Orders
        </NavLink>

        <NavLink to="/queue">
          ◷ Queue Status
        </NavLink>

        <NavLink to="/history"> ▤ Order History</NavLink>
      </nav>

      <div className="sidebar-bottom">
        <p>Hungry? We've got you covered!</p>
        <span>Fresh food. Faster service.</span>
      </div>
    </aside>
  );
}

export default Sidebar;
