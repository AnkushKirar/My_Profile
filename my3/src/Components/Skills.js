import React from 'react';
import Skill_data from './SkillApi.js';
import { motion } from 'framer-motion';

const Skills = (props) => {
  const [sApi, setApi] = React.useState(Skill_data);

  return (
    <>  <h1 id={`${props.class}_heading`} className='heading'>Skills</h1>
    <div id={`${props.class}_skills`}>
      {sApi.map((curElem) => (
        <motion.div
        initial={{opacity:0,scale:.1,borderRadius:"50%"}}
        whileInView={{opacity:1,scale:1,borderRadius:'2%'}}
        transition={{duration:1,delay:.1}}
        
        key={curElem.Tittle} className={`${props.class}_skill_element`}>
          <h3>{curElem.Tittle}</h3><br />
          <img src={curElem.Images} alt="logo" id = {`${props.class}_skill_image`} /><br />
          <div style={{textAlign: 'center'}}>{curElem.Description}</div>
          
        </motion.div>
       
        ))} 
      
    </div>
    
       
    
    </>
  );
};


export default Skills;
