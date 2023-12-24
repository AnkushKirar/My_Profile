import React from 'react'

const Contact = (props) => {
  return (
    <div className='contact'> <form action="https://formspree.io/f/xgegwpnd" method='POST'>
        <div className={`${props.class}_footer_form`}>
          <h3 id="Contact_form_heading">Contact form</h3>
          <label htmlFor="name"   >Name:</label><br />
          <input type="text" id='name' name = 'username' placeholder='Enter the name' autoComplete='off' required /><br />
          <label htmlFor="Email"  >Email:</label><br />
          <input type="Email" id='Email' name = 'email' placeholder ='Enter the Email' aautoComplete='off' required  /><br /><br />
          <label htmlFor="text"  >Type of Query:</label><br />
          <input type="Email" id='Email' name = 'type of query' placeholder ='example:- freelance' aautoComplete='off' required  /><br /><br />
          <textarea name="message" id="text" cols="30" rows="5" placeholder='message' autoComplete='off' required >Message</textarea><br />
          <input className={`${props.class}_download_button`} type='submit' >Submit</input>
        </div>
    </form>
      
    </div>
  )
}

export default Contact;
