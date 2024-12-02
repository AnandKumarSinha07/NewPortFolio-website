import React  from 'react'
import { CiMail } from "react-icons/ci";
import resume from '../assest/resume.jpg'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css'

const ContactPage = () => {

   const [fullName,setFullname]=useState();
   const [email,setEmail]=useState();
   const [subject,setSubject]=useState();
   


    const notify=()=>{
       toast(`ThankYou ${fullName} for your response`)
       toast(`Your message subject is ${subject} we will respond quickly`)
    }
    return (
        <div className='contact-container'>
    
           <div className='left-section'>
               <h1>Let's Chat Tell Me About Your Project</h1>
               <p>Let's create something together 🤞</p> 

               <div className='email-section'>
                  <span ><CiMail /></span>
                  <p>Mail me at:<a href='mailto:anandkr7808@gmail.com'>anandkr7808@gmail.com</a></p>
               </div>

               <img src={resume} alt='profile' width={223} className='profile-image'/>
           </div>
    
           <div className='right-section'>
              <form onSubmit={(e)=>e.preventDefault()}>
                 <h2>Send Me a Message</h2>
    
                 <input
                  type='text'
                  name='name'
                  value={fullName}
                  onChange={(e)=>setFullname(e.target.value)}
                  placeholder='Full Name'
                 />
    
                 <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder='Email'
                 />

                 <input
                  type='text'
                  value={subject}
                  onChange={(e)=>setSubject(e.target.value)}
                  placeholder='subject'
                 />
                 
                 <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
                 <button onClick={notify}>
                    Send Message
                    <ToastContainer/>
                 </button>
                 
              </form>   
           </div>
        </div>
      )
}

export default ContactPage