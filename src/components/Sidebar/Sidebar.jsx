import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2 className="logo">
        MediVault
      </h2>

      <nav>

        <NavLink to="/">
          Dashboard
        </NavLink>

        <NavLink to="/medicines">
          Medicines
        </NavLink>

        <NavLink to="/add-medicine">
          Add Medicine
        </NavLink>

      </nav>

    </div>
  );
}

export default Sidebar;