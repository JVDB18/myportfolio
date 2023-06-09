import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <> 
    <div className="navContainer">
    <nav>
        <img src="public/logo.png" alt="" />
    <ul className="navUl">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/work">Work</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
    </div>
    
    </>
   
  );
}

export default Navbar;