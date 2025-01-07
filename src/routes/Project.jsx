import React from 'react';
import Navbar from '../components/Navbar';
import { ProjectData } from '../utils/ProjectData';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import '../components/Project.css'

function Project() {
  return (
    <div>
      <Navbar />
    
      <div className="project-container">
        {ProjectData.map((data, index) => (
          <ProjectCard key={index} data={data} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Project;

