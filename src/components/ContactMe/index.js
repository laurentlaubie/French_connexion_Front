import React from 'react';

import './contactMe.scss';

const ContactMe = ({userMail}) => (

 
  <div className="contactMe">
    <a href={`mailTo:${userMail}`} >
      <button type="button" className="contactMe__button" >Contactez-moi !</button>
    </a>
  </div>


);

export default ContactMe;
