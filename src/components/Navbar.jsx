import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Navbar() {

  useGSAP(()=>{
    gsap.from(".header",{
      y:-50,
      opacity:0,
      delay:0.1,
      duration:0.6,
      stagger:0.3
    })
  })

  return (
    <div className="header">
    
      <Link to="/">
        <h1 className="heading">Portfolio</h1>
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
