import React from 'react';
import Skill_data from './SkillApi.js';

const Skills = (props) => {
  const [sApi, setApi] = React.useState(Skill_data);

  return (
    <>  <h1 id={`${props.class}_heading`} className='heading'>Skills</h1>
    <div id={`${props.class}_skills`}>
      {sApi.map((curElem) => (
        <div key={curElem.Tittle} className={`${props.class}_skill_element`}>
          <h3>{curElem.Tittle}</h3><br />
          <img src={curElem.Images} alt="logo" id = {`${props.class}_skill_image`} /><br />
          <div style={{textAlign: 'center'}}>{curElem.Description}</div>
          
        </div>
       
        ))} 
      
    </div>
    
       
    
    </>
  );
};


export default Skills;
