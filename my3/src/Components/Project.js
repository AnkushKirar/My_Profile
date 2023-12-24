import React from 'react';
import Project_data from './ProjectApI';
import { easeInOut,  motion} from 'framer-motion';


const Project = (props) => {
  const [sApi, setApi] = React.useState(Project_data);
 
  return (
    <>  <motion.h1 initial={{opacity:1}} whileInView={{opacity:1}} transition={{duration:1,delay:.1}} id={`${props.class}_heading`} className='heading'>Project</motion.h1>
    <div className={`${props.class}_education` }>
      {sApi.map((curElem) => (
        <motion.div 
         initial={{x:-50 ,scale:.05}}
         whileInView={{scale:1,x:0}}
         transition={{staggerChildren:.5,duration:1,transition:easeInOut}}

        
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
        </motion.div>
       
        ))} 
      
    </div>
    
       
    
    </>
  );
};


export default Project;
