import React, { useState} from 'react';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import HSection from './Components/HSection';
import Footer from './Components/Footer';
import Education from './Components/Education';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Experience from './Components/Experience';
import Project from './Components/Project';
import Contact from './Components/Contact';



 function Hwraper({theme}){
  return(<>
  <HSection class={theme ? 'dark' : 'light'}/>
  <Project class={theme ? 'dark' : 'light'}></Project>
  <Experience class={theme ? 'dark' : 'light'} ></Experience>
  <Skills class={theme ? 'dark' : 'light'} />
  <Education class={theme ? 'dark' : 'light'} />
  </>
  )

 }

function App() {
  const [theme, setTheme] = useState(false);
  

  const Theme_change = () => {
    setTheme(!theme);
  };

  return (
    <div>
      
      <Router>
        <Navbar Theme_change={Theme_change} class={theme ? 'dark' : 'light'} />
        <Routes>
          <Route
            path='/'
            element = {<Hwraper theme = {theme}/>} 
          />
          <Route path='/Project' element = {<Project class={theme ? 'dark' : 'light'}></Project>}/>
          <Route path='/Experience' element = {<Experience class={theme ? 'dark' : 'light'} ></Experience>}/>
          <Route path='/skills' element={<Skills class={theme ? 'dark' : 'light'} />} />
          <Route path='/Education' element={<Education class={theme ? 'dark' : 'light'} />} />
          <Route path='/Contact' element={<Contact class={theme ? 'dark' : 'light'} />} />
          
        </Routes>
        <Footer class={theme ? 'dark' : 'light'}></Footer>
      </Router>
      
    </div>
  );
}

export default App;
