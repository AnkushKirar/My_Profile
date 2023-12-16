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
          <li style={{paddingRight: "2rem"}}><FontAwesomeIcon icon={faLinkedin} size="2xs" /></li><br /><br />
          <li style={{paddingRight: "2rem"}} className={`${props.class}_footer_element`} ><FontAwesomeIcon icon={faGithub} size="2xs" /></li><br /><br />
          <li style={{paddingRight: "2rem"}}><FontAwesomeIcon icon={faTwitter} size="2xs" /></li><br /><br />
        </ul>
          <button className={`${props.class}_download_button`} >Download</button>
          
          </section>
        <section className={`${props.class}_image_area`}>
          <div id='image'></div>
        </section>
        </div>
  )
}

export default HSection;

