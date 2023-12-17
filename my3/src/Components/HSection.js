import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub,  faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedin, faGithub,  faTwitter);






const HSection = (props) => {
  return (
    <div className={`${props.class}_Hero-section`}>
        <section className={`${props.class}_text_area`}>
          <div style={{fontWeight:500}} className={`${props.class}_name1`} >Hello It's Me</div>
          <div style={{fontWeight:700}} className={`${props.class}_name2`} ><h1>Ankush Yadav </h1></div>
          <div style={{fontWeight:600}} className={`${props.class}_name3`}>Front-end Developer</div>
          <ul className={`${props.class}_footer_list` } id = 'list'>
          <li><a href="https://www.linkedin.com/in/ankush-yadav-53b798215/" className={`${props.class}_footer_element1`} ><FontAwesomeIcon icon={faLinkedin} size="2xs" /></a></li><br /><br />          
          <li><a href="https://github.com/AnkushKirar"  className={`${props.class}_footer_element2`} ><FontAwesomeIcon icon={faGithub} size="2xs" /></a></li><br /><br />          
          <li><a href="https://www.coursera.org/user/dc216bffa011574062acf601573c3220" className={`${props.class}_footer_element3`}  ><FontAwesomeIcon icon={faTwitter} size="2xs" /></a></li><br /><br />          

        </ul>
      
        
          <a  href = 'https://drive.google.com/file/d/1fkGYPvu6WNoVb-POaQKDHkIMpmrTy2zF/view?usp=drive_link' className={`${props.class}_download_button`}>Download</a>
          
          
          </section>
        <section className={`${props.class}_image_area`}>
          <div id='image'></div>
        </section>
        </div>
  )
}

export default HSection;

