import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub,  } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

library.add(faLinkedin, faGithub,  );






const HSection = (props) => {
  return (
    <div className={`${props.class}_Hero-section`}>
        <section className={`${props.class}_text_area`}>
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:.5}}
          
          style={{fontWeight:5000}} className={`${props.class}_name1`} >Hello It's Me</motion.div>
          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
           transition={{delay:1}}
          style={{fontWeight:700}} className={`${props.class}_name2`} ><h1>Ankush Yadav </h1></motion.div>
          <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:1.5}}
          
          style={{fontWeight:600}} className={`${props.class}_name3`}>Front-end Developer</motion.div>
          <ul className={`${props.class}_footer_list` } id = 'list'>
          <motion.li
          whileHover={{scale:1.7}}
          ><a href="https://www.linkedin.com/in/ankush-yadav-53b798215/" className={`${props.class}_footer_element1`} ><FontAwesomeIcon icon={faLinkedin} size="2xs" /></a></motion.li><br /><br />          
          <motion.li whileHover={{scale:1.7}} ><a href="https://github.com/AnkushKirar"  className={`${props.class}_footer_element2`} ><FontAwesomeIcon icon={faGithub} size="2xs" /></a></motion.li><br /><br />          
          <motion.li whileHover={{scale:1.7}} ><a href="https://www.coursera.org/user/dc216bffa011574062acf601573c3220" className={`${props.class}_footer_element3`}  ><FontAwesomeIcon icon={faCertificate}  size="2xs" /></a></motion.li><br /><br />          

        </ul>
      
        
          <div 
         
          
          style={{display:'flex'}}><a 
         
          
          href = 'https://drive.google.com/drive/folders/1uCj_HYNNNhOic_PNLcw5ohu60KUnoWtx?usp=drive_link' className={`${props.class}_download_button`}>Resume!</a> <Link to='/Contact'className={`${props.class}_download_button`} >Hire Me!</Link></div>
          
          
          </section>
        <section className={`${props.class}_image_area`}>
          <div id='image'></div>
        </section>
        </div>
  )
}

export default HSection;


