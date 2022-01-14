import React from "react";
import { ImBooks } from "react-icons/im";
import { Link } from "react-router-dom";

function NavBar({ cartNum }) {
  return (
    <div className="navBar">
     
      <Link to="/">Knižara</Link>
      <Link to="/korpa" className="cart-items">
        <p>Korpa</p>
        <ImBooks />
      </Link>
      <p className="cart-num">{cartNum}</p>
    </div>
  );
}
export default NavBar;
