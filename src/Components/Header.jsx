import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Header({ title }) {
  return (
    <nav>
      <h1>{title}</h1>
      <span className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user/tempid">User</Link>
      </span>
    </nav>
  );
}
export default Header;
