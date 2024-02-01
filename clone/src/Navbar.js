import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="bg-brown">
      <div className="d-flex justify-content-center align-items-center">
        <ul className="navlinks">
          <li>Desktops & Components</li>
          <li>Gamer Room</li>
          <li>Mice</li>
          <li>Mats</li>
          <li>Keyboards</li>
          <li>Headsets</li>
          <li>Speakers</li>
          <li>Content Creation</li>
          <li>Productivity</li>
          <li>Software</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
