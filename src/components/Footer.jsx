import React from 'react'
import './footer.css'
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from "gsap"

const Footer = () => {

   useGSAP(()=>{
      const t1=gsap.timeline()
      t1.from(".footer-section p",{
         x:-5000,
         opacity:0,
         duration:1,
         delay:0.1,
         
      })


      t1.from(".list",{
         x:-5000,
         opacity:0,
         duration:1,
         delay:0.15
      })
    })  

  return (
    <div className='footer'>
       <div className='footer-section'>
          <p>All Rights are reserved @Anand</p>
     
          <ul className='list'>
             <Link to='https://anandkr7808@gmail.com'><CiMail /></Link>
             <Link to='https://github.com/AnandKumarSinha07'><FaGithub /></Link>
             <Link to='https://x.com/AnandSi18833477'><FaTwitter /></Link>
          </ul>
          
       </div>
    </div>
  )
}

export default Footer