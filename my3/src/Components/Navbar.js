import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core"
import{ faBars,faMoon,faX,faSun} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';
library.add(faBars,faMoon);


const Navbar = (props) => {
    const [menu , setMenu] = useState(false)
    const[mobile,setMobile] = useState(window.innerWidth<675)

    const toggle = ()=>{
        setMenu(!menu)
    }
    useEffect(() => {
        const handleResize = () => {
          setMobile(window.innerWidth < 675);
          
          if (window.innerWidth >= 675) {
            setMenu(false);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);



  return (
    <div className={`${props.class}_navbar`}>
      <h2 className={`${props.class}_nav_start`}>Portfolio.</h2>
      
     {!mobile ? (<div className={`${props.class}_nav_main`}>
        <Link to="/" className={`${props.class}_nav_element`}>
          Home
        </Link>
        <Link to="/Project" className={`${props.class}_nav_element`}>
          Project
        </Link>

        <Link to='/Experience' className={`${props.class}_nav_element`}>
          Experience
        </Link>
        <Link to="/skills" className={`${props.class}_nav_element`}>
          Skills
        </Link>
        <Link to="/Education" className={`${props.class}_nav_element`}>
          Education
        </Link>
        
        <Link to='/Contact' className={`${props.class}_nav_element`}>Contact
        </Link>
      </div>):

      (  <>
        {menu?(
          <>
          <button id={`${props.class}_button_theme`}  className='menu' onClick={()=>toggle()}>
          {props.class==="dark"?
          (<FontAwesomeIcon icon={faX} />):(<FontAwesomeIcon icon={faX} style={{color: "#d1d1d1",}} />)
          }</button>
        
        <div className={`${props.class}_nav_main open_nav`}>
    
      <Link to="/" className={`${props.class}_nav_element`}>
        Home
      </Link>
      <Link to="/Project" className={`${props.class}_nav_element`}>
        Project
      </Link>

      <Link to='/Experience' className={`${props.class}_nav_element`}>
        Experience
      </Link>
      <Link to="/skills" className={`${props.class}_nav_element`}>
        Skills
      </Link>
      <Link to="/Education" className={`${props.class}_nav_element`}>
        Education
      </Link>
      <Link to='/Contact' className={`${props.class}_nav_element`}>Contact
        </Link>
    </div>
    </>):( <button id={`${props.class}_button_theme`}  className='menu' onClick={()=>toggle()}>
          {props.class==="dark"?
          (<FontAwesomeIcon icon={faBars} />):(<FontAwesomeIcon icon={faBars} style={{color: "#d1d1d1",}} />)
          }</button>)}
    </>)
      }
      <div className="navend">
        <motion.button
         whileFocus={{scale:1.2}}
         id={`${props.class}_button_theme`} onClick={props.Theme_change}>
        {props.class==="dark"?
          (<FontAwesomeIcon icon={faMoon} style={{color: "#1e3357",}} />):(<FontAwesomeIcon icon={faSun} />)
          }
        
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
