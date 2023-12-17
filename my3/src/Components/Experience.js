import React from 'react'

const Experience = (props) => {

  return (
    <div className={`${props.class}_education`}> 
    <h1 className={`${props.class}_education_heading heading`} >Experience</h1>
    
        <div className={`${props.class}_education_main`}>
        <img  src = "https://www.piits.jp/padmin/wp-content/uploads/2017/11/273px-IIT_Indore_logo.svg_.png" alt='logo' className={`${props.class}_education_image_section`}/>
        <div className={`${props.class}_education_content`}>
            <h2>IIT Indore</h2><br />
            <h4>Ml Intern</h4><br />
            <p>Survived IIT Indore's ML intern madness in my first year—rocked machine learning fundamentals and snagged a research offer. Because who needs sleep when you're busy being a genius? 😎🚀 #MLProdigy</p>
            <button className= {`${props.class}_cred_button`}><a href= 'https://drive.google.com/file/d/1CMBaJDh7By2ZoMwrQtobEmCXtWTh6o9v/view?usp=drive_link' className= {`${props.class}_cred_button`}  >Click & Chuckle! 🤣🔗</a></button><br />
            
        </div>
        
      
    </div>
      
    
    
    </div>
  )
}
export default Experience;
