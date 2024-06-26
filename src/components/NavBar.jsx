import React from "react";
import { FaCoins } from "react-icons/fa";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Link to="/">
      <div className="NavBar">
        <h1>
          <FaCoins className="icon" /> Coin{" "}
          <span className="purple">Search</span>
        </h1>
      </div>
    </Link>
  );
};

export default NavBar;
