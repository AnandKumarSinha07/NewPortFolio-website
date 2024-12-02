import React from 'react'
import './footer.css'
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer-section'>
          <p>All Rights are reserved @Anand</p>
          <ul className='list'>
             <Link href='anandkr7808@gmail.com'><CiMail /></Link>
             <Link href='https://github.com/AnandKumarSinha07'><FaGithub /></Link>
             <Link to='https://x.com/AnandSi18833477'><FaTwitter /></Link>
          </ul>
          
       </div>
    </div>
  )
}

export default Footer