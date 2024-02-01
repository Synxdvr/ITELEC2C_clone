import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsSearch } from "react-icons/bs";
import { LiaShoppingCartSolid } from "react-icons/lia";
import logo from "./logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-black">
      <div className="container d-flex justify-content-center align-items-center">
        <img src={logo} alt="Razer" className="logo" />
        <ul className="nav-links">
          <li>Store</li>
          <li>PC</li>
          <li>Console</li>
          <li>Mobile</li>
          <li>Lifestyle</li>
          <li>Services</li>
          <li>Community</li>
          <li>Support</li>
          <li>
            <BsSearch className="search-icon" />
          </li>
          <li>
            <LiaShoppingCartSolid className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
