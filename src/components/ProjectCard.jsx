import React  from 'react';
import './Project.css';
import { useGSAP } from '@gsap/react';
import gsap from "gsap"

const ProjectCard = ({ data }) => {

  useGSAP(()=>{
    gsap.from(".project-container",{
     

    })
  })
  const { name, img, description, url } = data;

  const handleClick = () => {
    
    window.open(url, '_blank');
    console.log("Navigating to URL:", url);
  };

  return (
    <div className='project-container'>
      <div className='card' onClick={handleClick}>
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <p>{description}</p>
        <button>View Project</button>
      </div>
    </div>
  );
};

export default ProjectCard;
