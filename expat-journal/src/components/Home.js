import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="homeButtons">
      <Link className="homeLink" to="">
        Login
      </Link>
      <Link className="homeLink" to="/register">
        Register
      </Link>
    </div>
  );
};
