import React from 'react';
import Project_data from './ProjectApI';


const Project = (props) => {
  const [sApi, setApi] = React.useState(Project_data);

  return (
    <>  <h1 id={`${props.class}_heading`} className='heading'>Project</h1>
    <div className={`${props.class}_education` }>
      {sApi.map((curElem) => (
        <div 
        
        key={curElem.Tittle} className={`${props.class}_education_main`}>
          <img src={curElem.Image} alt="logo" className={`${props.class}_education_image_section`}
          style={{ position: "relative",
         paddingLeft: '0px', paddingTop: "0px"
        }}
        
        /><br />
          <div 
          style={{textAlign: 'cente'}} 
          className={`${props.class}_education_content`}>
          <h4>{curElem.Tittle}</h4><br />
           <p> {`*${curElem.Description}`}</p>
           <p>{`*${curElem.f}`}</p>
           <p> {`*${curElem.t}`}</p>
           <button className= {`${props.class}_cred_button`}><a href= {curElem.link} className= {`${props.class}_cred_button`}  >Click & Chuckle! 🤣🔗</a></button><br />
           
            </div>
        </div>
       
        ))} 
      
    </div>
    
       
    
    </>
  );
};


export default Project;
