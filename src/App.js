import './index.css'
import Home from './routes/Home.jsx'
import Project from './routes/Project.jsx'
import Contact from './routes/Contact.jsx'

import { Routes,Route } from 'react-router-dom'
function App() {
  return (
    <>
         <Routes>
           <Route path='/'  element={<Home/>} />
           <Route path='/project' element={<Project/>}/>
           <Route path='/contact' element={<Contact/>}/> 
        </Routes>
    </>
  );
}

export default App;
