import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core"
import{ faBars,faMoon} from '@fortawesome/free-solid-svg-icons'
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
      </div>):

      (  <>
        <button id={`${props.class}_button_theme`}  className='menu' onClick={()=>toggle()}>
          {props.class==="dark"?
          (<FontAwesomeIcon icon={faBars} />):(<FontAwesomeIcon icon={faBars} style={{color: "#d1d1d1",}} />)
          }</button>

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
        {props.class==="dark"?
          (<FontAwesomeIcon icon={faMoon} style={{color: "#1e3357",}} />):(<FontAwesomeIcon icon={faMoon} />)
          }
        
        </button>
      </div>
    </div>
  );
};

export default Navbar;
