import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="navBar">
      <h1>Expat Journal</h1>
      <div className="navLinks">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/login">
          Login
        </Link>
        <Link className="link" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};
