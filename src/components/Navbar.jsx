import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <nav className="navbar-links">
          <div className="navbar-left">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/cookbook">Cookbook</NavLink>
          </div>
          <div className="navbar-logo">
            <img src={logo} alt="" />
          </div>
          <div className="navbar-right">
            <NavLink to="/merch">Merch</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;