import React from 'react';
import Project_data from './ProjectApI';

const Project = (props) => {
  const [sApi, setApi] = React.useState(Project_data);

  return (
    <>  <h1 id={`${props.class}_heading`} className='heading'>Project</h1>
    <div id={`${props.class}_skills`}>
      {sApi.map((curElem) => (
        <div key={curElem.Tittle} className={`${props.class}_skill_element`}>
          <h3>{curElem.Tittle}</h3><br />
          <img src={curElem.Image} alt="logo" id = {`${props.class}_skill_image`} style={{borderRadius: "1rem"}} /><br />
          <div style={{textAlign: 'center'}}>{curElem.Description}</div>
        </div>
       
        ))} 
      
    </div>
    
       
    
    </>
  );
};


export default Project;
