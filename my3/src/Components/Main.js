import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

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
      <h2 className={`${props.class}_nav_start`}>portfolio</h2>
      
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
      </div>):

      (  <>
        <button id={`${props.class}_button_theme`} onClick={()=>toggle()}>Menu</button>

        {menu?(<div className={`${props.class}_nav_main open_nav`}>
    
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
    </div>):null}
    </>)
      }
      <div className="navend">
        <button id={`${props.class}_button_theme`} onClick={props.Theme_change}>
          Theme
        </button>
      </div>
    </div>
  );
};

export default Navbar;
