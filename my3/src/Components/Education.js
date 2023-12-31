import React from 'react'
import Project_data from '../API/EduactionAPI'
import { useState, } from 'react'
import { motion,easeInOut } from 'framer-motion'

const Education = (props) => {
  const [data,setData] = useState(Project_data)
 
  return (
    <div 
     
     className={`${props.class}_education`}> 
     <h1 className={`${props.class}_education_heading heading`}  >Education</h1>
     {data.map((curElem)=>{
      return(
        <motion.div
        initial={{x:-50 ,scale:.05}}
        whileInView={{scale:1,x:0}}
        transition={{staggerChildren:.5,duration:1,transition:easeInOut}}
          className={`${props.class}_education_main`}>
         <img  src = {`${curElem.image}`} className={`${props.class}_education_image_section`}/>
         <div className={`${props.class}_education_content`}>
            <h1>{curElem.Tittle}</h1><br />
            <p>{curElem.description}</p>

            <button className= {`${props.class}_cred_button`}><a href={`${curElem.link}`} className= {`${props.class}_cred_button`}  >Click & Chuckle! 🤣🔗</a></button><br />
            
            
         </div>
        </motion.div>
      )
     })}
    
    </div>
  )
}
export default Education;
