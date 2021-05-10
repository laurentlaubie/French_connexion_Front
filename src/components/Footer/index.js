import React from 'react';

import './footer.scss';



const Footer = () => (
  <div className="footer">
    <ul>
      <li> 
      <NavLink to="/plan-du-site">Plan du site</NavLink>
      </li>
      <li> 
      <NavLink to="/mentions-legales">Mentions légales</NavLink>
     </li>
      <li> 
      <NavLink to="/mentions-legales">A propos de nous</NavLink>
      </li>
    </ul>
  </div>
);

export default Footer;
