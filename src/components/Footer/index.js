import React from 'react';
import { NavLink } from 'react-router-dom';


import './footer.scss';


// -- definir la couleur exact du footer sur le spring 3 lors d'un dailyScrum !!!!

const Footer = () => (
  <div className="footer">
     <ul className="footer__list">
      <li> 
      <NavLink to="/plan-du-site" >Plan du site</NavLink>
      </li>
      <li> 
      <NavLink to="/mentions-legales">Mentions légales</NavLink>
     </li>
      <li> 
      <NavLink to="/a-propos">A propos de nous</NavLink>
      </li>
    </ul>
        
  </div>
);

export default Footer;
 