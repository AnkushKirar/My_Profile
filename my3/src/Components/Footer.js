import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin, faGithub,  faTwitter } from '@fortawesome/free-brands-svg-icons';
library.add(faLinkedin, faGithub,  faTwitter);

const Footer = (props) => {
  return (
    <>
      <div className={`${props.class}_footer`}>
        <ul className={`${props.class}_footer_list`}>
          <li><FontAwesomeIcon icon={faLinkedin} size="2xs" /></li><br /><br />
          <li className={`${props.class}_footer_element`} ><FontAwesomeIcon icon={faGithub} size="2xs" /></li><br /><br />
          <li><FontAwesomeIcon icon={faTwitter} size="2xs" /></li><br /><br />
        </ul>
        <div className={`${props.class}_footer_form`}>
          <h3 id="Contact_form_heading">Contact form</h3>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id='name' /><br />
          <label htmlFor="Email">Email:</label><br />
          <input type="Email" id='Email' /><br /><br />
          <textarea name="textarea" id="text" cols="30" rows="5">Message</textarea><br />
          <button className={`${props.class}_download_button`} >Submit</button>
        </div>
      </div><hr />
      <div className={`${props.class}_footer_copywrite`}>Copyright @ 2023</div>
    </>
  );
}

export default Footer;
