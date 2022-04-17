import React from "react";
import { Link } from "react-router-dom";
import CssClass from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={CssClass.navDiv}>
      <div className={CssClass.brand}>
        <h2>ThirdEssential</h2>
      </div>
      <div className={CssClass.links}>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Navbar;
