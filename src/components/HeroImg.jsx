import React from "react";
import "./heroImage.css";
import Introimage from "../assest/intro-bg.jpg";
import { Link } from "react-router-dom";
function HeroImg() {
  return (
    <div className="hero">

      <div className="mask">
        <img className="into-image" alt="intro-image" src={Introimage} />
      </div>

      <div className="content">
        <p>Hi I am a Free lancer</p>
        <h1>I am a React Developer</h1>
        <div>
          <Link to='/project'><button className="btn">project</button></Link>
          <Link to='/contact'><button className="btn btn-light">Contact</button></Link>
        </div>
      </div>

    </div>
  );
}

export default HeroImg;
