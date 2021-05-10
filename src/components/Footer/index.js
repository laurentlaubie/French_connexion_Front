import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';



import './footer.scss';

// == import local
import LegalsMentions from 'src/components/LegalsMentions';
import SiteMap from 'src/components/SiteMap';
import AboutUs from 'src/components/AboutUs';





const Footer = () => (
  <div className="footer">
 
    <ul>
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
    <Switch>
    <Route path="/plan-du-site">
      <SiteMap />
    </Route>
    <Route path="/mentions-legales">
      <LegalsMentions />
    </Route>
    <Route path="/a-propos">
      <AboutUs />
    </Route>
    </Switch>
    
  </div>
);

export default Footer;
 