import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {



  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>

      <ul className="list">
       <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
     
      </ul>
     
    </div>
  );
}

export default Navbar;
