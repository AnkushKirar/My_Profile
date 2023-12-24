import React from 'react';

const Contact = (props) => {
  return (
    <div className={`${props.class}_contact_form`}>
    <div className='contact'>
      <form action="https://formspree.io/f/xgegwpnd" method='POST'>
        <div className={`${props.class}_footer_form`}>
          <h3 id="Contact_form_heading">Contact form</h3>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id='name' name='username' placeholder='Enter the name' autoComplete='off' required  className='inputfield'/><br />
          <label htmlFor="Email">Email:</label><br />
          <input type="email" id='Email' name='email' placeholder='Enter the Email' autoComplete='off' required className='inputfield' /><br /><br />
          <label htmlFor="text">Type of Query:</label><br />
          <input type="text" id='queryType' name='typeOfQuery' placeholder='Example: freelance' autoComplete='off' required  className='inputfield'/><br /><br />
          <textarea name="message" id="text" cols="30" rows="5" placeholder='Message' autoComplete='off' required ></textarea><br />
          <button className={`${props.class}_download_button`} type='submit'>Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Contact;
