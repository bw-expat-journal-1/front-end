import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="homeButtons">
      <Link className="homeLink" to="/login">
        Login
      </Link>
      <Link className="homeLink" to="/register">
        Register
      </Link>
      <Link className="homeLink" to="/post">
        Post
      </Link>
    </div>
  );
};
