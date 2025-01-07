import React from "react";
import "./heroImage.css";
import Introimage from "../assest/intro-bg.jpg";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
function HeroImg() {

 
  useGSAP(()=>{
    gsap.from(".hero",{
       x:-5000,
       opacity:0,
       duration:1.2,
       delay:1.2,
       stagger:0.3,
    })
  })
  return (
    <div className="hero">

      <div className="mask">
        <img className="into-image" alt="intro-image" src={Introimage} />
      </div>

      <div className="content">
        <p>Hi I am Anand a Free lancer</p>
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
