import React from 'react'

const Experience = (props) => {

  return (
    <div className={`${props.class}_education`}> 
    <h1 className={`${props.class}_education_heading heading`} >Experience</h1>
    
        <div className={`${props.class}_education_main`}>
        <img  src = "https://www.piits.jp/padmin/wp-content/uploads/2017/11/273px-IIT_Indore_logo.svg_.png" alt='logo' className={`${props.class}_education_image_section`}/>
        <div className={`${props.class}_education_content`}>
            <h1>IIT Indore</h1><br />
            <h3>Ml Intern</h3><br />
            <p>I work as  ml intern in my college first year in iit indore i learned a fundamental of machine learning i also got further research offer from iit inodre</p>
            
        </div>
        
      
    </div>
      
    
    
    </div>
  )
}
export default Experience;
